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
    "Bone Grafting in Piedmont, CA | Restore Jawbone for Implants | Piedmont Dental",
  description:
    "Dental bone grafting at Piedmont Dental By Design — replace lost bone tissue, prepare the jaw for implants, and halt the progression of gum disease. Autogenous, allograft, and xenograft options.",
  alternates: { canonical: "/procedures/periodontal-services/bone-grafting" },
  openGraph: {
    title: "Bone Grafting — Piedmont Dental By Design",
    description:
      "Replace lost bone tissue and create a stable foundation for dental implants.",
    url: "https://piedmontdentalbydesign.com/procedures/periodontal-services/bone-grafting",
    type: "article",
  },
};

const category = getCategory("periodontal-services");

export default function BoneGraftingPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="bone-grafting"
          title="Bone Grafting"
          tagline="Rebuild lost jawbone — for implants, gum disease control, and aesthetics."
          intro={[
            "Periodontal disease is the leading cause of bone loss in the oral cavity, though there are others — ill-fitting dentures and facial trauma among them. Bone grafting is an excellent way to replace lost bone tissue and encourage natural bone growth, fulfilling a wide variety of functions.",
            "A bone graft may be required to create a stable base for dental implant placement, to halt the progression of gum disease, or to make a smile appear more aesthetically pleasing.",
          ]}
          stats={[
            { value: "Local", label: "Anesthetic for most cases" },
            { value: "3 sources", label: "Autogenous, allograft, xenograft" },
            { value: "10 days", label: "First follow-up" },
            { value: "Predictable", label: "Highly successful procedure" },
          ]}
          sections={[
            {
              title: "Types of dental bone grafts",
              body: [
                "Autogenous bone graft — bone is removed from elsewhere in the body and implanted in the mouth. Common donor sites include the iliac section of the pelvis, the chin, and the posterior molar areas of the jaw. For larger amounts, the hip or shin bone may be used.",
                "Allograft — synthetic bone (man-made) created in the laboratory. Bone can also be obtained from a tissue bank.",
                "Xenograft — implantation of bovine (cow) bone. A xenograft is perfectly safe, has been used successfully for many years, and avoids the need for a secondary donor site.",
              ],
            },
            {
              title: "Reasons for bone grafting",
              bullets: [
                "Dental implants — implants need to be firmly anchored to the jawbone. If quality or quantity of bone is insufficient, grafting strengthens and thickens the implant site.",
                "Sinus lift — elevating the sinus membrane and grafting bone onto the sinus floor so implants can be securely placed.",
                "Ridge augmentation — bone ridges from trauma, injury, birth defects, or severe disease are filled in to create a uniform jawbone shape.",
                "Nerve repositioning — when the inferior alveolar nerve must be moved to allow implant placement, a bone graft may be required.",
              ],
            },
            {
              title: "What bone grafting involves",
              body: [
                "Bone grafting is a fairly simple procedure that can usually be performed under local anesthetic; if large amounts of bone need to be grafted, general anesthesia may be required.",
                "The grafting material is harvested or prepared, a small incision is made in the gum tissue, and the bone graft is gently placed at the affected site. Bone regeneration may be aided by membrane barriers (separating slower-growing bone from faster-growing gum tissue), tissue-stimulating proteins like Emdogain, or platelet-rich growth factors that stimulate denser bone in shorter time.",
                "The gum is sutured in place and a follow-up appointment is scheduled within 10 days to assess progress. Bone grafting is highly successful and creates an excellent foundation for further periodontal restoration.",
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
