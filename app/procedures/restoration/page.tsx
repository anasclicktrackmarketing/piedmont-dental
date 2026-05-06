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
    "Dental Restoration in Piedmont, CA | Implants, Crowns, Fillings, Bridges, Dentures",
  description:
    "Comprehensive dental restoration at Piedmont Dental By Design — dental implants, composite fillings, porcelain crowns, fixed bridges, and dentures. Repair damaged or missing teeth and restore function and appearance.",
  alternates: { canonical: "/procedures/restoration" },
  openGraph: {
    title: "Restoration — Piedmont Dental By Design",
    description:
      "Implants, crowns, fillings, bridges, and dentures — restoring damaged or missing teeth.",
    url: "https://piedmontdentalbydesign.com/procedures/restoration",
    type: "website",
  },
};

const category = getCategory("restoration");

const CARDS = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    description:
      "Titanium artificial roots and teeth surgically placed into the jaw — the gold standard for replacing missing teeth without affecting adjacent ones.",
    meta: "Several visits over months · Lifetime",
  },
  {
    slug: "composite-fillings",
    title: "Composite Fillings",
    description:
      "Tooth-colored fillings that repair decay, chips, fractures, and worn teeth — closely matched to natural enamel for a discreet result.",
    meta: "1 visit · Many years",
  },
  {
    slug: "crowns-caps",
    title: "Crowns (Caps)",
    description:
      "Custom porcelain coverings that restore the shape, size, and strength of damaged teeth — the most popular restoration for cracked or large-filling teeth.",
    meta: "2 visits · Many years",
  },
  {
    slug: "dentures-partial-dentures",
    title: "Dentures & Partial Dentures",
    description:
      "Removable replacements for missing teeth — complete dentures for full arches, partials for gaps, both crafted to look and feel natural.",
    meta: "Several visits · Many years",
  },
  {
    slug: "fixed-bridges",
    title: "Fixed Bridges",
    description:
      "Non-removable porcelain-fused-to-metal appliances that fill the gap left by one or more missing teeth, anchored to adjacent crowns.",
    meta: "2+ visits · Many years",
  },
];

export default function RestorationCategoryPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <CategoryIndex
          slug={category.slug}
          label={category.label}
          eyebrow="Procedures · Restoration"
          title="Restoration"
          intro={[
            "Piedmont Dental by Design offers dental restorations like fillings, crowns, and implants to repair damaged or missing teeth. Our treatments restore function, strength, and aesthetics for a healthy, natural smile.",
          ]}
          image="/img/procedures/restoration/_index/hero.jpg"
          imageAlt="Restorative dentistry consultation at Piedmont Dental By Design"
          cards={CARDS}
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
