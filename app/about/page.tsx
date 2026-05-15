import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import AboutHero from "@/components/AboutHero";
import AboutValues from "@/components/AboutValues";
import AwardsStrip from "@/components/AwardsStrip";
import AboutTeam from "@/components/AboutTeam";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About — Dr. Jill Martenson and team",
  description:
    "Meet Dr. Jill Martenson, DDS — owner & lead dentist. 29 years of cosmetic and restorative dentistry on Grand Avenue. Best Esthetic Dentist 2024.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Piedmont Dental By Design",
    description:
      "Meet Dr. Jill Martenson, DDS, and the team behind Piedmont Dental By Design — 29 years of personalized cosmetic and restorative dentistry on Grand Avenue.",
    url: "https://piedmontdentalbydesign.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <AboutHero />
        <AboutValues />
        <AwardsStrip />
        <AboutTeam />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
