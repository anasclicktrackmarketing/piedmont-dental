import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";

/**
 * Content-change hook: revalidates an ISR/cached path and pushes the
 * corresponding URL to IndexNow (Bing, Yandex, Seznam, Naver) in the same
 * request, so updated pages get picked up in minutes instead of waiting for
 * the next crawl. Google does not consume IndexNow — it still finds updates
 * via sitemap.xml / regular crawl.
 *
 * This site currently has no CMS webhook, but this route is the drop-in
 * target for one (or for a manual "just published this page" ping):
 *
 *   curl -X POST https://piedmontdentalbydesign.com/api/revalidate \
 *     -H "Content-Type: application/json" \
 *     -d '{"secret":"<REVALIDATE_SECRET>","path":"/blog/some-new-post"}'
 *
 * Required env vars:
 *   REVALIDATE_SECRET   Shared secret this route checks against — set your
 *                        own value in .env.local / Vercel project settings.
 *   SITE_URL, INDEXNOW_KEY  Consumed by lib/indexnow.ts.
 */
export async function POST(req: NextRequest) {
  let body: { secret?: string; path?: string; paths?: string[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const { secret, path, paths } = body;

  const expected = process.env.REVALIDATE_SECRET;
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "REVALIDATE_SECRET is not configured on the server" },
      { status: 500 }
    );
  }
  if (secret !== expected) {
    return NextResponse.json({ ok: false, error: "Invalid secret" }, { status: 401 });
  }

  const targetPaths = (paths?.length ? paths : path ? [path] : []).filter(Boolean);
  if (targetPaths.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Provide a `path` or `paths` array" },
      { status: 400 }
    );
  }

  for (const p of targetPaths) {
    revalidatePath(p);
  }

  const siteUrl = process.env.SITE_URL?.replace(/\/$/, "") ?? "";
  const urls = targetPaths.map((p) => `${siteUrl}${p.startsWith("/") ? p : `/${p}`}`);
  const indexNowResult = await submitToIndexNow(urls);

  return NextResponse.json({
    ok: true,
    revalidated: targetPaths,
    indexNow: indexNowResult,
  });
}
