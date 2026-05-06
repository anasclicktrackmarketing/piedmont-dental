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
    { url: `${SITE}/about/dr-martenson`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/about/dr-cangini`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/about/dr-ma`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/about/team`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/about/tour`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/procedures`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/procedures/restoration`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/procedures/restoration/dental-implants`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/restoration/composite-fillings`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/restoration/crowns-caps`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/restoration/dentures-partial-dentures`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/restoration/fixed-bridges`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cosmetic-dentistry`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/procedures/cosmetic-dentistry/porcelain-veneers`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cosmetic-dentistry/tooth-whitening`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cosmetic-dentistry/cerec`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cosmetic-dentistry/invisalign`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cosmetic-dentistry/surgery`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/periodontal-services`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/procedures/periodontal-services/what-is-periodontal-gum-disease`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/periodontal-services/treatment`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/periodontal-services/maintenance`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/periodontal-services/gum-grafting`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/periodontal-services/bone-grafting`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/periodontal-services/crown-lengthening`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/periodontal-services/periodontal-scaling-root-planing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/periodontal-services/sinus-augmentation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cleanings-prevention`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/procedures/cleanings-prevention/dental-exams-cleanings`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cleanings-prevention/dental-x-rays`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cleanings-prevention/panoramic-x-rays`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cleanings-prevention/fluoride-treatment`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cleanings-prevention/home-care`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/procedures/cleanings-prevention/how-to-properly-brush-floss`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/resources`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/faqs`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...blogPosts,
  ];
}
