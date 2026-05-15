import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import ResourcesHero from "@/components/ResourcesHero";
import ResourcesHub from "@/components/ResourcesHub";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "Patient forms, post-op instructions, smile gallery, insurance & financing info, and educational resources for patients of Piedmont Dental By Design.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Patient Resources — Piedmont Dental By Design",
    description:
      "Everything you need before, during, and after your visit. Forms, account access, smile gallery, insurance, and financing.",
    url: "https://piedmontdentalbydesign.com/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ResourcesHero />
        <ResourcesHub />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
