import Image from "next/image";

const team = [
  {
    name: "Dr. Jill A. Martenson, DDS",
    role: "Lead dentist · cosmetic",
    initials: "JM",
    bg: "var(--teal)",
  },
  {
    name: "Dr. Filippo Cangini",
    role: "Periodontics",
    initials: "FC",
    bg: "var(--ink)",
  },
  {
    name: "Dr. David Ma",
    role: "Restorative",
    initials: "DM",
    bg: "var(--teal-deep)",
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-portrait">
        <Image
          src="/about.jpg"
          alt="Dr. Jill Martenson at Piedmont Dental By Design"
          fill
          sizes="(max-width: 1080px) 100vw, 540px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="about-text">
        <span className="num">iii. — The dentist</span>
        <h2>
          Twenty-five years of cosmetic dentistry, <em>in the East Bay.</em>
        </h2>

        <p className="about-question">Who is Dr. Jill Martenson?</p>
        <p className="about-answer">
          Dr. Jill A. Martenson, DDS, has led Piedmont Dental By Design since
          2000. She was voted Best Esthetic Dentist 2024 by Best of the East Bay
          readers and is a member of the AACD, ADA, and CDA — three of the
          professional associations most associated with cosmetic dental
          standards.
        </p>

        <p>
          Working alongside Dr. Martenson are Dr. Filippo Cangini, who covers
          periodontics, and Dr. David Ma, who handles restorative work — so
          patients can stay with one practice for cosmetic, gum, and structural
          care.
        </p>

        {/* Author byline (T9) */}
        <aside className="about-byline" itemScope itemType="https://schema.org/Person">
          <span className="byline-avatar" aria-hidden="true">JM</span>
          <div className="byline-text">
            <span className="byline-name" itemProp="name">
              Dr. Jill A. Martenson, <span className="suffix">DDS</span>
            </span>
            <span className="byline-meta">
              <span itemProp="jobTitle">Lead dentist · cosmetic</span>
              <span className="byline-dot">·</span>
              25+ years
              <span className="byline-dot">·</span>
              <span itemProp="award">Best Esthetic Dentist 2024</span>
            </span>
          </div>
        </aside>

        <div className="about-team">
          {team.map((doc) => (
            <div className="doc" key={doc.name}>
              <span className="doc-avatar" style={{ background: doc.bg }}>
                {doc.initials}
              </span>
              <div>
                <h4>{doc.name}</h4>
                <p>{doc.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-cta">
          <a href="/about" className="btn btn-primary">
            More about the practice →
          </a>
          <a href="#booker" className="btn btn-ghost">
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
