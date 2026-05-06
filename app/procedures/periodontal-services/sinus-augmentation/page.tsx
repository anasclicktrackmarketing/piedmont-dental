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
    "Sinus Augmentation in Piedmont, CA | Implant Site Preparation | Piedmont Dental",
  description:
    "Sinus augmentation (sinus lift) at Piedmont Dental By Design — raise the sinus floor and add bone graft material to enable secure upper-jaw dental implants.",
  alternates: {
    canonical: "/procedures/periodontal-services/sinus-augmentation",
  },
  openGraph: {
    title: "Sinus Augmentation — Piedmont Dental By Design",
    description:
      "Sinus floor lift with bone graft — preparing the upper jaw for implant placement.",
    url: "https://piedmontdentalbydesign.com/procedures/periodontal-services/sinus-augmentation",
    type: "article",
  },
};

const category = getCategory("periodontal-services");

export default function SinusAugmentationPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="sinus-augmentation"
          title="Sinus Augmentation"
          tagline="Raise the sinus floor to make room for upper-jaw implants."
          intro={[
            "A dental implant serves as an artificial tooth root attached to the jawbone, with a replacement tooth or bridge securely fixed on top to restore complete tooth function. Successful, long-lasting implants depend on adequate jawbone quality and quantity.",
            "When bone has been lost due to injury or periodontal disease, a sinus augmentation can raise the sinus floor to enable new bone formation — making implant placement possible in the upper jaw where it otherwise wouldn't be safe.",
          ]}
          stats={[
            { value: "Upper jaw", label: "Premolar/molar region" },
            { value: "Bone graft", label: "Own, cadaver, or synthetic" },
            { value: "Healing", label: "Required before implants" },
            { value: "Higher", label: "Implant success rate" },
          ]}
          sections={[
            {
              title: "How sinus augmentation works",
              body: [
                "In the most common technique, a tiny incision is made near the upper premolar or molar region to expose the jawbone. A small opening is cut into the bone and the membrane lining the sinus on the other side is gently pushed upward.",
                "The underlying space is then filled with bone graft material and the incision is closed. The bone used may come from your own body, from a cadaver bone bank, or in some cases synthetic materials are used to stimulate bone formation.",
                "Implants are placed after healing has occurred — the timing depends on the individual case. Sinus augmentation has been shown to significantly increase the success rate of dental implant procedures in patients who have lost upper-jaw bone density.",
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
