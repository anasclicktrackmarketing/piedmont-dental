import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import CategoryIndex from "@/components/CategoryIndex";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import { getCategory } from "@/lib/procedure-categories";

export const metadata: Metadata = {
  title:
    "Cosmetic Dentistry in Piedmont, CA | Veneers, Whitening, Invisalign, CEREC",
  description:
    "Cosmetic dentistry at Piedmont Dental By Design — porcelain veneers, professional teeth whitening, CEREC same-day crowns, Invisalign clear aligners, and surgical crown lengthening. Personalized care from Dr. Jill Martenson.",
  alternates: { canonical: "/procedures/cosmetic-dentistry" },
  openGraph: {
    title: "Cosmetic Dentistry — Piedmont Dental By Design",
    description:
      "Veneers, whitening, CEREC, Invisalign, and cosmetic surgery — every smile thoughtfully designed.",
    url: "https://piedmontdentalbydesign.com/procedures/cosmetic-dentistry",
    type: "website",
    images: ["/svc/veneers.jpg"],
  },
};

const category = getCategory("cosmetic-dentistry");

const CARDS = [
  {
    slug: "porcelain-veneers",
    title: "Porcelain Veneers",
    description:
      "Custom porcelain shells, hand-shaped and color-matched in person — bonded to the front of teeth to address chips, gaps, discoloration, and misshapen teeth.",
    meta: "2 visits · Many years",
  },
  {
    slug: "tooth-whitening",
    title: "Tooth Whitening",
    description:
      "Professional take-home or in-office bleaching — calibrated to your enamel for safe, dramatic brightening without damaging tooth structure.",
    meta: "2 visits · Years until touch-up",
  },
  {
    slug: "cerec",
    title: "CEREC®",
    description:
      "Same-visit ceramic restorations designed and milled in our office — single-appointment crowns, inlays, and onlays without temporaries.",
    meta: "1 visit · Many years",
  },
  {
    slug: "invisalign",
    title: "Invisalign®",
    description:
      "Clear, removable aligners that gradually shift teeth into place — virtually invisible orthodontics for adults and teens.",
    meta: "Months · Removable trays",
  },
  {
    slug: "surgery",
    title: "Cosmetic Surgery",
    description:
      "Surgical crown lengthening to reshape the gumline — ideal for short teeth or 'gummy' smiles, often paired with porcelain veneers.",
    meta: "In-office · Local + nitrous",
  },
];

export default function CosmeticDentistryCategoryPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <CategoryIndex
          slug={category.slug}
          label={category.label}
          eyebrow="Procedures · Cosmetic Dentistry"
          title="Cosmetic Dentistry"
          intro={[
            "As one of your most significant features, your smile deserves to radiate beauty, health, and confidence. Dr. Jill Martenson combines advanced technology with a keen eye for detail to deliver personalized cosmetic care — from quick enhancements to complete smile transformations.",
            "Our treatments are amalgam-free, built from durable, natural-looking materials, and designed to preserve oral health while achieving the smile you've always wanted.",
          ]}
          image="/svc/veneers.jpg"
          imageAlt="Cosmetic dentistry consultation at Piedmont Dental By Design"
          cards={CARDS}
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
