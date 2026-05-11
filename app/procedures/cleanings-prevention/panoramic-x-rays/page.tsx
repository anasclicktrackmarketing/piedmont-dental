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
    "Panoramic X-Rays in Piedmont, CA | Wraparound Dental Imaging | Piedmont Dental",
  description:
    "Panoramic X-rays at Piedmont Dental By Design — extraoral wraparound imaging for wisdom teeth evaluation, TMJ assessment, jawbone fractures, and dental implant planning.",
  alternates: { canonical: "/procedures/cleanings-prevention/panoramic-x-rays" },
  openGraph: {
    title: "Panoramic X-Rays — Piedmont Dental By Design",
    description:
      "Wraparound imaging — wisdom teeth, sinus, TMJ, mandibular nerve, implant planning.",
    url: "https://piedmontdentalbydesign.com/procedures/cleanings-prevention/panoramic-x-rays",
    type: "article",
  },
};

const category = getCategory("cleanings-prevention");

export default function PanoramicXRaysPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="panoramic-x-rays"
          title="Panoramic X-Rays"
          tagline="Wraparound imaging for the whole mouth — extraoral, simple, and revealing."
          featuredImage="/img/lIVE Piedmont website images/Panoramic X-Rays.png"
          intro={[
            "Panoramic X-rays (also known as Panorex® or orthopantomograms) are wraparound photographs of the face and teeth. They offer a view that would otherwise be invisible to the naked eye — exposing hidden structures like wisdom teeth, revealing preliminary signs of cavities, and showing fractures and bone loss.",
            "Panoramic X-rays are extraoral and simple to perform. Where most dental X-rays involve film placed inside the mouth, panoramic film sits inside a mechanism that rotates around the outside of the head.",
          ]}
          stats={[
            { value: "Extraoral", label: "Outside the mouth" },
            { value: "As-needed", label: "Not bi-annual like bite-wings" },
            { value: "Ear-to-ear", label: "View of upper + lower jaw" },
            { value: "Lower dose", label: "Less radiation than other types" },
          ]}
          sections={[
            {
              title: "When panoramic X-rays are used",
              body: [
                "Unlike bite-wing X-rays that need to be taken every few years, panoramic X-rays are generally only taken on an as-needed basis. They aren't a detailed view of each tooth — instead they provide a better view of the sinus areas, nasal areas, and mandibular nerve.",
                "Panoramic X-rays are preferable to bite-wing X-rays when a patient is in extreme pain, and when a sinus problem is suspected to have caused dental issues. The most common uses are revealing the positioning of wisdom teeth and checking whether dental implants will affect the mandibular nerve (the nerve extending toward the lower lip).",
              ],
            },
            {
              title: "What panoramic X-rays may reveal",
              bullets: [
                "Assessment for patients with an extreme gag reflex.",
                "Progression of TMJ disorders.",
                "Cysts and abnormalities.",
                "Impacted teeth.",
                "Jawbone fractures.",
                "Treatment planning for full and partial dentures, braces, and implants.",
                "Gum disease and cavities.",
              ],
            },
            {
              title: "How the imaging works",
              body: [
                "The Panorex equipment consists of a rotating arm that holds the X-ray generator and a moving film attachment that holds the pictures. Your head is positioned between these two devices. The X-ray generator moves around the head taking pictures as orthogonally as possible.",
                "The positioning of the head and body determines how sharp, clear, and useful the X-rays will be. The pictures are magnified by as much as 30% to ensure that even the minutest detail is visible.",
                "Panoramic X-rays are an important diagnostic tool and are also valuable for planning future treatment. They are safer than other types of X-rays because less radiation enters the body.",
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
