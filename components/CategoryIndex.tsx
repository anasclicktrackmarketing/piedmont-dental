import Image from "next/image";
import Link from "next/link";
import type { CategorySlug, ProcedureItem } from "@/lib/procedure-categories";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export type CategoryIndexProps = {
  slug: CategorySlug;
  label: string;
  /** Italic subtitle shown above the H1, e.g. "Procedures · Restoration" */
  eyebrow: string;
  /** H1 — typically just the category label or a short descriptor */
  title: string;
  intro: string[];
  /** Featured image for the hero — defaults to category image if not provided */
  image: string;
  imageAlt: string;
  /** Cards for each sub-procedure */
  cards: (ProcedureItem & { description: string; meta: string })[];
};

export default function CategoryIndex({
  slug,
  label,
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  cards,
}: CategoryIndexProps) {
  return (
    <>
      {/* Hero */}
      <section className="page-hero cat-index-hero">
        <div className="page-hero-inner cat-index-hero-inner">
          <div className="page-hero-content">
            <div className="num">{eyebrow}</div>
            <h1 className="cat-index-title">{title}</h1>
            {intro.map((p, i) => (
              <p key={i} className="page-hero-sub">
                {p}
              </p>
            ))}
            <div className="procedures-hero-actions">
              <a href="/#booker" className="btn btn-primary btn-lg">
                Book a consultation →
              </a>
              <Link href="/procedures" className="btn btn-ghost btn-lg">
                All procedures
              </Link>
            </div>
          </div>

          <div className="cat-index-image">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1080px) 100vw, 540px"
              style={{ objectFit: "cover" }}
              priority
            />
            <span className="cat-index-tag">
              {cards.length} {label.toLowerCase()} procedures
            </span>
          </div>
        </div>
      </section>

      {/* Sub-procedure list */}
      <section className="cat-index-list">
        <div className="cat-index-list-inner">
          <header className="section-head">
            <div>
              <div className="num">i. — Procedures</div>
              <h2>
                Treatments under <em>{label.toLowerCase()}.</em>
              </h2>
            </div>
            <p className="lede">
              {cards.length} procedures, all performed in-house. Click any to
              read what&apos;s involved, common reasons, and what to expect at
              your visit.
            </p>
          </header>

          <ol className="cat-index-grid">
            {cards.map((c, i) => (
              <li key={c.slug}>
                <Link
                  className="cat-index-card"
                  href={`/procedures/${slug}/${c.slug}`}
                >
                  <span className="cic-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="cic-content">
                    <h3>{c.title}</h3>
                    <p className="cic-desc">{c.description}</p>
                    <span className="cic-meta">{c.meta}</span>
                  </div>
                  <span className="cic-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <BreadcrumbSchema
        crumbs={[
          { name: "Procedures", url: "/procedures" },
          { name: label, url: `/procedures/${slug}` },
        ]}
      />
    </>
  );
}
