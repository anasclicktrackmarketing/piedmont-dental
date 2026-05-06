/**
 * Server-only utilities for loading legal documents from `content/legal/*.md`.
 * Used by the three top-level legal pages:
 *   /terms-and-conditions
 *   /privacy-policy-2
 *   /notice-of-privacy-practices
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "legal");

export type LegalDoc = {
  slug: string;
  /** H1 / page title for SEO and the hero */
  title: string;
  /** Short marketing description for <meta description> */
  description: string;
  /** ISO date when the document was last updated, optional */
  effectiveDate?: string;
  /** Markdown body (frontmatter stripped, leading H1 stripped) */
  body: string;
};

export const LEGAL_DOCS: Array<{
  slug: string;
  /** Filename inside content/legal/ (without .md) */
  fileSlug: string;
  title: string;
  description: string;
  effectiveDate?: string;
}> = [
  {
    slug: "terms-and-conditions",
    fileSlug: "terms-and-conditions",
    title: "Terms & Conditions",
    description:
      "The terms governing your access to and use of the Piedmont Dental By Design website and services.",
  },
  {
    slug: "privacy-policy-2",
    fileSlug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How Piedmont Dental By Design collects, stores, and uses personally identifiable information from visitors and patients.",
  },
  {
    slug: "notice-of-privacy-practices",
    fileSlug: "notice-of-privacy-practices",
    title: "Notice of Privacy Practices",
    description:
      "Our HIPAA Notice of Privacy Practices — how protected health information may be used and disclosed, and your rights.",
    effectiveDate: "February 16, 2026",
  },
];

export function getLegalSlugs(): string[] {
  return LEGAL_DOCS.map((d) => d.slug);
}

export function getLegalDoc(slug: string): LegalDoc {
  const meta = LEGAL_DOCS.find((d) => d.slug === slug);
  if (!meta) {
    throw new Error(`Unknown legal slug: ${slug}`);
  }
  const filePath = path.join(CONTENT_DIR, `${meta.fileSlug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  // Strip leading H1 — the hero will render the title
  const body = content.replace(/^#\s+.+\n+/, "").trim();
  return {
    slug: meta.slug,
    title: meta.title,
    description: meta.description,
    effectiveDate: meta.effectiveDate,
    body,
  };
}
