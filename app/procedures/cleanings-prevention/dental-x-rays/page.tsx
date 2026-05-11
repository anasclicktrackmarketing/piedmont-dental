import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import ProcedureDetail from "@/components/ProcedureDetail";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import { getCategory } from "@/lib/procedure-categories";

export const metadata: Metadata = {
  title:
    "Dental X-Rays in Piedmont, CA | Safe Diagnostic Imaging | Piedmont Dental",
  description:
    "Dental X-rays at Piedmont Dental By Design — safe, low-radiation diagnostic imaging that reveals decay, abscesses, bone loss, and developmental issues invisible during a regular exam.",
  alternates: { canonical: "/procedures/cleanings-prevention/dental-x-rays" },
  openGraph: {
    title: "Dental X-Rays — Piedmont Dental By Design",
    description:
      "Diagnostic radiographs that reveal what an exam can't — safe and low radiation.",
    url: "https://piedmontdentalbydesign.com/procedures/cleanings-prevention/dental-x-rays",
    type: "article",
  },
};

const category = getCategory("cleanings-prevention");

export default function DentalXRaysPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="dental-x-rays"
          title="Dental X-Rays"
          tagline="Diagnostic imaging that reveals what an exam alone can't."
          featuredImage="/img/lIVE Piedmont website images/dental-xray.jpg"
          intro={[
            "Dental radiographs (X-rays) are essential preventive and diagnostic tools that provide valuable information not visible during a regular dental exam. Dentists and hygienists use this information to safely and accurately detect hidden dental abnormalities and complete an accurate treatment plan.",
            "Without X-rays, problem areas may go undetected. Catching dental problems early can save you time, money, unnecessary discomfort — and your teeth.",
          ]}
          stats={[
            { value: "1 day", label: "Equivalent natural radiation" },
            { value: "Lead apron", label: "Standard protection" },
            { value: "3–5 yrs", label: "Full series validity" },
            { value: "1–2×/yr", label: "Bite-wing X-rays at recall" },
          ]}
          sections={[
            {
              title: "What dental X-rays may reveal",
              bullets: [
                "Abscesses or cysts.",
                "Bone loss.",
                "Cancerous and non-cancerous tumors.",
                "Decay between the teeth.",
                "Developmental abnormalities.",
                "Poor tooth and root positions.",
                "Problems inside a tooth or below the gum line.",
              ],
            },
            {
              title: "Are dental X-rays safe?",
              body: [
                "We are all exposed to natural radiation in our environment. The amount of radiation exposure from a full-mouth series of X-rays is equal to the amount a person receives in a single day from natural sources.",
                "Dental X-rays produce a low level of radiation and are considered safe. We take necessary precautions to limit your exposure — including lead apron shields to protect the body and modern, fast film that cuts down the exposure time of each X-ray.",
              ],
            },
            {
              title: "How often should X-rays be taken?",
              body: [
                "The need for dental X-rays depends on each patient's individual dental health needs. Your dentist and hygienist will recommend necessary X-rays based on a review of your medical and dental history, the dental exam, signs and symptoms, age considerations, and risk for disease.",
                "A full-mouth series of dental X-rays is recommended for new patients and is usually good for three to five years. Bite-wing X-rays — top and bottom teeth biting together — are taken at recall (check-up) visits and are recommended once or twice a year to detect new dental problems.",
              ],
            },
          ]}
          related={category.items}
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
