import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { SmileGalleryDoc } from "@/lib/smile-gallery";

type RelatedItem = { url: string; title: string; blurb: string };

export default function SmileGalleryPage({
  doc,
  related,
  showBack = true,
}: {
  doc: SmileGalleryDoc;
  related: RelatedItem[];
  /** Set false on the gallery hub */
  showBack?: boolean;
}) {
  return (
    <>
      <section className="resource-hero">
        <div className="resource-hero-inner">
          <div className="resource-hero-text">
            {showBack && (
              <Link href="/smile-gallery" className="post-hero-back">
                ← Back to gallery
              </Link>
            )}
            <div className="num" style={{ marginTop: 12 }}>
              Smile Gallery
            </div>
            <h1 className="resource-hero-title">{doc.title}</h1>
            <p className="resource-hero-description">{doc.description}</p>
            <p className="resource-hero-note">
              <strong>Note:</strong> Patients shown in these case studies have
              consented to display their photographs. Individual results vary
              by case.
            </p>
          </div>
        </div>
      </section>

      <section className="resource-body">
        <div className="resource-body-inner">
          <article className="post-prose resource-prose">
            {doc.body.trim().length > 30 ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h1: () => null }}>
                {doc.body}
              </ReactMarkdown>
            ) : (
              <div className="resource-empty">
                <h2>See real results in person.</h2>
                <p>
                  Our before-and-after photography is presented during your
                  in-person consultation, where we walk through cases relevant
                  to your situation.
                </p>
                <a href="/#booker" className="btn btn-primary btn-lg">
                  Book a consultation →
                </a>
              </div>
            )}
          </article>

          <aside className="resource-sidebar">
            <div className="post-sidebar-card">
              <span className="num">i. — Talk to us</span>
              <h3>Curious what&apos;s possible?</h3>
              <p className="resource-sidebar-blurb">
                Schedule a consultation and we&apos;ll walk through cases
                similar to yours.
              </p>
              <a href="/#booker" className="btn btn-primary post-sidebar-cta">
                Book a visit →
              </a>
              <a href="tel:5103503937" className="resource-sidebar-phone">
                or call (510) 350-3937
              </a>
            </div>

            {related.length > 0 && (
              <div className="post-sidebar-card">
                <span className="num">ii. — More cases</span>
                <h3>Browse other galleries</h3>
                <ul>
                  {related.map((r) => (
                    <li key={r.url}>
                      <Link href={r.url}>{r.title} →</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
