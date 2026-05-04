type Award = {
  ico: string;
  headline: string;
  title: string;
  meta: string;
};

const awards: Award[] = [
  {
    ico: "★",
    headline: "2024",
    title: "Best Esthetic Dentist",
    meta: "Best of the East Bay readers' choice",
  },
  {
    ico: "G",
    headline: "4.9 / 5",
    title: "Google Reviews",
    meta: "From 344 verified patients",
  },
  {
    ico: "⊕",
    headline: "AACD · ADA · CDA",
    title: "Member affiliations",
    meta: "Three professional associations",
  },
  {
    ico: "25",
    headline: "Since 2000",
    title: "Serving the East Bay",
    meta: "Twenty-five years of cosmetic & restorative care",
  },
];

export default function AwardsStrip() {
  return (
    <section className="awards" id="awards">
      <div className="awards-inner">
        <p className="awards-eyebrow">— Trusted in the East Bay —</p>
        <div className="awards-grid">
          {awards.map((a) => (
            <article className="award" key={a.title}>
              <span className="award-ico">{a.ico}</span>
              <div className="award-headline">{a.headline}</div>
              <h3 className="award-title">{a.title}</h3>
              <p className="award-meta">{a.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
