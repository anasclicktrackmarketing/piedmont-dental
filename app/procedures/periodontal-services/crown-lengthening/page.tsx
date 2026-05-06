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
    "Crown Lengthening in Piedmont, CA | Reshape Gumline | Piedmont Dental",
  description:
    "Crown lengthening at Piedmont Dental By Design — reshape gum and bone to expose more tooth, correct 'gummy' smiles, prepare teeth for crowns, and restore aesthetics after gum disease.",
  alternates: {
    canonical: "/procedures/periodontal-services/crown-lengthening",
  },
  openGraph: {
    title: "Crown Lengthening — Piedmont Dental By Design",
    description:
      "Reshape gum and bone tissue — fix gummy smiles, prep for crowns, restore aesthetics.",
    url: "https://piedmontdentalbydesign.com/procedures/periodontal-services/crown-lengthening",
    type: "article",
  },
};

const category = getCategory("periodontal-services");

export default function CrownLengtheningPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="crown-lengthening"
          title="Crown Lengthening"
          tagline="Expose more tooth — for restorations, aesthetics, or to correct a 'gummy' smile."
          intro={[
            "Crown lengthening is generally performed to improve the health of the gum tissue or to prepare the mouth for restorative or cosmetic procedures. It can also correct a 'gummy' smile, where teeth are covered with excess gum tissue.",
            "The procedure exposes more of the natural tooth by reshaping or recontouring bone and gum tissue. It can be performed on a single tooth, several teeth, or the entire gum line — exposing a more aesthetically pleasing smile.",
          ]}
          stats={[
            { value: "Local", label: "Anesthetic" },
            { value: "1 visit", label: "Procedure time" },
            { value: "2–3 mo", label: "Full healing" },
            { value: "Versatile", label: "Single tooth or full smile" },
          ]}
          sections={[
            {
              title: "Reasons for crown lengthening",
              body: [
                "Restoration of damaged teeth — periodontal disease, trauma, and decay can cause severe damage, including breakage beneath the gum line. Crown lengthening exposes the area for restoration.",
                "Cosmetic uses — extra gum tissue can make teeth look unnaturally short and can also increase susceptibility to periodontal infections. Removing excess gum tissue restores a balanced, healthy look.",
                "Dental crowns — crown lengthening provides more space between the supporting jawbone and dental crown, preventing the new crown from damaging gum tissues and bone.",
              ],
            },
            {
              title: "What crown lengthening involves",
              body: [
                "Crown lengthening is normally performed under local anesthetic. Time depends on how many teeth are involved and whether a small amount of bone needs to be removed along with soft tissue. Any existing dental crowns are removed prior to the procedure and replaced immediately afterward.",
                "Your dentist will make a series of small incisions around the soft tissue to separate the gums away from the teeth. Even when only one tooth needs reshaping, neighboring teeth are usually treated to provide a more even contour. Separating the gums provides access to the roots and the underlying bone.",
                "In some cases, removing a small amount of soft tissue provides enough exposure to place a crown. In others, a small amount of bone is removed using a combination of hand and rotary instruments. Teeth will look noticeably longer immediately after surgery because the gums have been repositioned.",
                "The surgical site is secured with an intraoral periodontal bandage to prevent infection. Pain medication and a chlorhexidine antimicrobial mouth rinse may be prescribed. The site is completely healed in approximately two to three months.",
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
