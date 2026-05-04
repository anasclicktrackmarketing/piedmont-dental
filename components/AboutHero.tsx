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
            and the East Bay.
          </h1>
          <p className="page-hero-sub">
            Piedmont Dental By Design is a small, intentional dental practice on
            Grand Avenue. We are devoted to restoring and enhancing the natural
            beauty of your smile using conservative, state-of-the-art procedures
            that result in beautiful, long-lasting smiles.
          </p>

          <ul className="page-hero-meta">
            <li>
              <span className="meta-num">29</span>
              <span>
                <b>Years</b>
                of practice experience
              </span>
            </li>
            <li>
              <span className="meta-num">★</span>
              <span>
                <b>Best Esthetic Dentist 2024</b>
                Best of the East Bay readers&apos; choice
              </span>
            </li>
            <li>
              <span className="meta-num">JM</span>
              <span>
                <b>Dr. Jill Martenson, DDS</b>
                Owner &amp; Lead Dentist
              </span>
            </li>
          </ul>
        </div>

        <div className="page-hero-image">
          <Image
            src="/about.jpg"
            alt="Dr. Jill Martenson at Piedmont Dental By Design"
            fill
            sizes="(max-width: 1080px) 100vw, 540px"
            style={{ objectFit: "cover" }}
            priority
          />
          <span className="page-hero-image-caption">
            1331 Grand Avenue · Piedmont, California
          </span>
        </div>
      </div>
    </section>
  );
}
