import Image from "next/image";

type Category = {
  num: string;
  title: string;
  blurb: string;
  image: string;
  alt: string;
  anchor: string;
  highlights: string[];
};

const categories: Category[] = [
  {
    num: "i",
    title: "Cleanings & Prevention",
    blurb:
      "Piedmont Dental by Design provides professional cleanings to remove plaque and tartar while promoting proper home care to prevent cavities and gum disease.",
    image: "/svc/cleanings.jpg",
    alt: "Routine cleaning and exam",
    anchor: "prevention",
    highlights: [
      "Comprehensive exams",
      "Cleanings",
      "Digital & panoramic X-rays",
      "Fluoride treatment",
      "Home-care guidance",
    ],
  },
  {
    num: "ii",
    title: "Cosmetic Dentistry",
    blurb:
      "Cosmetic services like teeth whitening, veneers, and bonding to enhance smiles. Our treatments improve the appearance of teeth while maintaining natural function and health.",
    image: "/svc/veneers.jpg",
    alt: "Polished cosmetic smile result",
    anchor: "cosmetic",
    highlights: [
      "Porcelain veneers",
      "Tooth whitening",
      "Smile design",
      "CEREC® same-day crowns",
      "Invisalign®",
    ],
  },
  {
    num: "iii",
    title: "Periodontal Services",
    blurb:
      "Deep cleanings and gum disease treatments to maintain healthy gums and prevent tooth loss. Procedures like scaling and root planing remove harmful bacteria and restore gum health.",
    image: "/svc/perio.jpg",
    alt: "Periodontal gum care",
    anchor: "periodontal",
    highlights: [
      "Gum disease treatment",
      "Gum & bone grafting",
      "Crown lengthening",
      "Scaling & root planing",
      "Sinus augmentation",
    ],
  },
  {
    num: "iv",
    title: "Dental Restorations",
    blurb:
      "Fillings, crowns, and implants to repair damaged or missing teeth. Our treatments restore function, strength, and aesthetics for a healthy, natural smile.",
    image: "/svc/restoration.jpg",
    alt: "Restorative dentistry",
    anchor: "restorative",
    highlights: [
      "Dental implants",
      "Composite fillings",
      "Porcelain crowns",
      "Bridges & dentures",
      "Full mouth restoration",
      "Root canal therapy",
    ],
  },
];

export default function ProceduresCategories() {
  return (
    <section className="proc-cats">
      <div className="proc-cats-inner">
        <header className="section-head proc-cats-head">
          <div>
            <div className="num">i. — Categories</div>
            <h2>
              Four kinds of care, <em>under one roof.</em>
            </h2>
            <p className="about-question">What does Piedmont Dental treat?</p>
          </div>
          <p className="lede">
            Cosmetic, restorative, periodontal, and preventive — every visit
            stays inside the practice, with the same team handling every step.
          </p>
        </header>

        <div className="proc-cats-grid">
          {categories.map((c) => (
            <article className="proc-cat-card" key={c.title} id={c.anchor}>
              <div className="proc-cat-img">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="proc-cat-num">{c.num}</span>
              </div>
              <div className="proc-cat-body">
                <h3>{c.title}</h3>
                <p>{c.blurb}</p>
                <ul className="proc-cat-highlights">
                  {c.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <a href="/#booker" className="proc-cat-cta">
                  Book a consultation →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
