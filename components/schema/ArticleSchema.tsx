// Article schema for blog posts.
//
// References the existing global Organization (#org) as publisher and Person
// (#dr-martenson) as author. Inherits author credentials, awards, etc. from the
// already-defined Person entity in StructuredData.tsx — no need to repeat them
// here.

import type { Post } from "@/components/BlogIndex";

const SITE = "https://piedmontdentalbydesign.com";

export default function ArticleSchema({ post }: { post: Post }) {
  const url = `${SITE}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${SITE}${post.image}`;

  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: { "@id": `${SITE}/#website` },
    articleSection: post.category,
    author: {
      "@id": `${SITE}/#dr-martenson`,
    },
    publisher: {
      "@id": `${SITE}/#org`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
