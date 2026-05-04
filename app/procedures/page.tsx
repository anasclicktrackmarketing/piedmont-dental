import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import ProceduresHero from "@/components/ProceduresHero";
import ProceduresCategories from "@/components/ProceduresCategories";
import ProceduresAllServices from "@/components/ProceduresAllServices";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title:
    "Dental Procedures — Cosmetic, Restorative, Periodontal & Preventive | Piedmont Dental By Design",
  description:
    "Comprehensive dental care under one roof: cosmetic (veneers, whitening, Invisalign), restorative (implants, crowns, full-mouth restoration), periodontal (gum care, grafting), and preventive (cleanings, exams, X-rays).",
  alternates: { canonical: "/procedures" },
  openGraph: {
    title: "Dental Procedures at Piedmont Dental By Design",
    description:
      "Cosmetic, restorative, periodontal, and preventive dental care on Grand Avenue in Piedmont, CA.",
    url: "https://piedmontdentalbydesign.com/procedures",
    type: "website",
  },
};

export default function ProceduresPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProceduresHero />
        <ProceduresCategories />
        <ProceduresAllServices />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
