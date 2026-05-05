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
    "CEREC® Same-Day Crowns in Piedmont, CA | Single-Visit Restorations | Piedmont Dental",
  description:
    "CEREC® brings ceramic restorations — crowns, onlays, inlays, and veneers — into a single-visit process using CAD/CAM digital design and chairside milling. Piedmont, Oakland & East Bay.",
  alternates: { canonical: "/procedures/cosmetic-dentistry/cerec" },
  openGraph: {
    title: "CEREC® — Piedmont Dental By Design",
    description:
      "Chairside ceramic restorations milled in-office in a single visit. CAD/CAM, biocompatible, no temporary crowns.",
    url: "https://piedmontdentalbydesign.com/procedures/cosmetic-dentistry/cerec",
    type: "article",
    images: ["/svc/cerec.jpg"],
  },
};

const category = getCategory("cosmetic-dentistry");

export default function CerecPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="cerec"
          title="CEREC® Same-Day Crowns"
          tagline="Chairside ceramic restorations, designed and milled in a single visit."
          intro={[
            "Chairside Economical Restorations of Esthetic Ceramic (CEREC®) has revolutionized dental procedures. Traditionally, if crowns, onlays, inlays, or dental veneers were required to restore damaged teeth, multiple procedures and a great deal of waiting time in-between would be inevitable. CEREC® creates these ceramic restorations within minutes in the dental office. This means that many treatments can be completed in just a single visit.",
            "CEREC® is comprised of several computer-assisted design (CAD) tools and a milling machine that creates custom ceramic restorative devices. CEREC® can benefit almost anyone needing a ceramic restoration. This is of great benefit to nervous patients, and it can also reduce the cost of treatment.",
          ]}
          stats={[
            { value: "1 visit", label: "Single appointment" },
            { value: "CAD/CAM", label: "Digital design + milling" },
            { value: "10+ yrs", label: "Recent restoration data" },
            { value: "No temps", label: "Skip temporary crowns" },
          ]}
          sections={[
            {
              title: "How can CEREC® benefit me?",
              body: [
                "CEREC® can benefit almost anyone needing a ceramic restoration. Exceptions include patients who have a prior history of breaking ceramic devices and those with a deep bite. CEREC® devices are proven to last for over 5 years, but recent research indicates that most CEREC®-created restorations last for more than 10 years.",
              ],
              bullets: [
                "No temporary restorations.",
                "High-quality ceramic products.",
                "Minimal invasiveness.",
                "Fewer injections and less discomfort.",
                "Fewer dental visits.",
                "Cost effectiveness.",
                "More natural tooth is preserved.",
                "Long-lasting restorations.",
                "Biocompatible solutions.",
              ],
            },
            {
              title: "What is the CEREC® system comprised of?",
              body: [
                "The CEREC® System is a CAD-CAM system — Computer Assisted Design and Computer Assisted Milling. The system has three major components.",
                "Acquisition device: A high-quality camera and a medical-grade computer. The function of this unit is to photograph the prepared tooth. Three-dimensional images are created of the tooth on the screen, which the dentist uses to design the perfect ceramic restoration.",
                "Three-dimensional CAD software: Allows the dentist to examine the tooth from every angle. It is the closest possible thing to holding the tooth in the hands and rotating it.",
                "Milling device: Manufactures the custom restoration from the specifications entered into the computer. A ceramic block that best resembles the existing tooth color is chosen and placed into the unit. Within minutes, the milling device produces the restoration the dentist designed.",
              ],
            },
            {
              title: "What does a CEREC® restoration procedure involve?",
              body: [
                "The first step in the procedure is preparing the tooth for the restoration. Depending on your particular case, the dentist will take photos of your affected teeth using one of CEREC's® two imaging solutions. If using CEREC® Omnicam, the dentist will take several images of the tooth, sending a three-dimensional, colored model to the CEREC® machine. If using CEREC® Bluecam, the dentist will coat the teeth with a contrasting agent before taking images of your teeth.",
                "These images are transposed onto the computer screen, where the dentist will view the tooth from every angle and design the final restoration. When the design is complete, it will be transmitted to the milling unit.",
                "The dentist will insert a block of ceramic, matching your tooth color, into the milling machine which will then create the full crown, onlay, inlay, or veneer. Before affixing the restoration to the tooth, the dentist will perform a dry fit to ensure comfort. Once a perfect fit is established, the restoration will be polished and affixed to the tooth with dental cement.",
              ],
            },
          ]}
          related={category.items}
          featuredImage="/svc/cerec.jpg"
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
