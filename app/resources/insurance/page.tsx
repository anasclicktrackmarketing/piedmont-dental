import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Insurance | Piedmont Dental By Design",
  description:
    "We accept most dental insurance plans and our team handles the paperwork. Here's how billing, pre-treatment estimates, and out-of-network coverage work at our practice.",
  alternates: { canonical: "/resources/insurance" },
  openGraph: {
    title: "Insurance — Piedmont Dental By Design",
    description:
      "We accept most dental insurance plans. Our team handles the paperwork and submits pre-treatment estimates so you know your coverage upfront.",
    url: "https://piedmontdentalbydesign.com/resources/insurance",
    type: "article",
  },
};

export default function InsurancePage() {
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
              <h1 className="resource-hero-title">Insurance</h1>
              <p className="resource-hero-description">
                We accept most dental insurance plans, and our team handles the
                paperwork on your behalf — so the focus stays on your care, not
                the forms.
              </p>
            </div>
          </div>
        </section>

        <section className="insurance-body">
          <div className="insurance-inner">
            <div className="insurance-card">
              <span className="num">i. — What we accept</span>
              <h2>Most plans, handled by our team</h2>
              <p>
                As a service to our patients, our practice accepts most dental
                insurance programs — including non-managed care, indemnity
                (traditional), and PPO out-of-network plans. We are not part of
                any managed care network. Our accounting staff will prepare all
                the necessary forms for your dental benefits.
              </p>
              <p>
                Your specific policy is an agreement between you and your
                insurance company. If your benefits result in less coverage
                than anticipated, you remain responsible for the total
                obligation. To avoid surprises, our staff will gladly submit a
                pre-treatment estimate to your insurance company so you know
                your benefits before treatment begins.
              </p>
            </div>

            <div className="insurance-card">
              <span className="num">ii. — How fees and allowances work</span>
              <h2>Fair pricing, transparent estimates</h2>
              <p>
                The fees charged for services rendered to insured patients are
                the same usual and customary fees we charge every patient for
                similar services. Your policy may base its allowances on a
                fixed fee schedule, which may or may not coincide with our
                usual fees.
              </p>
              <p>
                Different insurance companies vary greatly in the types of
                coverage available. Some carriers process claims promptly while
                others delay payment for several months — neither of which
                affects the care we provide.
              </p>
            </div>

            <div className="insurance-keypoints">
              <span className="num">iii. — Quick reference</span>
              <h2>The key things to know</h2>
              <ul>
                <li>
                  <strong>We accept most non-managed and PPO out-of-network plans.</strong>{" "}
                  We are not part of any managed care network.
                </li>
                <li>
                  <strong>Our staff prepares your insurance forms</strong> and
                  submits pre-treatment estimates on your behalf.
                </li>
                <li>
                  <strong>You&apos;re responsible for the total obligation</strong>{" "}
                  if your benefits cover less than anticipated.
                </li>
                <li>
                  <strong>Fees are consistent</strong> — insured patients are
                  charged the same usual rates as everyone else.
                </li>
                <li>
                  <strong>Claims timelines vary</strong> by carrier; some pay
                  promptly, others take longer.
                </li>
              </ul>
              <p className="insurance-callout">
                Have a question about your specific plan? Call our office at{" "}
                <a href="tel:5103503937">(510) 350-3937</a> and we&apos;ll help
                you figure out what&apos;s covered.
              </p>
            </div>

            <div className="insurance-cta">
              <h2>Ready to book — or want a pre-treatment estimate?</h2>
              <p>
                Request an appointment online and let us know what
                you&apos;re hoping to address. We&apos;ll pull a benefits
                estimate ahead of your visit so there are no surprises.
              </p>
              <div className="insurance-cta-actions">
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
    </>
  );
}
