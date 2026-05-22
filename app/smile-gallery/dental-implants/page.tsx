import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import CaseTabs, { type TabCase } from "@/components/CaseTabs";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
export const metadata: Metadata = {
  title: "Dental Implants — Smile Gallery",
  description:
    "Real dental implant transformations — single-tooth replacements, multi-tooth restorations, and full-arch rehabilitations from Dr. Jill Martenson and Dr. David Ma.",
  alternates: { canonical: "/smile-gallery/dental-implants" },
  openGraph: {
    title: "Dental Implants — Smile Gallery | Piedmont Dental By Design",
    description: "Real patient dental implant case studies.",
    url: "https://piedmontdentalbydesign.com/smile-gallery/dental-implants",
    type: "article",
  },
};

const CASES: TabCase[] = [
  {
    id: "case-1",
    number: "01",
    shortLabel: "Single tooth",
    title: "Single-tooth implant with porcelain crown",
    before: "/img/crowns-caps/case2-before.jpg",
    after: "/img/crowns-caps/case2-after.jpg",
    beforeText:
      "The patient needed a single-tooth replacement for one upper central incisor — a visible front tooth that affected both confidence and chewing function.",
    afterText:
      "Smile and function restored with a single dental implant and an all-porcelain crown that fits securely over the implant. A natural-looking, permanent solution.",
    procedures: ["Single Implant", "Porcelain Crown"],
  },
  {
    id: "case-2",
    number: "02",
    shortLabel: "Multi-tooth",
    title: "Multi-tooth implant rehabilitation",
    before: "/img/dentures/case1-before.jpg",
    after: "/img/dentures/case1-after.jpg",
    beforeText:
      "Significant tooth loss had affected chewing function, facial proportions, and the patient's confidence in their smile.",
    afterText:
      "A coordinated plan of multiple implants combined with porcelain restorations restored the smile to a natural-looking, fully functional result.",
    procedures: ["Dental Implants", "Porcelain Crowns"],
  },
  {
    id: "case-3",
    number: "03",
    shortLabel: "Full arch",
    title: "Upper and lower arch rehabilitation",
    before: "/img/dentures/case2-before.jpg",
    after: "/img/dentures/case2-after.jpg",
    beforeText:
      "The patient needed upper and lower arch rehabilitation — a complete rebuild addressing both function and aesthetics across the full mouth.",
    afterText:
      "Great smile, chewing function, and proper facial tissue support — achieved with an upper denture supported by implants, plus lower implants and porcelain crowns.",
    procedures: ["Implant-Supported Denture", "Implants", "Porcelain Crowns"],
  },
];

const INDICATIONS = [
  "A single missing or failing tooth",
  "Multiple adjacent teeth needing replacement",
  "An ill-fitting denture that slips or sores",
  "A failing bridge that needs replacement",
  "Bone loss from a long-missing tooth",
  "Full-arch rebuild needs",
];

const WHY = [
  {
    title: "Looks like your own tooth",
    body: "Porcelain crowns over implants are shaded and shaped to match — no metal showing, no obvious dental work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l3 6h6l-5 4 2 7-6-4-6 4 2-7-5-4h6z" />
      </svg>
    ),
  },
  {
    title: "Preserves your jawbone",
    body: "Unlike bridges or dentures, an implant stimulates the jawbone where the tooth used to be — preventing the bone loss that follows missing teeth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M8 7h8" />
        <circle cx="12" cy="14" r="3" />
      </svg>
    ),
  },
  {
    title: "Can last a lifetime",
    body: "With proper care, dental implants are the longest-lasting tooth replacement available — often outlasting the alternative options many times over.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
  },
];

export default function DentalImplantsGalleryPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <section className="resource-hero">
          <div className="resource-hero-inner">
            <div className="resource-hero-text">
              <Link href="/smile-gallery/other-procedures" className="post-hero-back">
                ← Back to Other Procedures
              </Link>
              <div className="num" style={{ marginTop: 12 }}>
                Smile Gallery · Dental Implants
              </div>
              <h1 className="resource-hero-title">Dental Implants</h1>
              <p className="resource-hero-description">
                Real dental implant cases from Dr. Martenson and Dr. Ma — from
                single-tooth replacements to full-arch rehabilitations. Tap
                any tab below to drag-compare that case&apos;s before and
                after.
              </p>
            </div>
          </div>
        </section>

        <section className="dig-body">
          <div className="dig-inner">

            <div className="surgery-consent" role="note">
              <span className="surgery-consent-tag">Note</span>
              <p>
                Patients depicted in these case studies have provided their
                consent to display their photos online. Results vary by case —
                schedule a consultation to discuss what&apos;s possible for
                your smile.
              </p>
            </div>

            {/* Interactive tabbed case switcher */}
            <div className="dig-case-section">
              <header className="dig-section-head">
                <span className="num">i. — Tabbed case studies</span>
                <h2>Three implant transformations</h2>
                <p>
                  Tap a case below to switch between examples — single tooth,
                  multi-tooth, and full-arch rehabilitation.
                </p>
              </header>
              <CaseTabs cases={CASES} />
            </div>

            {/* Indications checklist */}
            <div className="dig-signs">
              <div className="dig-signs-text">
                <span className="num">ii. — When implants make sense</span>
                <h2>Signs an implant may be right for you</h2>
                <p>
                  Implants are the right call for more situations than most
                  patients realize. Any of these sound familiar?
                </p>
              </div>
              <ul className="dig-signs-list">
                {INDICATIONS.map((s) => (
                  <li key={s}>
                    <span className="dig-signs-icon" aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why implants — 3-up benefit cards */}
            <div className="dig-why">
              <header>
                <span className="num">iii. — Why patients choose implants</span>
                <h2>What makes implants worth it</h2>
              </header>
              <div className="dig-why-grid">
                {WHY.map((w) => (
                  <div key={w.title} className="dig-why-card">
                    <span className="dig-why-icon" aria-hidden>{w.icon}</span>
                    <h3>{w.title}</h3>
                    <p>{w.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related */}
            <div className="dig-related">
              <header>
                <span className="num">— Want more detail?</span>
                <h2>The implant procedure, explained</h2>
              </header>
              <Link href="/resources/dental-implants" className="dig-related-card">
                <div>
                  <span className="dig-related-eyebrow">Procedure overview</span>
                  <h3>How dental implants actually work</h3>
                  <p>
                    See the phase-by-phase breakdown — placement,
                    osseointegration, and final restoration — plus implant
                    anatomy and success rates.
                  </p>
                </div>
                <span className="dig-related-arrow" aria-hidden>→</span>
              </Link>
            </div>

            <div className="dig-cta">
              <h2>Curious about implants for your specific case?</h2>
              <p>
                Book a complimentary implant consultation. Dr. Martenson or
                Dr. Ma will evaluate the site, walk through realistic timelines and
                alternatives, and put together a plan tailored to you.
              </p>
              <div className="dig-cta-actions">
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
          { name: "Dental Implants", url: "/smile-gallery/dental-implants" },
        ]}
      />
</>
  );
}
