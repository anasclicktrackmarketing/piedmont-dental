# Resume Harvest

✅ **Harvest complete as of 2026-05-05.** All 4 pending batches finished cleanly with no rate-limit interruptions.

## What's saved

- **84 markdown files** (one per page) across 12 categories
- **1 PDF** (Notice of Privacy Practices)
- **Total: 85 files in `content/`**

## Folder layout

```
content/
├── _INDEX.md              ← master catalog (status of every URL)
├── _HARVEST-PROMPT.md     ← prompt template for new pages
├── _RESUME.md             ← this file
├── pages/                 → home, about-us, procedures, patient-resources, faqs, contact, meet-the-team, office-tour
├── doctors/               → dr-jill-martenson, dr-david-ma, dr-filippo-cangini
├── procedures/
│   ├── cleanings-prevention/  → _index + 6 sub-pages
│   ├── cosmetic-dentistry/    → _index + 5 sub-pages
│   ├── periodontal-services/  → _index + 8 sub-pages
│   └── restoration/           → _index + 5 sub-pages
├── patient-resources/     → 18 pages incl. smile-gallery/
├── blog/                  → _index + 6 posts
├── reviews/               → _index, testimonial, procedures-for-smile-gallery
├── standalone/            → 5 SEO content pages
└── legal/                 → privacy-policy, terms-and-conditions, notice-of-privacy-practices (+PDF)
```

## Notes flagged during harvest

- **Phone discrepancy** on `/alzheimers-and-dental-hygiene-piedmont-ca`: header shows `(510) 956-6475`, CTA shows `510-652-2911`. Likely typo on the live site. Worth checking with the practice.
- **Smile-gallery pages** are mostly image-based on the live site, so text extraction is sparse on:
  - `gummy-smile`
  - `smile-gallery/_index`
  - `office-tour`
  - `patient-reviews/_index`
  - `full-mouth-restoration`
  - `notice-of-privacy-practices` (PDF has the full document)
  These pages have `fetchStatus: partial` in their frontmatter and are best built using images from the asset library.
- **Featured images**: most pages use `data:image/svg+xml` placeholders that we skipped. The actual images live in the asset folder at `C:\Users\Admin\Desktop\Cursor\CTM\Piedmont Website\images\`. When building a sub-page, find the matching image there.

## When you want to build a sub-page

1. Open `_INDEX.md` and find the URL → local file mapping
2. Read the local markdown file for the verbatim content + section headings
3. Pick a featured image from the asset folder by matching the topic
4. Build the page in `app/<route>/page.tsx` following the patterns from existing pages

No more harvesting needed — everything's local.
