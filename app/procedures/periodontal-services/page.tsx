import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import CategoryIndex from "@/components/CategoryIndex";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import { getCategory } from "@/lib/procedure-categories";

export const metadata: Metadata = {
  title:
    "Periodontal Services in Piedmont, CA | Gum Disease Treatment | Piedmont Dental",
  description:
    "Comprehensive periodontal care at Piedmont Dental By Design — scaling and root planing, gum and bone grafting, crown lengthening, sinus augmentation, and ongoing maintenance. Protect gum health and tooth foundation.",
  alternates: { canonical: "/procedures/periodontal-services" },
  openGraph: {
    title: "Periodontal Services — Piedmont Dental By Design",
    description:
      "Surgical and non-surgical care for gum disease — scaling, grafts, crown lengthening, maintenance.",
    url: "https://piedmontdentalbydesign.com/procedures/periodontal-services",
    type: "website",
    images: ["/svc/perio.jpg"],
  },
};

const category = getCategory("periodontal-services");

const CARDS = [
  {
    slug: "what-is-periodontal-gum-disease",
    title: "What Is Gum Disease?",
    description:
      "Warning signs, causes, and how periodontal disease silently progresses — bleeding gums, recession, persistent bad breath, and shifting bite alignment.",
    meta: "Education · Early detection",
  },
  {
    slug: "treatment",
    title: "Treatment",
    description:
      "Stage-appropriate care from cleanings for early gingivitis to scaling, root planing, and surgery for advanced disease — paired with home-care coaching.",
    meta: "Non-surgical & surgical",
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    description:
      "Periodontal cleanings every 3–4 months after treatment — pocket-depth checks, oral cancer screening, polishing, and ongoing pocket health monitoring.",
    meta: "Quarterly · Long-term health",
  },
  {
    slug: "gum-grafting",
    title: "Gum Grafting",
    description:
      "Surgical correction of gum recession — covers exposed roots to reduce sensitivity, improve appearance, and protect against further tissue loss.",
    meta: "Local anesthetic · ~6 weeks heal",
  },
  {
    slug: "bone-grafting",
    title: "Bone Grafting",
    description:
      "Replacing lost jawbone tissue to support implants, halt periodontal damage, or restore facial structure after trauma or advanced disease.",
    meta: "Foundation for implants",
  },
  {
    slug: "crown-lengthening",
    title: "Crown Lengthening",
    description:
      "Reshaping gum and bone to expose more tooth — corrects 'gummy' smiles, prepares teeth for restorations, or restores aesthetics after disease.",
    meta: "1 visit · 2–3 month full heal",
  },
  {
    slug: "periodontal-scaling-root-planing",
    title: "Scaling & Root Planing",
    description:
      "Deep cleaning beneath the gumline to remove tartar and bacteria, plus root smoothing — the foundational non-surgical treatment for periodontitis.",
    meta: "Often paired with antibiotics",
  },
  {
    slug: "sinus-augmentation",
    title: "Sinus Augmentation",
    description:
      "Sinus floor lift with bone graft to create the height needed for upper-jaw implants when bone has been lost to disease or extraction.",
    meta: "Implant prep · Upper jaw",
  },
];

export default function PeriodontalCategoryPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <CategoryIndex
          slug={category.slug}
          label={category.label}
          eyebrow="Procedures · Periodontal Services"
          title="Periodontal Services"
          intro={[
            "Healthy gums are the foundation of a lasting smile. At Piedmont Dental By Design, Dr. Jill Martenson works alongside skilled hygienists and a board-certified periodontist to protect, treat, and restore gum health using both non-surgical and surgical techniques.",
            "From early gingivitis to advanced periodontitis — and from grafts that reverse recession to sinus lifts that prepare you for implants — every treatment is staged carefully to your condition and paired with home-care guidance to prevent recurrence.",
          ]}
          image="/svc/perio.jpg"
          imageAlt="Periodontal evaluation at Piedmont Dental By Design"
          cards={CARDS}
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
