type Review = {
  initials: string;
  name: string;
  quote: string;
  avatarBg: string;
};

// Avatar background palette — rotated through the list to keep variety on-brand.
const AVATAR_PALETTE = [
  "var(--teal)",
  "var(--ink)",
  "var(--teal-deep)",
  "#5a4234",
];

const rawReviews: Omit<Review, "avatarBg">[] = [
  {
    initials: "TR",
    name: "Thiago Reis",
    quote: "Dr. Martenson definitely is the best dentist I've ever been to.",
  },
  {
    initials: "DC",
    name: "Devony C.",
    quote:
      "I have been a patient with Dr. Martenson for over 20 years. She is highly skilled, and keeps up with the latest equipment and techniques. The entire experience is Spa like. I love it!",
  },
  {
    initials: "JH",
    name: "John H.",
    quote:
      "Dr. Martenson is the best dentist I've ever had. Needle? What needle? Her gentle touch insures that your experience is as pain free as possible. Highly recommended!",
  },
  {
    initials: "CS",
    name: "Claudia Sieber",
    quote:
      "Great dental hygienist. Gentle, knowledgeable and professional.",
  },
  {
    initials: "BM",
    name: "Betsie M.",
    quote:
      "Dr. Martenson and her staff are top notch. Recently had a filling replacement and Dr. Martenson called me in the evening to follow up to make sure I was doing ok. Appreciate the personal touch!",
  },
  {
    initials: "CL",
    name: "Chris L.",
    quote:
      "My first exam and cleaning at PDxD was wonderful. Dr. Martenson is thorough and explains everything with care and patience. Manny is an excellent hygienist.",
  },
  {
    initials: "CW",
    name: "Carol Warren",
    quote: "Professional, thoughtful and always with a smile.",
  },
  {
    initials: "CB",
    name: "Chuck B.",
    quote:
      "I have been going to Piedmont Dental by Design for almost 20 years. My experience has always been nothing but the best — friendly staff, talented staff.",
  },
  {
    initials: "IL",
    name: "Irene L.",
    quote:
      "This is the best dental office with the best dentist. Expert work done. Staff is polite and attentive. Dr. Martenson's work is painless.",
  },
  {
    initials: "EK",
    name: "Erik K.",
    quote:
      "My daughter had her first significant dentist appointment with Piedmont Dental. They did a great job calming her and making her feel safe. Very pleased.",
  },
];

const reviews: Review[] = rawReviews.map((r, i) => ({
  ...r,
  avatarBg: AVATAR_PALETTE[i % AVATAR_PALETTE.length],
}));

const REVIEW_COUNT = reviews.length;

function GoogleG({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <span className="g-stars" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z"
          />
        </svg>
      ))}
    </span>
  );
}

const REVIEWS_URL =
  "https://www.google.com/search?q=Piedmont+Dental+By+Design+reviews";

export default function Reviews() {
  // Render twice so the auto-scroll loop is seamless.
  const loop = [...reviews, ...reviews];

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-inner">
        <header className="reviews-head">
          <div className="reviews-head-left">
            <div className="num">v. — Reviews</div>
            <h2>
              What patients <em>actually say.</em>
            </h2>
            <p className="lede">
              A rolling selection of verified patient quotes. Hover to pause; tap
              the summary to read all 350+ on Google.
            </p>
          </div>

          <a
            className="g-summary"
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all reviews on Google"
          >
            <div className="g-summary-top">
              <GoogleG size={22} />
              <span>Google reviews</span>
            </div>
            <div className="g-summary-score">
              <span className="g-score-num">4.9</span>
              <Stars />
            </div>
            <div className="g-summary-meta">Based on 350+ reviews</div>
          </a>
        </header>
      </div>

      <div
        className="reviews-carousel"
        style={{ ["--review-count" as string]: REVIEW_COUNT }}
      >
        <div className="reviews-track">
          {loop.map((r, i) => (
            <article className="g-review" key={`${r.name}-${i}`}>
              <header className="g-review-head">
                <span
                  className="g-avatar"
                  style={{ background: r.avatarBg }}
                  aria-hidden="true"
                >
                  {r.initials}
                </span>
                <div>
                  <div className="g-name">{r.name}</div>
                  <div className="g-platform">
                    <GoogleG size={11} />
                    <span>Posted on Google</span>
                  </div>
                </div>
              </header>
              <Stars />
              <p className="g-quote">{r.quote}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="reviews-inner">
        <div className="reviews-foot">
          <a
            className="btn btn-primary"
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all 350+ reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
