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
    "Porcelain Crowns (Caps) in Piedmont, CA | Restore Damaged Teeth | Piedmont Dental",
  description:
    "Custom porcelain crowns restore broken, fractured, or heavily decayed teeth — color-matched to your natural smile. Piedmont Dental By Design serves Piedmont, Oakland, and the East Bay.",
  alternates: { canonical: "/procedures/restoration/crowns-caps" },
  openGraph: {
    title: "Crowns (Caps) — Piedmont Dental By Design",
    description:
      "Custom porcelain crowns to restore the shape, size, and strength of damaged teeth.",
    url: "https://piedmontdentalbydesign.com/procedures/restoration/crowns-caps",
    type: "article",
  },
};

const category = getCategory("restoration");

export default function CrownsCapsPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="crowns-caps"
          title="Crowns (Caps)"
          tagline="Custom porcelain coverings that restore tooth shape, size, and strength."
          featuredImage="/img/lIVE Piedmont website images/63e2da680b885fcdefe302c1_Crown-Lengthening2-scaled.jpg"
          intro={[
            "A crown (or cap) is a covering that encases the entire tooth surface, restoring it to its original shape and size. A crown protects and strengthens tooth structure that cannot be restored with fillings or other types of restorations.",
            "Although there are several types of crowns, porcelain (tooth-colored) crowns are the most popular. They are highly durable and will last many years, but like most dental restorations, they may eventually need to be replaced. Porcelain crowns are made to match the shape, size, and color of your teeth, giving you a natural, long-lasting beautiful smile.",
          ]}
          stats={[
            { value: "2 visits", label: "Typical timeline" },
            { value: "~2 wks", label: "Lab fabrication" },
            { value: "Porcelain", label: "Tooth-color match" },
            { value: "Many years", label: "Durable lifespan" },
          ]}
          sections={[
            {
              title: "Reasons for crowns",
              bullets: [
                "Broken or fractured teeth.",
                "Cosmetic enhancement.",
                "Decayed teeth.",
                "Fractured fillings.",
                "Large fillings.",
                "Tooth has had a root canal.",
              ],
            },
            {
              title: "What does getting a crown involve?",
              body: [
                "A crown procedure usually requires two appointments. Your first appointment will include taking several highly accurate molds (or impressions) that will be used to create your custom crown. A mold will also be used to create a temporary crown, which will stay on your tooth for approximately two weeks until your new crown is fabricated by a dental laboratory.",
                "While the tooth is numb, the dentist will prepare the tooth by removing any decay and shaping the surface to properly fit the crown. Once these details are accomplished, your temporary crown will be placed with temporary cement and your bite will be checked to ensure you are biting properly.",
                "At your second appointment, your temporary crown will be removed, the tooth will be cleaned, and your new crown will be carefully placed to ensure the spacing and bite are accurate.",
                "You will be given care instructions and encouraged to have regular dental visits to check your new crown.",
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
