import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import BlogPost from "@/components/BlogPost";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import ArticleSchema from "@/components/schema/ArticleSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import {
  getPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: { absolute: post.title },
      description: post.excerpt,
      alternates: { canonical: `/blog/${post.slug}` },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `https://piedmontdentalbydesign.com/blog/${post.slug}`,
        type: "article",
        publishedTime: post.dateISO,
        images: [post.image],
      },
    };
  } catch {
    return { title: "Article not found" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <BlogPost post={post} related={related} />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        crumbs={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
    </>
  );
}
