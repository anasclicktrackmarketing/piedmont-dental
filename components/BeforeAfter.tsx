import Image from "next/image";

export default function BeforeAfter() {
  return (
    <div className="ba-band">
      <div className="ba-inner">
        <div className="section-head">
          <div>
            <div className="num">ii. — The work</div>
            <h2>
              The smile you&apos;d <em>design</em> for yourself.
            </h2>
            <p className="ba-question">Can dental care really change a smile?</p>
          </div>
          <p className="lede">
            Yes. The image below is an in-office whitening result from the
            practice&apos;s media — same lighting before and after, no other
            treatment. Veneers, Invisalign, and full-mouth work go further; see
            the smile gallery for case-by-case before and after photos.
          </p>
        </div>

        <div className="ba-photo">
          <Image
            src="/before-after.jpg"
            alt="Before and after teeth whitening"
            fill
            sizes="(max-width: 1080px) 100vw, 1280px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority={false}
          />
          <span className="ba-tag before">Before</span>
          <span className="ba-tag after">After</span>
        </div>

        <div className="ba-foot">
          <div className="meta">
            <b>Tooth whitening</b> — illustrative case from the practice&apos;s media.
          </div>
          <a href="#booker" className="btn btn-primary">
            Book a smile consultation →
          </a>
        </div>
      </div>
    </div>
  );
}
