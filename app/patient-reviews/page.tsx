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
  title: "Patient Reviews",
  description:
    "Read what real patients say — 4.9 stars across 350+ Google reviews, plus first-hand testimonials from patients of Dr. Jill Martenson, Dr. David Ma, and team.",
  alternates: { canonical: "/patient-reviews" },
  openGraph: {
    title: "Patient Reviews — Piedmont Dental By Design",
    description:
      "What patients actually say — verified Google reviews and first-hand testimonials.",
    url: "https://piedmontdentalbydesign.com/patient-reviews",
    type: "website",
  },
};

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

const AVATAR_PALETTE = [
  "var(--teal)",
  "var(--ink)",
  "var(--teal-deep)",
  "#5a4234",
];

// Featured selection — 6 longer testimonials to anchor the page
const FEATURED = [
  directTestimonials.find((t) => t.name === "Devony C.")!,
  directTestimonials.find((t) => t.name === "Betsie M.")!,
  directTestimonials.find((t) => t.name === "John H.")!,
  directTestimonials.find((t) => t.name === "Roni F.")!,
  directTestimonials.find((t) => t.name === "Erik K.")!,
  directTestimonials.find((t) => t.name === "Chuck B.")!,
];

export default function PatientReviewsPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="page-hero reviews-hero">
          <div className="page-hero-inner reviews-hero-inner">
            <div className="page-hero-content">
              <div className="num">i. — Patient Reviews</div>
              <h1 className="reviews-hero-title">
                Real stories. <em>Real care.</em>
              </h1>
              <p className="page-hero-sub">
                We&apos;ve been caring for patients in Piedmont, Oakland, and
                the East Bay for 30 years. Here&apos;s what they say about the
                practice — verified Google reviews and first-hand testimonials,
                in their own words.
              </p>
              <div className="reviews-hero-actions">
                <a
                  className="btn btn-primary btn-lg"
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leave a review on Google →
                </a>
                <Link href="/patient-reviews/testimonial" className="btn btn-ghost btn-lg">
                  Read all testimonials
                </Link>
              </div>
            </div>

            <a
              className="reviews-hero-card"
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="reviews-hero-card-top">
                <GoogleG size={28} />
                <span>Google reviews</span>
              </div>
              <div className="reviews-hero-card-score">
                <span className="reviews-hero-card-num">
                  {REVIEW_TOTALS.rating}
                </span>
                <Stars />
              </div>
              <div className="reviews-hero-card-meta">
                Based on {REVIEW_TOTALS.google}+ reviews
              </div>
              <span className="reviews-hero-card-cta">View on Google →</span>
            </a>
          </div>
        </section>

        {/* Stats strip */}
        <section className="reviews-stats">
          <div className="reviews-stats-inner">
            <div className="reviews-stat">
              <div className="reviews-stat-num">{REVIEW_TOTALS.rating}</div>
              <div className="reviews-stat-label">
                Average rating
                <span>across {REVIEW_TOTALS.google}+ Google reviews</span>
              </div>
            </div>
            <div className="reviews-stat">
              <div className="reviews-stat-num">30</div>
              <div className="reviews-stat-label">
                Years in practice
                <span>caring for the East Bay since 1996</span>
              </div>
            </div>
            <div className="reviews-stat">
              <div className="reviews-stat-num">
                {directTestimonials.length}+
              </div>
              <div className="reviews-stat-label">
                First-hand testimonials
                <span>submitted directly to the practice</span>
              </div>
            </div>
            <div className="reviews-stat">
              <div className="reviews-stat-num">2025</div>
              <div className="reviews-stat-label">
                Best of the East Bay
                <span>Best Dental Practice &amp; Esthetic Dentist</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured testimonials */}
        <section className="reviews-featured">
          <div className="reviews-featured-inner">
            <header className="section-head">
              <div>
                <div className="num">ii. — Featured stories</div>
                <h2>
                  In their <em>own words.</em>
                </h2>
              </div>
              <p className="lede">
                A small selection from {directTestimonials.length} written
                testimonials and {REVIEW_TOTALS.google}+ Google reviews. Click
                through to read the rest.
              </p>
            </header>

            <div className="reviews-featured-grid">
              {FEATURED.map((r, i) => (
                <article className="reviews-featured-card" key={r.name}>
                  <span className="reviews-featured-quote-mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="reviews-featured-quote">{r.quote}</p>
                  <footer className="reviews-featured-foot">
                    <span
                      className="reviews-featured-avatar"
                      style={{ background: AVATAR_PALETTE[i % AVATAR_PALETTE.length] }}
                      aria-hidden="true"
                    >
                      {r.initials}
                    </span>
                    <div>
                      <div className="reviews-featured-name">{r.name}</div>
                      <div className="reviews-featured-stars">
                        <Stars />
                      </div>
                    </div>
                  </footer>
                </article>
              ))}
            </div>

            <div className="reviews-featured-cta">
              <Link
                href="/patient-reviews/testimonial"
                className="btn btn-primary btn-lg"
              >
                Read all {directTestimonials.length}+ testimonials →
              </Link>
            </div>
          </div>
        </section>

        {/* Google reviews preview */}
        <section className="reviews-google">
          <div className="reviews-google-inner">
            <header className="section-head">
              <div>
                <div className="num">iii. — From Google</div>
                <h2>
                  Verified <em>Google reviews.</em>
                </h2>
              </div>
              <a
                className="post-related-all"
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                See all on Google →
              </a>
            </header>

            <div className="reviews-google-grid">
              {googleTestimonials.map((r, i) => (
                <article className="reviews-google-card" key={r.name}>
                  <header className="reviews-google-head">
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
                  <p className="reviews-google-quote">{r.quote}</p>
                </article>
              ))}
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
