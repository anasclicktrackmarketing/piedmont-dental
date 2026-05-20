// Global structured data — mounted in app/layout.tsx so it renders on every page.
//
// Covers ONLY entity-level information that's stable across the whole site:
//   - WebSite
//   - Organization / LocalBusiness / Dentist (the practice itself)
//   - Person entities for each doctor (so they can be referenced by @id from any page)
//
// Page-specific schema (FAQPage, Article, Service, BreadcrumbList, Speakable WebPage)
// lives in per-page components under components/schema/*.tsx so we never ship a
// FAQPage block on a page that doesn't actually display the FAQs — which is a
// known Google manual-action risk.
//
// Validate with:
//   - Google Rich Results Test:    https://search.google.com/test/rich-results
//   - Schema.org validator:        https://validator.schema.org

export const SITE = "https://piedmontdentalbydesign.com";

const services = [
  {
    name: "Porcelain Veneers",
    description:
      "Hand-shaped porcelain veneers, color-matched in person. Custom porcelain across 2–3 visits.",
    category: "Cosmetic Dentistry",
  },
  {
    name: "Tooth Whitening",
    description:
      "In-office and take-home whitening programs supervised by Dr. Martenson.",
    category: "Cosmetic Dentistry",
  },
  {
    name: "Invisalign",
    description:
      "Clear aligners planned in 3D with checkpoint visits. Most cases between 6 and 18 months.",
    category: "Cosmetic Dentistry",
  },
  {
    name: "Dental Implants",
    description:
      "Permanent replacement for missing teeth using surgical-grade implants.",
    category: "Restorative Dentistry",
  },
  {
    name: "CEREC Crowns",
    description:
      "Same-day digital crowns designed and milled in a single visit.",
    category: "Restorative Dentistry",
  },
  {
    name: "Full Mouth Restoration",
    description:
      "Comprehensive rebuild of bite and esthetics planned together with the patient.",
    category: "Restorative Dentistry",
  },
  {
    name: "Periodontal Care",
    description:
      "Gum disease treatment, grafting, scaling and root planing under Dr. Cangini.",
    category: "Periodontal Services",
  },
  {
    name: "Cleanings and Exams",
    description:
      "Routine cleanings, comprehensive exams, digital and panoramic X-rays for the whole family.",
    category: "Preventive Dentistry",
  },
];

export default function StructuredData() {
  const graph = [
    /* WebSite */
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "Piedmont Dental By Design",
      publisher: { "@id": `${SITE}/#org` },
      inLanguage: "en-US",
    },
    /* LocalBusiness + Dentist */
    {
      "@type": ["LocalBusiness", "Dentist", "MedicalBusiness"],
      "@id": `${SITE}/#org`,
      name: "Piedmont Dental By Design",
      alternateName: ["PDxD", "Piedmont Dental"],
      url: `${SITE}/`,
      logo: `${SITE}/icon-512.png`,
      image: `${SITE}/hero-poster.jpg`,
      telephone: "+1-510-350-3937",
      priceRange: "$$",
      foundingDate: "1996",
      slogan: "Cosmetic Dentistry in Piedmont Since 1996.",
      description:
        "Cosmetic and restorative dental practice in Piedmont, California — celebrating 30 years of personalized care from Dr. Jill Martenson and team. Voted Best of the East Bay: Best Dental Practice 2025 and Best Esthetic Dentist 2024 & 2025.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1331 Grand Ave",
        addressLocality: "Piedmont",
        addressRegion: "CA",
        postalCode: "94610",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.8205693,
        longitude: -122.2445268,
      },
      hasMap:
        "https://www.google.com/maps/place/Piedmont+Dental+By+Design/@37.8205693,-122.2445268,17z/data=!3m1!4b1!4m6!3m5!1s0x808f875ddc627445:0x728b6ab91f29e59d!8m2!3d37.8205693!4d-122.2445268",
      areaServed: [
        { "@type": "City", name: "Piedmont", "@id": "https://en.wikipedia.org/wiki/Piedmont,_California" },
        { "@type": "City", name: "Oakland", "@id": "https://en.wikipedia.org/wiki/Oakland,_California" },
        { "@type": "Place", name: "Lake Merritt" },
        { "@type": "Place", name: "Montclair" },
        { "@type": "Place", name: "Rockridge" },
        { "@type": "City", name: "Berkeley", "@id": "https://en.wikipedia.org/wiki/Berkeley,_California" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Wednesday"],
          opens: "07:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Thursday"],
          opens: "07:00",
          closes: "15:00",
        },
      ],
      memberOf: [
        {
          "@type": "Organization",
          name: "American Academy of Cosmetic Dentistry",
          url: "https://aacd.com",
        },
        {
          "@type": "Organization",
          name: "American Dental Association",
          url: "https://www.ada.org",
        },
        {
          "@type": "Organization",
          name: "California Dental Association",
          url: "https://www.cda.org",
        },
      ],
      award: [
        "Best Dental Practice 2025 — Best of the East Bay readers' choice",
        "Best Esthetic Dentist 2024 & 2025 — Best of the East Bay readers' choice",
      ],
      knowsAbout: [
        "Cosmetic Dentistry",
        "Porcelain Veneers",
        "Smile Design",
        "Tooth Whitening",
        "Invisalign",
        "Dental Implants",
        "CEREC Crowns",
        "Periodontal Treatment",
        "Restorative Dentistry",
        "Preventive Dental Care",
      ],
      employee: [
        { "@id": `${SITE}/#dr-martenson` },
        { "@id": `${SITE}/#dr-cangini` },
        { "@id": `${SITE}/#dr-ma` },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "344",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dental services at Piedmont Dental By Design",
        itemListElement: services.map((s, i) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
            category: s.category,
            provider: { "@id": `${SITE}/#org` },
            areaServed: "Piedmont, CA",
          },
          position: i + 1,
        })),
      },
      sameAs: [
        "https://www.facebook.com/piedmontdentalbydesign/",
        "https://www.instagram.com/piedmontdentalbydesign/",
        "https://www.youtube.com/@piedmontdentalbydesign",
        "https://www.yelp.com/biz/piedmont-dental-by-design-piedmont-6",
        "https://www.google.com/maps/place/Piedmont+Dental+By+Design",
      ],
    },
    /* Persons */
    {
      "@type": "Person",
      "@id": `${SITE}/#dr-martenson`,
      name: "Jill A. Martenson",
      givenName: "Jill",
      familyName: "Martenson",
      honorificSuffix: "DDS",
      jobTitle: "Lead Dentist · Cosmetic Dentistry",
      worksFor: { "@id": `${SITE}/#org` },
      knowsAbout: [
        "Cosmetic Dentistry",
        "Porcelain Veneers",
        "Smile Design",
        "Invisalign",
        "Tooth Whitening",
      ],
      award:
        "Best Esthetic Dentist 2024 & 2025 — Best of the East Bay readers' choice",
      memberOf: [
        { "@type": "Organization", name: "American Academy of Cosmetic Dentistry" },
        { "@type": "Organization", name: "American Dental Association" },
        { "@type": "Organization", name: "California Dental Association" },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#dr-cangini`,
      name: "Filippo Cangini",
      jobTitle: "Periodontist",
      worksFor: { "@id": `${SITE}/#org` },
      knowsAbout: ["Periodontics", "Gum Grafting", "Bone Grafting"],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#dr-ma`,
      name: "David Ma",
      jobTitle: "Restorative Dentist",
      worksFor: { "@id": `${SITE}/#org` },
      knowsAbout: ["Restorative Dentistry", "Dental Implants", "Crowns"],
    },
  ];

  const json = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
