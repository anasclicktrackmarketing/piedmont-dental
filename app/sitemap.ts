import type { MetadataRoute } from "next";
import { posts } from "@/components/BlogIndex";

const SITE = "https://piedmontdentalbydesign.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const blogPosts: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.dateISO),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    { url: `${SITE}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/resources`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/faqs`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...blogPosts,
  ];
}
