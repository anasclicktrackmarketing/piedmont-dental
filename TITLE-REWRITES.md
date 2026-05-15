# Title Tag Rewrites — Mechanical Fix

**Rule:** Next.js root layout appends `" | Piedmont Dental By Design"` (28 chars) to every page title via `metadata.title.template`. So the actual rendered `<title>` tag is the string in each page + 28 chars. Target rendered title length: **≤ 70 chars**.

**Strategy:** Mechanical deduplication — most pages had `"... | Piedmont Dental"` baked into the metadata.title, which is then doubled by the template. We just remove the duplicate; in some cases also drop the middle subtitle. No editorial changes to the meaningful copy.

**Pages fixed:** 49
**Pages requiring manual decision:** 8

---

### `app/about/dr-cangini/page.tsx`

- **Strategy:** NO-SAFE-FIX
- **Old** (68 chars): `Dr. Filippo Cangini — Board-Certified Periodontist | Piedmont Dental`
- _No mechanical fix lands under target. Needs manual rewrite._

### `app/about/dr-ma/page.tsx`

- **Strategy:** NO-SAFE-FIX
- **Old** (63 chars): `Dr. David Ma — Restorative & Cosmetic Dentist | Piedmont Dental`
- _No mechanical fix lands under target. Needs manual rewrite._

### `app/about/dr-martenson/page.tsx`

- **Strategy:** NO-SAFE-FIX
- **Old** (74 chars): `Dr. Jill Martenson, DDS — Owner & Lead Dentist | Piedmont Dental By Design`
- _No mechanical fix lands under target. Needs manual rewrite._

### `app/about/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (63 chars): `About — Dr. Jill Martenson and team | Piedmont Dental By Design`
- **New metadata.title** (35 chars): `About — Dr. Jill Martenson and team`
- **Old rendered <title>** (91 chars): `About — Dr. Jill Martenson and team | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (63 chars): `About — Dr. Jill Martenson and team | Piedmont Dental By Design`

### `app/blog/[slug]/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (45 chars): `Article not found | Piedmont Dental By Design`
- **New metadata.title** (17 chars): `Article not found`
- **Old rendered <title>** (73 chars): `Article not found | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (45 chars): `Article not found | Piedmont Dental By Design`

### `app/blog/page.tsx`

- **Strategy:** NO-SAFE-FIX
- **Old** (83 chars): `Blog — Dental Care, Cosmetic Dentistry & Local Insights | Piedmont Dental By Design`
- _No mechanical fix lands under target. Needs manual rewrite._

### `app/faqs/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (67 chars): `FAQs — Dental Health Questions Answered | Piedmont Dental By Design`
- **New metadata.title** (39 chars): `FAQs — Dental Health Questions Answered`
- **Old rendered <title>** (95 chars): `FAQs — Dental Health Questions Answered | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (67 chars): `FAQs — Dental Health Questions Answered | Piedmont Dental By Design`

### `app/patient-reviews/page.tsx`

- **Strategy:** first-segment-only
- **Old metadata.title** (58 chars): `Patient Reviews | Real Stories — Piedmont Dental By Design`
- **New metadata.title** (15 chars): `Patient Reviews`
- **Old rendered <title>** (86 chars): `Patient Reviews | Real Stories — Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (43 chars): `Patient Reviews | Piedmont Dental By Design`

### `app/patient-reviews/testimonial/page.tsx`

- **Strategy:** first-segment-only
- **Old metadata.title** (71 chars): `Patient Testimonials | Real Patient Stories — Piedmont Dental By Design`
- **New metadata.title** (20 chars): `Patient Testimonials`
- **Old rendered <title>** (99 chars): `Patient Testimonials | Real Patient Stories — Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (48 chars): `Patient Testimonials | Piedmont Dental By Design`

### `app/procedures/cleanings-prevention/dental-exams-cleanings/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (81 chars): `Dental Exams & Cleanings in Piedmont, CA | Twice-Yearly Hygiene | Piedmont Dental`
- **New metadata.title** (40 chars): `Dental Exams & Cleanings in Piedmont, CA`
- **Old rendered <title>** (109 chars): `Dental Exams & Cleanings in Piedmont, CA | Twice-Yearly Hygiene | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (68 chars): `Dental Exams & Cleanings in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cleanings-prevention/dental-x-rays/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (73 chars): `Dental X-Rays in Piedmont, CA | Safe Diagnostic Imaging | Piedmont Dental`
- **New metadata.title** (29 chars): `Dental X-Rays in Piedmont, CA`
- **Old rendered <title>** (101 chars): `Dental X-Rays in Piedmont, CA | Safe Diagnostic Imaging | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (57 chars): `Dental X-Rays in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cleanings-prevention/fluoride-treatment/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (78 chars): `Fluoride Treatment in Piedmont, CA | Strengthen Tooth Enamel | Piedmont Dental`
- **New metadata.title** (34 chars): `Fluoride Treatment in Piedmont, CA`
- **Old rendered <title>** (106 chars): `Fluoride Treatment in Piedmont, CA | Strengthen Tooth Enamel | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (62 chars): `Fluoride Treatment in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cleanings-prevention/home-care/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (86 chars): `Dental Home Care in Piedmont, CA | Brushing, Flossing, Rinsing Guide | Piedmont Dental`
- **New metadata.title** (32 chars): `Dental Home Care in Piedmont, CA`
- **Old rendered <title>** (114 chars): `Dental Home Care in Piedmont, CA | Brushing, Flossing, Rinsing Guide | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (60 chars): `Dental Home Care in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cleanings-prevention/how-to-properly-brush-floss/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (68 chars): `How to Brush & Floss Properly | Step-by-Step Guide | Piedmont Dental`
- **New metadata.title** (29 chars): `How to Brush & Floss Properly`
- **Old rendered <title>** (96 chars): `How to Brush & Floss Properly | Step-by-Step Guide | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (57 chars): `How to Brush & Floss Properly | Piedmont Dental By Design`

### `app/procedures/cleanings-prevention/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (82 chars): `Cleanings & Prevention in Piedmont, CA | Exams, X-Rays, Fluoride | Piedmont Dental`
- **New metadata.title** (38 chars): `Cleanings & Prevention in Piedmont, CA`
- **Old rendered <title>** (110 chars): `Cleanings & Prevention in Piedmont, CA | Exams, X-Rays, Fluoride | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (66 chars): `Cleanings & Prevention in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cleanings-prevention/panoramic-x-rays/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (78 chars): `Panoramic X-Rays in Piedmont, CA | Wraparound Dental Imaging | Piedmont Dental`
- **New metadata.title** (32 chars): `Panoramic X-Rays in Piedmont, CA`
- **Old rendered <title>** (106 chars): `Panoramic X-Rays in Piedmont, CA | Wraparound Dental Imaging | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (60 chars): `Panoramic X-Rays in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cosmetic-dentistry/cerec/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (84 chars): `CEREC® Same-Day Crowns in Piedmont, CA | Single-Visit Restorations | Piedmont Dental`
- **New metadata.title** (38 chars): `CEREC® Same-Day Crowns in Piedmont, CA`
- **Old rendered <title>** (112 chars): `CEREC® Same-Day Crowns in Piedmont, CA | Single-Visit Restorations | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (66 chars): `CEREC® Same-Day Crowns in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cosmetic-dentistry/invisalign/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (91 chars): `Invisalign® Clear Aligners in Piedmont, CA | Discreet Teeth Straightening | Piedmont Dental`
- **New metadata.title** (42 chars): `Invisalign® Clear Aligners in Piedmont, CA`
- **Old rendered <title>** (119 chars): `Invisalign® Clear Aligners in Piedmont, CA | Discreet Teeth Straightening | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (70 chars): `Invisalign® Clear Aligners in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cosmetic-dentistry/page.tsx`

- **Strategy:** first-segment-only
- **Old metadata.title** (74 chars): `Cosmetic Dentistry in Piedmont, CA | Veneers, Whitening, Invisalign, CEREC`
- **New metadata.title** (34 chars): `Cosmetic Dentistry in Piedmont, CA`
- **Old rendered <title>** (102 chars): `Cosmetic Dentistry in Piedmont, CA | Veneers, Whitening, Invisalign, CEREC | Piedmont Dental By Design`
- **New rendered <title>** (62 chars): `Cosmetic Dentistry in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cosmetic-dentistry/porcelain-veneers/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (73 chars): `Porcelain Veneers in Piedmont, CA | Custom Smile Design | Piedmont Dental`
- **New metadata.title** (33 chars): `Porcelain Veneers in Piedmont, CA`
- **Old rendered <title>** (101 chars): `Porcelain Veneers in Piedmont, CA | Custom Smile Design | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (61 chars): `Porcelain Veneers in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cosmetic-dentistry/surgery/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (83 chars): `Surgical Crown Lengthening in Piedmont, CA | Cosmetic Gum Surgery | Piedmont Dental`
- **New metadata.title** (42 chars): `Surgical Crown Lengthening in Piedmont, CA`
- **Old rendered <title>** (111 chars): `Surgical Crown Lengthening in Piedmont, CA | Cosmetic Gum Surgery | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (70 chars): `Surgical Crown Lengthening in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/cosmetic-dentistry/tooth-whitening/page.tsx`

- **Strategy:** NO-SAFE-FIX
- **Old** (86 chars): `Professional Teeth Whitening in Piedmont, CA | Take-Home & In-Office | Piedmont Dental`
- _No mechanical fix lands under target. Needs manual rewrite._

### `app/procedures/page.tsx`

- **Strategy:** NO-SAFE-FIX
- **Old** (95 chars): `Dental Procedures — Cosmetic, Restorative, Periodontal & Preventive | Piedmont Dental By Design`
- _No mechanical fix lands under target. Needs manual rewrite._

### `app/procedures/periodontal-services/bone-grafting/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (78 chars): `Bone Grafting in Piedmont, CA | Restore Jawbone for Implants | Piedmont Dental`
- **New metadata.title** (29 chars): `Bone Grafting in Piedmont, CA`
- **Old rendered <title>** (106 chars): `Bone Grafting in Piedmont, CA | Restore Jawbone for Implants | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (57 chars): `Bone Grafting in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/periodontal-services/crown-lengthening/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (69 chars): `Crown Lengthening in Piedmont, CA | Reshape Gumline | Piedmont Dental`
- **New metadata.title** (33 chars): `Crown Lengthening in Piedmont, CA`
- **Old rendered <title>** (97 chars): `Crown Lengthening in Piedmont, CA | Reshape Gumline | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (61 chars): `Crown Lengthening in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/periodontal-services/gum-grafting/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (68 chars): `Gum Grafting in Piedmont, CA | Treat Receding Gums | Piedmont Dental`
- **New metadata.title** (28 chars): `Gum Grafting in Piedmont, CA`
- **Old rendered <title>** (96 chars): `Gum Grafting in Piedmont, CA | Treat Receding Gums | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (56 chars): `Gum Grafting in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/periodontal-services/maintenance/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (78 chars): `Periodontal Maintenance in Piedmont, CA | Quarterly Gum Care | Piedmont Dental`
- **New metadata.title** (39 chars): `Periodontal Maintenance in Piedmont, CA`
- **Old rendered <title>** (106 chars): `Periodontal Maintenance in Piedmont, CA | Quarterly Gum Care | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (67 chars): `Periodontal Maintenance in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/periodontal-services/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (78 chars): `Periodontal Services in Piedmont, CA | Gum Disease Treatment | Piedmont Dental`
- **New metadata.title** (36 chars): `Periodontal Services in Piedmont, CA`
- **Old rendered <title>** (106 chars): `Periodontal Services in Piedmont, CA | Gum Disease Treatment | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (64 chars): `Periodontal Services in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/periodontal-services/periodontal-scaling-root-planing/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (79 chars): `Scaling & Root Planing in Piedmont, CA | Deep Dental Cleaning | Piedmont Dental`
- **New metadata.title** (38 chars): `Scaling & Root Planing in Piedmont, CA`
- **Old rendered <title>** (107 chars): `Scaling & Root Planing in Piedmont, CA | Deep Dental Cleaning | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (66 chars): `Scaling & Root Planing in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/periodontal-services/sinus-augmentation/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (79 chars): `Sinus Augmentation in Piedmont, CA | Implant Site Preparation | Piedmont Dental`
- **New metadata.title** (34 chars): `Sinus Augmentation in Piedmont, CA`
- **Old rendered <title>** (107 chars): `Sinus Augmentation in Piedmont, CA | Implant Site Preparation | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (62 chars): `Sinus Augmentation in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/periodontal-services/treatment/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (88 chars): `Periodontal Treatment in Piedmont, CA | Scaling, Root Planing, Surgery | Piedmont Dental`
- **New metadata.title** (37 chars): `Periodontal Treatment in Piedmont, CA`
- **Old rendered <title>** (116 chars): `Periodontal Treatment in Piedmont, CA | Scaling, Root Planing, Surgery | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (65 chars): `Periodontal Treatment in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/periodontal-services/what-is-periodontal-gum-disease/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (80 chars): `What Is Periodontal (Gum) Disease? | Warning Signs & Treatment | Piedmont Dental`
- **New metadata.title** (34 chars): `What Is Periodontal (Gum) Disease?`
- **Old rendered <title>** (108 chars): `What Is Periodontal (Gum) Disease? | Warning Signs & Treatment | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (62 chars): `What Is Periodontal (Gum) Disease? | Piedmont Dental By Design`

### `app/procedures/restoration/composite-fillings/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (81 chars): `Composite Fillings in Piedmont, CA | Tooth-Colored Restorations | Piedmont Dental`
- **New metadata.title** (34 chars): `Composite Fillings in Piedmont, CA`
- **Old rendered <title>** (109 chars): `Composite Fillings in Piedmont, CA | Tooth-Colored Restorations | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (62 chars): `Composite Fillings in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/restoration/crowns-caps/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (81 chars): `Porcelain Crowns (Caps) in Piedmont, CA | Restore Damaged Teeth | Piedmont Dental`
- **New metadata.title** (39 chars): `Porcelain Crowns (Caps) in Piedmont, CA`
- **Old rendered <title>** (109 chars): `Porcelain Crowns (Caps) in Piedmont, CA | Restore Damaged Teeth | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (67 chars): `Porcelain Crowns (Caps) in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/restoration/dental-implants/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (79 chars): `Dental Implants in Piedmont, CA | Permanent Tooth Replacement | Piedmont Dental`
- **New metadata.title** (31 chars): `Dental Implants in Piedmont, CA`
- **Old rendered <title>** (107 chars): `Dental Implants in Piedmont, CA | Permanent Tooth Replacement | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (59 chars): `Dental Implants in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/restoration/dentures-partial-dentures/page.tsx`

- **Strategy:** NO-SAFE-FIX
- **Old** (91 chars): `Dentures & Partial Dentures in Piedmont, CA | Removable Tooth Replacement | Piedmont Dental`
- _No mechanical fix lands under target. Needs manual rewrite._

### `app/procedures/restoration/fixed-bridges/page.tsx`

- **Strategy:** drop-middle-and-brand
- **Old metadata.title** (77 chars): `Fixed Bridges in Piedmont, CA | Permanent Tooth Replacement | Piedmont Dental`
- **New metadata.title** (29 chars): `Fixed Bridges in Piedmont, CA`
- **Old rendered <title>** (105 chars): `Fixed Bridges in Piedmont, CA | Permanent Tooth Replacement | Piedmont Dental | Piedmont Dental By Design`
- **New rendered <title>** (57 chars): `Fixed Bridges in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/restoration/page.tsx`

- **Strategy:** first-segment-only
- **Old metadata.title** (82 chars): `Dental Restoration in Piedmont, CA | Implants, Crowns, Fillings, Bridges, Dentures`
- **New metadata.title** (34 chars): `Dental Restoration in Piedmont, CA`
- **Old rendered <title>** (110 chars): `Dental Restoration in Piedmont, CA | Implants, Crowns, Fillings, Bridges, Dentures | Piedmont Dental By Design`
- **New rendered <title>** (62 chars): `Dental Restoration in Piedmont, CA | Piedmont Dental By Design`

### `app/resources/[slug]/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (46 chars): `Resource not found | Piedmont Dental By Design`
- **New metadata.title** (18 chars): `Resource not found`
- **Old rendered <title>** (74 chars): `Resource not found | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (46 chars): `Resource not found | Piedmont Dental By Design`

### `app/resources/cosmetic-dentistry/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (46 chars): `Cosmetic Dentistry | Piedmont Dental By Design`
- **New metadata.title** (18 chars): `Cosmetic Dentistry`
- **Old rendered <title>** (74 chars): `Cosmetic Dentistry | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (46 chars): `Cosmetic Dentistry | Piedmont Dental By Design`

### `app/resources/dental-implants/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (60 chars): `Dental Implants — Before & After | Piedmont Dental By Design`
- **New metadata.title** (32 chars): `Dental Implants — Before & After`
- **Old rendered <title>** (88 chars): `Dental Implants — Before & After | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (60 chars): `Dental Implants — Before & After | Piedmont Dental By Design`

### `app/resources/full-mouth-restoration/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (50 chars): `Full Mouth Restoration | Piedmont Dental By Design`
- **New metadata.title** (22 chars): `Full Mouth Restoration`
- **Old rendered <title>** (78 chars): `Full Mouth Restoration | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (50 chars): `Full Mouth Restoration | Piedmont Dental By Design`

### `app/resources/gummy-smile/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (50 chars): `Treating a Gummy Smile | Piedmont Dental By Design`
- **New metadata.title** (22 chars): `Treating a Gummy Smile`
- **Old rendered <title>** (78 chars): `Treating a Gummy Smile | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (50 chars): `Treating a Gummy Smile | Piedmont Dental By Design`

### `app/resources/invisalign-results/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (64 chars): `Invisalign® Results — Before & After | Piedmont Dental By Design`
- **New metadata.title** (36 chars): `Invisalign® Results — Before & After`
- **Old rendered <title>** (92 chars): `Invisalign® Results — Before & After | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (64 chars): `Invisalign® Results — Before & After | Piedmont Dental By Design`

### `app/resources/invisalign/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (56 chars): `Invisalign® — Clear Aligners | Piedmont Dental By Design`
- **New metadata.title** (28 chars): `Invisalign® — Clear Aligners`
- **Old rendered <title>** (84 chars): `Invisalign® — Clear Aligners | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (56 chars): `Invisalign® — Clear Aligners | Piedmont Dental By Design`

### `app/resources/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (45 chars): `Patient Resources | Piedmont Dental By Design`
- **New metadata.title** (17 chars): `Patient Resources`
- **Old rendered <title>** (73 chars): `Patient Resources | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (45 chars): `Patient Resources | Piedmont Dental By Design`

### `app/resources/porcelain-veneers/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (62 chars): `Porcelain Veneers — Before & After | Piedmont Dental By Design`
- **New metadata.title** (34 chars): `Porcelain Veneers — Before & After`
- **Old rendered <title>** (90 chars): `Porcelain Veneers — Before & After | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (62 chars): `Porcelain Veneers — Before & After | Piedmont Dental By Design`

### `app/resources/restorations/[slug]/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (46 chars): `Resource not found | Piedmont Dental By Design`
- **New metadata.title** (18 chars): `Resource not found`
- **Old rendered <title>** (74 chars): `Resource not found | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (46 chars): `Resource not found | Piedmont Dental By Design`

### `app/resources/restorations/crowns-caps/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (58 chars): `Crowns (Caps) — Before & After | Piedmont Dental By Design`
- **New metadata.title** (30 chars): `Crowns (Caps) — Before & After`
- **Old rendered <title>** (86 chars): `Crowns (Caps) — Before & After | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (58 chars): `Crowns (Caps) — Before & After | Piedmont Dental By Design`

### `app/resources/restorations/dentures/page.tsx`

- **Strategy:** NO-SAFE-FIX
- **Old** (72 chars): `Dentures & Partial Dentures — Before & After | Piedmont Dental By Design`
- _No mechanical fix lands under target. Needs manual rewrite._

### `app/resources/surgery/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (52 chars): `Surgery — Before & After | Piedmont Dental By Design`
- **New metadata.title** (24 chars): `Surgery — Before & After`
- **Old rendered <title>** (80 chars): `Surgery — Before & After | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (52 chars): `Surgery — Before & After | Piedmont Dental By Design`

### `app/smile-gallery/[slug]/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (45 chars): `Gallery not found | Piedmont Dental By Design`
- **New metadata.title** (17 chars): `Gallery not found`
- **Old rendered <title>** (73 chars): `Gallery not found | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (45 chars): `Gallery not found | Piedmont Dental By Design`

### `app/smile-gallery/composite-fillings-recent/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (61 chars): `Composite Fillings — Recent Cases | Piedmont Dental By Design`
- **New metadata.title** (33 chars): `Composite Fillings — Recent Cases`
- **Old rendered <title>** (89 chars): `Composite Fillings — Recent Cases | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (61 chars): `Composite Fillings — Recent Cases | Piedmont Dental By Design`

### `app/smile-gallery/composite-fillings/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (63 chars): `Composite Fillings — Before & After | Piedmont Dental By Design`
- **New metadata.title** (35 chars): `Composite Fillings — Before & After`
- **Old rendered <title>** (91 chars): `Composite Fillings — Before & After | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (63 chars): `Composite Fillings — Before & After | Piedmont Dental By Design`

### `app/smile-gallery/dental-implants/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (59 chars): `Dental Implants — Smile Gallery | Piedmont Dental By Design`
- **New metadata.title** (31 chars): `Dental Implants — Smile Gallery`
- **Old rendered <title>** (87 chars): `Dental Implants — Smile Gallery | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (59 chars): `Dental Implants — Smile Gallery | Piedmont Dental By Design`

### `app/smile-gallery/other-procedures/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (60 chars): `Other Procedures — Smile Gallery | Piedmont Dental By Design`
- **New metadata.title** (32 chars): `Other Procedures — Smile Gallery`
- **Old rendered <title>** (88 chars): `Other Procedures — Smile Gallery | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (60 chars): `Other Procedures — Smile Gallery | Piedmont Dental By Design`

### `app/smile-gallery/porcelain-crowns-caps/page.tsx`

- **Strategy:** drop-full-brand
- **Old metadata.title** (67 chars): `Porcelain Crowns (Caps) — Smile Gallery | Piedmont Dental By Design`
- **New metadata.title** (39 chars): `Porcelain Crowns (Caps) — Smile Gallery`
- **Old rendered <title>** (95 chars): `Porcelain Crowns (Caps) — Smile Gallery | Piedmont Dental By Design | Piedmont Dental By Design`
- **New rendered <title>** (67 chars): `Porcelain Crowns (Caps) — Smile Gallery | Piedmont Dental By Design`


---

## Manual Rewrites (proposed)

For 8 pages, no mechanical fix produces a rendered title ≤ 70 chars. Proposed manual rewrites below:

### `app/about/dr-cangini/page.tsx`

- **Old metadata.title** (68 chars): `Dr. Filippo Cangini — Board-Certified Periodontist | Piedmont Dental`
- **New metadata.title** (33 chars): `Dr. Filippo Cangini, Periodontist`
- **New rendered <title>** (61 chars): `Dr. Filippo Cangini, Periodontist | Piedmont Dental By Design`

### `app/about/dr-ma/page.tsx`

- **Old metadata.title** (63 chars): `Dr. David Ma — Restorative & Cosmetic Dentist | Piedmont Dental`
- **New metadata.title** (32 chars): `Dr. David Ma — Cosmetic Dentist`
- **New rendered <title>** (60 chars): `Dr. David Ma — Cosmetic Dentist | Piedmont Dental By Design`

### `app/about/dr-martenson/page.tsx`

- **Old metadata.title** (74 chars): `Dr. Jill Martenson, DDS — Owner & Lead Dentist | Piedmont Dental By Design`
- **New metadata.title** (38 chars): `Dr. Jill Martenson, DDS — Lead Dentist`
- **New rendered <title>** (66 chars): `Dr. Jill Martenson, DDS — Lead Dentist | Piedmont Dental By Design`

### `app/blog/page.tsx`

- **Old metadata.title** (83 chars): `Blog — Dental Care, Cosmetic Dentistry & Local Insights | Piedmont Dental By Design`
- **New metadata.title** (36 chars): `Blog — Dental Notes & Local Insights`
- **New rendered <title>** (64 chars): `Blog — Dental Notes & Local Insights | Piedmont Dental By Design`

### `app/procedures/cosmetic-dentistry/tooth-whitening/page.tsx`

- **Old metadata.title** (86 chars): `Professional Teeth Whitening in Piedmont, CA | Take-Home & In-Office | Piedmont Dental`
- **New metadata.title** (31 chars): `Teeth Whitening in Piedmont, CA`
- **New rendered <title>** (59 chars): `Teeth Whitening in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/page.tsx`

- **Old metadata.title** (95 chars): `Dental Procedures — Cosmetic, Restorative, Periodontal & Preventive | Piedmont Dental By Design`
- **New metadata.title** (33 chars): `Dental Procedures in Piedmont, CA`
- **New rendered <title>** (61 chars): `Dental Procedures in Piedmont, CA | Piedmont Dental By Design`

### `app/procedures/restoration/dentures-partial-dentures/page.tsx`

- **Old metadata.title** (91 chars): `Dentures & Partial Dentures in Piedmont, CA | Removable Tooth Replacement | Piedmont Dental`
- **New metadata.title** (41 chars): `Dentures (Full & Partial) in Piedmont, CA`
- **New rendered <title>** (69 chars): `Dentures (Full & Partial) in Piedmont, CA | Piedmont Dental By Design`

### `app/resources/restorations/dentures/page.tsx`

- **Old metadata.title** (72 chars): `Dentures & Partial Dentures — Before & After | Piedmont Dental By Design`
- **New metadata.title** (33 chars): `Dentures — Before & After Gallery`
- **New rendered <title>** (61 chars): `Dentures — Before & After Gallery | Piedmont Dental By Design`

