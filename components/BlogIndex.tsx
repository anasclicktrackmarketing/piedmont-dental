import Image from "next/image";

export type Post = {
  slug: string;
  title: string;
  date: string; // human-readable
  dateISO: string; // ISO 8601 for schema/datetime
  category: string;
  image: string;
  alt: string;
  excerpt: string;
  /** Optional path the user has migrated. Defaults to /blog/<slug>. */
  href?: string;
  external?: boolean;
};

export const posts: Post[] = [
  {
    slug: "dental-implants-piedmont-ca",
    title:
      "Dental Implants in Piedmont, CA: The Permanent Solution for Missing Teeth",
    date: "March 9, 2026",
    dateISO: "2026-03-09",
    category: "Restorative",
    image: "/img/blog/dental-implants-piedmont-ca/hero.png",
    alt: "Dental implants illustration",
    excerpt:
      "Dental implants are widely recognized as the gold standard solution for missing teeth — the only option that replaces the entire tooth structure, including the root, for a result that looks, feels, and functions like a natural tooth.",
  },
  {
    slug: "cosmetic-dentist-piedmont-ca",
    title:
      "Cosmetic Dentistry in Piedmont, CA: Invisalign, Teeth Whitening and More",
    date: "February 9, 2026",
    dateISO: "2026-02-09",
    category: "Cosmetic",
    image: "/img/blog/cosmetic-dentist-piedmont-ca/hero.png",
    alt: "Cosmetic dentistry results",
    excerpt:
      "Your smile is one of the most powerful expressions of who you are. Whether you're preparing for a milestone or just ready to feel better about your teeth, modern cosmetic dentistry can create a transformation that's both meaningful and lasting.",
  },
  {
    slug: "family-dentist-piedmont-ca",
    title:
      "Why Piedmont Families Trust a General Dentist for Complete Oral Health",
    date: "January 9, 2026",
    dateISO: "2026-01-09",
    category: "Family Care",
    image: "/img/blog/family-dentist-piedmont-ca/hero.jpg",
    alt: "Family general dentist appointment",
    excerpt:
      "Choosing a dentist for your entire household is one of the most significant health decisions a family can make. From a child's first dental visit to a grandparent's routine cleaning, a trusted general dentist builds the foundation for lifelong oral wellness.",
  },
  {
    slug: "trusted-dentist-oakland-ca",
    title: "Trusted Dentist Near Oakland, CA – Piedmont Dental by Design",
    date: "December 9, 2025",
    dateISO: "2025-12-09",
    category: "Practice",
    image: "/img/blog/trusted-dentist-oakland-ca/hero.jpg",
    alt: "Practice exterior — trusted dentist near Oakland",
    excerpt:
      "If you're seeking a dedicated and experienced dentist near Oakland, look no further than Piedmont Dental by Design. Located at 1331 Grand Ave, Piedmont, we have been providing great dental care to the Oakland and Piedmont communities since 2000.",
  },
  {
    slug: "waterpik-vs-flossing",
    title: "Waterpik vs. Flossing: Which One Is Better for Your Teeth?",
    date: "November 9, 2025",
    dateISO: "2025-11-09",
    category: "Daily Care",
    image: "/img/blog/waterpik-vs-flossing/hero.jpg",
    alt: "Waterpik vs traditional dental floss",
    excerpt:
      "Brushing your teeth twice a day is essential — but it's only half the battle. Most people are familiar with traditional dental floss, but Waterpiks are becoming increasingly popular. So which is better for your teeth?",
  },
  {
    slug: "family-dentist-piedmont",
    title:
      "Family Dentists Near Me: Why Choosing a Local Family Dentist Matters",
    date: "October 9, 2025",
    dateISO: "2025-10-09",
    category: "Family Care",
    image: "/img/blog/family-dentist-piedmont/hero.jpg",
    alt: "Local family dentist visit",
    excerpt:
      "When it comes to your family's oral health, convenience, consistency, and comfort are key. A family dentist provides comprehensive dental care for patients of all ages — instead of visiting multiple specialists, you can simplify with one provider you trust.",
  },
];

function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const href = post.href ?? `/blog/${post.slug}`;
  const targetProps = post.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <article className={`blog-card${featured ? " blog-card--featured" : ""}`}>
      <a className="blog-card-link" href={href} {...targetProps}>
        <div className="blog-card-media">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            sizes={featured ? "(max-width: 1080px) 100vw, 720px" : "(max-width: 1080px) 100vw, 33vw"}
            style={{ objectFit: "cover" }}
            priority={featured}
          />
          <span className="blog-card-cat">{post.category}</span>
        </div>
        <div className="blog-card-body">
          <div className="blog-card-meta">
            <time dateTime={post.dateISO}>{post.date}</time>
            <span className="dot" aria-hidden="true" />
            <span>5 min read</span>
          </div>
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-excerpt">{post.excerpt}</p>
          <span className="blog-card-cta">Read article →</span>
        </div>
      </a>
    </article>
  );
}

export default function BlogIndex() {
  const [featured, ...rest] = posts;
  return (
    <section className="blog-index" id="latest">
      <div className="blog-index-inner">
        <header className="section-head blog-index-head">
          <div>
            <div className="num">i. — Latest</div>
            <h2>
              The <em>most recent</em> post.
            </h2>
          </div>
          <p className="lede">
            We publish around once a month — long-form articles on cosmetic
            dentistry, implants, family care, and the practical day-to-day of
            keeping a healthy smile.
          </p>
        </header>

        {/* Featured (most recent) post */}
        <PostCard post={featured} featured />

        {/* Remaining posts in 3-col grid */}
        <header className="section-head blog-index-head blog-index-head--archive">
          <div>
            <div className="num">ii. — Archive</div>
            <h2>
              Earlier <em>articles.</em>
            </h2>
          </div>
          <p className="lede">
            {rest.length} previously published posts, most recent first.
          </p>
        </header>

        <div className="blog-grid">
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
