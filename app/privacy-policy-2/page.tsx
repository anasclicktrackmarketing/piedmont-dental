import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import LegalPage from "@/components/LegalPage";
import SiteFooter from "@/components/SiteFooter";
import { getLegalDoc } from "@/lib/legal";

const doc = getLegalDoc("privacy-policy-2");

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: { canonical: "/privacy-policy-2" },
  robots: { index: true, follow: false },
  openGraph: {
    title: `${doc.title} — Piedmont Dental By Design`,
    description: doc.description,
    url: "https://piedmontdentalbydesign.com/privacy-policy-2",
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
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
