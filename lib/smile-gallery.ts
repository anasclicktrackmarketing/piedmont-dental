/**
 * Server-only loader for the Smile Gallery section.
 * Maps clean URLs to content/patient-resources/smile-gallery/*.md files.
 *
 * Routes:
 *   /smile-gallery                        — hub (smile-gallery/_index.md)
 *   /smile-gallery/other-procedures       — other-procedures.md (intro to the sub-galleries)
 *   /smile-gallery/composite-fillings     — other-procedures-composite-fillings.md
 *   /smile-gallery/dental-implants        — other-procedures-dental-implants.md
 *   /smile-gallery/porcelain-crowns-caps  — other-procedures-porcelain-crowns-caps.md
 *   /smile-gallery/composite-fillings-recent — other-procedures-composite-fillings-2.md
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(
  process.cwd(),
  "content",
  "patient-resources",
  "smile-gallery"
);

export type SmileGalleryDoc = {
  slug: string;
  /** "/smile-gallery" or "/smile-gallery/{slug}" */
  url: string;
  title: string;
  description: string;
  blurb: string;
  body: string;
};

type Meta = Omit<SmileGalleryDoc, "body"> & { fileSlug: string };

export const GALLERY_META: Meta[] = [
  {
    slug: "_index",
    url: "/smile-gallery",
    fileSlug: "_index",
    title: "Smile Gallery",
    description:
      "Real patient case studies from Piedmont Dental By Design — before and after photographs across our cosmetic and restorative treatments.",
    blurb: "Before & after photographs from real patients.",
  },
  {
    slug: "other-procedures",
    url: "/smile-gallery/other-procedures",
    fileSlug: "other-procedures",
    title: "Other Procedures",
    description:
      "Before-and-after results for composite fillings, dental implants, porcelain crowns, and more.",
    blurb: "Composite fillings, implants, crowns, and more.",
  },
  {
    slug: "composite-fillings",
    url: "/smile-gallery/composite-fillings",
    fileSlug: "other-procedures-composite-fillings",
    title: "Composite Fillings — Before & After",
    description:
      "Real patient composite filling results from Piedmont Dental By Design.",
    blurb: "Tooth-colored fillings, perfectly matched.",
  },
  {
    slug: "dental-implants",
    url: "/smile-gallery/dental-implants",
    fileSlug: "other-procedures-dental-implants",
    title: "Dental Implants — Before & After",
    description: "Real patient dental implant outcomes.",
    blurb: "Permanent tooth replacement results.",
  },
  {
    slug: "porcelain-crowns-caps",
    url: "/smile-gallery/porcelain-crowns-caps",
    fileSlug: "other-procedures-porcelain-crowns-caps",
    title: "Porcelain Crowns (Caps) — Before & After",
    description:
      "Real patient porcelain crown results — restoring shape, size, and strength.",
    blurb: "Porcelain crowns that look natural.",
  },
  {
    slug: "composite-fillings-recent",
    url: "/smile-gallery/composite-fillings-recent",
    fileSlug: "other-procedures-composite-fillings-2",
    title: "Composite Fillings — Recent Cases",
    description:
      "Recent composite filling case studies from Piedmont Dental By Design.",
    blurb: "Recent composite filling cases.",
  },
];

/**
 * Slugs handled by dedicated static routes under app/smile-gallery/{slug}/page.tsx.
 * The dynamic [slug] route MUST exclude these — otherwise Vercel's build
 * produces two pages for the same URL and the markdown-rendering dynamic one
 * can win arbitrarily, masking the polished static page.
 */
const STATIC_GALLERY_SLUGS = new Set([
  "other-procedures",
  "composite-fillings",
  "composite-fillings-recent",
  "dental-implants",
  "porcelain-crowns-caps",
]);

export function getGallerySlugs(): string[] {
  return GALLERY_META.filter(
    (m) => m.slug !== "_index" && !STATIC_GALLERY_SLUGS.has(m.slug)
  ).map((m) => m.slug);
}

export function getGalleryBySlug(slug: string): SmileGalleryDoc {
  const meta = GALLERY_META.find((m) => m.slug === slug);
  if (!meta) throw new Error(`Unknown gallery slug: ${slug}`);
  const filePath = path.join(CONTENT_DIR, `${meta.fileSlug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  const body = content.replace(/^#\s+.+\n+/, "").trim();
  const { fileSlug: _, ...rest } = meta;
  return { ...rest, body };
}

export function getGalleryCardData(): Array<
  Omit<SmileGalleryDoc, "body" | "fileSlug">
> {
  return GALLERY_META.filter((m) => m.slug !== "_index").map(
    ({ fileSlug: _, ...rest }) => rest
  );
}
