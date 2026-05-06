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
    "Dental Implants in Piedmont, CA | Permanent Tooth Replacement | Piedmont Dental",
  description:
    "Dental implants are the gold standard for replacing missing teeth — artificial roots and teeth surgically placed to restore chewing, speech, and a natural-looking smile. Piedmont Dental By Design serves Piedmont, Oakland, and the East Bay.",
  alternates: { canonical: "/procedures/restoration/dental-implants" },
  openGraph: {
    title: "Dental Implants — Piedmont Dental By Design",
    description:
      "Permanent tooth replacement with implants — placed by specialist Dr. Filippo Cangini, restored by Dr. Jill Martenson.",
    url: "https://piedmontdentalbydesign.com/procedures/restoration/dental-implants",
    type: "article",
    images: ["/img/procedures/restoration/dental-implants/hero.png"],
  },
};

const category = getCategory("restoration");

export default function DentalImplantsPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="dental-implants"
          title="Dental Implants"
          tagline="Transform your smile with the gold standard for missing teeth."
          intro={[
            "Dental implants are a great way to replace missing teeth and also provide a fixed solution to having removable partial or complete dentures. Implants provide excellent support and stability for these dental appliances.",
            "Dental implants are artificial roots and teeth (usually titanium) that are surgically placed into the upper or lower jaw bone by a dentist or periodontist — a specialist of the gums and supporting bone. The teeth attached to implants are very natural-looking and often enhance or restore a patient's smile.",
            "Dental implants are very strong, stable, and durable and will last many years, but on occasion, they will have to be re-tightened or replaced due to normal wear.",
          ]}
          stats={[
            { value: "Multiple", label: "Visits over months" },
            { value: "~6 mo", label: "Healing & integration" },
            { value: "Titanium", label: "Implant material" },
            { value: "Lifetime", label: "Designed to last" },
          ]}
          sections={[
            {
              title: "Reasons for dental implants",
              bullets: [
                "Replace one or more missing teeth without affecting adjacent teeth.",
                "Resolve joint pain or bite problems caused by teeth shifting into missing tooth space.",
                "Restore a patient's confident smile.",
                "Restore chewing, speech, and digestion.",
                "Restore or enhance facial tissues.",
                "Support a bridge or denture, making them more secure and comfortable.",
              ],
            },
            {
              title: "What does getting dental implants involve?",
              body: [
                "The process of getting implants requires a number of visits over several months.",
                "X-rays and impressions (molds) are taken of the jaw and teeth to determine bone, gum tissue, and spacing available for an implant. While the area is numb, the implant will be surgically placed into the bone and allowed to heal and integrate itself onto the bone for up to six months. Depending on the type of implant, a second surgery may be required in order to place the post that will hold the artificial tooth in place. With other implants the post and anchor are already attached and placed at the same time.",
                "After several weeks of healing the artificial teeth are made and fitted to the post portion of the anchor. Because several fittings may be required, this step may take one to two months to complete. After a healing period, the artificial teeth are securely attached to the implant, providing excellent stability and comfort to the patient.",
                "You will receive care instructions when your treatment is completed. Good oral hygiene, eating habits, and regular dental visits will aid in the life of your new implant.",
              ],
            },
            {
              title: "Service area",
              body: [
                "We proudly serve patients throughout the surrounding communities of Oakland, the East Bay, Lake Merritt, Montclair, Rockridge, and Berkeley.",
              ],
            },
          ]}
          related={category.items}
          featuredImage="/img/procedures/restoration/dental-implants/hero.png"
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
