// BreadcrumbList JSON-LD — drop into any nested page (skip the homepage).
//
// Usage:
//   <BreadcrumbSchema crumbs={[
//     { name: "Procedures", url: "/procedures" },
//     { name: "Cosmetic Dentistry", url: "/procedures/cosmetic-dentistry" },
//     { name: "Porcelain Veneers", url: "/procedures/cosmetic-dentistry/porcelain-veneers" },
//   ]} />
//
// The component prepends "Home → /" automatically. Each crumb's `url` should be
// a site-root-relative path; we expand to the full canonical URL.

const SITE = "https://piedmontdentalbydesign.com";

export type Crumb = {
  name: string;
  url: string;
};

export default function BreadcrumbSchema({ crumbs }: { crumbs: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", url: "/" }, ...crumbs];

  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${SITE}${c.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
