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
    "Dental Exams & Cleanings in Piedmont, CA | Twice-Yearly Hygiene | Piedmont Dental",
  description:
    "Comprehensive dental exams and professional cleanings at Piedmont Dental By Design — oral cancer screening, gum disease evaluation, decay detection, and tartar removal by registered hygienists.",
  alternates: {
    canonical: "/procedures/cleanings-prevention/dental-exams-cleanings",
  },
  openGraph: {
    title: "Dental Exams & Cleanings — Piedmont Dental By Design",
    description:
      "Twice-yearly hygiene visits — exam, oral cancer screening, deep cleaning, and polishing.",
    url: "https://piedmontdentalbydesign.com/procedures/cleanings-prevention/dental-exams-cleanings",
    type: "article",
  },
};

const category = getCategory("cleanings-prevention");

export default function DentalExamsCleaningsPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="dental-exams-cleanings"
          title="Dental Exams & Cleanings"
          tagline="The cornerstone of preventive care — twice-yearly checkups by your dentist and hygienist."
          intro={[
            "A comprehensive dental exam is performed by your dentist at your initial visit. At regular check-up appointments, your dentist and hygienist together perform a series of careful evaluations alongside the cleaning.",
            "Professional dental cleanings (dental prophylaxis) are usually performed by registered dental hygienists, and your appointment will always include both an exam and a thorough cleaning.",
          ]}
          stats={[
            { value: "Every 6 mo", label: "Recommended cadence" },
            { value: "Full exam", label: "Plus cancer screening" },
            { value: "RDH", label: "Registered Dental Hygienist" },
            { value: "Polish", label: "Stain removal included" },
          ]}
          sections={[
            {
              title: "What your dental exam includes",
              bullets: [
                "Examination of diagnostic X-rays — essential for detecting decay, tumors, cysts, and bone loss; also confirms tooth and root positions.",
                "Oral cancer screening — face, neck, lips, tongue, throat, tissues, and gums checked for any signs.",
                "Gum disease evaluation — gums and bone around the teeth checked for any signs of periodontal disease.",
                "Examination of tooth decay — all tooth surfaces checked for decay with special dental instruments.",
                "Examination of existing restorations — current fillings, crowns, and other dental work checked for integrity.",
              ],
            },
            {
              title: "What your professional cleaning includes",
              body: [
                "Removal of calculus (tartar) — calculus is hardened plaque that has been left on the tooth for some time and is now firmly attached to the tooth surface. It forms above and below the gum line and can only be removed with special dental instruments.",
                "Removal of plaque — plaque is a sticky, almost-invisible film that forms on the teeth. It's a growing colony of living bacteria, food debris, and saliva. The bacteria produce toxins that inflame the gums — and that inflammation is the start of periodontal disease.",
                "Teeth polishing — removes stain and plaque that wasn't otherwise removed during tooth brushing or scaling, leaving a smooth surface that resists future plaque buildup.",
              ],
            },
          ]}
          related={category.items}
          featuredImage="/img/lIVE Piedmont website images/Dental Exams & Cleanings.png"
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
