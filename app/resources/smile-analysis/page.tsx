import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SmileAnalysisForm from "@/components/SmileAnalysisForm";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Smile Analysis | Piedmont Dental By Design",
  description:
    "A 17-question self-assessment to honestly evaluate your smile, plus a contact form to request a personalized, free consultation from Dr. Jill Martenson.",
  alternates: { canonical: "/resources/smile-analysis" },
  openGraph: {
    title: "Smile Analysis — Piedmont Dental By Design",
    description:
      "Honestly appraise your smile with 17 quick questions, then get a personalized response from the practice.",
    url: "https://piedmontdentalbydesign.com/resources/smile-analysis",
    type: "article",
  },
};

export default function SmileAnalysisPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <section className="resource-hero">
          <div className="resource-hero-inner">
            <div className="resource-hero-text">
              <Link href="/resources" className="post-hero-back">
                ← Back to resources
              </Link>
              <div className="num" style={{ marginTop: 12 }}>
                Patient Resources · Self-assessment
              </div>
              <h1 className="resource-hero-title">Smile Analysis</h1>
              <p className="resource-hero-description">
                Your smile affects your self-image, and can greatly influence
                the quality of your interactions with others. Many people hold
                back from laughing or smiling because they&apos;re uncomfortable
                with how their teeth look.
              </p>
              <p
                className="resource-hero-description"
                style={{ marginBottom: 0 }}
              >
                The 17 questions below are designed to help you honestly
                appraise your smile. Go to a mirror, smile as wide as you can,
                and answer each one. We&apos;ll reply with a personalized
                response and a path forward.
              </p>
            </div>
          </div>
        </section>

        <section className="resource-body smile-analysis-body">
          <div className="smile-analysis-inner">
            <SmileAnalysisForm />
          </div>
        </section>

        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
      <BreadcrumbSchema
        crumbs={[
          { name: "Resources", url: "/resources" },
          { name: "Smile Analysis", url: "/resources/smile-analysis" },
        ]}
      />
    </>
  );
}
