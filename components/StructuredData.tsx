// JSON-LD structured data for the homepage.
// Covers: Organization + LocalBusiness (Dentist subtype), Person (Dr. Martenson + team),
// AggregateRating, OfferCatalog of Services, FAQPage, Speakable, WebSite, WebPage.
//
// Validate with:
//   - Google Rich Results Test:    https://search.google.com/test/rich-results
//   - Schema.org validator:        https://validator.schema.org

const SITE = "https://piedmontdentalbydesign.com";

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

const faqs = [
  {
    q: "What insurance do you accept?",
    a: "Piedmont Dental By Design accepts most insurance plans. The simplest path is to call (510) 350-3937 with your card and our team will verify your specific coverage and walk you through what is included before your visit. Financing is also available for treatments not fully covered.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Bring your insurance card, a photo ID, a list of any medications you take, and any dental records or X-rays from a previous practice if you have them. New patient forms can be completed online or at the office; allow an extra ten minutes if you would rather fill them out in our waiting area.",
  },
  {
    q: "I am anxious about the dentist. How do you handle that?",
    a: "Dental anxiety is common and we take it seriously. Tell us before your appointment and we will plan accordingly with slower pacing, longer breaks, and clear explanations of what comes next. Per a Google review of Dr. Martenson, her gentle touch ensures the experience is as pain free as possible.",
  },
  {
    q: "Where do I park?",
    a: "Street parking is generally available on Grand Avenue near our entrance at 1331 Grand Ave. We are about a five-minute drive from MacArthur BART, and AC Transit serves the area. If accessibility is a concern, mention it when booking and we will guide you to the closest spot.",
  },
  {
    q: "Should I get veneers or Invisalign?",
    a: "It depends on what you want to change. Veneers reshape the front of teeth — color, length, alignment — typically across two to three visits. Invisalign moves teeth into a new position over six to eighteen months without altering tooth structure. We will review options together at your consultation.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer financing for treatments that go beyond insurance coverage, including monthly payment plans through third-party financing partners. Our team will outline the available options at your consultation, with no obligation to commit. Ask in advance by calling (510) 350-3937.",
  },
  {
    q: "Do you see kids?",
    a: "We welcome younger patients for routine care including cleanings, exams, and preventive work. For specialized pediatric procedures, we will refer to a colleague when appropriate. From a recent Google review of a child's first appointment, the team did a great job calming her and making her feel safe.",
  },
  {
    q: "Do you handle dental emergencies?",
    a: "If you are a current patient and have a dental emergency during open hours such as a chipped tooth, lost crown, or severe pain, call (510) 350-3937 and we will do our best to fit you in the same day. For after-hours emergencies, urgent care or your nearest emergency room is the right first call.",
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
    /* WebPage with Speakable */
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: "Piedmont Dental By Design — Cosmetic dentistry in Piedmont, CA",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#org` },
      primaryImageOfPage: `${SITE}/hero-poster.jpg`,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [
          ".visit-card",
          ".g-faq-question",
          ".g-faq-answer",
          ".hero-headline",
          ".hero-sub",
        ],
      },
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
      foundingDate: "2000",
      slogan: "Quietly extraordinary smiles, since 2000.",
      description:
        "Cosmetic and restorative dental practice in Piedmont, California. Personalized care from Dr. Jill Martenson and team. Voted Best Esthetic Dentist 2024 by Best of the East Bay.",
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
      award:
        "Best Esthetic Dentist 2024 — Best of the East Bay readers' choice",
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
        "Best Esthetic Dentist 2024 — Best of the East Bay readers' choice",
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
    /* FAQPage */
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
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
