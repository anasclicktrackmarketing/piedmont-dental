import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="page-hero about-page-hero">
      <div className="page-hero-inner">
        <div className="page-hero-content">
          <div className="num">— About Us —</div>
          <h1>
            Your trusted dentist in <em>Piedmont</em>
            <br />
            and the East Bay for over 30 years.
          </h1>
          <p className="page-hero-sub">
            Piedmont Dental By Design is a small, intentional dental practice on
            Grand Avenue. We are devoted to restoring and enhancing the natural
            beauty of your smile using conservative, state-of-the-art procedures
            that result in beautiful, long-lasting smiles.
          </p>

          <ul className="page-hero-meta">
            <li>
              <span className="meta-num">30</span>
              <span>
                <b>Years</b>
                of practice experience
              </span>
            </li>
            <li>
              <span className="meta-num">★</span>
              <span>
                <b>Best of the East Bay 2024 &amp; 2025</b>
                Best Esthetic Dentist &amp; Best Dental Practice
              </span>
            </li>
            <li>
              <span className="meta-num">2</span>
              <span>
                <b>Dr. Martenson &amp; Dr. Ma</b>
                Co-Owners of the practice
              </span>
            </li>
          </ul>
        </div>

        <div className="page-hero-image" style={{ aspectRatio: "3 / 2" }}>
          <Image
            src="/img/about/full-team.jpg"
            alt="The Piedmont Dental By Design team"
            fill
            sizes="(max-width: 1080px) 100vw, 540px"
            style={{ objectFit: "cover" }}
            priority
          />
          <span className="page-hero-image-caption">
            The Piedmont Dental By Design team · Grand Avenue
          </span>
        </div>
      </div>
    </section>
  );
}
