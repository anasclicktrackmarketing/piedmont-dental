// Service schema for individual procedure detail pages.
//
// References the global Organization (#org) as provider, so AI engines and
// Google can resolve the provider's full profile from a single page.
//
// Usage:
//   <ServiceSchema
//     name="Porcelain Veneers"
//     description="..."
//     url="/procedures/cosmetic-dentistry/porcelain-veneers"
//     category="Cosmetic Dentistry"
//   />

const SITE = "https://piedmontdentalbydesign.com";

type Props = {
  name: string;
  description: string;
  /** Site-root-relative path, e.g. "/procedures/cosmetic-dentistry/porcelain-veneers" */
  url: string;
  /** "Cosmetic Dentistry" | "Restorative Dentistry" | "Periodontal Services" | "Preventive Dentistry" */
  category: string;
  /** Optional — defaults to "Piedmont, CA" */
  areaServed?: string;
};

export default function ServiceSchema({
  name,
  description,
  url,
  category,
  areaServed = "Piedmont, CA",
}: Props) {
  const fullUrl = `${SITE}${url}`;
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${fullUrl}#service`,
    name,
    description,
    category,
    serviceType: name,
    url: fullUrl,
    provider: { "@id": `${SITE}/#org` },
    areaServed,
    audience: { "@type": "PeopleAudience", audienceType: "Patients" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
