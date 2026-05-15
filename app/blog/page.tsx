import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import BlogHero from "@/components/BlogHero";
import BlogIndex, { posts } from "@/components/BlogIndex";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Blog — Dental Notes & Local Insights",
  description:
    "Posts on cosmetic dentistry, dental implants, family care, and daily oral health from Dr. Jill Martenson and the Piedmont Dental By Design team in Piedmont, CA.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Piedmont Dental By Design",
    description:
      "Cosmetic dentistry, dental implants, family care, and daily oral health insights from a Best of the East Bay practice.",
    url: "https://piedmontdentalbydesign.com/blog",
    type: "website",
  },
};

function BlogStructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://piedmontdentalbydesign.com/blog#blog",
    name: "Piedmont Dental By Design — Blog",
    url: "https://piedmontdentalbydesign.com/blog",
    publisher: { "@id": "https://piedmontdentalbydesign.com/#org" },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://piedmontdentalbydesign.com/blog/${p.slug}`,
      datePublished: p.dateISO,
      image: `https://piedmontdentalbydesign.com${p.image}`,
      author: { "@id": "https://piedmontdentalbydesign.com/#dr-martenson" },
      publisher: { "@id": "https://piedmontdentalbydesign.com/#org" },
      articleSection: p.category,
      description: p.excerpt,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function BlogPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <BlogHero />
        <BlogIndex />
        <AboutCTA />
      </main>
      <SiteFooter />
      <BlogStructuredData />
    </>
  );
}
