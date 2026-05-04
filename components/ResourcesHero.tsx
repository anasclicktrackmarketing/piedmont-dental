import Image from "next/image";

const HIGHLIGHTS = [
  { num: "9", label: "Patient resources" },
  { num: "3", label: "External portals" },
  { num: "5+", label: "Smile gallery cases" },
];

export default function ResourcesHero() {
  return (
    <section className="page-hero resources-hero">
      <div className="page-hero-inner">
        <div className="page-hero-content">
          <div className="num">— Patient Resources —</div>
          <h1>
            Everything you need <em>before, during,</em>
            <br />
            and after your visit.
          </h1>
          <p className="page-hero-sub">
            Patient forms, post-op instructions, our smile gallery, insurance and
            financing info, and educational resources — all in one place. New
            patients can complete paperwork online to save time at the office.
          </p>

          <div className="procedures-hero-actions">
            <a href="#hub" className="btn btn-primary btn-lg">
              Browse resources →
            </a>
            <a href="/#booker" className="btn btn-ghost btn-lg">
              Book a visit
            </a>
          </div>

          <ul className="resources-hero-stats">
            {HIGHLIGHTS.map((h) => (
              <li key={h.label}>
                <span className="rh-num">{h.num}</span>
                <span className="rh-label">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="page-hero-image">
          <Image
            src="/about.jpg"
            alt="Patient resources at Piedmont Dental By Design"
            fill
            sizes="(max-width: 1080px) 100vw, 540px"
            style={{ objectFit: "cover" }}
            priority
          />
          <span className="page-hero-image-caption">
            Self-service · Educational · On your time
          </span>
        </div>
      </div>
    </section>
  );
}
