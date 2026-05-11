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
    "What Is Periodontal (Gum) Disease? | Warning Signs & Treatment | Piedmont Dental",
  description:
    "Periodontal disease is a 'silent' condition with subtle warning signs. Learn what to watch for and how Piedmont Dental By Design treats gum disease at every stage.",
  alternates: {
    canonical: "/procedures/periodontal-services/what-is-periodontal-gum-disease",
  },
  openGraph: {
    title: "Periodontal (Gum) Disease — Piedmont Dental By Design",
    description:
      "Warning signs of gum disease and how we treat it — non-surgical and surgical care.",
    url: "https://piedmontdentalbydesign.com/procedures/periodontal-services/what-is-periodontal-gum-disease",
    type: "article",
  },
};

const category = getCategory("periodontal-services");

export default function WhatIsPeriodontalDiseasePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="what-is-periodontal-gum-disease"
          title="What Is Periodontal (Gum) Disease?"
          tagline="A 'silent' disease — warning signs are subtle, but the consequences aren't."
          featuredImage="/img/lIVE Piedmont website images/gum disease.png"
          intro={[
            "Periodontists are dentists with three additional years of specialized training in the prevention, diagnosis, and treatment of gum disease. Our practice works closely with a board-certified periodontist to provide the full continuum of care.",
            "Gum disease is often described as a 'silent' disease because pain doesn't always accompany the warning signs. Recognizing them early is the most important thing you can do to protect your teeth.",
          ]}
          stats={[
            { value: "Silent", label: "Often progresses without pain" },
            { value: "Reversible", label: "When caught early (gingivitis)" },
            { value: "#1", label: "Cause of tooth loss in adults" },
            { value: "Treatable", label: "At every stage" },
          ]}
          sections={[
            {
              title: "Changes to your teeth, bite, or dental work",
              bullets: [
                "Loose or separating teeth.",
                "Changes in bite alignment.",
                "Bridges or partial dentures that no longer fit properly.",
                "Defective fillings.",
              ],
            },
            {
              title: "Changes to your gums",
              bullets: [
                "Recurring redness, puffiness, tenderness, or swelling.",
                "Bleeding while brushing, flossing, or eating hard foods.",
                "Gums pulling away (receding) from teeth.",
              ],
            },
            {
              title: "Bad breath, taste, or sores",
              bullets: [
                "Persistent bad breath.",
                "Persistent metallic taste.",
                "Pus between gums and teeth.",
                "Sores or irritations not improving within two weeks.",
              ],
            },
            {
              title: "How we treat gum disease",
              body: [
                "Treatment depends on the stage of infection and the extent of deterioration. After reviewing digital X-rays and performing a thorough exam, the periodontist discusses options — including procedure details, office visits required, post-treatment healing care, and long-term disease management.",
                "Non-surgical treatment is most often scaling and root planing — an under-the-gum procedure that removes plaque and tartar from tooth roots, eliminating harmful bacteria and irritants.",
                "Surgical treatments include pocket reduction (folding gum tissue back to smooth damaged bone and remove bacteria) and bone regeneration (using membranes, bone grafts, or tissue-stimulating proteins to encourage natural regeneration and reverse damage).",
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
