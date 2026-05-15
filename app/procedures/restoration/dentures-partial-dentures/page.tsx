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
    "Dentures (Full & Partial) in Piedmont, CA",
  description:
    "Complete and partial dentures — natural-looking, durable removable appliances customized for fit and comfort. From Piedmont Dental By Design in Piedmont, CA.",
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
          faqs={[
            {
              q: "What's the difference between complete and partial dentures?",
              a: "Complete dentures replace all teeth in an arch — used when you have no remaining teeth on top or bottom. Partial dentures fill in gaps when some natural teeth remain; they typically clip onto adjacent teeth with metal or flexible clasps. Both are removable. If you still have some healthy teeth, partials let you preserve them.",
            },
            {
              q: "What's the difference between conventional and immediate dentures?",
              a: "Conventional dentures are made after your teeth are removed and your gums have healed for 4–6 weeks — meaning you go without teeth during the healing period, but the final fit is more accurate. Immediate dentures are made in advance and placed the same day your teeth come out, so you never go without teeth — but they require more adjustments as your gums shrink during healing.",
            },
            {
              q: "How long does it take to get used to dentures?",
              a: "Typically 2–4 weeks to feel comfortable with eating and speaking, and up to a few months for your muscles and tissues to fully adapt. Expect some soreness, increased saliva flow, and difficulty with certain words during the first weeks. We do follow-up adjustments at 1 week, 1 month, and 3 months to refine the fit.",
            },
            {
              q: "How long do dentures last?",
              a: "Most dentures last 5–10 years before needing replacement or significant rebasing — your jawbone and gum tissue change shape over time even without teeth, so the fit gradually changes. We typically do a reline (relining the inside surface to fit current tissue) every few years and replace the full denture around the 7–10 year mark.",
            },
            {
              q: "Will I be able to eat normally with dentures?",
              a: "You'll learn a new way of eating, especially in the first few weeks. Start with soft foods cut into small pieces, then gradually add harder textures. Some foods stay challenging long-term (corn on the cob, whole apples, very chewy meats). Implant-supported dentures eliminate most chewing limitations — ask us if that's an option for your case.",
            },
            {
              q: "Will my dentures look fake?",
              a: "Modern dentures are very natural-looking when done well. We custom-shape and shade the teeth to match your face and skin tone, and the gum-colored base is matched to your natural gum color. Most people in your life won't realize you're wearing dentures.",
            },
            {
              q: "How do I clean my dentures?",
              a: "Brush them twice a day with a soft-bristled denture brush and mild soap or denture cleanser (not regular toothpaste — it's too abrasive). Soak them overnight in water or denture solution to keep them from drying out and warping. Rinse after every meal. Brush your gums and tongue too — they need cleaning even without teeth.",
            },
            {
              q: "Are dental implants better than dentures?",
              a: "For chewing function and bone preservation, yes — implants stimulate the jawbone the way natural teeth do, while dentures don't, leading to gradual bone loss over time. For cost and surgical complexity, dentures win — they're typically much less expensive and require no surgery. Many patients do well with implant-supported dentures (the best of both).",
            },
            {
              q: "Will my speech be affected by dentures?",
              a: "Yes, especially in the first few weeks — words with 's', 'f', and 'th' sounds are typically the hardest to adjust to. Reading aloud at home for 15–20 minutes a day during the first 2 weeks accelerates the adjustment dramatically. Within a month, most patients speak normally.",
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
