import Image from "next/image";

const SUMMARY = [
  { num: "i", label: "Prevention", count: "6 services", anchor: "prevention", cls: "cat-prevention" },
  { num: "ii", label: "Cosmetic", count: "5 services", anchor: "cosmetic", cls: "cat-cosmetic" },
  { num: "iii", label: "Periodontal", count: "8 services", anchor: "periodontal", cls: "cat-periodontal" },
  { num: "iv", label: "Restorative", count: "6 services", anchor: "restorative", cls: "cat-restorative" },
];

export default function ProceduresHero() {
  return (
    <section className="page-hero procedures-hero">
      <div className="page-hero-inner procedures-hero-inner">
        <div className="page-hero-content">
          <div className="num">— Procedures —</div>
          <h1>
            Dental procedures, <em>end to end.</em>
          </h1>
          <p className="page-hero-sub">
            Whether your dental needs are a complete exam and cleaning, a
            full-mouth restoration, or anything in between, we provide
            exceptional care while enhancing the natural beauty of your smile.
            Below are some of the many procedures and services we regularly
            provide — with a gentle touch and considered results.
          </p>
          <div className="procedures-hero-actions">
            <a href="/#booker" className="btn btn-primary btn-lg">
              Book a visit →
            </a>
            <a href="#all-services" className="btn btn-ghost btn-lg">
              See full list
            </a>
          </div>
        </div>

        <div className="procedures-hero-feature">
          <Image
            src="/img/lIVE Piedmont website images/5477-dentist_showing_patient_xrays-732x549-thumbnail-732x549-1.avif"
            alt="Dentist showing patient X-rays at Piedmont Dental By Design"
            fill
            sizes="(max-width: 1080px) 100vw, 540px"
            style={{ objectFit: "cover" }}
            priority
          />
          <span className="feature-tag">
            25 procedures · 4 categories · one practice
          </span>
          <ul className="procedures-summary-grid">
            {SUMMARY.map((s) => (
              <li key={s.label}>
                <a href={`#${s.anchor}`} className={`proc-summary-card ${s.cls}`}>
                  <span className="psc-num">{s.num}</span>
                  <span className="psc-label">{s.label}</span>
                  <span className="psc-count">{s.count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
