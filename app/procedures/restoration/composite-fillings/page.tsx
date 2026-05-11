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
    "Composite Fillings in Piedmont, CA | Tooth-Colored Restorations | Piedmont Dental",
  description:
    "Composite (tooth-colored) fillings repair decay, cracks, chips, and worn teeth. Color-matched and aesthetically suited for visible front teeth. Piedmont Dental By Design serves Piedmont, Oakland, and the East Bay.",
  alternates: { canonical: "/procedures/restoration/composite-fillings" },
  openGraph: {
    title: "Composite Fillings — Piedmont Dental By Design",
    description:
      "Tooth-colored fillings — repair cavities or replace defective amalgams in a single appointment.",
    url: "https://piedmontdentalbydesign.com/procedures/restoration/composite-fillings",
    type: "article",
  },
};

const category = getCategory("restoration");

export default function CompositeFillingsPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="composite-fillings"
          title="Composite Fillings"
          tagline="Tooth-colored, single-visit restorations for cavities, chips, and worn teeth."
          featuredImage="/img/lIVE Piedmont website images/Composite fillings.png"
          intro={[
            "A composite (tooth-colored) filling is used to repair a tooth that is affected by decay, cracks, fractures, etc. The decayed or affected portion of the tooth will be removed and then filled with a composite filling.",
            "There are many types of filling materials available, each with their own advantages and disadvantages. You and your dentist can discuss the best options for restoring your teeth. Composite fillings, along with silver amalgam fillings, are the most widely used today. Because composite fillings are tooth colored, they can be closely matched to the color of existing teeth, and are more aesthetically suited for use in front teeth or the more visible areas of the teeth.",
            "As with most dental restorations, composite fillings are not permanent and may someday have to be replaced. They are very durable, and will last many years, giving you a long lasting, beautiful smile.",
          ]}
          stats={[
            { value: "1 visit", label: "Single appointment" },
            { value: "Tooth-color", label: "Aesthetically matched" },
            { value: "Many years", label: "Durable lifespan" },
            { value: "Low-prep", label: "Minimally invasive" },
          ]}
          sections={[
            {
              title: "Reasons for composite fillings",
              bullets: [
                "Chipped teeth.",
                "Closing space between two teeth.",
                "Cracked or broken teeth.",
                "Decayed teeth.",
                "Worn teeth.",
              ],
            },
            {
              title: "How are composite fillings placed?",
              body: [
                "Composite fillings are usually placed in one appointment. While the tooth is numb, your dentist will remove decay as necessary. The space will then be thoroughly cleaned and carefully prepared before the new filling is placed. If the decay was near the nerve of the tooth, a special medication will be applied for added protection. The composite filling will then be precisely placed, shaped, and polished, restoring your tooth to its original shape and function.",
                "It is normal to experience sensitivity to hot and cold when composite fillings are first placed, however this will subside shortly after your tooth acclimates to the new filling.",
                "You will be given care instructions at the conclusion of your treatment. Good oral hygiene practices, eating habits, and regular dental visits will aid in the life of your new fillings.",
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
