/**
 * Next.js App Router route — POST /api/lead
 *
 * Receives a lead payload from the site's forms (contact form + smile
 * analysis quiz), validates it, and writes the contact into HighLevel via
 * the v2 Contacts API using a Private Integration Token. The PIT lives ONLY
 * in this server-side env var — never exposed to the browser.
 *
 * Write-once contract:
 *   1. Parse + minimum-validate the incoming JSON.
 *   2. Look up an existing contact by email (idempotency).
 *   3. New contact  -> POST /contacts/ with the full payload (incl. locked
 *      first-touch fields + write-once qualification answers).
 *   4. Existing contact -> PRESERVE original data:
 *      - Standard fields (name/email/phone): NOT sent -> preserved
 *      - LOCKED first-touch attribution fields: NOT sent -> preserved
 *      - WRITE_ONCE qualification answers (patient status, message,
 *        smile-analysis answers, consent record): NOT sent -> preserved
 *      - RECENT attribution fields (visitor_source_recent, last_*): SENT
 *        every time -> updated
 *      - Tags: APPENDED via the dedicated /tags endpoint (never replaces)
 *      - A contact note is always appended, regardless of bucket rules, so
 *        the latest message/answers are visible to staff even though the
 *        original WRITE_ONCE field values are preserved (answer resilience).
 *   5. Return { ok, contactId, created }.
 *
 * Required env vars (server-side only, set in .env.local AND the hosting
 * provider's env settings — never in the client bundle):
 *   GHL_PIT          — Private Integration Token (pit-...)
 *   GHL_LOCATION_ID  — the sub-account location ID
 */

import type { NextRequest } from "next/server";

const GHL_API = "https://services.leadconnectorhq.com";
const API_VERSION = "2021-07-28";

// ──────────────────────────────────────────────────────────────────
// Field classification for the write-once contract. Mirrors the
// Peoplelytics Master Schema "lock by suffix" rule (peoplelytics-ghl-setup)
// and this project's actual provisioned fieldKeys — not the generic
// real-estate example fields from the skill template.
// ──────────────────────────────────────────────────────────────────

// LOCKED — only written when CREATING a brand-new contact. Never sent on
// update, so first-touch attribution can't be clobbered by a later visit.
const LOCKED_FIELD_KEYS = new Set<string>([
  // Group A — Core Attribution
  "visitor_source_first",
  "visitor_source_first_detail",
  "attribution_method",
  "utm_source_captured",
  "utm_medium_captured",
  "utm_campaign_captured",
  "utm_term_captured",
  "utm_content_captured",
  "gclid_captured",
  "fbclid_captured",
  "msclkid_captured",
  "ttclid_captured",
  "landing_page_first",
  "referrer_url_captured",
  "first_visit_at_iso",
  "how_did_you_hear",
  // Group C — Universal Form
  "form_first_submitted_at",
  // Group D — SEO (unused today, kept for when the SEO engine is wired)
  "seo_keyword_first",
  "seo_keyword_confidence",
  "seo_keyword_match_method",
  "seo_landing_page_first",
  "seo_first_organic_visit_at",
  // Group E — AEO
  "aeo_source_engine_first",
  "aeo_source_engine_first_detail",
  "aeo_query_first",
  "aeo_query_confidence",
  "aeo_landing_page_first",
  "aeo_first_ai_visit_at",
  // Group F — Lifecycle (unused today, kept for future GHL workflow use)
  "lc_first_contacted_at",
  "lc_first_response_at",
  // Group H — Revenue Rollup (unused today)
  "rev_first_deal_value",
  "rev_first_deal_closed_at",
  "rev_days_visit_to_lead",
]);

// WRITE_ONCE — only written when CREATING. Preserves the contact's ORIGINAL
// qualification answers; a later resubmission's answers still reach staff
// via the appended note + tags, without mutating the first-touch record.
const WRITE_ONCE_FIELD_KEYS = new Set<string>([
  "are_you_a_new_or_existing_patient",
  "form_message",
  "patient_message",
  "smile_analysis_yes_count",
  "smile_analysis_answers",
  // A2P 10DLC consent — "first-grant timestamp is the legally meaningful
  // one" per the launch-checklist SMS compliance section.
  "form_consent_sms",
  "form_consent_marketing",
  "form_consent_sms_timestamp",
  "form_consent_sms_text",
]);

// Standard GHL contact properties — sent at the top level of the GHL
// payload, not as customFields entries. On UPDATE these are NOT sent so
// the contact's existing values stay intact (a resubmission typo can't
// corrupt the original record).
const STANDARD_FIELDS = new Set<string>([
  "first_name",
  "last_name",
  "full_name",
  "email",
  "phone",
]);

interface LeadBody {
  first_name?: string;
  last_name?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  form_source?: string;
  form_intent_type?: string;
  visitor_source_recent?: string;
  note?: string;
  form_consent_sms?: boolean;
  [key: string]: unknown;
}

function buildCustomFields(body: LeadBody, mode: "create" | "update") {
  const out: Array<{ key: string; field_value: string | boolean | string[] }> = [];
  for (const [key, raw] of Object.entries(body)) {
    if (raw === undefined || raw === null || raw === "") continue;
    if (STANDARD_FIELDS.has(key)) continue;
    if (key === "note") continue; // handled separately via the Notes API

    if (mode === "update") {
      if (LOCKED_FIELD_KEYS.has(key)) continue;
      if (WRITE_ONCE_FIELD_KEYS.has(key)) continue;
    }

    let value: string | boolean | string[];
    if (typeof raw === "boolean") value = raw;
    else if (Array.isArray(raw)) value = raw.map(String);
    else value = String(raw);

    out.push({ key, field_value: value });
  }
  return out;
}

async function ghlFetch(path: string, init: RequestInit, pit: string) {
  return fetch(`${GHL_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${pit}`,
      Version: API_VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init.headers || {}),
    },
  });
}

async function findContactByEmail(
  email: string,
  pit: string,
  locationId: string
): Promise<string | null> {
  const url = `/contacts/search/duplicate?locationId=${encodeURIComponent(locationId)}&email=${encodeURIComponent(email)}`;
  const res = await ghlFetch(url, { method: "GET" }, pit);
  if (res.status === 404) return null;
  if (!res.ok) return null;
  const json = (await res.json()) as { contact?: { id: string } };
  return json.contact?.id || null;
}

/**
 * Append tags to an existing contact via the dedicated /tags endpoint.
 * Idempotent. Critically, this does NOT replace existing tags — a PUT to
 * /contacts/{id} with a `tags` body would, destroying tag history.
 */
async function appendTags(contactId: string, tags: string[], pit: string) {
  if (tags.length === 0) return;
  const res = await ghlFetch(
    `/contacts/${contactId}/tags`,
    { method: "POST", body: JSON.stringify({ tags }) },
    pit
  );
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Tag append failed (HTTP ${res.status}): ${detail}`);
  }
}

/**
 * Answer-resilience third channel: a contact note always lands regardless
 * of field provisioning or the write-once bucket rules, so a resubmission's
 * message/answers are never lost to staff even though the original
 * WRITE_ONCE custom field values are preserved. Best-effort — logged loudly
 * on failure but never blocks the overall success response.
 */
async function appendNote(contactId: string, body: string, pit: string) {
  if (!body) return;
  const res = await ghlFetch(
    `/contacts/${contactId}/notes`,
    { method: "POST", body: JSON.stringify({ body }) },
    pit
  );
  if (!res.ok) {
    const detail = await res.text();
    console.error(`[lead] note append failed (HTTP ${res.status}): ${detail}`);
  }
}

function jsonError(status: number, message: string, extra?: unknown) {
  console.error(`[lead] ${status} ${message}`, extra ?? "");
  return Response.json({ ok: false, error: message, detail: extra }, { status });
}

export async function POST(request: NextRequest) {
  const PIT = process.env.GHL_PIT;
  const LOCATION_ID = process.env.GHL_LOCATION_ID;
  if (!PIT || !LOCATION_ID) {
    // Never fake success here — a missing token must be loud, not a silent
    // {ok:true} that hides a total outage indefinitely.
    return jsonError(500, "Server misconfigured: GHL_PIT or GHL_LOCATION_ID env var is missing.");
  }

  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return jsonError(400, "Invalid JSON body");
  }

  if (!body || (!body.email && !body.phone)) {
    return jsonError(400, "email or phone is required");
  }

  // A2P 10DLC: every phone-collecting form on this site requires SMS
  // consent before submission is allowed client-side. Enforce it
  // server-side too, defensively.
  if (body.phone && body.form_consent_sms !== true) {
    return jsonError(400, "SMS consent is required when a phone number is provided");
  }

  const nowIso = new Date().toISOString();
  const formSource = String(body.form_source || "unknown");
  const channelTag = body.visitor_source_recent
    ? `channel:${String(body.visitor_source_recent).toLowerCase().replace(/\s+/g, "-")}`
    : null;
  const noteText = typeof body.note === "string" ? body.note : "";

  try {
    let contactId: string | null = null;
    let created = false;

    if (body.email) {
      contactId = await findContactByEmail(body.email, PIT, LOCATION_ID);
    }

    if (contactId) {
      // ── EXISTING CONTACT — preserve all original data ────────────────
      const recentCustomFields = buildCustomFields(body, "update");
      // form_last_submitted_at is server-authoritative (never trust client
      // clock) and always updates, so staff can see the most recent touch.
      recentCustomFields.push({ key: "form_last_submitted_at", field_value: nowIso });

      const updatePayload = {
        customFields: recentCustomFields,
        // Intentionally NO firstName/lastName/email/phone — preserve existing
        // Intentionally NO tags — handled by appendTags below
      };
      const updateRes = await ghlFetch(
        `/contacts/${contactId}`,
        { method: "PUT", body: JSON.stringify(updatePayload) },
        PIT
      );
      if (!updateRes.ok) {
        const detail = await updateRes.text();
        return jsonError(502, `GHL update failed (HTTP ${updateRes.status})`, detail);
      }

      const tagsToAppend = [
        `form:${formSource}`,
        ...(channelTag ? [channelTag] : []),
        "website contact form submitted",
      ];
      await appendTags(contactId, tagsToAppend, PIT);
      await appendNote(contactId, noteText, PIT);
    } else {
      // ── NEW CONTACT — write full first-touch payload ────────────────
      const customFields = buildCustomFields(body, "create");
      customFields.push(
        { key: "form_first_submitted_at", field_value: nowIso },
        { key: "form_last_submitted_at", field_value: nowIso }
      );

      const createPayload = {
        locationId: LOCATION_ID,
        type: "Lead",
        firstName: body.first_name || undefined,
        lastName: body.last_name || undefined,
        name: body.full_name || undefined,
        email: body.email || undefined,
        phone: body.phone || undefined,
        source: formSource,
        customFields,
        tags: [
          `form:${formSource}`,
          ...(channelTag ? [channelTag] : []),
          // Canonical CTM baseline tag — downstream GHL workflows trigger on it.
          "website contact form submitted",
        ],
      };
      const createRes = await ghlFetch(
        `/contacts/`,
        { method: "POST", body: JSON.stringify(createPayload) },
        PIT
      );
      if (!createRes.ok) {
        const detail = await createRes.text();
        return jsonError(502, `GHL create failed (HTTP ${createRes.status})`, detail);
      }
      const createdJson = (await createRes.json()) as { contact?: { id: string }; id?: string };
      contactId = createdJson.contact?.id || createdJson.id || null;
      created = true;

      if (contactId) await appendNote(contactId, noteText, PIT);
    }

    return Response.json({ ok: true, contactId, created, form_source: formSource });
  } catch (err) {
    return jsonError(
      500,
      "Lead handler exception",
      err instanceof Error ? err.message : String(err)
    );
  }
}
