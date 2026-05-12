/**
 * Server-only loader for patient-resources content files.
 * Each entry maps a clean URL slug to a content/patient-resources/*.md file.
 *
 * Routes powered by this:
 *   /resources/[slug]                           — 15 single-slug pages
 *   /resources/restorations/[slug]              — 2 nested under "restorations"
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "patient-resources");

export type ResourceDoc = {
  slug: string;
  /** "/resources/{slug}" or "/resources/restorations/{slug}" */
  url: string;
  title: string;
  /** Short marketing description for <meta description> */
  description: string;
  /** Card blurb for the resources index */
  blurb: string;
  /** Section group on the resources hub page */
  group: "service" | "procedure-info" | "before-after" | "patient-services";
  /** Optional featured image */
  featuredImage?: string;
  /** Optional featured image alt */
  featuredImageAlt?: string;
  /** Stripped markdown body (frontmatter + leading H1 removed) */
  body: string;
};

type Meta = Omit<ResourceDoc, "body"> & {
  /** Filename inside content/patient-resources/ (without .md) */
  fileSlug: string;
};

export const RESOURCES_META: Meta[] = [
  // ─── Patient services ───────────────────────────────────────────────
  {
    slug: "financing",
    url: "/resources/financing",
    fileSlug: "financing",
    title: "Financing Options",
    description:
      "CareCredit and other financing solutions for your dental care at Piedmont Dental By Design.",
    blurb: "CareCredit healthcare credit + flexible payment plans.",
    group: "patient-services",
  },
  {
    slug: "insurance",
    url: "/resources/insurance",
    fileSlug: "insurance",
    title: "Insurance",
    description:
      "Insurance information, accepted plans, and how to maximize your benefits at Piedmont Dental By Design.",
    blurb: "Accepted plans and how to maximize your benefits.",
    group: "patient-services",
  },
  {
    slug: "patient-forms",
    url: "/resources/patient-forms",
    fileSlug: "patient-forms",
    title: "Patient Forms",
    description:
      "New patient registration, medical history, and other forms you can complete before your visit.",
    blurb: "Download new-patient forms ahead of your visit.",
    group: "patient-services",
  },
  {
    slug: "dental-videos",
    url: "/resources/dental-videos",
    fileSlug: "dental-videos",
    title: "Dental Videos",
    description:
      "Animated videos explaining common dental procedures, conditions, and oral health topics.",
    blurb: "Visual explanations of common procedures and conditions.",
    group: "patient-services",
  },
  {
    slug: "links",
    url: "/resources/links",
    fileSlug: "links",
    title: "Useful Links",
    description:
      "Vetted dental and health resources from leading professional organizations.",
    blurb: "Vetted health and dental resources from leading orgs.",
    group: "patient-services",
  },

  // ─── Procedure information ───────────────────────────────────────────
  {
    slug: "invisalign",
    url: "/resources/invisalign",
    fileSlug: "invisalign-2",
    title: "Invisalign®",
    description:
      "Invisalign® clear aligners — how they work, what they can correct, and how they compare to traditional braces.",
    blurb: "Clear aligners — how they work and what they correct.",
    group: "procedure-info",
  },
  {
    slug: "surgery",
    url: "/resources/surgery",
    fileSlug: "surgery",
    title: "Cosmetic Surgical Crown Lengthening",
    description:
      "How surgical crown lengthening reshapes the gumline to expose more tooth — often paired with porcelain veneers.",
    blurb: "Surgical crown lengthening — reshape the gum line.",
    group: "procedure-info",
  },
  {
    slug: "smile-analysis",
    url: "/resources/smile-analysis",
    fileSlug: "smile-analysis",
    title: "Smile Analysis",
    description:
      "What a comprehensive smile analysis covers — tooth shape, color, gum line, lip line, and bite.",
    blurb: "What a comprehensive smile evaluation covers.",
    group: "procedure-info",
  },
  {
    slug: "gummy-smile",
    url: "/resources/gummy-smile",
    fileSlug: "gummy-smile",
    title: "Treating a Gummy Smile",
    description:
      "What causes a 'gummy smile' and the cosmetic treatments that can reshape the gum line for a more balanced look.",
    blurb: "Causes and treatments for an over-prominent gum line.",
    group: "procedure-info",
  },

  // ─── Before & after showcases (was "patient resources" gallery) ──────
  {
    slug: "cosmetic-dentistry",
    url: "/resources/cosmetic-dentistry",
    fileSlug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry — Before & After",
    description:
      "Real patient cosmetic dentistry results from Piedmont Dental By Design — veneers, whitening, smile design.",
    blurb: "Real patient cosmetic transformations.",
    group: "before-after",
  },
  {
    slug: "dental-implants",
    url: "/resources/dental-implants",
    fileSlug: "dental-implants",
    title: "Dental Implants — Before & After",
    description:
      "Real patient implant results — from single-tooth replacements to full arch restorations.",
    blurb: "Real patient implant restorations.",
    group: "before-after",
  },
  {
    slug: "porcelain-veneers",
    url: "/resources/porcelain-veneers",
    fileSlug: "porcelain-veneers",
    title: "Porcelain Veneers — Before & After",
    description:
      "Real patient veneer results — hand-shaped porcelain shells bonded to the front of teeth.",
    blurb: "Hand-shaped porcelain veneer transformations.",
    group: "before-after",
  },
  {
    slug: "invisalign-results",
    url: "/resources/invisalign-results",
    fileSlug: "invisalign",
    title: "Invisalign® Results — Before & After",
    description:
      "Real patient Invisalign® results — clear-aligner orthodontic outcomes.",
    blurb: "Clear-aligner orthodontic results.",
    group: "before-after",
  },
  {
    slug: "full-mouth-restoration",
    url: "/resources/full-mouth-restoration",
    fileSlug: "full-mouth-restoration-2",
    title: "Full Mouth Restoration — Before & After",
    description:
      "Comprehensive smile rebuilds — combining cosmetic, restorative, and periodontal care.",
    blurb: "Comprehensive smile rebuild case studies.",
    group: "before-after",
  },
  {
    slug: "restorations",
    url: "/resources/restorations",
    fileSlug: "restorations",
    title: "Restorations — Before & After",
    description:
      "Patient case studies across our restoration treatments — implants, fillings, crowns, dentures.",
    blurb: "Implant, filling, crown, and denture case studies.",
    group: "before-after",
  },

  // ─── Nested restoration before-afters ────────────────────────────────
  {
    slug: "crowns-caps",
    url: "/resources/restorations/crowns-caps",
    fileSlug: "restorations-crowns-caps",
    title: "Crowns (Caps) — Before & After",
    description:
      "Real patient porcelain crown results from Piedmont Dental By Design.",
    blurb: "Porcelain crown restoration case studies.",
    group: "before-after",
  },
  {
    slug: "dentures",
    url: "/resources/restorations/dentures",
    fileSlug: "restorations-dentures-partial-dentures",
    title: "Dentures & Partial Dentures — Before & After",
    description:
      "Real patient denture results — full and partial dentures crafted for a natural look.",
    blurb: "Full and partial denture case studies.",
    group: "before-after",
  },
];

/**
 * Slugs handled by dedicated static routes under app/resources/{slug}/page.tsx.
 * The dynamic [slug] route MUST exclude these or Vercel's build will produce
 * two pages for the same URL — and the markdown-rendering dynamic one can
 * arbitrarily win, masking the polished static page.
 */
const STATIC_RESOURCE_SLUGS = new Set([
  "cosmetic-dentistry",
  "dental-implants",
  "dental-videos",
  "financing",
  "full-mouth-restoration",
  "gummy-smile",
  "insurance",
  "invisalign",
  "invisalign-results",
  "links",
  "patient-forms",
  "porcelain-veneers",
  "restorations",
  "surgery",
]);

/** Slugs under /resources/restorations/{slug} handled by static routes. */
const STATIC_NESTED_RESTORATION_SLUGS = new Set([
  "crowns-caps",
  "dentures",
]);

export function getResourceSlugs(): string[] {
  return RESOURCES_META.filter(
    (m) =>
      !m.url.includes("/restorations/") && !STATIC_RESOURCE_SLUGS.has(m.slug)
  ).map((m) => m.slug);
}

export function getNestedRestorationSlugs(): string[] {
  return RESOURCES_META.filter(
    (m) =>
      m.url.includes("/restorations/") &&
      !STATIC_NESTED_RESTORATION_SLUGS.has(m.slug)
  ).map((m) => m.slug);
}

export function getResourceBySlug(slug: string): ResourceDoc {
  const meta = RESOURCES_META.find((m) => m.slug === slug);
  if (!meta) throw new Error(`Unknown resource slug: ${slug}`);
  const filePath = path.join(CONTENT_DIR, `${meta.fileSlug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  // Strip leading H1
  const body = content.replace(/^#\s+.+\n+/, "").trim();
  const { fileSlug: _, ...rest } = meta;
  return { ...rest, body };
}

export function getAllResources(): ResourceDoc[] {
  return RESOURCES_META.map((m) => getResourceBySlug(m.slug));
}

export function getResourceCardData(): Array<
  Omit<ResourceDoc, "body" | "fileSlug">
> {
  return RESOURCES_META.map(({ fileSlug: _, ...rest }) => rest);
}
