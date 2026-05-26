import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { BlogPost as BlogPostData } from "@/lib/blog";
import type { Post } from "@/components/BlogIndex";

export default function BlogPost({
  post,
  related,
}: {
  post: BlogPostData;
  related: Post[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="post-hero">
        <div className="post-hero-inner">
          <div className="post-hero-text">
            <div className="post-hero-meta">
              <Link href="/blog" className="post-hero-back">
                ← Back to blog
              </Link>
              <span className="post-hero-cat">{post.category}</span>
              <time className="post-hero-date" dateTime={post.dateISO}>
                {post.date}
              </time>
              <span className="post-hero-byline">
                By{" "}
                <Link href="/about/dr-martenson" rel="author">
                  Dr. Jill Martenson
                </Link>
              </span>
            </div>
            <h1 className="post-hero-title">{post.title}</h1>
            <p className="post-hero-excerpt">{post.excerpt}</p>
          </div>
          <div className="post-hero-image">
            <Image
              src={post.image}
              alt={post.alt}
              fill
              sizes="(max-width: 1080px) 50vw, 540px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="post-body">
        <div className="post-body-inner">
          <article className="post-prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Skip the H1 — the hero already shows the title
                h1: () => null,
                a: ({ href, children, ...rest }) => {
                  const isExternal =
                    href?.startsWith("http") &&
                    !href.startsWith("https://piedmontdentalbydesign.com");
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
              {post.body}
            </ReactMarkdown>
          </article>

          <aside className="post-sidebar">
            <div className="post-sidebar-card">
              <span className="num">i. — Quick links</span>
              <h3>Looking for a service?</h3>
              <ul>
                <li>
                  <Link href="/procedures/cosmetic-dentistry">
                    Cosmetic Dentistry →
                  </Link>
                </li>
                <li>
                  <Link href="/procedures/restoration/dental-implants">
                    Dental Implants →
                  </Link>
                </li>
                <li>
                  <Link href="/procedures/cleanings-prevention">
                    Cleanings & Prevention →
                  </Link>
                </li>
                <li>
                  <Link href="/procedures">All procedures →</Link>
                </li>
              </ul>
              <a href="/#booker" className="btn btn-primary post-sidebar-cta">
                Book a visit →
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="post-related">
          <div className="post-related-inner">
            <header className="section-head">
              <div>
                <div className="num">ii. — More reading</div>
                <h2>
                  Other <em>articles.</em>
                </h2>
              </div>
              <Link href="/blog" className="post-related-all">
                Browse all posts →
              </Link>
            </header>
            <div className="post-related-grid">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={p.href ?? `/blog/${p.slug}`}
                  className="post-related-card"
                >
                  <div className="post-related-media">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 1080px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <span className="post-related-cat">{p.category}</span>
                  </div>
                  <div className="post-related-body">
                    <time dateTime={p.dateISO}>{p.date}</time>
                    <h3>{p.title}</h3>
                    <span className="post-related-cta">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
