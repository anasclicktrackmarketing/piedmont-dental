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
    "Dental Home Care in Piedmont, CA | Brushing, Flossing, Rinsing Guide | Piedmont Dental",
  description:
    "Personal home care guidance from Piedmont Dental By Design — proper brushing technique, flossing, rinsing, and the dental aids that help control plaque and prevent disease.",
  alternates: { canonical: "/procedures/cleanings-prevention/home-care" },
  openGraph: {
    title: "Home Care — Piedmont Dental By Design",
    description:
      "Daily routine that protects your smile — proper technique for brushing, flossing, rinsing.",
    url: "https://piedmontdentalbydesign.com/procedures/cleanings-prevention/home-care",
    type: "article",
  },
};

const category = getCategory("cleanings-prevention");

export default function HomeCarePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="home-care"
          title="Home Care"
          tagline="Daily habits that protect everything we do in the office."
          featuredImage="/img/lIVE Piedmont website images/girl-brushing-her-teeth.jpg"
          intro={[
            "A beautiful, healthy smile that lasts a lifetime is our ultimate goal when treating patients. Your personal home care plays an important role in achieving that goal.",
            "Personal home care starts by eating balanced meals, reducing the number of snacks you eat, and correctly using the various dental aids that help control the plaque and bacteria that cause dental disease.",
          ]}
          stats={[
            { value: "2×/day", label: "Brushing minimum" },
            { value: "Daily", label: "Flossing" },
            { value: "ADA", label: "Soft bristle, approved" },
            { value: "Electric", label: "Recommended for many" },
          ]}
          sections={[
            {
              title: "Tooth brushing",
              body: [
                "Brush your teeth at least twice a day — especially before going to bed at night — with an ADA-approved soft bristle brush and toothpaste.",
              ],
              bullets: [
                "Place the brush at a 45-degree angle to the gums and gently brush using a small, circular motion. Always feel the bristles on the gums.",
                "Brush the outer, inner, and biting surfaces of each tooth.",
                "Use the tip of the brush to clean the inside of the front teeth.",
                "Brush your tongue to remove bacteria and freshen your breath.",
              ],
            },
            {
              title: "Electric toothbrushes",
              body: [
                "Electric toothbrushes are also recommended. They are easy to use and can remove plaque efficiently. Place the bristles of the electric brush on your gums and teeth and allow the brush to do its job, several teeth at a time. Many patients find them dramatically more effective than manual brushing — particularly those with dexterity challenges.",
              ],
            },
            {
              title: "Flossing",
              body: [
                "Daily flossing is the best way to clean between the teeth and under the gumline. Flossing not only cleans these spaces — it disrupts plaque colonies from building up, preventing damage to the gums, teeth, and bone.",
              ],
              bullets: [
                "Take 12–16 inches (30–40 cm) of dental floss and wrap it around your middle fingers, leaving about 2 inches (5 cm) of floss between the hands.",
                "Using your thumbs and forefingers to guide the floss, gently insert the floss between teeth using a sawing motion.",
                "Curve the floss into a 'C' shape around each tooth and under the gumline. Gently move the floss up and down, cleaning the side of each tooth.",
                "Floss holders are recommended if you have difficulty using conventional floss.",
              ],
            },
            {
              title: "Rinsing and other aids",
              body: [
                "Rinse your mouth with water after brushing, and also after meals if you're unable to brush. If you're using an over-the-counter product for rinsing, it's a good idea to consult your dentist or hygienist about whether it's appropriate for you.",
                "Use other dental aids as recommended — interdental brushes, rubber tip stimulators, tongue cleaners, irrigation devices, fluoride, and medicated rinses can all play a role in good dental home care.",
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
