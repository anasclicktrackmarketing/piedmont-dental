import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import {
  getGalleryBySlug,
  getGalleryCardData,
} from "@/lib/smile-gallery";

const doc = getGalleryBySlug("_index");

export const metadata: Metadata = {
  title: `${doc.title} | Piedmont Dental By Design`,
  description: doc.description,
  alternates: { canonical: doc.url },
  openGraph: {
    title: `${doc.title} — Piedmont Dental By Design`,
    description: doc.description,
    url: `https://piedmontdentalbydesign.com${doc.url}`,
    type: "website",
  },
};

export default function SmileGalleryHubPage() {
  const cards = getGalleryCardData().filter(
    (c) => c.slug !== "other-procedures" && c.slug !== "_index"
  );
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <section className="page-hero gallery-hub-hero">
          <div className="page-hero-inner">
            <div className="page-hero-content">
              <div className="num">— Smile Gallery —</div>
              <h1>
                Real patients. <em>Real results.</em>
              </h1>
              <p className="page-hero-sub">
                Browse before-and-after photography from our patients across
                cosmetic, restorative, and orthodontic treatments. Every photo
                here is from a real Piedmont Dental By Design patient who
                consented to display their results.
              </p>
              <div className="procedures-hero-actions">
                <a href="#cases" className="btn btn-primary btn-lg">
                  Browse case studies →
                </a>
                <Link href="/#booker" className="btn btn-ghost btn-lg">
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cat-index-list" id="cases">
          <div className="cat-index-list-inner">
            <header className="section-head">
              <div>
                <div className="num">i. — Case studies</div>
                <h2>
                  Treatments with <em>before & after</em> photography.
                </h2>
              </div>
              <p className="lede">
                {cards.length} case study sets across the procedures we
                perform. Click any to see real patient outcomes.
              </p>
            </header>

            <ol className="cat-index-grid">
              {cards.map((c, i) => (
                <li key={c.slug}>
                  <Link className="cat-index-card" href={c.url}>
                    <span className="cic-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="cic-content">
                      <h3>{c.title}</h3>
                      <p className="cic-desc">{c.description}</p>
                      <span className="cic-meta">{c.blurb}</span>
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

        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
