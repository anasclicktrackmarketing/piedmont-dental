import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
export const metadata: Metadata = {
  title: "Invisalign® — Clear Aligners",
  description:
    "How Invisalign® works, what bite problems it corrects, what treatment involves, and what to expect day-to-day with clear aligners.",
  alternates: { canonical: "/resources/invisalign" },
  openGraph: {
    title: "Invisalign® — Clear Aligners | Piedmont Dental By Design",
    description:
      "Learn how Invisalign® clear aligners straighten teeth, what problems they correct, and what daily wear involves.",
    url: "https://piedmontdentalbydesign.com/resources/invisalign",
    type: "article",
  },
};

export default function InvisalignResourcePage() {
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
                Patient Resources · Procedure info
              </div>
              <h1 className="resource-hero-title">Invisalign®</h1>
              <p className="resource-hero-description">
                For most adults, the prospect of wearing metal braces for years
                feels discouraging. Invisalign® offers a nearly invisible
                aligning system that straightens teeth quickly — with no metal,
                and trays you can remove when it matters.
              </p>
            </div>
          </div>
        </section>

        <section className="gummy-body">
          <div className="gummy-inner">

            {/* Lead card with feature image + intro */}
            <div className="gummy-lead">
              <div className="gummy-lead-image">
                <Image
                  src="/img/invisalign-hero.jpg"
                  alt="Close-up of an Invisalign® clear aligner tray"
                  fill
                  sizes="(max-width: 1080px) 100vw, 520px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="gummy-lead-text">
                <span className="num">i. — How it works</span>
                <h2>Clear aligners, custom to your smile</h2>
                <p>
                  Invisalign® treatment uses a series of custom-made aligning
                  trays. Every few weeks we change the trays to fit your new
                  tooth configuration — quietly nudging teeth into position.
                </p>
                <p>
                  Because the trays are removable, treatment is patient-paced
                  in the way that matters most: you take them out to eat, to
                  brush, and for the occasional important occasion. A great
                  number of patients report complete satisfaction with both the
                  experience and the result.
                </p>
                <ul className="gummy-lead-stats">
                  <li>
                    <strong>20–29</strong>
                    <span>Aligner sets per arch (typical)</span>
                  </li>
                  <li>
                    <strong>~2 weeks</strong>
                    <span>Between tray changes</span>
                  </li>
                  <li>
                    <strong>22 hrs/day</strong>
                    <span>Recommended wear time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Q&A — Bite problems */}
            <div className="gummy-qa">
              <span className="num">ii. — What it corrects</span>
              <h2>What kind of bite problems can Invisalign® correct?</h2>
              <p>
                Invisalign® corrects the same dental problems as traditional
                metal braces — the only difference is the trays are nearly
                invisible to the naked eye, and can be removed at will.
              </p>
              <ul className="gummy-cause-list">
                <li>
                  <span className="gummy-cause-tag">A</span>
                  <div>
                    <strong>Overcrowding</strong>
                    <p>
                      Too little space for teeth to align normally. Overcrowding
                      can cause tooth decay and raises the likelihood of gum
                      disease.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="gummy-cause-tag">B</span>
                  <div>
                    <strong>Large gaps between teeth</strong>
                    <p>
                      Sometimes caused by missing teeth or because the jaw has
                      continued to grow abnormally.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="gummy-cause-tag">C</span>
                  <div>
                    <strong>Crossbite</strong>
                    <p>
                      When one or more upper teeth bite inside the lower teeth.
                      Uneven wear over time can lead to bone erosion and gum
                      disease.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="gummy-cause-tag">D</span>
                  <div>
                    <strong>Overbite</strong>
                    <p>
                      The upper teeth project further than, or completely cover,
                      the lower teeth. Long-term, jaw pain and TMJ symptoms can
                      develop.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="gummy-cause-tag">E</span>
                  <div>
                    <strong>Underbite</strong>
                    <p>
                      The inverse — the lower teeth project further than the
                      upper teeth. Like overbite, can lead to jaw pain and TMJ
                      over time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Q&A — Advantages vs braces and veneers */}
            <div className="gummy-qa">
              <span className="num">iii. — How it compares</span>
              <h2>
                What advantages does Invisalign® offer over braces and veneers?
              </h2>
              <p>
                Traditional braces, Invisalign® aligners, and porcelain veneers
                are three different ways to refine the alignment and appearance
                of teeth. Each works better in different situations.
              </p>
              <div className="invisalign-compare">
                <article className="invisalign-compare-card">
                  <span className="invisalign-compare-eyebrow">
                    Invisalign® vs traditional braces
                  </span>
                  <p>
                    The aligning trays are fully removable, which means more
                    discipline and commitment is required. That&apos;s rarely a
                    problem — the trays are comfortable and nearly invisible.
                    Results comparable to braces are achievable with the right
                    treatment plan.
                  </p>
                </article>
                <article className="invisalign-compare-card">
                  <span className="invisalign-compare-eyebrow">
                    Invisalign® vs porcelain veneers
                  </span>
                  <p>
                    Unlike veneers, Invisalign® actually <em>straightens</em>{" "}
                    teeth. Veneers are thin covers permanently affixed after
                    the teeth are etched — meaning teeth aren&apos;t the same
                    once veneers are placed. They&apos;re also more expensive
                    long-term and typically last under 20 years.
                  </p>
                </article>
              </div>
            </div>

            {/* Q&A — Treatment process */}
            <div className="gummy-qa">
              <span className="num">iv. — What to expect</span>
              <h2>What does Invisalign® treatment involve?</h2>
              <p>
                Most patients are surprised by how straightforward the process
                is. Here&apos;s the flow from your first consultation to
                wearing your first aligner.
              </p>
              <ol className="gummy-steps">
                <li>
                  <strong>Treatment planning.</strong> Three-dimensional digital
                  images of your entire jaw allow us to move specific teeth on
                  screen, view your jaw from different angles, and preview the
                  final look — including how your face may change as your bite
                  improves.
                </li>
                <li>
                  <strong>Aligner fabrication.</strong> Once the plan is set, a
                  unique series of aligners is made. The total number varies by
                  case — most patients need <strong>20–29 sets per arch</strong>.
                </li>
                <li>
                  <strong>Tray changes every ~2 weeks.</strong> Each new tray
                  picks up where the last left off. Progress between
                  appointments is often visible to the naked eye.
                </li>
                <li>
                  <strong>Brief check-ins.</strong> We see you periodically to
                  confirm the trays are tracking correctly and the teeth are
                  moving on plan.
                </li>
              </ol>
            </div>

            {/* Q&A — Daily considerations */}
            <div className="gummy-qa">
              <span className="num">v. — Day-to-day</span>
              <h2>What are some considerations when wearing the trays?</h2>
              <p>
                Living with Invisalign® aligners can take a few weeks to get
                used to. A few practical notes:
              </p>
              <ul className="gummy-considerations">
                <li>
                  <strong>Wear them constantly, except when eating or drinking.</strong>{" "}
                  Food can become trapped between the tray and the teeth,
                  causing decay — so trays come out for every meal.
                </li>
                <li>
                  <strong>22 hours a day is the target.</strong> Less wear time
                  means slower progress and a higher chance of needing
                  refinement aligners at the end.
                </li>
                <li>
                  <strong>New trays roughly every two weeks.</strong> Progress
                  between appointments is often visible without a mirror.
                </li>
                <li>
                  <strong>Removable when you need it.</strong> Important
                  occasions are easy — just take them out for the photo, the
                  meal, the speech.
                </li>
              </ul>
              <p className="gummy-considerations-note">
                If you have any questions about Invisalign® specifically for
                your case, please ask Dr. Martenson or Dr. Ma at your consultation.
              </p>
            </div>

            {/* Closing CTA */}
            <div className="gummy-cta">
              <h2>Ready to find out if Invisalign® is right for you?</h2>
              <p>
                Book a no-pressure cosmetic consultation. Dr. Martenson or
                Dr. Ma will evaluate your bite, walk through whether Invisalign® or another
                approach is the best fit, and tailor a treatment plan to your
                goals.
              </p>
              <div className="gummy-cta-actions">
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
          { name: "Invisalign®", url: "/resources/invisalign" },
        ]}
      />
</>
  );
}
