import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import FAQsHero from "@/components/FAQsHero";
import FAQsList, { faqs } from "@/components/FAQsList";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "FAQs — Dental Health Questions Answered",
  description:
    "Common dental questions answered: bad breath, brushing, flossing, gum disease, fillings, cosmetic dentistry, veneers, and whitening — by Dr. Martenson and Dr. Ma.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "Dental Health FAQs — Piedmont Dental By Design",
    description:
      "Answers to the most common dental health questions, from daily care to cosmetic treatments.",
    url: "https://piedmontdentalbydesign.com/faqs",
    type: "website",
  },
};

function FAQStructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://piedmontdentalbydesign.com/faqs#faqpage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.schemaText,
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

export default function FAQsPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <FAQsHero />
        <FAQsList />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
      <FAQStructuredData />
    </>
  );
}
