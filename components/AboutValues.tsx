type Value = {
  num: string;
  title: string;
  body: string;
};

const values: Value[] = [
  {
    num: "01",
    title: "High standards",
    body:
      "We maintain a standard of excellence in personalized dental care, allowing us to deliver the quality services our patients deserve. Through comprehensive treatment planning and the use of restorative and cosmetic dentistry, we help you achieve optimal dental health. In an emergency we prioritize seeing and caring for you promptly.",
  },
  {
    num: "02",
    title: "Education & prevention",
    body:
      "Preventive care and education are key to optimal dental health. Our focus is on comprehensive dental health care rather than just disease care — thorough exams, oral cancer screenings, X-rays, cleanings, sealants, and fluoride treatments to prevent issues before they begin.",
  },
  {
    num: "03",
    title: "A positive experience",
    body:
      "We build trust by treating each patient as a unique individual. Dental visits can be anxiety-inducing, so our team is committed to a relaxing and positive experience with personalized care from the moment you walk in.",
  },
  {
    num: "04",
    title: "Modern technology",
    body:
      "Dr. Martenson stays current with advances in cosmetic dental science. Our office uses state-of-the-art technology including digital radiography — reducing radiation exposure by 80–90% versus film, with instant detailed imaging that catches hidden issues earlier.",
  },
  {
    num: "05",
    title: "Training & expertise",
    body:
      "Our highly trained team is dedicated to maintaining your dental health through continuous education. We stay current with the latest techniques, products, and equipment by attending industry events and as active members of the AACD, ADA, and CDA.",
  },
  {
    num: "06",
    title: "Uncompromising safety",
    body:
      "We prioritize infection control by adhering to strict sterilization and cross-contamination protocols based on guidelines from the ADA, OSHA, and CDC — protecting both our patients and staff at every visit.",
  },
];

export default function AboutValues() {
  return (
    <section className="bay values-section" id="values">
      <div className="section-head">
        <div>
          <div className="num">i. — Values</div>
          <h2>
            Six things we won&apos;t <em>compromise</em> on.
          </h2>
          <p className="about-question">What does Piedmont Dental stand for?</p>
        </div>
        <p className="lede">
          From sterilization to continuing education, six values shape every
          decision in the practice. They&apos;re what we measure ourselves
          against — not what we say to win patients, but what we follow to keep
          them.
        </p>
      </div>

      <div className="values-grid">
        {values.map((v) => (
          <article className="value-card" key={v.num}>
            <span className="value-num">{v.num}</span>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
