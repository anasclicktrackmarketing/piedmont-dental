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
    "Dentures & Partial Dentures in Piedmont, CA | Removable Tooth Replacement | Piedmont Dental",
  description:
    "Complete and partial dentures for missing teeth — natural-looking, durable removable appliances customized for fit and comfort. Piedmont Dental By Design in Piedmont, CA.",
  alternates: {
    canonical: "/procedures/restoration/dentures-partial-dentures",
  },
  openGraph: {
    title: "Dentures & Partial Dentures — Piedmont Dental By Design",
    description:
      "Complete and partial dentures, custom-crafted for natural appearance and a comfortable fit.",
    url: "https://piedmontdentalbydesign.com/procedures/restoration/dentures-partial-dentures",
    type: "article",
  },
};

const category = getCategory("restoration");

export default function DenturesPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="dentures-partial-dentures"
          title="Dentures & Partial Dentures"
          tagline="Removable tooth replacement, custom-crafted for fit and comfort."
          featuredImage="/img/lIVE Piedmont website images/Dentures & Partial Dentures.png"
          intro={[
            "A denture is a removable dental appliance replacement for missing teeth and surrounding tissue. They are made to closely resemble your natural teeth and may even enhance your smile.",
            "There are two types of dentures — complete and partial. Complete dentures are used when all of the teeth are missing, while partial dentures are used when some natural teeth remain. A partial denture not only fills in the spaces created by missing teeth, it prevents other teeth from shifting.",
            "A complete denture may be either \"conventional\" or \"immediate.\" A conventional type is made after the teeth have been removed and the gum tissue has healed, usually taking 4 to 6 weeks. During this time the patient will go without teeth. Immediate dentures are made in advance and immediately placed after the teeth are removed, thus preventing the patient from having to be without teeth during the healing process. Once the tissues shrink and heal, adjustments will have to be made.",
            "Dentures are very durable appliances and will last many years, but may have to be remade, repaired, or readjusted due to normal wear.",
          ]}
          stats={[
            { value: "Several", label: "Visits over weeks" },
            { value: "4–6 wks", label: "Healing for conventional" },
            { value: "Immediate", label: "Or same-day option" },
            { value: "Many years", label: "Durable lifespan" },
          ]}
          sections={[
            {
              title: "Reasons for dentures",
              bullets: [
                "Complete denture — Loss of all teeth in an arch.",
                "Partial denture — Loss of several teeth in an arch.",
                "Enhancing smile and facial tissues.",
                "Improving chewing, speech, and digestion.",
              ],
            },
            {
              title: "What does getting dentures involve?",
              body: [
                "The process of getting dentures requires several appointments, usually over several weeks. Highly accurate impressions (molds) and measurements are taken and used to create your custom denture. Several \"try-in\" appointments may be necessary to ensure proper shape, color, and fit. At the final appointment, your dentist will precisely adjust and place the completed denture, ensuring a natural and comfortable fit.",
                "It is normal to experience increased saliva flow, some soreness, and possible speech and chewing difficulty — however this will subside as your muscles and tissues get used to the new dentures.",
                "You will be given care instructions for your new dentures. Proper cleaning of your new dental appliance, good oral hygiene, and regular dental visits will aid in the life of your new dentures.",
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
