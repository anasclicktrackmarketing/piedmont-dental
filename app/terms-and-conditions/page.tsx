import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import LegalPage from "@/components/LegalPage";
import SiteFooter from "@/components/SiteFooter";
import { getLegalDoc } from "@/lib/legal";

const doc = getLegalDoc("terms-and-conditions");

export const metadata: Metadata = {
  title: `${doc.title} | Piedmont Dental By Design`,
  description: doc.description,
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: false },
  openGraph: {
    title: `${doc.title} — Piedmont Dental By Design`,
    description: doc.description,
    url: "https://piedmontdentalbydesign.com/terms-and-conditions",
    type: "article",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <LegalPage doc={doc} />
      </main>
      <SiteFooter />
    </>
  );
}
