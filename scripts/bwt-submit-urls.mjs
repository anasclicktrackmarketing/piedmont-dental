#!/usr/bin/env node
/**
 * Submit URLs directly to the Bing Webmaster API (alternative/complement to IndexNow).
 *
 * Use this when you need:
 *  - Quota tracking (BWT API returns daily quota remaining)
 *  - Per-URL fetch status / error reporting
 *
 * For most cases, scripts/indexnow-submit.mjs is simpler and faster and also
 * notifies Yandex/Seznam/Naver in the same call. This script is for the
 * optional advanced path described in the search-console-setup skill (Step 6).
 *
 * Usage (run from project root):
 *   node scripts/bwt-submit-urls.mjs https://piedmontdentalbydesign.com/page-1 https://piedmontdentalbydesign.com/page-2
 *
 *   # Check remaining quota
 *   node scripts/bwt-submit-urls.mjs --quota
 *
 * Requires in .env.local:
 *   SITE_URL       Canonical site URL (https://piedmontdentalbydesign.com)
 *   BWT_API_KEY    From Bing Webmaster Tools -> Settings -> API access -> Generate
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const urls = [];
let mode = "submit";
for (const a of args) {
  if (a === "--quota") mode = "quota";
  else if (a.startsWith("http")) urls.push(a);
}

function loadEnv() {
  const envPath = join(process.cwd(), ".env.local");
  let SITE_URL, BWT_API_KEY;
  try {
    const text = readFileSync(envPath, "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const [key, ...rest] = trimmed.split("=");
      const value = rest.join("=").trim();
      if (key === "SITE_URL") SITE_URL = value;
      if (key === "BWT_API_KEY") BWT_API_KEY = value;
    }
  } catch {
    console.error(`Could not read ${envPath}.`);
    process.exit(1);
  }
  if (!SITE_URL || !BWT_API_KEY) {
    console.error("Missing SITE_URL or BWT_API_KEY in .env.local");
    process.exit(1);
  }
  return { SITE_URL: SITE_URL.replace(/\/$/, ""), BWT_API_KEY };
}

async function bwtGet({ apiKey, method, params }) {
  // Read endpoints (GetUrlSubmissionQuota, etc.) -- Bing rejects POST with 405.
  const qs = new URLSearchParams({ apikey: apiKey, ...(params || {}) });
  const url = `https://ssl.bing.com/webmaster/api.svc/json/${method}?${qs.toString()}`;
  const res = await fetch(url, { method: "GET", headers: { Accept: "application/json" } });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return { status: res.status, data };
}

async function bwtPost({ apiKey, method, body }) {
  // Write endpoints (SubmitUrlBatch, etc.).
  const url = `https://ssl.bing.com/webmaster/api.svc/json/${method}?apikey=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return { status: res.status, data };
}

async function getQuota({ apiKey, siteUrl }) {
  return bwtGet({
    apiKey,
    method: "GetUrlSubmissionQuota",
    params: { siteUrl },
  });
}

async function submitBatch({ apiKey, siteUrl, urls }) {
  // SubmitUrlBatch -- up to 500 URLs per request, batch endpoint
  return bwtPost({
    apiKey,
    method: "SubmitUrlBatch",
    body: { siteUrl, urlList: urls },
  });
}

async function main() {
  const { SITE_URL, BWT_API_KEY } = loadEnv();

  if (mode === "quota") {
    const { status, data } = await getQuota({ apiKey: BWT_API_KEY, siteUrl: SITE_URL });
    if (status !== 200) {
      console.error(`HTTP ${status}: ${JSON.stringify(data)}`);
      process.exit(1);
    }
    const d = data.d || data;
    console.log(`Site: ${SITE_URL}`);
    console.log(`Daily quota:    ${d.DailyQuota ?? "n/a"}`);
    console.log(`Monthly quota:  ${d.MonthlyQuota ?? "n/a"}`);
    return;
  }

  if (urls.length === 0) {
    console.error("No URLs provided. Pass URLs as args, or --quota to check remaining quota.");
    process.exit(1);
  }

  // Batch by 500
  let totalSubmitted = 0;
  let totalFailed = 0;
  for (let i = 0; i < urls.length; i += 500) {
    const batch = urls.slice(i, i + 500);
    console.log(`-> Submitting batch ${Math.floor(i / 500) + 1} (${batch.length} URLs)...`);
    const { status, data } = await submitBatch({ apiKey: BWT_API_KEY, siteUrl: SITE_URL, urls: batch });
    if (status === 200 && !data.ErrorCode) {
      console.log(`  OK HTTP 200 -- ${batch.length} URLs accepted`);
      totalSubmitted += batch.length;
    } else {
      console.log(`  FAIL HTTP ${status}: ${JSON.stringify(data)}`);
      totalFailed += batch.length;
    }
  }

  console.log(`\nDone. Submitted ${totalSubmitted}, failed ${totalFailed}.`);
  if (totalFailed > 0) process.exit(1);
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});
