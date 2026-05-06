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
    "Fluoride Treatment in Piedmont, CA | Strengthen Tooth Enamel | Piedmont Dental",
  description:
    "Professional fluoride treatment at Piedmont Dental By Design — the most effective agent for preventing tooth decay. Topical and systemic options for adults and children.",
  alternates: {
    canonical: "/procedures/cleanings-prevention/fluoride-treatment",
  },
  openGraph: {
    title: "Fluoride Treatment — Piedmont Dental By Design",
    description:
      "The most effective tool for preventing decay — strengthening enamel against acids.",
    url: "https://piedmontdentalbydesign.com/procedures/cleanings-prevention/fluoride-treatment",
    type: "article",
  },
};

const category = getCategory("cleanings-prevention");

export default function FluorideTreatmentPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="fluoride-treatment"
          title="Fluoride Treatment"
          tagline="The most effective single agent for preventing tooth decay."
          intro={[
            "Fluoride is the most effective agent available to help prevent tooth decay. It's a mineral that's naturally present in varying amounts in almost all foods and water supplies.",
            "The benefits of fluoride have been well known for over fifty years and are supported by many health and professional organizations. Used properly, fluoride helps prevent the most common chronic condition there is — dental decay.",
          ]}
          stats={[
            { value: "50+ years", label: "Of evidence-based use" },
            { value: "2 forms", label: "Topical and systemic" },
            { value: "2×/year", label: "Pro application for kids" },
            { value: "ADA", label: "Endorsed" },
          ]}
          sections={[
            {
              title: "How fluoride works",
              body: [
                "Topical fluoride strengthens the teeth once they have erupted by seeping into the outer surface of the tooth enamel, making the teeth more resistant to decay. We gain topical fluoride by using fluoride-containing dental products such as toothpaste, mouth rinses, and gels. We generally recommend that children have a professional application of fluoride twice a year during dental check-ups.",
                "Systemic fluoride strengthens teeth that have erupted as well as those still developing under the gums. Most systemic fluoride comes from foods and community water supplies. It's also available as a supplement in drop or gel form. Generally, fluoride drops are recommended for infants, and tablets are best suited for children up through the teen years.",
                "It is very important to monitor the amount of fluoride a child ingests. If too much fluoride is consumed while teeth are developing, a condition called fluorosis (white spots on the teeth) may result.",
              ],
            },
            {
              title: "When professional fluoride treatment is recommended",
              bullets: [
                "Deep pits and fissures on the chewing surfaces of teeth.",
                "Exposed and sensitive root surfaces.",
                "Fair to poor oral hygiene habits.",
                "Frequent sugar and carbohydrate intake.",
                "Inadequate exposure to fluorides.",
                "Inadequate saliva flow due to medical conditions, treatments, or medications.",
                "Recent history of dental decay.",
              ],
            },
            {
              title: "Fluoride alone won't prevent decay",
              body: [
                "Remember — fluoride alone will not prevent tooth decay. It's important to brush at least twice a day, floss regularly, eat balanced meals, reduce sugary snacks, and visit your dentist on a regular basis. Fluoride supports good habits; it doesn't replace them.",
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
