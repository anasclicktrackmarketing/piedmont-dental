import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { LegalDoc } from "@/lib/legal";

export default function LegalPage({
  doc,
  /** Optional callout shown beneath the body — used by the NPP page for the PDF link. */
  footer,
}: {
  doc: LegalDoc;
  footer?: React.ReactNode;
}) {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="num">Legal</div>
          <h1 className="legal-hero-title">{doc.title}</h1>
          {doc.effectiveDate && (
            <p className="legal-hero-effective">
              Effective {doc.effectiveDate}
            </p>
          )}
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-body-inner">
          <article className="post-prose legal-prose">
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
          </article>

          {footer && <div className="legal-footer-callout">{footer}</div>}

          <div className="legal-cross-links">
            <span className="num">Other legal documents</span>
            <ul>
              {doc.slug !== "terms-and-conditions" && (
                <li>
                  <Link href="/terms-and-conditions">
                    Terms &amp; Conditions →
                  </Link>
                </li>
              )}
              {doc.slug !== "privacy-policy-2" && (
                <li>
                  <Link href="/privacy-policy-2">Privacy Policy →</Link>
                </li>
              )}
              {doc.slug !== "notice-of-privacy-practices" && (
                <li>
                  <Link href="/notice-of-privacy-practices">
                    Notice of Privacy Practices →
                  </Link>
                </li>
              )}
              <li>
                <Link href="/contact">Contact us →</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
