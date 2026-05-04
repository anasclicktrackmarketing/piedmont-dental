const SUMMARY = [
  { num: "01", label: "Daily care", anchor: "care" },
  { num: "02", label: "Conditions", anchor: "conditions" },
  { num: "03", label: "Cosmetic", anchor: "cosmetic" },
];

export default function FAQsHero() {
  return (
    <section className="page-hero faqs-hero">
      <div className="page-hero-inner">
        <div className="page-hero-content">
          <div className="num">— FAQs —</div>
          <h1>
            Dental questions, <em>answered.</em>
          </h1>
          <p className="page-hero-sub">
            The most common dental health questions our patients ask. From daily
            brushing to veneers and whitening — answered by the practice. If you
            have a question you don&apos;t see below, call us during open hours
            or text the practice.
          </p>
          <div className="procedures-hero-actions">
            <a href="#all-faqs" className="btn btn-primary btn-lg">
              Browse questions →
            </a>
            <a href="tel:5103503937" className="btn btn-ghost btn-lg">
              Call (510) 350-3937
            </a>
          </div>
        </div>

        <ul className="faqs-hero-jump">
          {SUMMARY.map((s) => (
            <li key={s.label}>
              <a href={`#${s.anchor}`}>
                <span className="fhj-num">{s.num}</span>
                <span className="fhj-label">{s.label}</span>
                <span className="fhj-arrow">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
