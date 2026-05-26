type Group = { heading: string; sub: string; items: string[] };

const groups: Group[] = [
  {
    heading: "Cleanings & Prevention",
    sub: "Routine care",
    items: [
      "Dental Exams & Cleanings",
      "Dental X-Rays",
      "Home Care",
      "Panoramic X-rays",
      "Fluoride Treatment",
      "How to Properly Brush & Floss",
    ],
  },
  {
    heading: "Cosmetic Dentistry",
    sub: "Smile design",
    items: [
      "Porcelain Veneers",
      "Teeth Whitening",
      "Surgery",
      "CEREC®",
      "Invisalign®",
    ],
  },
  {
    heading: "Periodontal Services",
    sub: "Gum health",
    items: [
      "What is Periodontal (Gum) Disease?",
      "Treatment",
      "Maintenance",
      "Gum Grafting",
      "Bone Grafting",
      "Crown Lengthening",
      "Periodontal Scaling & Root Planing",
      "Sinus Augmentation",
    ],
  },
  {
    heading: "Dental Restorations",
    sub: "Repair & rebuild",
    items: [
      "Dental Implants",
      "Composite Fillings",
      "Crowns (Caps)",
      "Dentures & Partial Dentures",
      "Fixed Bridges",
      "Root Canal Therapy",
    ],
  },
];

export default function ProceduresAllServices() {
  return (
    <section className="all-services-section" id="all-services">
      <div className="all-services-inner">
        <header className="section-head all-services-head">
          <div>
            <div className="num">ii. — Full list</div>
            <h2>
              Every procedure we <em>regularly</em> provide.
            </h2>
            <p className="about-question">From routine to advanced — what&apos;s available?</p>
          </div>
          <p className="lede">
            Twenty-five distinct procedures across four categories. Anything not
            on this list, ask during your consultation — we either provide it or
            refer to a colleague we trust.
          </p>
        </header>

        <div className="all-services-grid">
          {groups.map((g) => (
            <article className="svc-column" key={g.heading}>
              <header>
                <span className="svc-column-sub">{g.sub}</span>
                <h3>{g.heading}</h3>
              </header>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
