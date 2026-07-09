import { posts } from "./BlogIndex";

const CATEGORY_MAP: Record<string, string> = {
  Cosmetic: "Cosmetic dentistry",
  Restorative: "Dental implants",
  "Family Care": "Family care",
  "Daily Care": "Daily oral health",
};

function countBy(label: string) {
  return posts.filter((p) => CATEGORY_MAP[p.category] === label).length;
}

const TOPICS = [
  { label: "Cosmetic dentistry", desc: "Veneers, whitening, Invisalign®", count: countBy("Cosmetic dentistry") },
  { label: "Dental implants", desc: "Permanent solutions for missing teeth", count: countBy("Dental implants") },
  { label: "Family care", desc: "Whole-family dentistry from kids to seniors", count: countBy("Family care") },
  { label: "Daily oral health", desc: "Brushing, flossing, and prevention", count: countBy("Daily oral health") },
];

export default function BlogHero() {
  return (
    <section className="page-hero blog-hero">
      <div className="page-hero-inner blog-hero-inner">
        <div className="page-hero-content">
          <div className="num">— Blog —</div>
          <h1>
            Notes from the <em>practice.</em>
          </h1>
          <p className="page-hero-sub">
            Articles on cosmetic dentistry, restorative care, family dentistry, and
            daily oral health — written for patients in Piedmont, Oakland, and the
            wider East Bay.
          </p>
          <div className="procedures-hero-actions">
            <a href="#latest" className="btn btn-primary btn-lg">
              Read latest →
            </a>
            <a href="/contact" className="btn btn-ghost btn-lg">
              Contact us
            </a>
          </div>
        </div>

        <ul className="blog-hero-topics">
          {TOPICS.map((t, i) => (
            <li key={t.label}>
              <span className="bht-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="bht-text">
                <span className="bht-label">{t.label}</span>
                <span className="bht-desc">{t.desc}</span>
              </span>
              <span className="bht-count">
                {t.count} {t.count === 1 ? "post" : "posts"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
