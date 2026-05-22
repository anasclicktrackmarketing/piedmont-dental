import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import CaseGalleryRail, { type RailCase } from "@/components/CaseGalleryRail";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
export const metadata: Metadata = {
  title: "Porcelain Crowns (Caps) — Smile Gallery",
  description:
    "Five real porcelain crown case studies — single tooth restorations, full upper arch rebuilds, and implant-supported crowns.",
  alternates: { canonical: "/smile-gallery/porcelain-crowns-caps" },
  openGraph: {
    title: "Porcelain Crowns (Caps) — Smile Gallery | Piedmont Dental By Design",
    description: "Real patient porcelain crown transformations.",
    url: "https://piedmontdentalbydesign.com/smile-gallery/porcelain-crowns-caps",
    type: "article",
  },
};

const CASES: RailCase[] = [
  {
    id: "case-1",
    number: "01",
    shortTitle: "Front tooth crown",
    title: "Single front-tooth crown replacement",
    before: "/img/crowns-caps/case1-before.jpg",
    after: "/img/crowns-caps/case1-after.jpg",
    beforeText:
      "The front central tooth had a poor existing restoration — it didn't look natural and the contour didn't match the gumline of the surrounding teeth.",
    afterText:
      "Replaced with an all-porcelain crown (no metal). Contoured to match the rest of the gumline and shaded to look completely natural alongside the patient's other teeth.",
    procedures: ["Porcelain Crown", "No-Metal"],
  },
  {
    id: "case-2",
    number: "02",
    shortTitle: "Upper arch rebuild",
    title: "Eight upper porcelain crowns — full arch rehabilitation",
    before: "/img/other-procedures/upper-arch-before.jpg",
    after: "/img/other-procedures/upper-arch-after.jpg",
    beforeText:
      "Upper anterior teeth that were stained, with worn and chipped incisal edges and visible gumline recession. The patient wanted to restore both appearance and bite function.",
    afterText:
      "Smile restored with eight upper all-porcelain crowns. Gumline and incisal edges are now uniform; the patient has longer, better-shaped teeth that enhance both the smile line and chewing function.",
    procedures: ["Porcelain Crowns (×8)", "Upper Arch", "Bite Restoration"],
  },
  {
    id: "case-3",
    number: "03",
    shortTitle: "Implant + crown",
    title: "Single implant with porcelain crown",
    before: "/img/crowns-caps/case2-before.jpg",
    after: "/img/crowns-caps/case2-after.jpg",
    beforeText:
      "The patient needed a single-tooth replacement for one upper central incisor — a visible front tooth that affected both confidence and chewing function.",
    afterText:
      "Smile and function restored with a single dental implant and an all-porcelain crown that fits securely over the implant. Permanent and natural-looking.",
    procedures: ["Single Implant", "Porcelain Crown"],
  },
  {
    id: "case-4",
    number: "04",
    shortTitle: "Full mouth rebuild",
    title: "Comprehensive smile rehabilitation",
    before: "/img/dentures/case1-before.jpg",
    after: "/img/dentures/case1-after.jpg",
    beforeText:
      "Significant tooth loss had affected the patient's chewing function, facial proportions, and confidence in their smile.",
    afterText:
      "A coordinated plan of implants, porcelain crowns, and prosthetic work restored the smile to a natural-looking, fully functional result.",
    procedures: ["Crowns", "Implants", "Prosthetics"],
  },
  {
    id: "case-5",
    number: "05",
    shortTitle: "Upper & lower",
    title: "Upper and lower arch rehabilitation",
    before: "/img/dentures/case2-before.jpg",
    after: "/img/dentures/case2-after.jpg",
    beforeText:
      "The patient needed upper and lower arch rehabilitation — a complete rebuild addressing both function and aesthetics.",
    afterText:
      "Upper denture supported by implants, plus lower implants and porcelain crowns. Restored chewing function, smile, and proper facial tissue support.",
    procedures: ["Implant-Denture", "Implants", "Porcelain Crowns"],
  },
];

const REASONS = [
  {
    title: "Reinforce a damaged tooth",
    body: "A crown protects a tooth that's chipped, cracked, or weakened by a large filling — like a custom-fitted shield.",
  },
  {
    title: "Cover an implant",
    body: "Porcelain crowns cap dental implants, completing the restoration with a visible tooth that matches the rest of your smile.",
  },
  {
    title: "Restore a tooth after a root canal",
    body: "Endodontically treated teeth need crown protection to stay strong. The crown is what makes the repair last.",
  },
  {
    title: "Improve appearance",
    body: "Misshapen, stained, or worn teeth can be covered with crowns — shaded and contoured to look completely natural.",
  },
];

const FACTS = [
  { stat: "15–25 yrs", label: "Average lifespan of a porcelain crown" },
  { stat: "1–2 visits", label: "Typical placement timeline" },
  { stat: "All porcelain", label: "Our preferred material — no metal" },
];

export default function PorcelainCrownsGalleryPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <section className="resource-hero">
          <div className="resource-hero-inner">
            <div className="resource-hero-text">
              <Link
                href="/smile-gallery/other-procedures"
                className="post-hero-back"
              >
                ← Back to Other Procedures
              </Link>
              <div className="num" style={{ marginTop: 12 }}>
                Smile Gallery · Porcelain Crowns
              </div>
              <h1 className="resource-hero-title">Porcelain Crowns (Caps)</h1>
              <p className="resource-hero-description">
                All-porcelain crowns are the modern standard — no metal,
                shaded to match, and contoured to disappear. Browse five real
                patient transformations below.
              </p>
            </div>
          </div>
        </section>

        <section className="pcc-body">
          <div className="pcc-inner">

            <div className="surgery-consent" role="note">
              <span className="surgery-consent-tag">Note</span>
              <p>
                Patients depicted in these case studies have provided their
                consent to display their photos online. Results vary by case —
                schedule a consultation to discuss what&apos;s possible for
                your smile.
              </p>
            </div>

            {/* Gallery-app style rail of cases */}
            <div className="pcc-rail-section">
              <header>
                <span className="num">i. — Patient case studies</span>
                <h2>Five porcelain crown transformations</h2>
                <p>
                  Click any thumbnail to view that case — front-tooth
                  restorations, full upper-arch rebuilds, and implant-supported
                  crowns.
                </p>
              </header>
              <CaseGalleryRail cases={CASES} />
            </div>

            {/* Why crowns — 4 reasons split */}
            <div className="pcc-reasons">
              <div className="pcc-reasons-text">
                <span className="num">ii. — When a crown is the answer</span>
                <h2>Four reasons we recommend a crown</h2>
                <p>
                  Crowns aren&apos;t just cosmetic — they&apos;re often the
                  longest-lasting way to protect or rebuild a tooth.
                </p>
              </div>
              <div className="pcc-reasons-grid">
                {REASONS.map((r, i) => (
                  <div key={r.title} className="pcc-reason">
                    <span className="pcc-reason-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{r.title}</h3>
                    <p>{r.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts — small inline strip */}
            <div className="pcc-facts">
              {FACTS.map((f) => (
                <div key={f.label} className="pcc-fact">
                  <strong>{f.stat}</strong>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <div className="pcc-cta">
              <h2>Need a crown — or wondering if you do?</h2>
              <p>
                Book a complimentary consultation. Dr. Martenson or
                Dr. Ma will evaluate the tooth, walk through whether a porcelain crown,
                onlay, or another option fits best, and put together a plan
                tailored to you.
              </p>
              <div className="pcc-cta-actions">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Request Appointment →
                </Link>
                <a href="tel:5103503937" className="btn btn-ghost btn-lg">
                  or call (510) 350-3937
                </a>
              </div>
            </div>
          </div>
        </section>

        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    
      <BreadcrumbSchema
        crumbs={[
          { name: "Smile Gallery", url: "/smile-gallery" },
          { name: "Porcelain Crowns (Caps)", url: "/smile-gallery/porcelain-crowns-caps" },
        ]}
      />
</>
  );
}
