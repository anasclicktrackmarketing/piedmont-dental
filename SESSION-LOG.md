# Piedmont Dental By Design — Session Log

Complete context from the multi-day Claude Code session working on `piedmontdentalbydesign.com` (Vercel-deployed Next.js 15.5 site).

- **Repo:** https://github.com/anasclicktrackmarketing/piedmont-dental
- **Deployed at:** https://piedmont-dental-ten.vercel.app/
- **Local dev:** http://localhost:3000 (run `npm run dev` from the worktree)
- **Working branch:** `claude/intelligent-archimedes-c7a6b2` (synced to `main`)
- **Final commit at session end:** `2af89d7`

---

## Table of contents

1. [Session 1 — Patient Resources + Smile Gallery rebuild](#session-1--patient-resources--smile-gallery-rebuild)
2. [Session 2 — Homepage polish, About / Team interactivity, sticky badge](#session-2--homepage-polish-about--team-interactivity-sticky-badge)
3. [Session 3 — Headline rewrites + favicon + dropdown overflow + Dr. Cangini photo](#session-3--headline-rewrites--favicon--dropdown-overflow--dr-cangini-photo)
4. [Reusable client components introduced](#reusable-client-components-introduced)
5. [Asset pipelines used](#asset-pipelines-used)
6. [Routing fix that unblocked deployment](#routing-fix-that-unblocked-deployment)
7. [Deployment history](#deployment-history)

---

## Session 1 — Patient Resources + Smile Gallery rebuild

The first session redesigned every page under `/resources/*` and `/smile-gallery/*`. Previously these were rendered as bare markdown via dynamic `[slug]` routes, which produced generic-looking pages with stray "REQUEST APPOINTMENT (button)" bullets and no real CTAs. The rebuild created **21 dedicated static routes**, each with a distinct visual treatment.

### Page-by-page visual signatures

Each page deliberately reads differently — no two pages share the same primary layout pattern.

| Route | Visual treatment |
|---|---|
| `/resources/links` | Dark "moment" hero (auto-applied via `:not(:has(.resource-hero-image))`) + real external `<a href>` links wrapped in markdown link syntax + CTA card with primary/ghost buttons |
| `/resources/dental-videos` | 8 categorized sections, 3-col video grid with native `<video controls preload="metadata">` (39 mp4s in `/public/videos/`) |
| `/resources/patient-forms` | Prominent teal "Click here for patient forms" portal button → `dentalsymphony.com` (`target="_blank"`) |
| `/resources/insurance` | 3 explainer cards (cream paper bg, teal italic eyebrows) + key-points + dark CTA |
| `/resources/financing` | CareCredit feature with embedded `bb_10202017_GEC1806_Dental.mp4` + 3 action tiles + 6-up payment-methods icon grid |
| `/resources/gummy-smile` | Q&A with lettered A/B/C/D cause callouts + treatment options grid linking into procedure pages + numbered steps |
| `/resources/surgery` | Before/after case panels with consent banner; 2 cases |
| `/resources/restorations/dentures` | Case panels + bonus "Today's denture options" 3-up tiles (Full / Partial / Implant-supported) |
| `/resources/restorations/crowns-caps` | **Interactive sliders** in 2×2 grid + horizontal numbered process strip (Evaluate → Prep → Craft → Fit) |
| `/resources/restorations` | Magazine-style category hub with asymmetric feature card spanning 2 cols |
| `/resources/full-mouth-restoration` | Alternating left/right gallery with **huge transparent teal case numbers** as background design elements |
| `/resources/cosmetic-dentistry` | Full-bleed **image-overlay tile gallery** with hover image-scale |
| `/resources/invisalign` | Q&A content with vs-braces / vs-veneers comparison cards |
| `/resources/invisalign-results` | Full-width feature cases + Invisalign vs metal braces **comparison table** |
| `/resources/porcelain-veneers` | Featured case + "What changed" checklist + 2×2 grid + numbered care tips |
| `/resources/dental-implants` | **3-phase process stepper** with arrows + 3-up case grid + anatomy strip (A/B/C labeled parts) + 4-up stats |
| `/smile-gallery` | **Asymmetric photo mosaic hero** + featured gallery + 7-tile gallery grid |
| `/smile-gallery/other-procedures` | Subnav rail + featured spotlight + **horizontal scroll-snap carousel** |
| `/smile-gallery/composite-fillings` | **Editorial 2-col with pull-quote + sticky sidebar** (magazine spread) |
| `/smile-gallery/dental-implants` | **Tabbed case switcher** (CaseTabs) + indications checklist + 3-up benefits |
| `/smile-gallery/porcelain-crowns-caps` | **Gallery-app vertical thumbnail rail** with sticky positioning (CaseGalleryRail) |
| `/smile-gallery/composite-fillings-recent` | Vertical numbered timeline + **interactive accordion FAQ** (AccordionFAQ) |

### Header navigation overhaul

Restructured `components/SiteHeader.tsx` to mirror the live WordPress site's nav:

- **Patient Resources mega-dropdown** — 4 grouped columns (Forms & Practical / Education / Smile Gallery · Cosmetic / Smile Gallery · Restorations) with 21 items total.
- **Reviews dropdown** — All Patient Reviews · Share a Testimonial.
- Removed the standalone top-level "Smile Gallery" link — it lives inside Patient Resources now.
- Mobile drawer mirrors the same grouping.

### Privacy fix during this session

The before/after JPEGs downloaded from the live WordPress site had **embedded JFIF "comment" markers containing patient names** (`OJEDA|SUZANNE`, `GAULT|ROXANNE`, etc.). I re-encoded every case photo through a fresh `Image.new` → `paste` → `save` pipeline (via Pillow) before serving locally — this strips all source metadata, leaving clean image data only. The live WordPress site is still shipping the original photos with the metadata intact — worth flagging to whoever maintains it.

---

## Session 2 — Homepage polish, About / Team interactivity, sticky badge

### Homepage service carousel — all 8 tiles got new photography

Client uploaded 6, then 2 more practice-supplied portrait photos for the homepage `Services.tsx` carousel:

| Tile | Source filename | Saved as |
|---|---|---|
| Porcelain veneers | `porcelain veneers for homepage section.png` | `/img/home-services/porcelain-veneers.jpg` |
| Tooth whitening | `tooth whitening for homepage section.png` | `/img/home-services/tooth-whitening.jpg` |
| Invisalign® | `Invisalign for homepage section.png` | `/img/home-services/invisalign.jpg` |
| Dental implants | `dental implants for homepage section.png` | `/img/home-services/dental-implants.jpg` |
| CEREC® crowns | `cerec crowns for homepage section.png` | `/img/home-services/cerec.jpg` |
| Full mouth restoration | `Full mouth restoration for homepage section.png` | `/img/home-services/full-mouth.jpg` |
| Gum care | `gum care for homepage section.png` | `/img/home-services/gum-care.jpg` |
| Cleanings & exams | `cleanings and exams for homepage section.png` | `/img/home-services/cleanings-exams.jpg` |

All converted PNG (700KB–1MB) → JPG quality 86 progressive (~85 KB each). Carousel weight: **~750 KB total** vs ~7 MB if we'd shipped the raw PNGs.

Also upscaled `figure-2.jpg` (the legacy tooth-whitening image still used by `/procedures/cosmetic-dentistry/tooth-whitening` for OG metadata) from 400×243 → 1200×729 using LANCZOS + `ImageFilter.SMOOTH` + `ImageFilter.UnsharpMask(radius=1.5, percent=130)` + `ImageEnhance.Contrast(1.05)`.

### Before/After section redesign

The old hero was a single 620×625 composite image (yellow teeth on top, white teeth below, with a baked-in BEFORE/AFTER label strip) being rendered at viewport-width and dominating the section.

1. **Split the source** into two halves at y=312
2. **Cropped the label strip** off the bottom of the after half (down to 255 px tall) — detected the dark-band-onset by sampling pixel brightness across rows
3. **Rebuilt the layout** as a contained `.ba-pair` 2-column CSS grid (max-width 1080px) with two `.ba-half` figures, each 4:3 with rounded corners and soft shadow
4. **Stacks 1-col on mobile** below 720px
5. Replaced the old single "Before" / "After" pills (positioned diagonally across one shared image) with two corner-anchored pills — dark for Before, teal for After

### Interactive doctor switcher (homepage `About` section)

Was showing only Dr. Martenson; client wanted all 3 visible. **Considered an orbiting circle idea** (rejected — gimmicky with only 3 doctors, hard to make accessible) and built a calmer tab-based switcher:

- `components/About.tsx` converted to `'use client'` with `useState` for active doctor index
- All 3 doctor portraits stacked as `.about-portrait-layer` divs, fading between via opacity transition
- Click any of the 3 doctor cards at the bottom → main portrait, headline, bio paragraphs, byline card, and "About [Last name]" CTA all fade-swap to that doctor
- Real photos for all three via `/team/dr-{slug}.webp` (was using initial-letter avatars before)
- Dr. Cangini's photo later upgraded — see Session 3
- ARIA tab semantics (`role="tab"`, `aria-selected`), focus rings, `prefers-reduced-motion` respected, schema.org `Person` markup preserved on the active byline

### `/about/team` row-pair sharing + bio bleed-through fix

The team page had 9 cards in a 2-col CSS grid. Each used native `<details>` with independent open state. Opening one stretched the row but left the row-partner as a tall empty box. Client wanted the partner to open with content automatically.

**Refactor:**

1. Converted `components/TeamFull.tsx` from server component using `<details>`/`<summary>` to **client component** with controlled `Set<number>` of open indices
2. Added `matchMedia('(min-width: 720px)')` listener — desktop uses **pair mode** (clicking one card opens both in its row), mobile uses independent toggling
3. Replaced native disclosure with `<button>` + `<div role="region">` panel — `aria-expanded`, `aria-controls`, smooth `grid-template-rows: 0fr → 1fr` open animation
4. **Bio bleed-through fix:** CSS Grid items default to `min-height: auto`, so even with `grid-template-rows: 0fr` the bio kept claiming its natural height. Set `min-height: 0` on the grid item + animated `padding` from 0 → 18px and `border-top-width` from 0 → 1px on the open state. Cards now collapse fully flat.

### Contact form additions

To match the live form on `piedmontdentalbydesign.com/contact/`:

1. **"Are you a new or existing patient?" radio group** between Phone and Message — styled as selectable pill-cards, active state driven by `:has(input:checked)`. Required.
2. **Medi-cal / Medi-care disclaimer** above the submit button — soft-red-tinted callout with bold "Disclaimer:" prefix.

Field order now matches the live form: Name → Email/Phone → Patient status → Message → Consent → Disclaimer → Send.

### Best of the Bay 2025 sticky badge

Client uploaded a 2.4 MB transparent-bg award badge PNG. Made it a **site-wide decorative sticky element**.

- Auto-cropped to actual content bbox (1513×1024), resized 3× retina-ready to 320×216
- Saved as both PNG (50 KB) and **WebP (12 KB)** — 200× size reduction
- New `BestOfBayBadge.tsx` server component mounted in `app/layout.tsx` `<body>` so it shows on every page
- **Bottom-right** placement (originally bottom-left, moved after the Next.js dev "N" indicator overlapped it)
- Purely decorative: `pointer-events: none`, `aria-hidden`, no anchor wrapper
- Subtle one-time entrance animation (0.4s delay, 0.6s ease) — respects `prefers-reduced-motion`, hidden on print
- Responsive: 140 / 110 / 80 px wide across desktop / tablet / mobile
- z-index 60 — above content, below modals

---

## Session 3 — Headline rewrites + favicon + dropdown overflow + Dr. Cangini photo

### Hero H1 + Services H2 SEO rewrite

| Before | After |
|---|---|
| "Quietly *extraordinary* smiles, since 2000." | "Cosmetic *Dentistry* in Piedmont Since 2000." |
| "From routine to *complete* smile design." | "From Routine Dental to *complete* smile design." |

Both forced to two-line layout via explicit `<br />`. For the Hero, max-width was bumped from 16ch → 26ch and the font-size cap from `clamp(48px, 7vw, 96px)` → `clamp(42px, 6vw, 84px)` so the longer second line ("in Piedmont Since 2000." = 23 chars) fits on a single visual line at every viewport above the mobile breakpoint. For Services, max-width went 22ch → 24ch.

The `slogan` field in `components/StructuredData.tsx` was also updated to match the new H1 (SEO/Google snippet consistency).

### Dr. Cangini portrait upgrade

The live WordPress site had only a 200×271 source of Dr. Cangini, which looked soft as the homepage About switcher's main portrait. After a brief LANCZOS upscale stopgap, the client uploaded a real high-resolution photo:

- **Source:** 1078×1459 PNG, 1.9 MB
- **Saved:** 112 KB WebP at the existing path `/public/team/dr-cangini.webp`
- No code changes needed — all references (homepage About switcher, `/about/dr-cangini`) picked up the upgrade automatically

### Patient Resources mega-dropdown overflow fix

The dropdown was 980px wide and anchored to `left: 0` of its trigger. Since Patient Resources sits past the middle of the nav row, the menu spilled off the right edge at most desktop widths. First fix (right-anchoring it with a `.nav-dropdown--end` modifier) just swapped the overflow to the **left** side.

**The real fix:**

1. Made `.nav` (the whole nav row) `position: relative`
2. Made `.nav-dropdown--wide` `position: static` so the dropdown menu skips the trigger as positioning context and looks up to `.nav` instead
3. Wide dropdown is now **centered horizontally in the nav row** with `left: 50%; transform: translateX(-50%)`
4. Width capped at `min(980px, calc(100vw - 24px))` — can't overflow on either side regardless of which trigger you hover
5. Hover bridge expanded to a 32px-tall full-width strip above the menu so cursor traversal from any trigger down to the centered menu stays continuous
6. 2-col fallback at viewports ≤1280px
7. Long labels in the wide grouped menu now `white-space: normal` (not `nowrap`) so they wrap inside their column instead of pushing the column wider
8. Removed the no-longer-needed `nav-dropdown--end` modifier from SiteHeader.tsx

### Full favicon set generated

Client uploaded a 1024×1024 RGBA brand favicon PNG. Generated the full set:

| File | Size | Purpose |
|---|---|---|
| `favicon.ico` | 3 KB | Multi-resolution (16/32/48) for legacy + tab icon |
| `icon.png` | 1 KB | 32×32 modern tab favicon |
| `icon-192.png` | 11 KB | Android home screen / PWA |
| `icon-512.png` | 75 KB | Large PWA + structured-data logo + app stores |
| `apple-touch-icon.png` | 10 KB | 180×180 iOS home screen |

Updated:
- `app/layout.tsx` `metadata.icons` to reference all the new files
- `public/manifest.json` PWA icons with both `purpose: "any"` and `purpose: "maskable"` entries
- `components/StructuredData.tsx` schema.org `logo` from `/icon.svg` → `/icon-512.png`
- Removed orphaned `public/icon.svg`

---

## Reusable client components introduced

All four live in `/components/`. Each was used by 1–5 pages.

### `BeforeAfterSlider.tsx`

Drag-to-compare slider. Pointer + keyboard + touch input.

- Two `<Image fill>` layers stacked; the "before" layer's `clip-path: inset(...)` is driven by the handle's position state
- Handle has a teal knob + thin vertical bar with shadow
- `role="slider"`, `aria-valuemin/max/now`, `tabIndex={0}` — Tab to focus, then ←/→/Home/End keys to control
- Used on: `/resources/restorations/crowns-caps`, `/resources/full-mouth-restoration`, `/resources/invisalign-results`, `/resources/porcelain-veneers`, `/smile-gallery/other-procedures`, `/smile-gallery/composite-fillings`, `/smile-gallery/composite-fillings-recent`, plus the two reusable case-switcher components below

### `CaseTabs.tsx`

Tabbed case switcher. Takes an array of cases, shows tab bar across the top with case number + short label, swaps the panel content below.

- Active tab has thick teal underline at bottom
- Inside each panel: header + 2-col layout (slider on left, BEFORE/AFTER detail blocks on right)
- Proper ARIA tab semantics
- Used on: `/smile-gallery/dental-implants`

### `CaseGalleryRail.tsx`

Gallery-app style vertical thumbnail rail + active-case viewer.

- **Sticky** vertical thumbnail column on desktop with case "after" photos as backgrounds + numbered badges
- Active thumbnail gets teal border + shadow; badge turns teal
- On tablet/mobile the rail flips to a **horizontal scroll-snap thumbnail strip**
- Big viewer panel on the right (or below on mobile) with slider, 2-col detail blocks, procedure tags
- Used on: `/smile-gallery/porcelain-crowns-caps`

### `AccordionFAQ.tsx`

Expandable Q&A with smooth height transition.

- Each row: italic teal number + serif question + circular chevron icon (rotates 180° + turns teal when open)
- One open at a time; first item open by default
- `grid-template-rows: 0fr → 1fr` open animation; `min-height: 0` on the panel so the row collapses fully flat
- `aria-expanded`, `aria-controls`, `role="region"` on panels
- Used on: `/smile-gallery/composite-fillings-recent`

---

## Asset pipelines used

### PNG → optimized JPG (general image conversion)

Pillow pipeline used for the 8 homepage tiles:

```python
from PIL import Image
src = Image.open(src_path).convert("RGB")
clean = Image.new("RGB", src.size)
clean.paste(src)
clean.save(dst_path, "JPEG", quality=86, optimize=True, progressive=True)
```

Why "paste into fresh Image": this strips any EXIF / JFIF metadata from the source. Just calling `save()` on the original would preserve embedded comment markers (the patient-name leak case).

### LANCZOS classical upscale

For images where no higher-res source exists (early Dr. Cangini photo, the legacy `figure-2.jpg`):

```python
big = src.resize((src.w * 3, src.h * 3), Image.LANCZOS)
big = big.filter(ImageFilter.SMOOTH)                              # kill JPEG block artifacts
big = big.filter(ImageFilter.UnsharpMask(radius=1.5, percent=130))  # recover edge definition
big = ImageEnhance.Contrast(big).enhance(1.05)                    # punch back lost contrast
big.save(dst, "JPEG", quality=88, optimize=True, progressive=True)
```

Notes: won't invent detail that wasn't in the source — but eliminates the pixelation/blockiness from browser upscaling a too-small image.

### Favicon generation

```python
src = Image.open(SRC).convert("RGBA")
src.save("public/favicon.ico", sizes=[(16,16),(32,32),(48,48)])  # multi-res ICO
src.resize((180,180), Image.LANCZOS).save("public/apple-touch-icon.png", "PNG", optimize=True)
src.resize((192,192), Image.LANCZOS).save("public/icon-192.png", "PNG", optimize=True)
src.resize((512,512), Image.LANCZOS).save("public/icon-512.png", "PNG", optimize=True)
src.resize((32,32),  Image.LANCZOS).save("public/icon.png",     "PNG", optimize=True)
```

### Before/after composite split

For the homepage before/after section — source was a stacked composite with baked-in label strip:

```python
src = Image.open("public/before-after.jpg").convert("RGB")
W, H = src.size
half = H // 2
before = src.crop((0, 0, W, half))
after  = src.crop((0, half, W, H))
# Then row-by-row dark-pixel analysis to find the label strip onset:
def dark_count(y):
    return sum(1 for x in range(0, W, W // 40)
               if sum(after.getpixel((x, y))) < 240)
# Crop the band off — dark band started around y=260 in the after half
after = after.crop((0, 0, W, 255))
```

### Best of the Bay badge optimization

```python
src = Image.open(SRC).convert("RGBA")
src = src.crop(src.getbbox())  # auto-crop to actual content
small = src.resize((320, 216), Image.LANCZOS)
small.save("public/img/badges/best-of-bay-2025.png", "PNG", optimize=True)
small.save("public/img/badges/best-of-bay-2025.webp", "WebP", quality=90, method=6)
```

Result: 2.4 MB → 12 KB WebP (200× reduction).

---

## Routing fix that unblocked deployment

After the first deploy, three URLs were broken on Vercel — they showed the bare markdown content from the dynamic `[slug]` route instead of the custom static page:

- `/resources/restorations/crowns-caps`
- `/smile-gallery/composite-fillings`
- `/smile-gallery/composite-fillings-recent`

**Root cause:** when both `app/{path}/page.tsx` (static) and `app/[slug]/page.tsx` (dynamic) match the same URL, **Next.js dev server picks the static one but production build picks the dynamic one**. So my dev-mode testing showed the polished page; the live site showed the markdown stub.

**Fix:** explicit allow-lists in the dynamic route's `generateStaticParams()`:

```ts
// lib/resources.ts
const STATIC_RESOURCE_SLUGS = new Set([
  "cosmetic-dentistry", "dental-implants", "dental-videos", "financing",
  "full-mouth-restoration", "gummy-smile", "insurance", "invisalign",
  "invisalign-results", "links", "patient-forms", "porcelain-veneers",
  "restorations", "surgery",
]);
const STATIC_NESTED_RESTORATION_SLUGS = new Set(["crowns-caps", "dentures"]);

export function getResourceSlugs(): string[] {
  return RESOURCES_META.filter(
    (m) => !m.url.includes("/restorations/") && !STATIC_RESOURCE_SLUGS.has(m.slug)
  ).map((m) => m.slug);
}

export function getNestedRestorationSlugs(): string[] {
  return RESOURCES_META.filter(
    (m) => m.url.includes("/restorations/") &&
           !STATIC_NESTED_RESTORATION_SLUGS.has(m.slug)
  ).map((m) => m.slug);
}
```

Same pattern applied in `lib/smile-gallery.ts` (`STATIC_GALLERY_SLUGS`).

After the fix:
- `/resources/[slug]` only generates `/resources/smile-analysis`
- `/resources/restorations/[slug]` generates nothing (both slugs have static routes)
- `/smile-gallery/[slug]` generates nothing (all 5 slugs have static routes)

Lesson for future work: **don't trust dev-mode behavior for static-vs-dynamic route conflicts** — Next.js production builds resolve them differently. Always either delete the dynamic route or filter its `generateStaticParams()` when you add a static override.

---

## Deployment history

| Commit | Branch | Summary |
|---|---|---|
| `07a5181` | feature → PR #1 → main | Initial redesign of 21 Patient Resources + Smile Gallery pages |
| `a27ce85` | main | Merge of PR #1 |
| `73099bf` | main | Patient Resources + Reviews dropdowns added to site header |
| `1db7932` | main | Routing fix — exclude statically-routed slugs from dynamic `[slug]` generators |
| `440dfb0` | main | Homepage polish day: 8 service tile photos, before/after pair, interactive about, team row-pair, contact form additions, sticky badge |
| `9b8f8c2` | main | Nav dropdown overflow fix, full favicon set, hi-res Dr. Cangini photo |
| `2af89d7` | main | **Current HEAD** — hero + services H2 SEO copy rewrite |

Both `main` and `claude/intelligent-archimedes-c7a6b2` are synced at `2af89d7`.

---

## Known issues / follow-ups

- **One MP4 (`martenson-136609-1.mp4`) is 59 MB** — over GitHub's 50 MB soft warning. The file is in `public/videos/`. Long-term that folder is a candidate for **Git LFS**, but not blocking deployment today.
- **Patient-name JFIF metadata** is still embedded in the case photos on the live WordPress source (worth flagging to whoever maintains the WordPress side — they should re-export their case photos without the LEAD Technologies/Dentrix-style file-info headers).
- **Browser favicon caching** is aggressive — visitors who've been to the site before may keep seeing the old favicon for a while even after deploy. Hard-refresh (Ctrl/Cmd+Shift+R) clears it for the current user.
- **Dr. Cangini source resolution** was originally only 200×271 from WordPress; the client provided a 1078×1459 upgrade. If higher-res versions of any other doctor are available in the future, drop them at `/public/team/dr-{slug}.webp` and references update automatically.

---

## File map of key changes

```
app/
├── layout.tsx                    # Site-wide head (favicon, BestOfBayBadge mount)
├── globals.css                   # 13k+ lines; all page-specific CSS
├── resources/
│   ├── [slug]/page.tsx           # dynamic — filtered via STATIC_RESOURCE_SLUGS
│   ├── cosmetic-dentistry/       # static override
│   ├── dental-implants/          # static override
│   ├── dental-videos/            # static override
│   ├── financing/                # static override
│   ├── full-mouth-restoration/   # static override
│   ├── gummy-smile/              # static override
│   ├── insurance/                # static override
│   ├── invisalign/               # static override (Q&A content)
│   ├── invisalign-results/       # static override (case studies)
│   ├── links/                    # static override
│   ├── patient-forms/            # static override
│   ├── porcelain-veneers/        # static override
│   ├── restorations/
│   │   ├── page.tsx              # restorations hub
│   │   ├── [slug]/page.tsx       # dynamic — filtered
│   │   ├── crowns-caps/          # static override
│   │   └── dentures/             # static override
│   ├── smile-analysis/           # existing — uses dynamic [slug] (only slug left)
│   └── surgery/                  # static override
└── smile-gallery/
    ├── page.tsx                  # gallery hub
    ├── [slug]/page.tsx           # dynamic — filtered via STATIC_GALLERY_SLUGS
    ├── composite-fillings/       # static override
    ├── composite-fillings-recent/  # static override
    ├── dental-implants/          # static override
    ├── other-procedures/         # static override
    └── porcelain-crowns-caps/    # static override

components/
├── AccordionFAQ.tsx              # NEW (client)
├── About.tsx                     # MAJOR — converted to client, 3-doctor switcher
├── BeforeAfter.tsx               # MAJOR — side-by-side pair instead of composite
├── BeforeAfterSlider.tsx         # NEW (client)
├── BestOfBayBadge.tsx            # NEW (server, decorative, site-wide)
├── CaseGalleryRail.tsx           # NEW (client)
├── CaseTabs.tsx                  # NEW (client)
├── ContactHero.tsx               # ADDITIONS — radio group + disclaimer
├── Hero.tsx                      # COPY EDIT — new H1
├── ResourceArticle.tsx           # MINOR — added ctaSlot prop
├── Services.tsx                  # MAJOR — 8 new tile photos + H2 copy
├── SiteHeader.tsx                # MAJOR — Patient Resources + Reviews dropdowns
├── StructuredData.tsx            # COPY EDIT — slogan + logo path
└── TeamFull.tsx                  # MAJOR — converted to client, row-pair sharing

lib/
├── resources.ts                  # added STATIC_RESOURCE_SLUGS + STATIC_NESTED_RESTORATION_SLUGS
└── smile-gallery.ts              # added STATIC_GALLERY_SLUGS

public/
├── before-after-before.jpg       # NEW — split from old composite
├── before-after-after.jpg        # NEW — split from old composite, label strip cropped
├── favicon.ico                   # NEW — multi-res
├── icon.png, icon-192.png, icon-512.png  # NEW
├── apple-touch-icon.png          # NEW
├── manifest.json                 # UPDATED — new PWA icons
├── icon.svg                      # REMOVED
├── img/
│   ├── badges/best-of-bay-2025.{png,webp}     # NEW
│   ├── home-services/*.jpg                     # NEW — 8 homepage tiles
│   ├── composite-fillings/*                    # NEW — case studies
│   ├── cosmetic/*                              # NEW — cosmetic hub tiles
│   ├── crowns-caps/*                           # NEW — case studies
│   ├── dentures/*                              # NEW — case studies
│   ├── financing/*                             # NEW — CareCredit assets
│   ├── full-mouth/*                            # NEW — case studies
│   ├── invisalign-results/*                    # NEW — case studies
│   ├── other-procedures/*                      # NEW — upper-arch case
│   ├── restorations/*                          # NEW — category tile imgs
│   ├── surgery/*                               # NEW — case studies
│   └── veneers/*                               # NEW — case studies
├── team/dr-cangini.webp          # UPGRADED — 200×271 → 1078×1459
└── videos/                       # NEW — 39 procedure videos for /resources/dental-videos
```

---

*Generated at end of session — `2af89d7`.*
