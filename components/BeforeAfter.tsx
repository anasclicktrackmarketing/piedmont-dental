import Image from "next/image";
import Link from "next/link";

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
          </div>
          <div>
            <p className="ba-question">Can dental care really change a smile?</p>
            <p className="lede">
              Yes. The pair below is an in-office whitening result from one of
              our patients — same lighting before and after, no other treatment.
              Veneers, Invisalign®, and full-mouth work go further; see the{" "}
              <Link href="/smile-gallery" className="ba-gallery-link">
                smile gallery
              </Link>{" "}
              for case-by-case before and after photos.
            </p>
          </div>
        </div>

        <div className="ba-pair">
          <figure className="ba-half">
            <div className="ba-half-img">
              <Image
                src="/before-after-before.jpg"
                alt="Patient's smile before whitening — yellow staining visible"
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 520px"
                style={{ objectFit: "cover" }}
              />
              <span className="ba-tag ba-tag--before">Before</span>
            </div>
          </figure>
          <figure className="ba-half">
            <div className="ba-half-img">
              <Image
                src="/before-after-after.jpg"
                alt="Same smile after in-office whitening — brighter shade, same lighting"
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 520px"
                style={{ objectFit: "cover" }}
              />
              <span className="ba-tag ba-tag--after">After</span>
            </div>
          </figure>
        </div>

        <div className="ba-foot">
          <div className="meta">
            <b>Teeth whitening</b> — a real case from one of our patients.
          </div>
          <a href="#booker" className="btn btn-primary">
            Book a smile consultation →
          </a>
        </div>
      </div>
    </div>
  );
}
