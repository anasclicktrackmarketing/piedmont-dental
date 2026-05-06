import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import {
  directTestimonials,
  googleTestimonials,
  REVIEW_TOTALS,
  GOOGLE_REVIEWS_URL,
} from "@/lib/testimonials";

export const metadata: Metadata = {
  title:
    "Patient Testimonials | Real Patient Stories — Piedmont Dental By Design",
  description:
    "Read full patient testimonials about Piedmont Dental By Design — first-hand stories from patients of Dr. Jill Martenson, plus selected Google reviews.",
  alternates: { canonical: "/patient-reviews/testimonial" },
  openGraph: {
    title: "Patient Testimonials — Piedmont Dental By Design",
    description:
      "First-hand patient stories — every testimonial submitted directly to the practice.",
    url: "https://piedmontdentalbydesign.com/patient-reviews/testimonial",
    type: "website",
  },
};

const AVATAR_PALETTE = [
  "var(--teal)",
  "var(--ink)",
  "var(--teal-deep)",
  "#5a4234",
];

function Stars() {
  return (
    <span className="g-stars" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleG({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function TestimonialPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="page-hero testimonial-hero">
          <div className="page-hero-inner">
            <div className="page-hero-content">
              <Link href="/patient-reviews" className="post-hero-back">
                ← Back to reviews
              </Link>
              <div className="num" style={{ marginTop: 12 }}>
                Patient Reviews · Testimonials
              </div>
              <h1 className="testimonial-hero-title">
                {directTestimonials.length} testimonials,{" "}
                <em>in their own words.</em>
              </h1>
              <p className="page-hero-sub">
                Every review on this page was submitted directly to the
                practice by a real patient — no edits beyond formatting. Read
                the full set below, or jump over to{" "}
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the {REVIEW_TOTALS.google}+ Google reviews
                </a>
                .
              </p>
            </div>

            <div className="testimonial-hero-video">
              <iframe
                src="https://www.youtube.com/embed/-KnL-8ADZvo?rel=0"
                title="Piedmont Dental by Design — Patient testimonial"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Direct testimonials list */}
        <section className="testimonial-list">
          <div className="testimonial-list-inner">
            <header className="section-head">
              <div>
                <div className="num">i. — First-hand</div>
                <h2>
                  Submitted <em>by patients.</em>
                </h2>
              </div>
              <p className="lede">
                {directTestimonials.length} written stories, listed in the order
                they were received.
              </p>
            </header>

            <ol className="testimonial-grid">
              {directTestimonials.map((r, i) => (
                <li key={r.name} className="testimonial-card">
                  <span
                    className="testimonial-num"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="testimonial-card-body">
                    <Stars />
                    <blockquote className="testimonial-quote">
                      {r.quote}
                    </blockquote>
                    <footer className="testimonial-foot">
                      <span
                        className="reviews-featured-avatar"
                        style={{ background: AVATAR_PALETTE[i % AVATAR_PALETTE.length] }}
                        aria-hidden="true"
                      >
                        {r.initials}
                      </span>
                      <div>
                        <div className="reviews-featured-name">{r.name}</div>
                        <div className="testimonial-source">Verified patient</div>
                      </div>
                    </footer>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Google preview + CTA */}
        <section className="testimonial-google-strip">
          <div className="testimonial-google-strip-inner">
            <div className="testimonial-google-text">
              <div className="num">ii. — From Google</div>
              <h2>
                Plus <em>{REVIEW_TOTALS.google}+ Google reviews.</em>
              </h2>
              <p className="lede">
                A small sample of what Piedmont, Oakland, and East Bay patients
                are saying on Google. Average rating: {REVIEW_TOTALS.rating}.
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Read all on Google →
              </a>
            </div>

            <ul className="testimonial-google-list">
              {googleTestimonials.map((r, i) => (
                <li key={r.name} className="testimonial-google-card">
                  <header>
                    <span
                      className="reviews-featured-avatar"
                      style={{ background: AVATAR_PALETTE[i % AVATAR_PALETTE.length] }}
                      aria-hidden="true"
                    >
                      {r.initials}
                    </span>
                    <div>
                      <div className="reviews-featured-name">{r.name}</div>
                      <div className="reviews-google-platform">
                        <GoogleG size={11} />
                        <span>Posted on Google</span>
                      </div>
                    </div>
                  </header>
                  <Stars />
                  <p>{r.quote}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
