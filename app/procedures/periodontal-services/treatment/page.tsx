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
    "Periodontal Treatment in Piedmont, CA | Scaling, Root Planing, Surgery | Piedmont Dental",
  description:
    "Periodontal treatment matched to your stage — from regular cleanings for gingivitis to scaling, root planing, and surgical care for advanced gum disease. Piedmont Dental By Design.",
  alternates: { canonical: "/procedures/periodontal-services/treatment" },
  openGraph: {
    title: "Periodontal Treatment — Piedmont Dental By Design",
    description:
      "Stage-appropriate care for gum disease — cleanings, scaling and root planing, or surgery.",
    url: "https://piedmontdentalbydesign.com/procedures/periodontal-services/treatment",
    type: "article",
  },
};

const category = getCategory("periodontal-services");

export default function TreatmentPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="treatment"
          title="Periodontal Treatment"
          tagline="Stage-appropriate care — from cleanings to deep cleanings to surgery."
          featuredImage="/img/lIVE Piedmont website images/periodental treatment .png"
          intro={[
            "Periodontal treatment methods depend upon the type and severity of the disease. Your dentist and dental hygienist will evaluate for periodontal disease and recommend the appropriate treatment.",
            "Periodontal disease progresses as the sulcus (pocket) between the tooth and gums fills with bacteria, plaque, and tartar — irritating surrounding tissue. Left unchecked, these irritants can damage gums and the bone that supports your teeth.",
          ]}
          stats={[
            { value: "1–2", label: "Cleanings if caught early" },
            { value: "Quadrant", label: "Scaling done one at a time" },
            { value: "Numbed", label: "Comfort during deep cleaning" },
            { value: "Custom", label: "Plan matched to your stage" },
          ]}
          sections={[
            {
              title: "Early-stage gingivitis",
              body: [
                "If the disease is caught in the early stages of gingivitis and no permanent damage has been done, one to two regular cleanings will be recommended. We'll also give you instructions on improving daily oral hygiene habits and the cadence of your regular cleanings.",
              ],
            },
            {
              title: "Scaling and root planing (deep cleaning)",
              body: [
                "If the disease has progressed to more advanced stages, a special periodontal cleaning called scaling and root planing — a deep cleaning — will be recommended. It is usually done one quadrant of the mouth at a time while the area is numb.",
                "In this procedure, tartar, plaque, and toxins are removed from above and below the gum line (scaling), and rough spots on root surfaces are made smooth (planing). This helps gum tissue heal and pockets shrink. Medications, special medicated mouth rinses, and an electric toothbrush may be recommended to help control infection and support healing.",
              ],
            },
            {
              title: "When pockets don't heal",
              body: [
                "If the pockets do not heal after scaling and root planing, periodontal surgery may be needed to reduce pocket depths — making teeth easier to clean and slowing further disease. We may also refer you to a periodontist (a specialist of the gums and supporting bone) for advanced surgical care.",
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
