import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SmileGalleryPage from "@/components/SmileGalleryPage";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import {
  getGallerySlugs,
  getGalleryBySlug,
  GALLERY_META,
} from "@/lib/smile-gallery";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getGallerySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const doc = getGalleryBySlug(slug);
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
  } catch {
    return { title: "Gallery not found" };
  }
}

export default async function GallerySubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  let doc;
  try {
    doc = getGalleryBySlug(slug);
  } catch {
    notFound();
  }

  const related = GALLERY_META.filter(
    (m) => m.slug !== slug && m.slug !== "_index"
  )
    .slice(0, 4)
    .map((m) => ({ url: m.url, title: m.title, blurb: m.blurb }));

  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <SmileGalleryPage doc={doc} related={related} />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
