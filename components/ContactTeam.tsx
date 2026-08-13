import Image from "next/image";

/**
 * Contact page team band — puts faces on the page so it feels warmer and more
 * personal (client request: "add a team photo or something to liven it up").
 * Reuses the existing full-team photo and the shared caption styling.
 */
export default function ContactTeam() {
  return (
    <section className="contact-team" id="team">
      <div className="contact-team-inner">
        <header className="section-head contact-team-head">
          <div>
            <div className="num">ii. — The team</div>
            <h2>
              The people who&apos;ll <em>greet you.</em>
            </h2>
          </div>
          <p className="lede">
            From the front desk to the treatment room, you&apos;ll see the same
            familiar faces visit after visit — most of our team has cared for
            patients on Grand Avenue for over a decade. Your care is led by
            co-owners Dr. Jill A. Martenson, DDS — University of the Pacific
            School of Dentistry, with a General Practice Residency at the
            University of Colorado — and Dr. David Ma, who trained at the
            University of Pennsylvania School of Dental Medicine.
          </p>
        </header>

        <div className="contact-team-photo">
          <Image
            src="/img/about/full-team.jpg"
            alt="The Piedmont Dental By Design team outside the Grand Avenue office"
            width={2400}
            height={1600}
            sizes="(max-width: 1280px) 100vw, 1216px"
          />
          <span className="page-hero-image-caption contact-team-caption">
            The Piedmont Dental By Design team · Grand Avenue
          </span>
        </div>
      </div>
    </section>
  );
}
