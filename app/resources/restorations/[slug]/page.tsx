import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import ResourceArticle from "@/components/ResourceArticle";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import {
  getNestedRestorationSlugs,
  getResourceBySlug,
  RESOURCES_META,
} from "@/lib/resources";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getNestedRestorationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const doc = getResourceBySlug(slug);
    return {
      title: `${doc.title} | Piedmont Dental By Design`,
      description: doc.description,
      alternates: { canonical: doc.url },
      openGraph: {
        title: `${doc.title} — Piedmont Dental By Design`,
        description: doc.description,
        url: `https://piedmontdentalbydesign.com${doc.url}`,
        type: "article",
      },
    };
  } catch {
    return { title: "Resource not found | Piedmont Dental By Design" };
  }
}

export default async function NestedRestorationResourcePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  let doc;
  try {
    doc = getResourceBySlug(slug);
  } catch {
    notFound();
  }

  // Show the other restorations cases as related
  const related = RESOURCES_META.filter(
    (m) =>
      m.slug !== slug &&
      (m.url.includes("/restorations/") || m.slug === "restorations" || m.slug === "full-mouth-restoration")
  )
    .slice(0, 3)
    .map((m) => ({ url: m.url, title: m.title, blurb: m.blurb }));

  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ResourceArticle
          doc={doc}
          eyebrow="Patient Resources · Restorations"
          related={related}
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
