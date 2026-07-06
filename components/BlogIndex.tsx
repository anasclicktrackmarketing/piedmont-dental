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
    slug: "what-is-smile-design-consultation",
    title: "What Is a Smile Design Consultation?",
    date: "June 15, 2026",
    dateISO: "2026-06-15",
    category: "Cosmetic",
    image: "/img/blog/what-is-smile-design-consultation/hero.jpg",
    alt: "Dentist and patient reviewing a digital smile design mockup on screen",
    excerpt:
      "The phrase “smile design” has become more common in cosmetic dentistry conversations, but many patients are still unsure what it means — or whether they need one. It's a structured evaluation that treats your smile as a whole, not tooth by tooth.",
  },
  {
    slug: "how-to-choose-cosmetic-dentist-east-bay",
    title:
      "How to Choose a Cosmetic Dentist in the East Bay — A Checklist",
    date: "June 1, 2026",
    dateISO: "2026-06-01",
    category: "Cosmetic",
    image: "/img/blog/how-to-choose-cosmetic-dentist-east-bay/hero.jpg",
    alt: "Cosmetic dentist in clinical setting preparing for a patient consultation",
    excerpt:
      "Choosing a cosmetic dentist is one of the most important decisions you can make for your appearance and confidence. Cosmetic dentistry is as much art as science — use this East Bay checklist to vet credentials, portfolio, and process.",
  },
  {
    slug: "teeth-whitening-piedmont-professional-vs-at-home",
    title:
      "Teeth Whitening Options in Piedmont: Professional vs. At-Home",
    date: "May 18, 2026",
    dateISO: "2026-05-18",
    category: "Cosmetic",
    image:
      "/img/blog/teeth-whitening-piedmont-professional-vs-at-home/hero.jpg",
    alt: "Bright white teeth after a professional whitening treatment",
    excerpt:
      "A bright, white smile is one of the most impactful cosmetic improvements you can make — and whitening is consistently the most requested cosmetic dental procedure in the East Bay. Here's how in-office, take-home, and store-bought options actually compare.",
  },
  {
    slug: "cerec-same-day-crowns-oakland",
    title:
      "CEREC Same-Day Crowns: What Oakland Patients Need to Know",
    date: "May 4, 2026",
    dateISO: "2026-05-04",
    category: "Restorative",
    image: "/img/blog/cerec-same-day-crowns-oakland/hero.jpg",
    alt: "Digital dental scan and same-day CEREC crown workflow",
    excerpt:
      "Traditional crowns require two appointments, temporaries, and a set of gooey impressions. CEREC uses a digital scanner and an in-office milling unit to design, fabricate, and bond a permanent crown in a single visit — here's how the workflow really works.",
  },
  {
    slug: "invisalign-vs-braces-adults-east-bay",
    title: "Invisalign vs. Braces for Adults: East Bay Patient Guide",
    date: "April 20, 2026",
    dateISO: "2026-04-20",
    category: "Cosmetic",
    image: "/img/blog/invisalign-vs-braces-adults-east-bay/hero.jpg",
    alt: "Adult holding a clear Invisalign aligner tray",
    excerpt:
      "More adults than ever are choosing to straighten their teeth. Invisalign and traditional braces both move teeth effectively, but differ in comfort, aesthetics, treatment time, and cost — here's the honest side-by-side for East Bay patients.",
  },
  {
    slug: "veneers-cost-oakland-2026",
    title: "How Much Do Veneers Cost in Oakland? A 2026 Guide",
    date: "April 6, 2026",
    dateISO: "2026-04-06",
    category: "Cosmetic",
    image: "/img/blog/veneers-cost-oakland-2026/hero.jpg",
    alt: "Porcelain veneer shade guide next to a bright natural smile",
    excerpt:
      "Porcelain veneers are one of the most transformative cosmetic procedures available — but for many East Bay residents, the first question is practical: what should I expect to pay in Oakland in 2026? Here's a transparent breakdown by type, tooth count, and financing.",
  },
  {
    slug: "porcelain-veneers-vs-dental-bonding",
    title:
      "Porcelain Veneers vs. Dental Bonding — Which Is Right for You?",
    date: "March 23, 2026",
    dateISO: "2026-03-23",
    category: "Cosmetic",
    image: "/img/blog/porcelain-veneers-vs-dental-bonding/hero.jpg",
    alt: "Cosmetic dentist comparing porcelain veneers and composite bonding for a patient",
    excerpt:
      "Chipped teeth, stubborn stains, small gaps, and uneven edges are among the most common cosmetic concerns we hear from East Bay patients. Two of the most popular solutions are porcelain veneers and dental bonding — here's a side-by-side to help you choose.",
  },
  {
    slug: "dental-implants-piedmont-ca",
    title:
      "Dental Implants in Piedmont, CA: The Permanent Solution for Missing Teeth",
    date: "March 9, 2026",
    dateISO: "2026-03-09",
    category: "Restorative",
    image: "/img/blog/dental-implants-piedmont-ca/hero.jpg",
    alt: "Dental implants illustration",
    excerpt:
      "Dental implants are widely recognized as the gold standard solution for missing teeth — the only option that replaces the entire tooth structure, including the root, for a result that looks, feels, and functions like a natural tooth.",
  },
  {
    slug: "cosmetic-dentist-piedmont-ca",
    title:
      "Cosmetic Dentistry in Piedmont, CA: Invisalign®, Teeth Whitening and More",
    date: "February 9, 2026",
    dateISO: "2026-02-09",
    category: "Cosmetic",
    image: "/img/blog/cosmetic-dentist-piedmont-ca/hero.jpg",
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
      "If you're seeking a dedicated and experienced dentist near Oakland, look no further than Piedmont Dental by Design. Located at 1331 Grand Ave, Piedmont, we have been providing great dental care to the Oakland and Piedmont communities for over 30 years.",
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
