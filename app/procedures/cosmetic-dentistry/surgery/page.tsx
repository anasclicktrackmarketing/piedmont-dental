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
    "Surgical Crown Lengthening in Piedmont, CA | Cosmetic Gum Surgery | Piedmont Dental",
  description:
    "Surgical crown lengthening reshapes the gumline to expose more tooth — ideal for short teeth or 'gummy' smiles. Often paired with porcelain veneers for proportion. Piedmont Dental By Design.",
  alternates: { canonical: "/procedures/cosmetic-dentistry/surgery" },
  openGraph: {
    title: "Cosmetic Surgery — Piedmont Dental By Design",
    description:
      "Surgical crown lengthening to reshape the gumline. Local anesthetic, optional nitrous, often paired with veneers.",
    url: "https://piedmontdentalbydesign.com/procedures/cosmetic-dentistry/surgery",
    type: "article",
  },
};

const category = getCategory("cosmetic-dentistry");

export default function SurgeryPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="surgery"
          title="Surgical Crown Lengthening"
          tagline="Reshape the gumline to expose more tooth — often paired with veneers."
          intro={[
            "Surgical crown lengthening is a surgical technique that raises the gums, exposing more of the teeth. It is most commonly used cosmetically when teeth appear short or when the gum line shows too much during smiling — sometimes called a 'gummy smile.'",
            "The procedure is performed in our office with local numbing of the area. Nitrous oxide is often used for added comfort. Surgical crown lengthening is frequently combined with porcelain veneers to create the most pleasing final tooth shape and proportion.",
          ]}
          stats={[
            { value: "In-office", label: "Performed at the practice" },
            { value: "Local", label: "Numbing + optional nitrous" },
            { value: "Combined", label: "Often paired with veneers" },
            { value: "Cosmetic", label: "Reshape gum proportion" },
          ]}
          sections={[
            {
              title: "Reasons for surgical crown lengthening",
              bullets: [
                "Cosmetically, to create a pleasing smile where the teeth and gum display are in better proportions.",
                "Short teeth.",
                "\"Gummy\" smiles where excess gum tissue makes teeth appear smaller.",
              ],
            },
            {
              title: "What does surgical crown lengthening involve?",
              body: [
                "The surgery is done in our office with local numbing of the area. Nitrous oxide is often used for additional patient comfort.",
                "Surgical crown lengthening involves making a small incision along the gumline, gently reflecting the gums, and suturing them farther away from the incisal edges of the teeth. The result is more tooth surface visible when you smile.",
                "Often, porcelain veneers are made afterwards to create a pleasing final shape and proportion of the teeth — the two procedures together produce a balanced result that neither could achieve alone.",
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
