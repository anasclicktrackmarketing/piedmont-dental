import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ResourceDoc } from "@/lib/resources";

type RelatedItem = {
  url: string;
  title: string;
  blurb: string;
};

export default function ResourceArticle({
  doc,
  eyebrow,
  related,
}: {
  doc: ResourceDoc;
  /** Section pill above the title — e.g. "Patient Resources · Procedure info" */
  eyebrow: string;
  related: RelatedItem[];
}) {
  const isGallery = doc.group === "before-after";
  return (
    <>
      <section className="resource-hero">
        <div className="resource-hero-inner">
          <div className="resource-hero-text">
            <Link href="/resources" className="post-hero-back">
              ← Back to resources
            </Link>
            <div className="num" style={{ marginTop: 12 }}>
              {eyebrow}
            </div>
            <h1 className="resource-hero-title">{doc.title}</h1>
            <p className="resource-hero-description">{doc.description}</p>
            {isGallery && (
              <p className="resource-hero-note">
                <strong>Note:</strong> Patients depicted in these case studies
                have provided consent to display their pictures online. Results
                vary by case — schedule a consultation to discuss what&apos;s
                possible for your smile.
              </p>
            )}
          </div>
          {doc.featuredImage && (
            <div className="resource-hero-image">
              <Image
                src={doc.featuredImage}
                alt={doc.featuredImageAlt ?? doc.title}
                fill
                sizes="(max-width: 1080px) 100vw, 480px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}
        </div>
      </section>

      <section className="resource-body">
        <div className="resource-body-inner">
          <article className="post-prose resource-prose">
            {doc.body.trim().length > 30 ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: () => null,
                  a: ({ href, children, ...rest }) => {
                    const isExternal =
                      href?.startsWith("http") &&
                      !href.startsWith(
                        "https://piedmontdentalbydesign.com"
                      );
                    if (isExternal) {
                      return (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...rest}
                        >
                          {children}
                        </a>
                      );
                    }
                    return (
                      <a href={href} {...rest}>
                        {children}
                      </a>
                    );
                  },
                }}
              >
                {doc.body}
              </ReactMarkdown>
            ) : (
              <div className="resource-empty">
                <h2>See real results in person.</h2>
                <p>
                  This case showcase is presented in-office during your
                  consultation, where we walk through before-and-after
                  photography specific to your situation.
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
              <h3>Have questions?</h3>
              <p className="resource-sidebar-blurb">
                We&apos;re happy to walk through any of this in person — book a
                consultation and we&apos;ll set aside time.
              </p>
              <a
                href="/#booker"
                className="btn btn-primary post-sidebar-cta"
              >
                Book a visit →
              </a>
              <a href="tel:5103503937" className="resource-sidebar-phone">
                or call (510) 350-3937
              </a>
            </div>

            {related.length > 0 && (
              <div className="post-sidebar-card">
                <span className="num">ii. — Related resources</span>
                <h3>Keep reading</h3>
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
