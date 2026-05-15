import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import LegalPage from "@/components/LegalPage";
import SiteFooter from "@/components/SiteFooter";
import { getLegalDoc } from "@/lib/legal";

const doc = getLegalDoc("notice-of-privacy-practices");

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: { canonical: "/notice-of-privacy-practices" },
  robots: { index: true, follow: false },
  openGraph: {
    title: `${doc.title} — Piedmont Dental By Design`,
    description: doc.description,
    url: "https://piedmontdentalbydesign.com/notice-of-privacy-practices",
    type: "article",
  },
};

export default function NoticeOfPrivacyPracticesPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <LegalPage
          doc={doc}
          footer={
            <div className="legal-pdf-callout">
              <div>
                <span className="num">Full Notice (PDF)</span>
                <h3>Download the complete Notice of Privacy Practices.</h3>
                <p>
                  The complete, legally binding Notice — including details on
                  HIPAA-protected uses and disclosures, your rights, and how to
                  contact our Privacy Officer — is available as a downloadable
                  PDF.
                </p>
              </div>
              <a
                href="/legal/notice-of-privacy-practices.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Download PDF →
              </a>
            </div>
          }
        />
      </main>
      <SiteFooter />
    </>
  );
}
