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
    "Dental Home Care in Piedmont, CA",
  description:
    "Personal home care guidance — proper brushing technique, flossing, rinsing, and the dental aids that help control plaque and prevent disease.",
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
          faqs={[
            {
              q: "How long should I brush my teeth each time?",
              a: "Two minutes, twice a day — the ADA's standard recommendation. Most adults brush for 30–45 seconds without realizing it. If you have an electric toothbrush, most models have a built-in 2-minute timer with 30-second quadrant pulses. Otherwise, hum a song or set a phone timer.",
            },
            {
              q: "Are electric toothbrushes better than manual?",
              a: "For most adults, yes — particularly oscillating/rotating heads. Electric brushes remove more plaque with less effort, and the built-in timer keeps you brushing for the right duration. They're especially helpful for patients with arthritis, dexterity issues, braces, or a history of gum disease. A good manual brush used correctly can still do an excellent job — technique matters more than the tool.",
            },
            {
              q: "Should I rinse with mouthwash every day?",
              a: "Not necessarily. Mouthwash can supplement brushing and flossing but doesn't replace either. If you use one, choose ADA-approved varieties and ask us whether antibacterial, fluoride, or alcohol-free is right for your specific situation. Patients with dry mouth, gum disease, or frequent cavities benefit most from a daily medicated rinse.",
            },
            {
              q: "What's the right way to floss?",
              a: "Take about 12–16 inches of floss, wrap most of it around your middle fingers leaving about 2 inches between hands. Use your thumbs and forefingers to guide the floss between teeth with a gentle sawing motion. Curve the floss into a 'C' shape around each tooth and slide it gently beneath the gumline. Move up and down — don't snap it down.",
            },
            {
              q: "How often should I replace my toothbrush?",
              a: "Every 3 months — or sooner if the bristles are bent, splayed, or matted. Worn bristles don't clean effectively and can irritate gums. Also replace your brush after you've had a cold, flu, or strep throat to avoid re-exposing yourself to lingering bacteria.",
            },
            {
              q: "Is it OK to brush right after eating?",
              a: "Wait about 30 minutes after acidic foods or drinks (citrus, soda, wine, coffee). Acid temporarily softens enamel, and brushing immediately can scrub off the softened surface. Rinsing with water right after eating is fine and helps neutralize acid. Otherwise, brushing twice a day at consistent times is what matters most.",
            },
            {
              q: "Do I need to floss if I brush twice a day?",
              a: "Yes — flossing reaches the surfaces between teeth where your toothbrush physically can't go. That space is where most cavities between teeth and where most periodontal pockets begin. Brushing alone leaves about 35% of your tooth surface uncleaned. Daily flossing covers that gap.",
            },
            {
              q: "What's the best way to clean my tongue?",
              a: "Brush your tongue from back to front with your regular toothbrush, or use a dedicated tongue scraper. The back of the tongue harbors most of the bacteria that cause bad breath. A few gentle strokes is enough — don't scrub hard.",
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
