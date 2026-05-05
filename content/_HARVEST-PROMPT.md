# Harvest Prompt Template

Use this prompt with `WebFetch` (or pass to a sub-agent) when capturing a new page from piedmontdentalbydesign.com.

## Prompt to send

> Extract the full content of this page exhaustively. Return:
>
> 1. **Title** verbatim (the visible H1 / page title)
> 2. **Meta description** if present in the HTML head
> 3. **Featured image** — full URL of the main hero image at the top of the page (`<img>` `src` only — skip data:image/svg+xml placeholders)
> 4. **All section headings** (H2, H3, H4) in order, verbatim
> 5. **Full body text** verbatim, paragraph by paragraph, in the order it appears. No paraphrasing. No summarizing. If the page has bulleted lists, preserve them as bullet lists. If it has tables, preserve them.
> 6. **Any callouts, badges, or pull-quotes** verbatim
> 7. **Any CTAs** (button text + destination URL)
> 8. **Any FAQ-style Q&A** if present, verbatim
>
> If the page is mostly empty or returns 403/404, say so explicitly. If you can only get partial content, return what you have and note "PARTIAL" at the top.

## File format to write

Save the harvested content as `content/<category>/<slug>.md` with this YAML frontmatter:

```md
---
url: https://piedmontdentalbydesign.com/<path>
slug: <slug>
title: <verbatim H1>
category: procedures | patient-resources | doctors | blog | standalone | legal | reviews | pages
subcategory: <optional, e.g. cleanings-prevention>
fetched: 2026-05-04
fetchStatus: complete | partial | failed
featuredImage: <URL or local asset reference>
sectionHeadings:
  - <H2 1>
  - <H2 2>
metaDescription: <optional>
---

# <Title>

<Body paragraphs verbatim>

## <Section heading 1>

<Body paragraphs>

## <Section heading 2>

...
```

## Updating the index

After saving, update `_INDEX.md`:
- Change the row's status from `⏳` (pending) to `✅` (complete) or `📄` (summary only)
- If the page failed, mark `❌` and note why in a comment

## Asset library reference

When the page references images, the originals likely live in:
`C:\Users\Admin\Desktop\Cursor\CTM\Piedmont Website\images\` (organized by year/month)

Map the live URL's image filename to the local asset filename and reference it in the frontmatter as `featuredImage: ../assets/2025/MM/<filename>` for portability.
