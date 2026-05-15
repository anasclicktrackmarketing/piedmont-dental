import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
const CARECREDIT_APPLY =
  "https://www.carecredit.com/apply/?sitecode=PDDS&encm=v4O7HHCnTczQ";
const CARECREDIT_HOME = "https://www.carecredit.com/";
const CARECREDIT_PAY = "https://www.carecredit.com/Pay/";

export const metadata: Metadata = {
  title: "Financing | Piedmont Dental By Design",
  description:
    "Flexible payment options at Piedmont Dental — CareCredit financing, major credit cards, and personalized arrangements for extensive treatment.",
  alternates: { canonical: "/resources/financing" },
  openGraph: {
    title: "Financing — Piedmont Dental By Design",
    description:
      "CareCredit financing, major credit cards, and personalized payment plans — so cost never gets in the way of care.",
    url: "https://piedmontdentalbydesign.com/resources/financing",
    type: "article",
  },
};

export default function FinancingPage() {
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
                Patient Resources
              </div>
              <h1 className="resource-hero-title">Financing</h1>
              <p className="resource-hero-description">
                Cost shouldn&apos;t get in the way of the care you need. We
                accept most insurance, partner with CareCredit for flexible
                monthly financing, and tailor arrangements for more extensive
                treatment plans.
              </p>
            </div>
          </div>
        </section>

        <section className="financing-body">
          <div className="financing-inner">

            {/* CareCredit feature — logo + copy + video side by side */}
            <div className="financing-feature">
              <div className="financing-feature-text">
                <span className="num">i. — Healthcare financing</span>
                <div className="financing-cc-logo">
                  <Image
                    src="/img/financing/care-credit.png"
                    alt="CareCredit"
                    width={220}
                    height={90}
                  />
                </div>
                <h2>The convenient healthcare financing solution.</h2>
                <p>
                  We&apos;re pleased to accept the CareCredit healthcare credit
                  card. CareCredit lets you say <em>yes</em> to recommended
                  treatment — crowns, oral surgery, even a general checkup —
                  and pay for it in convenient monthly payments that fit your
                  financial situation.
                </p>
                <p>
                  It&apos;s free and easy to apply, and you&apos;ll receive a
                  decision immediately. If approved, you can schedule your
                  procedure even before your card arrives.
                </p>
                <div className="financing-feature-actions">
                  <a
                    href={CARECREDIT_APPLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    Apply for CareCredit →
                  </a>
                  <a
                    href={CARECREDIT_HOME}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-lg"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="financing-feature-video">
                <video
                  src="/videos/bb_10202017_GEC1806_Dental.mp4"
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
            </div>

            {/* Three-up action tiles */}
            <div className="financing-tiles">
              <a
                href={CARECREDIT_APPLY}
                target="_blank"
                rel="noopener noreferrer"
                className="financing-tile"
              >
                <span className="financing-tile-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="13" rx="2" />
                    <path d="M2 10h20" />
                    <path d="M6 15h4" />
                  </svg>
                </span>
                <h3>Apply Now</h3>
                <p>Get an instant decision on a CareCredit healthcare credit card.</p>
                <span className="financing-tile-cta">Apply online →</span>
              </a>

              <a
                href={CARECREDIT_PAY}
                target="_blank"
                rel="noopener noreferrer"
                className="financing-tile"
              >
                <span className="financing-tile-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h18l-1.5 11a2 2 0 0 1-2 1.7H6.5a2 2 0 0 1-2-1.7L3 7z" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M12 11v5" />
                    <path d="M9.5 13.5L12 11l2.5 2.5" />
                  </svg>
                </span>
                <h3>Pay Your Bill</h3>
                <p>Make a CareCredit payment online — secure and quick.</p>
                <span className="financing-tile-cta">Pay online →</span>
              </a>

              <a
                href={CARECREDIT_HOME}
                target="_blank"
                rel="noopener noreferrer"
                className="financing-tile"
              >
                <span className="financing-tile-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                </span>
                <h3>Payment Calculator</h3>
                <p>Estimate your monthly payments before you commit.</p>
                <span className="financing-tile-cta">Open calculator →</span>
              </a>
            </div>

            {/* Payment options accepted */}
            <div className="financing-payment">
              <span className="num">ii. — At the office</span>
              <h2>Payment options we accept</h2>
              <p className="financing-payment-lede">
                For your convenience, we accept several payment methods.
                Payment is expected at the time services are performed — and
                when more extensive care is needed, we&apos;re happy to make
                financial arrangements together.
              </p>
              <ul className="financing-payment-list">
                <li>
                  <span className="financing-method-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <circle cx="12" cy="12" r="2.5" />
                      <path d="M6 9h.01M18 15h.01" />
                    </svg>
                  </span>
                  <div>
                    <strong>Cash</strong>
                    <span>Accepted at the front desk.</span>
                  </div>
                </li>
                <li>
                  <span className="financing-method-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="6" width="18" height="12" rx="1.5" />
                      <path d="M7 11h10M7 14h6" />
                    </svg>
                  </span>
                  <div>
                    <strong>Personal Checks</strong>
                    <span>Made payable to Piedmont Dental By Design.</span>
                  </div>
                </li>
                <li>
                  <span className="financing-method-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="13" rx="2" />
                      <path d="M2 10h20" />
                      <path d="M6 15h4" />
                    </svg>
                  </span>
                  <div>
                    <strong>Major Credit Cards</strong>
                    <span>Visa, MasterCard, American Express, Discover.</span>
                  </div>
                </li>
                <li>
                  <span className="financing-method-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h16" />
                      <path d="M9 7l-5 5 5 5" />
                      <path d="M15 7l5 5-5 5" />
                    </svg>
                  </span>
                  <div>
                    <strong>Money Orders</strong>
                    <span>Same-day processing at the front desk.</span>
                  </div>
                </li>
                <li>
                  <span className="financing-method-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" />
                    </svg>
                  </span>
                  <div>
                    <strong>CareCredit</strong>
                    <span>Flexible monthly financing on approved credit.</span>
                  </div>
                </li>
                <li>
                  <span className="financing-method-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 5h18" />
                      <path d="M5 5v14h14V5" />
                      <path d="M9 13l2 2 4-4" />
                    </svg>
                  </span>
                  <div>
                    <strong>Custom Arrangements</strong>
                    <span>For extensive treatment plans — just ask.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Closing CTA */}
            <div className="financing-cta">
              <h2>Have questions about cost or coverage?</h2>
              <p>
                We&apos;ll walk through estimates, financing, and what your
                insurance covers — no obligation. Request a visit and we&apos;ll
                set aside time before treatment to go over everything.
              </p>
              <div className="financing-cta-actions">
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
          { name: "Financing", url: "/resources/financing" },
        ]}
      />
</>
  );
}
