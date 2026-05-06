import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import CategoryIndex from "@/components/CategoryIndex";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import { getCategory } from "@/lib/procedure-categories";

export const metadata: Metadata = {
  title:
    "Cleanings & Prevention in Piedmont, CA | Exams, X-Rays, Fluoride | Piedmont Dental",
  description:
    "Preventive dentistry at Piedmont Dental By Design — comprehensive exams, professional cleanings, dental and panoramic X-rays, fluoride treatment, and personalized home-care guidance.",
  alternates: { canonical: "/procedures/cleanings-prevention" },
  openGraph: {
    title: "Cleanings & Prevention — Piedmont Dental By Design",
    description:
      "Exams, cleanings, X-rays, fluoride, and home-care coaching — keeping problems small.",
    url: "https://piedmontdentalbydesign.com/procedures/cleanings-prevention",
    type: "website",
    images: ["/img/procedures/cleanings-prevention/_index/hero.jpg"],
  },
};

const category = getCategory("cleanings-prevention");

const CARDS = [
  {
    slug: "dental-exams-cleanings",
    title: "Dental Exams & Cleanings",
    description:
      "Comprehensive exam, oral cancer screening, gum disease check, and professional cleaning by a registered hygienist — the foundation of preventive care.",
    meta: "Every 6 months",
  },
  {
    slug: "dental-x-rays",
    title: "Dental X-Rays",
    description:
      "Diagnostic radiographs that reveal hidden decay, abscesses, bone loss, and developmental issues invisible during a regular exam — safe and low radiation.",
    meta: "Annually · Bite-wing series",
  },
  {
    slug: "panoramic-x-rays",
    title: "Panoramic X-Rays",
    description:
      "Wraparound photograph of the face and teeth — extraoral, simple to perform, and ideal for evaluating wisdom teeth, TMJ, jawbone fractures, and implant planning.",
    meta: "As-needed · Treatment planning",
  },
  {
    slug: "fluoride-treatment",
    title: "Fluoride Treatment",
    description:
      "The most effective agent for preventing tooth decay — strengthens enamel and protects against cavities. Topical and systemic options for adults and children.",
    meta: "Twice yearly for kids",
  },
  {
    slug: "home-care",
    title: "Home Care",
    description:
      "Daily routine that protects your investment in dental health — proper brushing technique, flossing, rinsing, and the right tools for your needs.",
    meta: "Daily · Lifelong",
  },
  {
    slug: "how-to-properly-brush-floss",
    title: "How to Brush & Floss",
    description:
      "Detailed technique for the two most important habits in oral health — preventing decay, gum disease, halitosis, and staining when done correctly.",
    meta: "Step-by-step guidance",
  },
];

export default function CleaningsPreventionCategoryPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <CategoryIndex
          slug={category.slug}
          label={category.label}
          eyebrow="Procedures · Cleanings & Prevention"
          title="Cleanings & Prevention"
          intro={[
            "Preventing dental disease starts at home with good oral hygiene and a balanced diet, and is continued in the office through the work of your dentist and hygienist to promote, restore, and maintain your oral health.",
            "Prevention also means regular exams, cleanings, and X-rays — alongside fluoride and sealants where helpful. Done well, prevention helps you avoid serious and costly dental problems and is the surest path to a healthy, confident, beautiful smile.",
          ]}
          image="/img/procedures/cleanings-prevention/_index/hero.jpg"
          imageAlt="Hygiene appointment at Piedmont Dental By Design"
          cards={CARDS}
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
