import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { CITY_PAGES } from "@/lib/internal-links";
import { posts } from "@/components/BlogIndex";

// Review index for the Month 2 content package. Preview deploys only — the
// root layout emits noindex on any non-production deploy, and this route is
// deliberately absent from app/sitemap.ts so it is never advertised.
// Remove this folder when the package is approved and scheduled.

export const metadata: Metadata = {
  title: "Month 2 content — review",
  description:
    "Review index for the Month 2 content package: 12 city service pages and 10 new guides.",
  robots: { index: false, follow: false },
};

const PREVIEW_SLUGS = [
  "dental-implant-cost-east-bay",
  "dental-bridge-vs-implant",
  "invisalign-cost-east-bay",
  "can-invisalign-fix-a-gummy-smile",
  "same-day-veneers-east-bay",
  "veneers-vs-crowns",
  "what-is-facelift-dentistry",
  "gum-disease-stages",
  "when-to-see-a-gum-specialist",
  "gum-recession-treatment",
];

export default function MonthTwoPreviewPage() {
  const previewPosts = PREVIEW_SLUGS.map((slug) =>
    posts.find((p) => p.slug === slug),
  ).filter(Boolean) as typeof posts;

  const oakland = CITY_PAGES.filter((p) => p.city === "Oakland");
  const berkeley = CITY_PAGES.filter((p) => p.city === "Berkeley");

  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <div className="page-hero-content">
              <div className="num">For review</div>
              <h1>Month 2 content</h1>
              <p className="page-hero-sub">
                Twelve new service pages for Oakland and Berkeley, and ten new
                guides. Everything below is on a private preview — none of it is
                on your live website yet, and nothing here can be found by
                Google.
              </p>
            </div>
          </div>
        </section>

        <section className="proc-detail-body">
          <div className="proc-detail-body-inner proc-detail-body-inner--full">
            <article className="proc-main">
              <p className="proc-paragraph">
                Two things worth a look as you read: the <strong>writing</strong>{" "}
                — whether it sounds like your practice and says what you would
                say — and the <strong>design</strong>, which reuses the same page
                layout as your existing procedure pages.
              </p>
              <p className="proc-paragraph">
                Every price mentioned is a published market range from Delta
                Dental, CareCredit or Invisalign, credited on the page. None of
                them is your fee, and no page quotes a price of yours.
              </p>

              <section className="proc-section">
                <h2 className="proc-section-title">
                  Service pages — Oakland ({oakland.length})
                </h2>
                <ul className="proc-bullets">
                  {oakland.map((p) => (
                    <li key={p.href}>
                      <Link href={p.href}>{p.title}</Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="proc-section">
                <h2 className="proc-section-title">
                  Service pages — Berkeley ({berkeley.length})
                </h2>
                <ul className="proc-bullets">
                  {berkeley.map((p) => (
                    <li key={p.href}>
                      <Link href={p.href}>{p.title}</Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="proc-section">
                <h2 className="proc-section-title">
                  New guides ({previewPosts.length})
                </h2>
                <ul className="proc-bullets">
                  {previewPosts.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="proc-section">
                <h2 className="proc-section-title">A note on the photographs</h2>
                <p className="proc-paragraph">
                  The service pages currently reuse the photographs from your
                  existing procedure pages. They are placeholders for this
                  review — if you would like specific images on any page, tell us
                  which and we will swap them before anything goes live.
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
