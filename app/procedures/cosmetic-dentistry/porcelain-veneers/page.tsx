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
    "Porcelain Veneers in Piedmont, CA | Custom Smile Design | Piedmont Dental",
  description:
    "Hand-shaped porcelain veneers — thin, custom, color-matched shells bonded to the front of teeth. Address chips, gaps, discoloration, or misshapen teeth. Piedmont Dental By Design serves Piedmont, Oakland, and the East Bay.",
  alternates: {
    canonical: "/procedures/cosmetic-dentistry/porcelain-veneers",
  },
  openGraph: {
    title: "Porcelain Veneers — Piedmont Dental By Design",
    description:
      "Custom porcelain shells bonded to the fronts of teeth — color-matched in person, durable, beautiful.",
    url: "https://piedmontdentalbydesign.com/procedures/cosmetic-dentistry/porcelain-veneers",
    type: "article",
    images: ["/img/procedures/cosmetic-dentistry/_index/figure-1.jpg"],
  },
};

const category = getCategory("cosmetic-dentistry");

export default function PorcelainVeneersPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="porcelain-veneers"
          title="Porcelain Veneers"
          tagline="Custom porcelain shells, hand-shaped and color-matched in person."
          intro={[
            "Veneers are very thin pieces of durable, tooth-shaped porcelain that are custom-made (for shape and color) by a professional dental laboratory. They are bonded onto the front of teeth to create a beautiful and attractive smile.",
            "Veneers can completely reshape your teeth and smile. They can often be alternatives to crowns and the ideal solution in treating many dental conditions.",
            "As with most dental restorations, veneers are not permanent and may someday need replacement. They are very durable and will last many years, giving you a beautiful long-lasting smile.",
          ]}
          stats={[
            { value: "2 visits", label: "Typical timeline" },
            { value: "Porcelain", label: "Custom-made shells" },
            { value: "Many years", label: "Durable lifespan" },
            { value: "Minimal", label: "Anesthesia required" },
          ]}
          sections={[
            {
              title: "Reasons for porcelain veneers",
              bullets: [
                "Cosmetically, to create a uniform, white, beautiful smile.",
                "Crooked teeth.",
                "Misshapen teeth.",
                "Severely discolored or stained teeth.",
                "Teeth that are too small or large.",
                "Unwanted or uneven spaces.",
                "Worn or chipped teeth.",
              ],
            },
            {
              title: "What does getting porcelain veneers involve?",
              body: [
                "Getting veneers usually requires two visits to complete the process, with little or no anesthesia required during the procedure. The teeth are prepared by lightly buffing and shaping the surface to allow for the thickness of the veneer. A mold or impression of the teeth is taken and a shade (color) will then be chosen by you and the dentist.",
                "On the second visit the teeth will be cleansed with special liquids to achieve a durable bond. Bonding cement is then placed between the tooth and veneer and a special light beam is used to harden and set the bond.",
                "You will receive care instructions for veneers. Proper brushing, flossing, and regular dental visits will aid in the life of your new veneers.",
              ],
            },
          ]}
          related={category.items}
          featuredImage="/img/procedures/cosmetic-dentistry/_index/figure-1.jpg"
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
