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
    "Scaling & Root Planing in Piedmont, CA | Deep Dental Cleaning | Piedmont Dental",
  description:
    "Periodontal scaling and root planing at Piedmont Dental By Design — non-surgical deep cleaning to halt gum disease, remove tartar from below the gumline, and promote root reattachment.",
  alternates: {
    canonical: "/procedures/periodontal-services/periodontal-scaling-root-planing",
  },
  openGraph: {
    title: "Scaling & Root Planing — Piedmont Dental By Design",
    description:
      "The foundational non-surgical treatment for gum disease — deep cleaning above and below the gumline.",
    url: "https://piedmontdentalbydesign.com/procedures/periodontal-services/periodontal-scaling-root-planing",
    type: "article",
  },
};

const category = getCategory("periodontal-services");

export default function ScalingRootPlaningPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="periodontal-scaling-root-planing"
          title="Periodontal Scaling & Root Planing"
          tagline="The foundational non-surgical treatment for gum disease."
          featuredImage="/img/lIVE Piedmont website images/Periodontal Scaling & Root Planing.png"
          intro={[
            "The objective of scaling and root planing is to remove etiologic agents — primarily dental plaque and tartar (calculus) — that cause inflammation to gum tissue and surrounding bone.",
            "These non-surgical procedures completely cleanse the periodontium and work very effectively for individuals with gingivitis (mild gum inflammation) and moderate to severe periodontal disease.",
          ]}
          stats={[
            { value: "Non-surgical", label: "First line for periodontitis" },
            { value: "3 mm", label: "Threshold pocket depth" },
            { value: "Local", label: "Anesthetic if needed" },
            { value: "Antibiotics", label: "Often follow treatment" },
          ]}
          sections={[
            {
              title: "Reasons for scaling and root planing",
              body: [
                "Disease prevention — oral bacteria from periodontal infections can travel through the bloodstream to other parts of the body. Research has linked them to lung infections and heart disease. Scaling and root planing remove the bacteria and halt periodontal disease from progressing.",
                "Tooth protection — when gum pockets exceed 3mm in depth, there's a greater risk of periodontal disease. As pockets deepen, they house more bacteria. Eventually a chronic inflammatory response destroys gum and bone tissue. Periodontal disease is the number-one cause of tooth loss in the developed world.",
                "Aesthetic effects — scaling and root planing remove tartar and plaque from teeth and below the gumline. As an added bonus, superficial stains are also removed during the procedure.",
                "Better breath — halitosis is one of the most common signs of periodontal disease. Food particles and bacteria cause persistent bad odor — alleviated by deep cleaning.",
              ],
            },
            {
              title: "Scaling",
              body: [
                "Scaling is performed with special dental instruments and may include an ultrasonic scaling tool, which removes calculus and plaque from crown and root surfaces. In many cases the scaling tool includes an irrigation process that delivers an antimicrobial agent below the gums to help reduce bacteria.",
              ],
            },
            {
              title: "Root planing",
              body: [
                "Root planing removes cementum and surface dentin embedded with microorganisms, toxins, and tartar. The root of the tooth is literally smoothed to promote good healing. Clean, smooth root surfaces help prevent bacteria from easily colonizing in the future.",
                "Following these deep cleaning procedures, the gum pockets may be treated with antibiotics — soothing irritation and helping the gum tissues heal quickly. At your next appointment, the dentist or hygienist will examine the gums again to see how well the pockets have healed. If pockets still measure more than 3mm, additional treatment may be recommended.",
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
