type FAQ = { q: string; a: string };

/**
 * FAQPage JSON-LD schema. Render alongside a visible FAQ block on the page
 * — Google's guideline is that every Q&A in the schema must also appear
 * visibly in the page HTML. We use a server-rendered <details>/<summary>
 * block so the FAQ content is present in static HTML for AI crawlers
 * (ClaudeBot, GPTBot, PerplexityBot, etc.) and AEO platforms.
 */
export default function FAQPageSchema({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
