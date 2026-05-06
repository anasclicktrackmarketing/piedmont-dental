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
    "Professional Teeth Whitening in Piedmont, CA | Take-Home & In-Office | Piedmont Dental",
  description:
    "Professional teeth whitening — change the color of natural enamel with custom take-home trays or in-office treatment. ADA-approved methods, supervised by Dr. Jill Martenson. Piedmont, Oakland & East Bay.",
  alternates: { canonical: "/procedures/cosmetic-dentistry/tooth-whitening" },
  openGraph: {
    title: "Tooth Whitening — Piedmont Dental By Design",
    description:
      "Custom-tray bleaching at home or in-office whitening — supervised, ADA-approved, calibrated to your enamel.",
    url: "https://piedmontdentalbydesign.com/procedures/cosmetic-dentistry/tooth-whitening",
    type: "article",
    images: ["/img/procedures/cosmetic-dentistry/_index/figure-2.jpg"],
  },
};

const category = getCategory("cosmetic-dentistry");

export default function ToothWhiteningPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="tooth-whitening"
          title="Tooth Whitening"
          tagline="Non-invasive, professional bleaching — calibrated to your enamel."
          intro={[
            "Tooth whitening (or bleaching) is a simple, non-invasive dental treatment used to change the color of natural tooth enamel and is an ideal way to enhance the beauty of your smile.",
            "Because having whiter teeth has now become the number one aesthetic concern of most patients, there are a number of ways to whiten teeth. The most popular method is using a home tooth whitening system that will whiten teeth dramatically. Since tooth whitening only works on natural tooth enamel, it is important to evaluate replacement of any old fillings, crowns, etc. Replacement of any restorations will be done after bleaching so they will match the newly bleached teeth.",
            "Tooth whitening is not permanent. A touch-up may be needed every several years, and more often if you smoke or drink coffee, tea, or wine.",
          ]}
          stats={[
            { value: "2 visits", label: "Typical timeline" },
            { value: "Custom", label: "Tray-based bleaching" },
            { value: "Years", label: "Until touch-up needed" },
            { value: "Take-home", label: "Or in-office option" },
          ]}
          sections={[
            {
              title: "Reasons for tooth whitening",
              bullets: [
                "Fluorosis (excessive fluoridation during tooth development).",
                "Normal wear of outer tooth layer.",
                "Stained teeth due to medications (tetracycline, etc.).",
                "Yellow or brown stained teeth.",
              ],
            },
            {
              title: "What does tooth whitening involve?",
              body: [
                "This type of tooth whitening usually requires two visits. At the first appointment, impressions (molds) will be made of your teeth to fabricate custom, clear plastic trays.",
                "At your second appointment, you will try on the trays for proper fit, and adjustments will be made if necessary. The trays are worn with special whitening solution either twice a day for 30 minutes or overnight for a couple of weeks depending on the degree of staining and desired level of whitening. It is normal to experience tooth sensitivity during the time you are whitening your teeth, but it will subside shortly after you have stopped bleaching.",
                "You will receive care instructions for your teeth and trays, and be encouraged to visit your dentist regularly to help maintain a beautiful, healthy, white smile.",
              ],
            },
            {
              title: "Service area",
              body: [
                "We proudly serve patients throughout Oakland, the East Bay, Lake Merritt, Montclair, Rockridge, and Berkeley.",
              ],
            },
          ]}
          related={category.items}
          featuredImage="/img/procedures/cosmetic-dentistry/_index/figure-2.jpg"
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
