import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import ResourceArticle from "@/components/ResourceArticle";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { getResourceBySlug, RESOURCES_META } from "@/lib/resources";

const SLUG = "links";

export async function generateMetadata(): Promise<Metadata> {
  const doc = getResourceBySlug(SLUG);
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: doc.url },
    openGraph: {
      title: `${doc.title} — Piedmont Dental By Design`,
      description: doc.description,
      url: `https://piedmontdentalbydesign.com${doc.url}`,
      type: "article",
    },
  };
}

export default function LinksResourcePage() {
  const doc = getResourceBySlug(SLUG);

  const related = RESOURCES_META.filter(
    (m) =>
      m.slug !== SLUG &&
      m.group === doc.group &&
      !m.url.includes("/restorations/")
  )
    .slice(0, 3)
    .map((m) => ({ url: m.url, title: m.title, blurb: m.blurb }));

  const ctaSlot = (
    <div className="links-cta">
      <h2>Have a question — or a link to suggest?</h2>
      <p>
        Whether you&apos;re ready to book a visit or you&apos;ve found another
        resource worth sharing with our patients, we&apos;d love to hear from
        you.
      </p>
      <div className="links-cta-actions">
        <Link href="/contact" className="btn btn-primary btn-lg">
          Request Appointment →
        </Link>
        <a
          href="mailto:info@piedmontdentalbydesign.com?subject=Suggested%20link%20for%20Piedmont%20Dental%20resources"
          className="btn btn-ghost btn-lg"
        >
          Suggest a Link →
        </a>
      </div>
    </div>
  );

  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ResourceArticle
          doc={doc}
          eyebrow="Patient Resources"
          related={related}
          ctaSlot={ctaSlot}
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
      <BreadcrumbSchema
        crumbs={[
          { name: "Resources", url: "/resources" },
          { name: "Useful Links", url: "/resources/links" },
        ]}
      />
    </>
  );
}
