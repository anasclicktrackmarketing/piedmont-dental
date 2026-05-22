import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import ContactHero from "@/components/ContactHero";
import ContactDetails from "@/components/ContactDetails";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact Us | Piedmont Dental By Design",
  description:
    "Get in touch with Piedmont Dental By Design. Send a message, call (510) 350-3937, or reach Dr. Jill Martenson and Dr. David Ma directly. 1331 Grand Ave, Piedmont, CA 94610.",
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
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
