import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
export const metadata: Metadata = {
  title: "Full Mouth Restoration",
  description:
    "Comprehensive full-mouth restoration cases from Dr. Jill Martenson — combining implants, crowns, veneers, and prosthetics to rebuild function and confidence.",
  alternates: { canonical: "/resources/full-mouth-restoration" },
  openGraph: {
    title: "Full Mouth Restoration — Piedmont Dental By Design",
    description:
      "Real full-mouth restoration cases combining implants, crowns, and prosthetics.",
    url: "https://piedmontdentalbydesign.com/resources/full-mouth-restoration",
    type: "article",
  },
};

type FMCase = {
  id: string;
  number: string;
  title: string;
  blurb: string;
  before: string;
  after: string;
  procedures: string[];
};

const CASES: FMCase[] = [
  {
    id: "case-1",
    number: "01",
    title: "Comprehensive smile rebuild",
    blurb:
      "A complete restoration combining cosmetic and functional work — rebuilding aesthetics, bite, and confidence in a coordinated treatment plan.",
    before: "/img/full-mouth/case1-before.jpg",
    after: "/img/full-mouth/case1-after.jpg",
    procedures: ["Full Mouth Restoration"],
  },
  {
    id: "case-2",
    number: "02",
    title: "Implant-anchored full restoration",
    blurb:
      "Combining dental implants with full-arch prosthetics — the result reads as natural teeth, with the chewing strength and bone-preserving stability only implants can offer.",
    before: "/img/full-mouth/case2-before.jpg",
    after: "/img/full-mouth/case2-after.jpg",
    procedures: ["Dental Implants", "Full Mouth Restoration"],
  },
  {
    id: "case-3",
    number: "03",
    title: "Full-arch implant rehabilitation",
    blurb:
      "Multiple missing or failing teeth replaced with a coordinated plan of implants and porcelain restorations — the kind of transformation that changes how patients smile, eat, and speak.",
    before: "/img/full-mouth/case3-before.jpg",
    after: "/img/full-mouth/case3-after.jpg",
    procedures: ["Dental Implants", "Full Mouth Restoration"],
  },
  {
    id: "case-4",
    number: "04",
    title: "Implant-supported full restoration",
    blurb:
      "When years of wear and loss had compromised both function and aesthetics, a full coordinated plan with implants restored the smile entirely — a result that should last decades.",
    before: "/img/full-mouth/case4-before.jpg",
    after: "/img/full-mouth/case4-after.jpg",
    procedures: ["Dental Implants", "Full Mouth Restoration"],
  },
];

const COMPONENTS = [
  {
    title: "Dental Implants",
    body: "Titanium roots anchored in the jaw — preserving bone and providing the foundation for crowns, bridges, or full-arch prosthetics.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M8 7h8" />
        <circle cx="12" cy="14" r="3" />
      </svg>
    ),
  },
  {
    title: "Porcelain Crowns",
    body: "Custom-shaded all-porcelain crowns cap each tooth — built to match shape, color, and translucence with surrounding teeth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17c2-2 6-2 8 0s6 2 8 0" />
        <path d="M8 13V7M12 13V5M16 13V7" />
      </svg>
    ),
  },
  {
    title: "Veneers (where needed)",
    body: "Thin porcelain shells for the most visible teeth — refining color, shape, and the way light catches your smile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Bite Realignment",
    body: "Orthodontic and surgical adjustments where needed to restore proper occlusion — so the new teeth wear evenly and feel right.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M9 6l-6 6 6 6" />
        <path d="M15 6l6 6-6 6" />
      </svg>
    ),
  },
];

const SIGNS = [
  "Multiple teeth missing, broken, or severely worn down",
  "Difficulty chewing or recurring jaw discomfort (TMJ)",
  "Old crowns, bridges, or fillings reaching the end of their life",
  "Failing dental work that needs to be replaced together rather than piecemeal",
  "Self-consciousness about how your smile and teeth look in photos",
];

export default function FullMouthRestorationPage() {
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
                Patient Resources · Before & After
              </div>
              <h1 className="resource-hero-title">Full Mouth Restoration</h1>
              <p className="resource-hero-description">
                When years of wear, loss, or failing dental work have compromised
                both function and appearance, full-mouth restoration brings it
                all back together — implants, crowns, and prosthetics
                coordinated as one plan. Below are real cases from Dr.
                Martenson&apos;s practice.
              </p>
            </div>
          </div>
        </section>

        <section className="fmr-body">
          <div className="fmr-inner">

            <div className="surgery-consent" role="note">
              <span className="surgery-consent-tag">Note</span>
              <p>
                Patients depicted in these case studies have provided their
                consent to display their photos online. Results vary by case —
                schedule a consultation to discuss what&apos;s possible for
                your smile.
              </p>
            </div>

            {/* Alternating left/right case gallery */}
            <div className="fmr-cases">
              {CASES.map((c, i) => (
                <article
                  key={c.id}
                  className={`fmr-case ${
                    i % 2 === 1 ? "fmr-case--reverse" : ""
                  }`}
                >
                  <div className="fmr-case-media">
                    <BeforeAfterSlider
                      beforeSrc={c.before}
                      afterSrc={c.after}
                      beforeAlt={`${c.title} — before`}
                      afterAlt={`${c.title} — after`}
                    />
                    <p className="fmr-case-hint">⇄ Drag to compare</p>
                  </div>
                  <div className="fmr-case-info">
                    <div className="fmr-case-num">{c.number}</div>
                    <span className="num">Case study</span>
                    <h2>{c.title}</h2>
                    <p>{c.blurb}</p>
                    <ul className="fmr-case-tags">
                      {c.procedures.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            {/* What it includes — 4-up component tiles */}
            <div className="fmr-components">
              <header>
                <span className="num">— What&apos;s typically included</span>
                <h2>The building blocks of a full-mouth plan</h2>
                <p>
                  No two plans are identical — they&apos;re tailored to the
                  patient&apos;s specific situation. Most include some
                  combination of the following:
                </p>
              </header>
              <div className="fmr-components-grid">
                {COMPONENTS.map((c) => (
                  <div key={c.title} className="fmr-component">
                    <span className="fmr-component-icon" aria-hidden>
                      {c.icon}
                    </span>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Is it right for me? */}
            <div className="fmr-signs">
              <header>
                <span className="num">— When it&apos;s the right approach</span>
                <h2>Signs you may benefit from full-mouth restoration</h2>
                <p>
                  Restoring everything together is usually preferable to
                  patching tooth by tooth — the final result fits together
                  better, lasts longer, and is often more economical over time.
                </p>
              </header>
              <ul className="fmr-signs-list">
                {SIGNS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            {/* Closing CTA */}
            <div className="fmr-cta">
              <h2>Wondering if full-mouth restoration is right for you?</h2>
              <p>
                Book a complimentary restorative consultation. Dr. Martenson
                will evaluate your bite, talk through realistic options, and
                put together a coordinated plan that fits your goals,
                timeline, and budget.
              </p>
              <div className="fmr-cta-actions">
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
          { name: "Resources", url: "/resources" },
          { name: "Full Mouth Restoration", url: "/resources/full-mouth-restoration" },
        ]}
      />
</>
  );
}
