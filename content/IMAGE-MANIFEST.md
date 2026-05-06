# Image harvest manifest

44 content images harvested from the live site (piedmontdentalbydesign.com), saved with **semantic paths** under `public/img/`. This document is for your **review** — once you approve, the next step is to update each page's `featuredImage` / `<Image src>` to use these instead of the placeholder `/svc/*.jpg` and `/blog/*.jpg`.

**Total:** 44 images · 7.6 MB

---

## Key finding from the harvest

Most procedure **detail** sub-pages on the live site have **no content imagery** — they show a single repeating banner (`image2-1024x152.png`) and otherwise are text-only. Only `dental-implants` and `invisalign` had real procedure illustrations. The category **index** pages (Restoration, Cosmetic, Periodontal, Cleanings & Prevention) DO have hero imagery on the live site.

This means: for ~22 procedure detail sub-pages, we either keep the current `/svc/*.jpg` placeholders, source new imagery, or leave them text-only like the original. **My recommendation:** keep the `/svc/*.jpg` placeholders (they're inoffensive and our design uses them well) until you can have new photos taken.

---

## 1. Team member photos (9 staff) → `public/img/team/`

The biggest find — these are the real people on the team, currently 404'd in our redesign.

| Saved as | Live source | Maps to |
|---|---|---|
| `/img/team/michelle.jpg` | `2024/08/3e5aed4a-..._lg.jpg` (alt: "Michelle") | `/about/team` — Michelle |
| `/img/team/kelley.jpg` | `2024/08/527c2513-..._lg.jpg` (alt: "Kelley") | `/about/team` — Kelley |
| `/img/team/elaina.jpg` | `2024/08/60639113-..._lg-1.jpg` (alt: "Elaina") | `/about/team` — Elaina |
| `/img/team/christine.jpg` | `2024/08/6645a33e-..._lg.jpg` (alt: "Christine") | `/about/team` — Christine |
| `/img/team/cesar.jpg` | `2024/08/6c11efcb-..._lg.jpg` (alt: "Cesar") | `/about/team` — Cesar |
| `/img/team/susana.jpg` | `2024/08/b7998758-..._lg.jpg` (alt: "Susana") | `/about/team` — Susana |
| `/img/team/debra.jpg` | `2024/08/bfb7b57f-..._lg.jpg` (alt: "Debra") | `/about/team` — Debra |
| `/img/team/lee-lannee.jpg` | `2024/08/bfdc639d-..._lg-2.jpg` (alt: "Lee'Lannee") | `/about/team` — Lee'Lannee |
| `/img/team/julie.jpg` | `2024/08/f99065a7-..._lg.jpg` (alt: "Julie") | `/about/team` — Julie |

These are small thumbnails on the live site (5–14 KB each). They work for the team grid; if you want larger versions, you'd need original photography.

---

## 2. Blog post featured images (6) → `public/img/blog/{slug}/hero.{ext}`

These replace the placeholder `/blog/*.jpg` images currently used.

| Saved as | Live source (alt) | Maps to |
|---|---|---|
| `/img/blog/dental-implants-piedmont-ca/hero.png` | `2026/03/Dental-Implants.png` | `/blog/dental-implants-piedmont-ca` |
| `/img/blog/cosmetic-dentist-piedmont-ca/hero.png` | `2026/03/Cosmetic-Dentistry.png` | `/blog/cosmetic-dentist-piedmont-ca` |
| `/img/blog/family-dentist-piedmont-ca/hero.jpg` | `2026/03/Dentist-blog-image-.jpg` ("family dentist Piedmont CA") | `/blog/family-dentist-piedmont-ca` |
| `/img/blog/family-dentist-piedmont/hero.jpg` | `2025/09/family-dentist.jpg` ("family dentist holding dentistry tools") | `/blog/family-dentist-piedmont` |
| `/img/blog/trusted-dentist-oakland-ca/hero.jpg` | `2025/09/Trusted-Dentist-Near-Oakland.jpg` | `/blog/trusted-dentist-oakland-ca` |
| `/img/blog/waterpik-vs-flossing/hero.jpg` | `2025/09/oral-b-ultra-floss.jpg` ("oral b ultra floss") | `/blog/waterpik-vs-flossing` |

⚠️ Note: The first two (`Dental-Implants.png`, `Cosmetic-Dentistry.png`) are **1.6 MB** and **2.7 MB** — large for hero images. Next.js `<Image>` will resize them automatically, but worth flagging.

---

## 3. Procedure category index images (4 categories) → `public/img/procedures/{category}/_index/`

Replace the current `/svc/*.jpg` placeholders on the 4 category index pages.

### `/procedures/restoration` (3 imgs)
- `/img/procedures/restoration/_index/hero.jpg` ← `2024/09/restorations-1.jpg`
- `/img/procedures/restoration/_index/figure-1.jpg` ← `2024/09/restorations-2.jpg`
- `/img/procedures/restoration/_index/figure-2.jpg` ← `2024/09/restorations-3-1.jpg`

### `/procedures/cosmetic-dentistry` (7 imgs)
- `/img/procedures/cosmetic-dentistry/_index/hero.jpg` ← `2024/09/cosmetic-1a.jpg`
- `/img/procedures/cosmetic-dentistry/_index/figure-1.jpg` … `figure-6.jpg` ← `cosmetic-2.jpg` through `cosmetic-7.jpg`

### `/procedures/periodontal-services` (3 imgs)
- `/img/procedures/periodontal-services/_index/hero.jpg` ← `2024/09/perio-1.jpg`
- `/img/procedures/periodontal-services/_index/figure-1.jpg` ← `2024/09/perio-2.jpg`
- `/img/procedures/periodontal-services/_index/figure-2.jpg` ← `2024/09/perio-3.jpg`

### `/procedures/cleanings-prevention` (1 img)
- `/img/procedures/cleanings-prevention/_index/hero.jpg` ← `2024/08/dentist-with-patient-at-hospital-1024x682.jpg`

These are also smallish (6–17 KB) — fine for thumbnails, may need higher-res for full-bleed hero.

---

## 4. Procedure detail page images (only 2 sub-pages had any) → `public/img/procedures/{category}/{slug}/`

### `/procedures/restoration/dental-implants` (1 img)
- `/img/procedures/restoration/dental-implants/hero.png` ← `2024/09/dental-implant-image.png` (illustration of titanium post + crown)

### `/procedures/cosmetic-dentistry/invisalign` (4 imgs)
- `/img/procedures/cosmetic-dentistry/invisalign/hero.jpg` ← `2024/09/invisalign-1.jpg`
- `/img/procedures/cosmetic-dentistry/invisalign/figure-1.jpg` ← `2024/09/invisalign-2.jpg`
- `/img/procedures/cosmetic-dentistry/invisalign/figure-2.jpg` ← `2024/09/invisalign-3.jpg`
- `/img/procedures/cosmetic-dentistry/invisalign/figure-3.png` ← `2024/09/portrait-beautiful-patient-holding-orthodontic-retainers...png` (a clean stock photo of a patient holding aligners)

**For the other 22 procedure sub-pages, the live site has no content imagery** — keep current placeholders or replace later with new photography.

---

## 5. Procedures hub (1) → `public/img/procedures/_hub/`

- `/img/procedures/_hub/hero.jpg` ← `2024/08/tesabout3.jpg` (small generic practice image, 32 KB)

---

## 6. Awards (2) → `public/img/awards/`

| Saved as | Use |
|---|---|
| `/img/awards/best-of-east-bay-2024.jpg` (59 KB) | The "Best Esthetic Dentist 2024" badge — perfect for AwardsStrip and patient-reviews stats card |
| `/img/awards/angies-list-2013.png` (346 KB) | Angie's List Super Service Award — also AwardsStrip |

---

## 7. About / generic practice imagery (7) → `public/img/about/`

| Saved as | Live filename | Suggested use |
|---|---|---|
| `/img/about/dr-martenson-family.jpg` (238 KB) | `Dr-M-family-photo-1-2048x1571.jpg` | `/about/dr-martenson` — personal touch in a "values" section |
| `/img/about/practice-main.jpg` (27 KB) | `main1.jpg` | `/about` hub — small contextual photo |
| `/img/about/reception.jpg` (128 KB) | `the-girl-on-reception-at-the-dentist.jpg` | `/about` or contact page |
| `/img/about/elderly-patient.jpg` (25 KB) | `dentist-with-elderly-patient-768x503.jpg` | `/about` — diversity of patient ages |
| `/img/about/treating-cavity.jpg` (108 KB) | `dentist-treating-cavity.jpg` | Could be a generic procedure photo |
| `/img/about/unnamed-7.png` (335 KB) | `unnamed-7.png` | Unknown — needs visual review |
| `/img/about/unnamed-8.png` (374 KB) | `unnamed-8.png` | Unknown — needs visual review |

---

## What I'm NOT proposing to use

- **Doctor headshots** — already harvested at `/team/*.webp` (Dr. Martenson, Dr. Cangini, Dr. Ma)
- **Office tour photos** — already harvested at `/office/*.webp` (10 photos)
- **Site logos** (`logoFooter-1.png`, `logoFooter-2.png`, `cid_*.png`)
- **Generic banner** (`image2-1024x152.png` — appears 42x as a section divider on the live site)
- **Professional association logos** (`ada.png`, `aacd.png`, `cda.png`, `spear.png`) — could be added to AwardsStrip if you want
- **Star icons** (`star-5.png`)
- **Google Place photos** (`ChIJRXRi3F2Hj4ARneUpH7lqi3I_*.jpg` — these appear to be auto-pulled from your Google Maps listing; some may overlap with photos you already have)

---

## Recommended next step

1. **You review this manifest** — flag any I should drop, or any "unnamed-*.png" you want me to inspect
2. **I do the page updates in one commit** — replacing the 30+ `<Image src="/svc/...">` and `<Image src="/blog/...">` references with the new `/img/...` paths
3. **Pages with no live counterpart** keep `/svc/*.jpg` placeholders, marked with a TODO in the manifest

Want me to proceed with step 2?
