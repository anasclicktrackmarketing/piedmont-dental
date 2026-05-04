import Image from "next/image";

type Tile = {
  num: string;
  category: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
};

const tiles: Tile[] = [
  {
    num: "01",
    category: "Cosmetic",
    title: "Porcelain veneers",
    caption: "Hand-shaped, color-matched in person",
    image: "/svc/veneers.jpg",
    alt: "Close-up of a polished smile after veneer treatment",
  },
  {
    num: "02",
    category: "Cosmetic",
    title: "Tooth whitening",
    caption: "In-office and take-home programs",
    image: "/svc/whitening.jpg",
    alt: "Patient with bright, naturally white teeth smiling",
  },
  {
    num: "03",
    category: "Cosmetic",
    title: "Invisalign®",
    caption: "Clear aligners, planned in 3D",
    image: "/svc/invisalign.jpg",
    alt: "Clear Invisalign aligners",
  },
  {
    num: "04",
    category: "Restorative",
    title: "Dental implants",
    caption: "Replace missing teeth with a permanent fix",
    image: "/svc/implants.jpg",
    alt: "Restored smile after dental implant treatment",
  },
  {
    num: "05",
    category: "Restorative",
    title: "CEREC® crowns",
    caption: "Same-day digital crowns, in one visit",
    image: "/svc/cerec.jpg",
    alt: "CEREC dental tools and equipment",
  },
  {
    num: "06",
    category: "Restorative",
    title: "Full mouth restoration",
    caption: "Comprehensive rebuild, planned together",
    image: "/svc/restoration.jpg",
    alt: "Restorative dentistry consultation",
  },
  {
    num: "07",
    category: "Periodontal",
    title: "Gum care",
    caption: "Treatment, grafting, scaling & root planing",
    image: "/svc/perio.jpg",
    alt: "Periodontal gum treatment",
  },
  {
    num: "08",
    category: "Preventive",
    title: "Cleanings & exams",
    caption: "Routine care for the whole family",
    image: "/svc/cleanings.jpg",
    alt: "Patient brushing her teeth",
  },
];

const TILE_COUNT = tiles.length;

export default function Services() {
  // Render the array twice so the auto-scroll loop seams invisibly.
  const loop = [...tiles, ...tiles];

  return (
    <section className="services-section" id="cosmetic">
      <div className="services-head">
        <header className="section-head">
          <div>
            <div className="num">i. — Care</div>
            <h2>
              From routine to <em>complete</em> smile design.
            </h2>
            <p className="services-question">
              What care does Piedmont Dental offer?
            </p>
          </div>
          <p className="lede">
            Piedmont Dental By Design covers four categories under one roof:
            cosmetic (veneers, whitening, Invisalign), restorative (implants,
            CEREC crowns, full-mouth rebuild), periodontal (gum disease,
            grafting), and preventive (cleanings, exams, X-rays) — all
            delivered by Dr. Martenson, Dr. Cangini, and Dr. Ma.
          </p>
        </header>
      </div>

      <div
        className="services-carousel"
        style={{ ["--tile-count" as string]: TILE_COUNT }}
      >
        <div className="services-track">
          {loop.map((t, i) => (
            <a
              href="#booker"
              className="svc-tile"
              key={`${t.num}-${i}`}
              aria-label={`Book a consult — ${t.title}`}
            >
              <div className="svc-tile-img">
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <header className="svc-tile-head">
                <span className="svc-tile-num">{t.num}</span>
                <span className="svc-tile-cat">{t.category}</span>
              </header>
              <footer className="svc-tile-foot">
                <h3>{t.title}</h3>
                <p>{t.caption}</p>
              </footer>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
