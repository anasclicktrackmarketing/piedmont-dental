import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import ContactHero from "@/components/ContactHero";
import ContactDetails from "@/components/ContactDetails";
import ContactTeam from "@/components/ContactTeam";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Piedmont Dental By Design — call (510) 350-3937 or send a message. 1331 Grand Ave, Piedmont, CA 94610. Dr. Jill Martenson and Dr. David Ma.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Piedmont Dental By Design",
    description:
      "Send a message, call, or reach Dr. Jill Martenson, Dr. David Ma, and the team at Piedmont Dental By Design — 1331 Grand Ave, Piedmont, CA.",
    url: "https://piedmontdentalbydesign.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ContactHero />
        <ContactDetails />
        <ContactTeam />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
