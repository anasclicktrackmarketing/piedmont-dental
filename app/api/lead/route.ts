/**
 * Next.js App Router route — POST /api/lead
 *
 * Receives a lead payload from the site's forms (contact form + smile
 * analysis quiz), validates it, and writes the contact into HighLevel via
 * the v2 Contacts API using a Private Integration Token. The PIT lives ONLY
 * in this server-side env var — never exposed to the browser.
 *
 * Contract (per-client customization — see WRITE_ONCE_FIELD_KEYS below):
 *   1. Parse + minimum-validate the incoming JSON.
 *   2. Look up an existing contact by email (idempotency).
 *   3. New contact  -> POST /contacts/ with the full payload (incl. locked
 *      first-touch fields).
 *   4. Existing contact:
 *      - Name/phone: SENT every time -> updated to the latest submission
 *        (Piedmont Dental wants "latest wins" here, not first-touch preserve —
 *        this deviates from the CTM-standard PRESERVE default on purpose)
 *      - Email: NOT sent -> preserved (it's the lookup key)
 *      - LOCKED first-touch attribution fields (visitor_source_first, UTMs,
 *        click IDs, etc.): NOT sent -> preserved, true first-touch record
 *      - WRITE_ONCE fields (SMS consent grant + timestamp + text): NOT sent
 *        -> preserved as the legal first-grant record
 *      - Patient status / message / smile-analysis answers: SENT every time
 *        -> updated to the latest submission
 *      - RECENT attribution fields (visitor_source_recent, *_recent): SENT
 *        every time -> updated
 *      - Tags: APPENDED via the dedicated /tags endpoint (never replaces)
 *      - The contact note is replaced (old ones deleted, one fresh note
 *        posted) so it always reflects only the latest submission.
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

// WRITE_ONCE — only written when CREATING, preserved on every later
// resubmission. Piedmont Dental wants patient status / message / smile
// analysis answers to update on every submission (latest wins), so only
// the SMS consent legal record stays WRITE_ONCE here — "first-grant
// timestamp is the legally meaningful one" per the launch-checklist SMS
// compliance section. This is a per-client deviation from the CTM-standard
// PRESERVE default; keep the site's forms and this route in agreement so
// it never drifts silently.
const WRITE_ONCE_FIELD_KEYS = new Set<string>([
  "form_consent_sms",
  "form_consent_marketing",
  "form_consent_sms_timestamp",
  "form_consent_sms_text",
]);

// Standard GHL contact properties — sent at the top level of the GHL
// payload, not as customFields entries. Never treated as customFields
// (STANDARD_FIELDS just excludes them from buildCustomFields); whether
// they're actually sent on UPDATE is decided explicitly in the POST
// handler below (name/phone: yes, latest wins; email: no, it's the
// lookup key and stays preserved).
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
 * Replaces the contact's note with the latest submission's content — any
 * existing notes are deleted first, then one fresh note is posted, so the
 * note always reflects only the most recent touch rather than accumulating
 * a growing history (matches the "latest wins" contract for this client).
 * Best-effort — logged loudly on failure but never blocks the overall
 * success response.
 */
async function replaceNote(contactId: string, body: string, pit: string) {
  if (!body) return;

  const listRes = await ghlFetch(`/contacts/${contactId}/notes`, { method: "GET" }, pit);
  if (listRes.ok) {
    const listJson = (await listRes.json()) as { notes?: Array<{ id: string }> };
    for (const note of listJson.notes || []) {
      const delRes = await ghlFetch(`/contacts/${contactId}/notes/${note.id}`, { method: "DELETE" }, pit);
      if (!delRes.ok) {
        console.error(`[lead] note delete failed for ${note.id} (HTTP ${delRes.status})`);
      }
    }
  } else {
    console.error(`[lead] note list failed (HTTP ${listRes.status}) — skipping cleanup, posting anyway`);
  }

  const res = await ghlFetch(
    `/contacts/${contactId}/notes`,
    { method: "POST", body: JSON.stringify({ body }) },
    pit
  );
  if (!res.ok) {
    const detail = await res.text();
    console.error(`[lead] note post failed (HTTP ${res.status}): ${detail}`);
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
      // ── EXISTING CONTACT — latest wins on name/phone/qualification,
      // true first-touch attribution + SMS consent record still preserved ──
      const recentCustomFields = buildCustomFields(body, "update");
      // form_last_submitted_at is server-authoritative (never trust client
      // clock) and always updates, so staff can see the most recent touch.
      recentCustomFields.push({ key: "form_last_submitted_at", field_value: nowIso });

      const updatePayload: Record<string, unknown> = {
        customFields: recentCustomFields,
        // Intentionally NO email — preserved, it's the lookup key
        // Intentionally NO tags — handled by appendTags below
      };
      if (body.first_name) updatePayload.firstName = body.first_name;
      if (body.last_name) updatePayload.lastName = body.last_name;
      if (body.full_name) updatePayload.name = body.full_name;
      if (body.phone) updatePayload.phone = body.phone;

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
      await replaceNote(contactId, noteText, PIT);
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

      if (contactId) await replaceNote(contactId, noteText, PIT);
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
