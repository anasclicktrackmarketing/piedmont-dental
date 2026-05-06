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
    "Periodontal Maintenance in Piedmont, CA | Quarterly Gum Care | Piedmont Dental",
  description:
    "Periodontal maintenance after gum disease treatment — quarterly cleanings, pocket-depth checks, oral cancer screening, and ongoing pocket health monitoring at Piedmont Dental By Design.",
  alternates: { canonical: "/procedures/periodontal-services/maintenance" },
  openGraph: {
    title: "Periodontal Maintenance — Piedmont Dental By Design",
    description:
      "Quarterly cleanings, pocket checks, and oral cancer screening — keeping gum disease in remission.",
    url: "https://piedmontdentalbydesign.com/procedures/periodontal-services/maintenance",
    type: "article",
  },
};

const category = getCategory("periodontal-services");

export default function MaintenancePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="maintenance"
          title="Periodontal Maintenance"
          tagline="Keeping gum disease in remission — quarterly cleanings, pocket checks, and screening."
          intro={[
            "It only takes twenty-four hours for plaque that isn't removed from your teeth to harden into calculus (tartar). Daily home care helps control plaque and tartar formation, but those hard-to-reach areas always need special attention.",
            "Once your periodontal treatment has been completed, your dentist and hygienist will recommend regular maintenance cleanings — usually four times a year. At each visit, pocket depths are carefully checked to make sure they're healthy, and plaque and calculus that's difficult to remove on a daily basis are taken from above and below the gum line.",
          ]}
          stats={[
            { value: "4×/year", label: "Typical maintenance cadence" },
            { value: "24 hrs", label: "Until plaque becomes tartar" },
            { value: "Pocket", label: "Depth checked each visit" },
            { value: "Screening", label: "Oral cancer at every visit" },
          ]}
          sections={[
            {
              title: "What's included at each visit",
              bullets: [
                "Examination of diagnostic X-rays — essential for detecting decay, tumors, cysts, and bone loss; also helps determine tooth and root positions.",
                "Examination of existing restorations — checking current fillings, crowns, and other dental work.",
                "Examination of tooth decay — checking all tooth surfaces for new decay.",
                "Oral cancer screening — face, neck, lips, tongue, throat, cheek tissues, and gums checked for any signs.",
                "Oral hygiene recommendations — review and recommend aids such as electric toothbrushes, periodontal brushes, fluorides, and rinses.",
                "Teeth polishing — removing stain and plaque that wasn't taken off during brushing or scaling.",
              ],
            },
            {
              title: "Why maintenance matters",
              body: [
                "Good oral hygiene practices and periodontal cleanings are essential in maintaining dental health and keeping periodontal disease under control. Once gum disease has been present, periodontal pockets re-form much faster than original disease developed — quarterly visits keep the bacterial colonies that cause infection from re-establishing themselves.",
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
