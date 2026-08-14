/**
 * Server-only utilities for loading blog posts from `content/blog/*.md`.
 * The markdown bodies are paired with the structured metadata in
 * `components/BlogIndex.tsx` (title/date/category/image/excerpt) — this
 * file just provides the article body.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { posts as POST_META, type Post } from "@/components/BlogIndex";
import { getRelatedPostMeta } from "@/lib/internal-links";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = Post & {
  /** The article markdown body (without YAML frontmatter). */
  body: string;
};

export function getPostSlugs(): string[] {
  return POST_META.map((p) => p.slug);
}

/**
 * Look up a post by slug. Throws if the slug isn't in the index, or if
 * the markdown file is missing.
 */
export function getPostBySlug(slug: string): BlogPost {
  const meta = POST_META.find((p) => p.slug === slug);
  if (!meta) {
    throw new Error(`Unknown blog slug: ${slug}`);
  }
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  return { ...meta, body: content };
}

export function getAllPosts(): BlogPost[] {
  return POST_META.map((p) => getPostBySlug(p.slug));
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  // Topic-scored via the internal-linking template (decision #50) — was a
  // positional slice that gave most posts the same three "related" articles.
  return getRelatedPostMeta(slug, limit);
}
