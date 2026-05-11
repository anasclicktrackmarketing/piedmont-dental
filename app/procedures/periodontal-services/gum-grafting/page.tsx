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
    "Gum Grafting in Piedmont, CA | Treat Receding Gums | Piedmont Dental",
  description:
    "Gum grafting at Piedmont Dental By Design — surgical correction of gum recession to cover exposed tooth roots, reduce sensitivity, improve appearance, and protect long-term gum health.",
  alternates: { canonical: "/procedures/periodontal-services/gum-grafting" },
  openGraph: {
    title: "Gum Grafting — Piedmont Dental By Design",
    description:
      "Surgical correction of gum recession — cover exposed roots, reduce sensitivity, improve aesthetics.",
    url: "https://piedmontdentalbydesign.com/procedures/periodontal-services/gum-grafting",
    type: "article",
  },
};

const category = getCategory("periodontal-services");

export default function GumGraftingPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="gum-grafting"
          title="Gum Grafting"
          tagline="Cover exposed tooth roots, reduce sensitivity, and protect against further recession."
          featuredImage="/img/lIVE Piedmont website images/gum-grafting.webp"
          intro={[
            "A gum graft (also known as a gingival graft or periodontal plastic surgery) is the collective name for surgical procedures that aim to cover exposed tooth root surfaces with grafted oral tissue.",
            "Exposed tooth roots are usually the result of gingival recession from periodontal disease, but other common causes include overly aggressive brushing and trauma. Though the name might sound frightening, gum grafting is a common periodontal procedure with excellent results.",
          ]}
          stats={[
            { value: "Local", label: "Anesthetic only" },
            { value: "~6 weeks", label: "Full healing" },
            { value: "3 types", label: "Free, connective tissue, allograft" },
            { value: "Multi-benefit", label: "Sensitivity, aesthetics, health" },
          ]}
          sections={[
            {
              title: "Common types of gum grafts",
              body: [
                "Free gingival graft — often used to thicken gum tissue. A layer of tissue is removed from the palate and relocated to the area affected by gum recession. Both sites heal quickly without permanent damage.",
                "Subepithelial connective tissue graft — commonly used to cover exposed roots. Tissue is removed fairly painlessly from the outer layer of the palate and relocated to the site of gum recession.",
                "Acellular dermal matrix allograft — uses medically processed, donated human tissue as the graft source. The advantage is that no donor site from your palate is required, meaning less post-procedure discomfort.",
              ],
            },
            {
              title: "Reasons for gum grafting",
              bullets: [
                "Reduced sensitivity — gum grafting permanently covers exposed roots, helping reduce hot/cold discomfort and restoring gum health.",
                "Improved appearance — recession can make teeth look unnaturally long and the smile appear 'toothy.' Grafting restores symmetry and a balanced look.",
                "Improved gum health — periodontal disease can destroy gum tissue rapidly. Grafting halts tissue and bone loss and protects exposed roots from decay.",
              ],
            },
            {
              title: "What gum grafting involves",
              body: [
                "Once the need for gum grafting has been determined, the teeth are first thoroughly cleaned above and below the gum line to remove calculus and bacteria. We'll also share home-care guidance to reduce future susceptibility.",
                "The procedure itself is performed under local anesthetic. Small incisions create a pocket at the recipient site, the connective tissue graft is inserted between the layers of tissue, and sutures stabilize the graft to prevent shifting. Surgical dressing protects the area during the first week of healing.",
                "Uniformity and full healing of the gums is achieved in approximately six weeks.",
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
