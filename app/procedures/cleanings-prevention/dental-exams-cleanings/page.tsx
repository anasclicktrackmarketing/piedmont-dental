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
    "Dental Exams & Cleanings in Piedmont, CA",
  description:
    "Comprehensive dental exams & professional cleanings — oral cancer screening, gum disease evaluation, decay detection, tartar removal by registered hygienists.",
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
          faqs={[
            {
              q: "How often should I get a dental cleaning?",
              a: "We recommend a professional cleaning every 6 months for most adults. Patients with a history of gum disease, heavy tartar buildup, smokers, or those with certain medical conditions may need cleanings every 3–4 months. Dr. Martenson or your hygienist will recommend the right cadence at your first visit.",
            },
            {
              q: "What's the difference between a cleaning and an exam?",
              a: "Every routine visit includes both. The exam is done by your dentist and covers oral cancer screening, gum disease evaluation, decay detection on every tooth surface, and a check of your existing fillings and crowns. The cleaning is performed by our registered dental hygienist and removes plaque and tartar above and below the gumline, followed by polishing.",
            },
            {
              q: "What's the difference between plaque and tartar?",
              a: "Plaque is a soft, sticky film of bacteria, food debris, and saliva that builds up on teeth daily — you can disrupt it with brushing and flossing. Tartar (calculus) is plaque that has hardened onto the tooth surface; it forms above and below the gumline and can only be removed with the specialized instruments your hygienist uses.",
            },
            {
              q: "Does the oral cancer screening hurt?",
              a: "Not at all — it's a visual and tactile exam that takes about 60 seconds. Your dentist looks and gently feels around your face, neck, lips, tongue, throat, and inside of your cheeks for any unusual lumps, color changes, or sores. Early detection dramatically improves outcomes for oral cancers, which is why we do it at every six-month visit.",
            },
            {
              q: "Will the cleaning hurt if I have sensitive teeth?",
              a: "Most patients find routine cleanings comfortable, even with mild sensitivity. If you have heavy tartar buildup or gum inflammation, we may apply topical numbing gel. For patients with significant sensitivity or who haven't had a cleaning in a while, we can break the work into two visits or use local anesthesia — just let us know.",
            },
            {
              q: "How long does a typical cleaning appointment take?",
              a: "Plan for about 45–60 minutes for an established patient — that covers the hygienist's cleaning, polishing, the dentist's exam, and any necessary X-rays. New-patient visits run longer (60–90 minutes) because we'll do a full set of baseline X-rays and a comprehensive periodontal evaluation.",
            },
            {
              q: "Should I brush and floss right before my appointment?",
              a: "Yes — brush and floss normally that day. It doesn't change what we'll do, but it makes the cleaning more comfortable for you and lets your hygienist focus on the areas you can't reach at home. There's no need to do anything special or extra.",
            },
            {
              q: "What if I haven't been to the dentist in years?",
              a: "You're not alone, and we won't lecture you. At your first visit we'll do a thorough exam and decide together whether a regular cleaning is appropriate or whether a deeper periodontal cleaning is needed first. We see patients all the time who have been away from the dentist for 5, 10, or even 20 years — the only wrong move is continuing to wait.",
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
