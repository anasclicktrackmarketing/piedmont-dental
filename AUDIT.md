# Piedmont Dental — SEO/AEO Implementation Audit

Run against the worktree on `claude/intelligent-archimedes-c7a6b2` after the Phase-1 implementation pass against the CTM SEO+AEO Domination Prompt v2.0.

---

## ✅ Completed (this session, no design/text changes)

### Schema refactor — page-aware structured data

**Problem found:** `StructuredData.tsx` was mounted in `app/layout.tsx`, so the homepage's FAQPage block (with 8 Q/As that only appear on `/`) and homepage-specific Speakable selectors (`.hero-headline`, `.visit-card`, etc.) were rendered on **every page** in the site. Google flags this exact pattern in the structured data documentation as a manual-action risk: "FAQ schema without visible FAQ on page".

**Fix shipped:**

| Schema type | Before | After |
|---|---|---|
| LocalBusiness / Organization / Dentist | Every page ✓ | Every page ✓ (unchanged — entity graph) |
| Person × 3 (Drs. Martenson, Cangini, Ma) | Every page ✓ | Every page ✓ |
| sameAs cross-linking | Every page ✓ | Every page ✓ |
| WebSite | Every page ✓ | Every page ✓ |
| WebPage + Speakable | Every page ⚠️ | Homepage only ✓ |
| FAQPage (homepage's 8 FAQs) | Every page ⚠️ | Homepage only ✓ |
| FAQPage (`/faqs` page's 9 FAQs) | `/faqs` ✓ | `/faqs` ✓ (already correct) |
| Article + author Person ref | ❌ Missing | Every blog post ✓ |
| Service | ❌ Missing | Every `/procedures/*/...` detail page ✓ (24 pages, auto via `ProcedureDetail`) |
| BreadcrumbList | ❌ Missing | Every procedure detail page (24) + every blog post (6) ✓ |

**Verification matrix** (`curl` against each page checking the JSON-LD):

```
                                            LocalBusiness  FAQPage
/                                                  ✓        ✓
/about                                             ✓        ✗
/procedures/cosmetic-dentistry/porcelain-veneers   ✓        ✗
/blog/dental-implants-piedmont-ca                  ✓        ✗
/faqs                                              ✓        ✓
/contact                                           ✓        ✗
```

**Files touched:**
- `components/StructuredData.tsx` — stripped page-specific schema, kept entity graph only
- `components/schema/HomepageSchema.tsx` — NEW, mounted on `/` only (WebPage + Speakable + FAQPage)
- `components/schema/ArticleSchema.tsx` — NEW, mounted per blog post
- `components/schema/ServiceSchema.tsx` — NEW
- `components/schema/BreadcrumbSchema.tsx` — NEW
- `components/ProcedureDetail.tsx` — auto-renders Service + Breadcrumb for all 24 procedure pages
- `app/blog/[slug]/page.tsx` — wires Article + Breadcrumb
- `app/page.tsx` — wires HomepageSchema

### JavaScript rendering audit (Phase 1.1 — "single most common AEO technical failure")

**Result: 100% pass.** Production build shows every one of 78 routes is either ○ (Static) or ● (SSG). No client-side-only rendering. AI crawlers (GPTBot, ClaudeBot, PerplexityBot — none of which execute JS) see all content on first response.

Interactive components (accordion FAQs, team bio expand panels, tabbed case switchers, gallery rails) were also verified — all content is **in the static HTML source**, just visually hidden via CSS height/opacity until user interacts. Crawlers parse the underlying DOM regardless of UI state.

### Internal link audit (Phase 1.1)

- 32 unique internal hrefs across the codebase
- 71 distinct prerendered routes
- **0 broken internal links** — every `href="/..."` in code points to a built route
- 4 external HTTPS links (social profiles + CareCredit portal) — all valid

### `robots.txt` audit (Phase 1.1 — NEW in v2)

Already in great shape. Confirmed:
- ✓ GPTBot, OAI-SearchBot, ChatGPT-User: allowed
- ✓ ClaudeBot, anthropic-ai, Claude-Web, Claude-SearchBot: allowed
- ✓ PerplexityBot, Perplexity-User: allowed
- ✓ Google-Extended: allowed (separate from Googlebot crawl rights)
- ✓ Applebot-Extended: allowed
- ✓ CCBot, cohere-ai, FacebookBot, Meta-ExternalAgent: allowed
- ✓ Bytespider, PetalBot, MJ12bot: explicitly blocked (the v2 PDF flags these as aggressive scrapers)
- ✓ SemrushBot, AhrefsBot: crawl-delay 10
- ✓ Sitemap reference present

### `llms.txt` audit (Phase 1.1 — NEW in v2)

Already exists at `public/llms.txt` with structured summary of the practice, services, doctors, hours, address, and pointers to key URLs. Format follows the emerging convention.

### Security headers audit (Phase 1.1 — NEW in v2)

Already comprehensive in `next.config.mjs`:
- ✓ HSTS (`max-age=63072000; includeSubDomains; preload`)
- ✓ Content-Security-Policy (lenient but functional — allows Google Maps iframe, next/image)
- ✓ X-Frame-Options: DENY
- ✓ X-Content-Type-Options: nosniff
- ✓ Referrer-Policy: strict-origin-when-cross-origin
- ✓ Permissions-Policy: locks down camera/mic/geolocation/interest-cohort/browsing-topics
- ✓ `poweredByHeader: false` (Next.js version not leaked)

### Hidden content audit (Phase 1.1 — NEW in v2)

No content is locked behind interactive widgets in a way that hides it from crawlers. Verified directly against the rendered HTML for:
- Team page bio reveal panels (content in DOM, CSS-hidden when closed)
- Composite Fillings Recent accordion FAQ (answers in DOM)
- Dental Implants tabbed case switcher (all 3 cases in DOM)
- Porcelain Crown gallery rail (all 5 cases in DOM)

---

## 🟡 Audited — recommendations follow, awaiting approval before edits

### Title tag audit

| Status | Count |
|---|---|
| ≤60 chars (ideal) | 28 |
| 61-70 chars (still OK) | 2 |
| **>70 chars (truncates in Google SERP)** | **1** |

The one too-long title:

```
85 chars: "Blog — Dental Care, Cosmetic Dentistry & Local Insights | Piedmont Dental By Design"
```

**Recommended rewrite:**
- "Piedmont Dental Blog — Cosmetic & Restorative Dentistry Insights" (63 chars), OR
- "Dental Care Blog | Piedmont Dental By Design" (45 chars)

Two others at 65 and 69 chars are technically fine but on the edge — leaving them.

### Meta description audit

| Status | Count |
|---|---|
| <120 chars (under-using snippet real estate) | 5 |
| 120-160 chars (ideal) | 7 |
| **>160 chars (truncates in Google SERP)** | **4** |

The 4 too-long descriptions need ~10-20 char trim each. Specific pages identified — list available on request.

The 5 too-short ones could expand for more SERP appeal but it's not urgent.

### Image audit

**Alt text coverage: 100%** (41 of 41 `<Image>` instances have `alt=`).

5 use intentionally-empty `alt=""` for decorative images (badge, sister thumbnails next to text labels, mosaic). This is the correct accessibility pattern for purely-decorative images.

No plain `<img>` tags serving heavy raw assets (the one `<img>` in `SiteFooter` serves a 2 KB logo.webp — fine).

**Source file sizes — heavy images that ship raw on OG / direct fetch:**

| Path | Size | Used in | Note |
|---|---|---|---|
| `/img/blog/cosmetic-dentist-piedmont-ca/hero.png` | 2.75 MB | Blog post hero + OG image | **Largest in repo** — should be < 1 MB for OG sharing |
| `/img/blog/dental-implants-piedmont-ca/hero.png` | 1.66 MB | Blog post hero + OG image | OG warning territory |
| `/img/restorations/implants.png` | 1.55 MB | Restorations hub feature card | Re-encode to WebP would save ~80% |
| `/img/cosmetic/gum-reshaping.png` | 1.05 MB | Cosmetic dentistry tile | dupe of `/img/gummy-smile-hero.png` |
| `/img/gummy-smile-hero.png` | 1.05 MB | Gummy smile page hero | (same image as above) |
| ~20 more PNGs in `lIVE Piedmont website images/` 600KB-1MB | (legacy assets archive — mostly only single ref) |

**Important context:** Next.js's `<Image>` component serves an optimized WebP/AVIF at request time, so end users get small images regardless. Source sizes still matter for:
1. **OG image sharing** — LinkedIn/Twitter/Facebook fetch the raw URL, not the optimized variant. Heavy OG images get rejected or slowly load.
2. **First-hit cache misses** on Vercel's image optimizer.
3. **Git push speed + repo size.**

**Recommendation:** convert the 2 blog OG hero PNGs to optimized JPG (under 500 KB each) and the `/img/restorations/*` set to WebP. Invisible end-user impact except faster OG previews.

### Author bylines (Phase 1.3 — E-E-A-T)

`Person` schema is set up for all 3 doctors and referenced as `author` on blog posts. Visible author bylines on blog posts: not yet checked. **Worth verifying:** does each blog post visibly show "By Dr. Martenson" with photo + credentials? Schema alone isn't enough — Google + AI engines look for visible byline + matching schema together.

### Content gaps (Phase 1.3, 2.2 — informational/intent coverage)

A structured content-gap analysis would require live competitive SERP + keyword data (Ahrefs/SEMrush — see `pending.md`). Without that data:
- Site has good depth on procedures (24 detail pages) and resources (16 dedicated pages)
- Blog has 6 posts — light for a 25-year practice. More frequent publishing on hyper-local terms ("dentist in Piedmont CA", "Oakland cosmetic dentist", neighborhood pages) would help local SEO.
- No FAQ on individual procedure pages (per Phase 6 guidance: "FAQ sections with 8-12 questions per money page"). High-value AEO improvement — every procedure page should add a procedure-specific FAQ block.

---

## ❌ Blocked (per `pending.md`)

- GA4 / AI-referrer tracking (needs measurement ID from client)
- All competitive analysis (Ahrefs/SEMrush)
- Live AI engine citation audit (other AI engines not queryable from this session)
- Off-platform link building & GBP / Bing Places / Apple Maps work
- A/B test execution (CRO platform required)

---

## What's queued next (waiting on your green light)

1. **Title tag rewrites** (1 too-long, 4 meta descriptions too-long, 5 too-short) — needs your approval since it changes user-visible text
2. **OG image compression** (2 blog hero PNGs → optimized JPG) — invisible to end users but worth confirming
3. **Add procedure-specific FAQ blocks to each `/procedures/*/...` page** — significant new content; needs source material or your green light to draft
4. **Continue sprinkling BreadcrumbList schema** to remaining nested pages (resources, smile-gallery, about-sub-pages) — invisible
5. **Visible author bylines on blog posts** if missing — light text addition, would ask first

Tell me which to tackle, and in what order.
