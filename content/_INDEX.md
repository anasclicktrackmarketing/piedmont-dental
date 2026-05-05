# Site Content — Master Index

Single source of truth for all content harvested from piedmontdentalbydesign.com. Use this when building new sub-pages instead of re-fetching from the live site.

> **Status as of 2026-05-05:** ✅ **Harvest complete. 84 markdown files + 1 PDF saved.**
> All 75 mapped URLs harvested. Some pages flagged `partial` in their frontmatter — typically smile-gallery pages where the live content is image-based and didn't surface in extraction. Re-fetch those individually if needed when building the corresponding sub-page.
>
> Asset folder for featured images: `C:\Users\Admin\Desktop\Cursor\CTM\Piedmont Website\images\` (organized by year/month).

## How to use

- Each row maps a live URL → local content file
- Open the content file for: title, full body verbatim, section headings, featured image reference, metadata
- Status: `✅` complete · `📄` summary only (re-fetch if you need full body) · `✅` pending · `❌` failed
- Featured images are referenced by relative path; assets folder is at `C:\Users\Admin\Desktop\Cursor\CTM\Piedmont Website\images\`

## Already-built site pages (live in /app)

| URL | Local content | Built page | Status |
|---|---|---|---|
| `/` | `pages/home.md` | `app/page.tsx` | 📄 |
| `/about-us` | `pages/about-us.md` | `app/about/page.tsx` | ✅ |
| `/procedures` | `pages/procedures.md` | `app/procedures/page.tsx` | ✅ |
| `/patient-resources` | `pages/patient-resources.md` | `app/resources/page.tsx` | ✅ |
| `/patient-resources/faqs` | `pages/faqs.md` | `app/faqs/page.tsx` | ✅ |
| `/blog` | `blog/_index.md` | `app/blog/page.tsx` | ✅ |
| `/contact` | `pages/contact.md` | `app/contact/page.tsx` | ✅ |
| `/patient-reviews/testimonial` | `reviews/testimonial.md` | (used in homepage Reviews) | ✅ |

## Doctor profiles

| URL | Local content | Status |
|---|---|---|
| `/about-us/dr-jill-martenson` | `doctors/dr-jill-martenson.md` | ✅ |
| `/dr-david-ma` | `doctors/dr-david-ma.md` | ✅ |
| `/about-us/dr-filippo-cangini` | `doctors/dr-filippo-cangini.md` | ✅ |
| `/meet-the-team` | `pages/meet-the-team.md` | ✅ |

## Procedure category pages

| URL | Local content | Status |
|---|---|---|
| `/procedures/cleanings-prevention` | `procedures/cleanings-prevention/_index.md` | ✅ |
| `/procedures/cosmetic-dentistry` | `procedures/cosmetic-dentistry/_index.md` | ✅ |
| `/procedures/periodontal-services` | `procedures/periodontal-services/_index.md` | ✅ |
| `/procedures/restoration` | `procedures/restoration/_index.md` | ✅ |

## Cleanings & Prevention sub-pages

| URL | Local content | Status |
|---|---|---|
| `/procedures/cleanings-prevention/dental-exams-cleanings` | `procedures/cleanings-prevention/dental-exams-cleanings.md` | ✅ |
| `/procedures/cleanings-prevention/dental-x-rays` | `procedures/cleanings-prevention/dental-x-rays.md` | ✅ |
| `/procedures/cleanings-prevention/home-care` | `procedures/cleanings-prevention/home-care.md` | ✅ |
| `/procedures/cleanings-prevention/panoramic-x-rays` | `procedures/cleanings-prevention/panoramic-x-rays.md` | ✅ |
| `/procedures/cleanings-prevention/fluoride-treatment` | `procedures/cleanings-prevention/fluoride-treatment.md` | ✅ |
| `/procedures/cleanings-prevention/how-to-properly-brush-floss` | `procedures/cleanings-prevention/how-to-properly-brush-floss.md` | ✅ |

## Cosmetic Dentistry sub-pages

| URL | Local content | Status |
|---|---|---|
| `/procedures/cosmetic-dentistry/porcelain-veneers` | `procedures/cosmetic-dentistry/porcelain-veneers.md` | ✅ |
| `/procedures/cosmetic-dentistry/tooth-whitening` | `procedures/cosmetic-dentistry/tooth-whitening.md` | ✅ |
| `/procedures/cosmetic-dentistry/surgery` | `procedures/cosmetic-dentistry/surgery.md` | ✅ |
| `/procedures/cosmetic-dentistry/cerec` | `procedures/cosmetic-dentistry/cerec.md` | ✅ |
| `/procedures/cosmetic-dentistry/invisalign` | `procedures/cosmetic-dentistry/invisalign.md` | ✅ |

## Periodontal Services sub-pages

| URL | Local content | Status |
|---|---|---|
| `/procedures/periodontal-services/treatment` | `procedures/periodontal-services/treatment.md` | ✅ |
| `/procedures/periodontal-services/maintenance` | `procedures/periodontal-services/maintenance.md` | ✅ |
| `/procedures/periodontal-services/gum-grafting` | `procedures/periodontal-services/gum-grafting.md` | ✅ |
| `/procedures/periodontal-services/bone-grafting` | `procedures/periodontal-services/bone-grafting.md` | ✅ |
| `/procedures/periodontal-services/crown-lengthening` | `procedures/periodontal-services/crown-lengthening.md` | ✅ |
| `/procedures/periodontal-services/periodontal-scaling-root-planing` | `procedures/periodontal-services/periodontal-scaling-root-planing.md` | ✅ |
| `/procedures/periodontal-services/sinus-augmentation` | `procedures/periodontal-services/sinus-augmentation.md` | ✅ |
| `/procedures/periodontal-services/what-is-periodontal-gum-disease` | `procedures/periodontal-services/what-is-periodontal-gum-disease.md` | ✅ |

## Restoration sub-pages

| URL | Local content | Status |
|---|---|---|
| `/procedures/restoration/dental-implants` | `procedures/restoration/dental-implants.md` | ✅ |
| `/procedures/restoration/composite-fillings` | `procedures/restoration/composite-fillings.md` | ✅ |
| `/procedures/restoration/crowns-caps` | `procedures/restoration/crowns-caps.md` | ✅ |
| `/procedures/restoration/dentures-partial-dentures` | `procedures/restoration/dentures-partial-dentures.md` | ✅ |
| `/procedures/restoration/fixed-bridges` | `procedures/restoration/fixed-bridges.md` | ✅ |

## Patient Resources sub-pages

| URL | Local content | Status |
|---|---|---|
| `/patient-resources/insurance` | `patient-resources/insurance.md` | ✅ |
| `/patient-resources/financing` | `patient-resources/financing.md` | ✅ |
| `/patient-resources/patient-forms` | `patient-resources/patient-forms.md` | ✅ |
| `/patient-resources/dental-videos` | `patient-resources/dental-videos.md` | ✅ |
| `/patient-resources/smile-analysis` | `patient-resources/smile-analysis.md` | ✅ |
| `/patient-resources/links` | `patient-resources/links.md` | ✅ |
| `/patient-resources/cosmetic-dentistry` | `patient-resources/cosmetic-dentistry.md` | ✅ |
| `/patient-resources/restorations` | `patient-resources/restorations.md` | ✅ |
| `/patient-resources/restorations/crowns-caps` | `patient-resources/restorations-crowns-caps.md` | ✅ |
| `/patient-resources/restorations/dentures-partial-dentures` | `patient-resources/restorations-dentures-partial-dentures.md` | ✅ |
| `/patient-resources/dental-implants` | `patient-resources/dental-implants.md` | ✅ |
| `/patient-resources/porcelain-veneers` | `patient-resources/porcelain-veneers.md` | ✅ |
| `/patient-resources/invisalign` | `patient-resources/invisalign.md` | ✅ |
| `/patient-resources/invisalign-2` | `patient-resources/invisalign-2.md` | ✅ |
| `/patient-resources/surgery` | `patient-resources/surgery.md` | ✅ |
| `/patient-resources/full-mouth-restoration` | `patient-resources/full-mouth-restoration.md` | ✅ |
| `/patient-resources/full-mouth-restoration-2` | `patient-resources/full-mouth-restoration-2.md` | ✅ |
| `/patient-resources/gummy-smile` | `patient-resources/gummy-smile.md` | ✅ |
| `/patient-resources/smile-gallery` | `patient-resources/smile-gallery/_index.md` | ✅ |
| `/patient-resources/smile-gallery/other-procedures` | `patient-resources/smile-gallery/other-procedures.md` | ✅ |
| `/patient-resources/smile-gallery/other-procedures/composite-fillings` | `patient-resources/smile-gallery/other-procedures-composite-fillings.md` | ✅ |
| `/patient-resources/smile-gallery/other-procedures/composite-fillings-2` | `patient-resources/smile-gallery/other-procedures-composite-fillings-2.md` | ✅ |
| `/patient-resources/smile-gallery/other-procedures/dental-implants` | `patient-resources/smile-gallery/other-procedures-dental-implants.md` | ✅ |
| `/patient-resources/smile-gallery/other-procedures/porcelain-crowns-caps` | `patient-resources/smile-gallery/other-procedures-porcelain-crowns-caps.md` | ✅ |

## Blog posts

| URL | Local content | Status |
|---|---|---|
| `/blog-dental-implants-piedmont-ca` | `blog/dental-implants-piedmont-ca.md` | 📄 |
| `/blog-cosmetic-dentist-piedmont-ca` | `blog/cosmetic-dentist-piedmont-ca.md` | 📄 |
| `/blog-family-dentist-piedmont-ca` | `blog/family-dentist-piedmont-ca.md` | 📄 |
| `/trusted-dentist-oakland-ca` | `blog/trusted-dentist-oakland-ca.md` | 📄 |
| `/waterpik-vs-flossing` | `blog/waterpik-vs-flossing.md` | 📄 |
| `/family-dentist-piedmont` | `blog/family-dentist-piedmont.md` | 📄 |

## Standalone content pages

| URL | Local content | Status |
|---|---|---|
| `/invisalign-clear-aligners` | `standalone/invisalign-clear-aligners.md` | ✅ |
| `/professional-teeth-whitening-piedmont` | `standalone/professional-teeth-whitening-piedmont.md` | ✅ |
| `/affordable-dental-membership-plans-piedmont` | `standalone/affordable-dental-membership-plans-piedmont.md` | ✅ |
| `/what-is-gingivitis` | `standalone/what-is-gingivitis.md` | ✅ |
| `/alzheimers-and-dental-hygiene-piedmont-ca` | `standalone/alzheimers-and-dental-hygiene-piedmont-ca.md` | ✅ |

## Other pages

| URL | Local content | Status |
|---|---|---|
| `/office-tour` | `pages/office-tour.md` | ✅ |
| `/patient-reviews` | `reviews/_index.md` | ✅ |
| `/patient-reviews/procedures-for-smile-gallery` | `reviews/procedures-for-smile-gallery.md` | ✅ |

## Legal

| URL | Local content | Status |
|---|---|---|
| `/privacy-policy-2` | `legal/privacy-policy.md` | ✅ |
| `/terms-and-conditions` | `legal/terms-and-conditions.md` | ✅ |
| `/notice-of-privacy-practices` | `legal/notice-of-privacy-practices.md` | ✅ |
| `/wp-content/uploads/2026/02/...NOTICE OF PRIVACY PRACTICES (2).pdf` | `legal/notice-of-privacy-practices.pdf` | ✅ (binary, download separately) |

---

## Asset library

Featured images and other media live in the user's local asset folder at:
`C:\Users\Admin\Desktop\Cursor\CTM\Piedmont Website\images\`

That folder is organized by year/month (`2025/02/`, `2025/03/`, ..., `2026/03/`). Each content file references the relevant filename in its frontmatter. When building a sub-page, copy the file from the asset library into `public/<page-slug>/` or similar.

## Adding a new page

Use the prompt template in `_HARVEST-PROMPT.md` for any URL not yet captured here. Update this index with the new entry once harvested.
