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
    "Fixed Bridges in Piedmont, CA | Permanent Tooth Replacement | Piedmont Dental",
  description:
    "Fixed (non-removable) dental bridges fill the gap left by one or more missing teeth — permanent porcelain-fused-to-metal restorations. Piedmont Dental By Design in Piedmont, CA.",
  alternates: { canonical: "/procedures/restoration/fixed-bridges" },
  openGraph: {
    title: "Fixed Bridges — Piedmont Dental By Design",
    description:
      "Permanent, non-removable bridges to replace missing teeth and restore your bite.",
    url: "https://piedmontdentalbydesign.com/procedures/restoration/fixed-bridges",
    type: "article",
  },
};

const category = getCategory("restoration");

export default function FixedBridgesPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="fixed-bridges"
          title="Fixed Bridges"
          tagline="Permanent, non-removable replacement for missing teeth."
          intro={[
            "A dental bridge is a fixed (non-removable) appliance and is an excellent way to replace missing teeth.",
            "There are several types of bridges. You and your dentist will discuss the best options for your particular case. The \"traditional bridge\" is the most popular type and is usually made of porcelain fused to metal. This type of bridge consists of two crowns that go over two anchoring teeth (abutment teeth) and are attached to pontics (artificial teeth), filling the gap created by one or more missing teeth.",
            "Dental bridges are highly durable and will last many years, however they may need replacement or need to be re-cemented due to normal wear.",
          ]}
          stats={[
            { value: "2+ visits", label: "Typical timeline" },
            { value: "Porcelain", label: "Fused to metal" },
            { value: "Fixed", label: "Non-removable" },
            { value: "Many years", label: "Durable lifespan" },
          ]}
          sections={[
            {
              title: "Reasons for a fixed bridge",
              bullets: [
                "Fill space of missing teeth.",
                "Maintain facial shape.",
                "Prevent remaining teeth from drifting out of position.",
                "Restore chewing and speaking ability.",
                "Restore your smile.",
                "Upgrade from a removable partial denture to a permanent dental appliance.",
              ],
            },
            {
              title: "What does getting a fixed bridge involve?",
              body: [
                "Getting a bridge usually requires two or more visits. While the teeth are numb, the two anchoring teeth are prepared by removing a portion of enamel to allow for a crown. Next, a highly accurate impression (mold) is made which will be sent to a dental laboratory where the bridge will be fabricated. In addition, a temporary bridge will be made and worn for several weeks until your next appointment.",
                "At the second visit, your permanent bridge will be carefully checked, adjusted, and cemented to achieve a proper fit. Occasionally your dentist may only temporarily cement the bridge, allowing your teeth and tissue time to get used to the new bridge. The new bridge will be permanently cemented at a later time.",
                "You will receive care instructions at the conclusion of the procedure. Proper brushing, flossing, and regular dental visits will aid in the life of your new permanent bridge.",
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
