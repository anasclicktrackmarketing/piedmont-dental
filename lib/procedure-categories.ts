/**
 * Single source of truth for procedure categories and their sub-procedures.
 * Used by:
 *   - The sidebar on every procedure detail page
 *   - The category index pages (lists all sub-pages)
 *   - Sitemap generation if we want to drive it from this list
 */

export type CategorySlug =
  | "cleanings-prevention"
  | "cosmetic-dentistry"
  | "periodontal-services"
  | "restoration";

export type ProcedureItem = {
  slug: string;
  /** Short, human title shown in nav and sidebar (e.g. "Dental Implants") */
  title: string;
};

export type ProcedureCategory = {
  slug: CategorySlug;
  label: string; // "Restoration"
  short: string; // shorter human form, e.g. "restoration" — used in copy
  items: ProcedureItem[];
};

export const PROCEDURE_CATEGORIES: ProcedureCategory[] = [
  {
    slug: "cleanings-prevention",
    label: "Cleanings & Prevention",
    short: "preventive care",
    items: [
      { slug: "dental-exams-cleanings", title: "Dental Exams & Cleanings" },
      { slug: "dental-x-rays", title: "Dental X-Rays" },
      { slug: "panoramic-x-rays", title: "Panoramic X-rays" },
      { slug: "fluoride-treatment", title: "Fluoride Treatment" },
      { slug: "home-care", title: "Home Care" },
      { slug: "how-to-properly-brush-floss", title: "How to Brush & Floss" },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    label: "Cosmetic Dentistry",
    short: "cosmetic dentistry",
    items: [
      { slug: "porcelain-veneers", title: "Porcelain Veneers" },
      { slug: "tooth-whitening", title: "Tooth Whitening" },
      { slug: "cerec", title: "CEREC®" },
      { slug: "invisalign", title: "Invisalign®" },
      { slug: "surgery", title: "Cosmetic Surgery" },
    ],
  },
  {
    slug: "periodontal-services",
    label: "Periodontal Services",
    short: "periodontal care",
    items: [
      { slug: "what-is-periodontal-gum-disease", title: "What Is Gum Disease?" },
      { slug: "treatment", title: "Treatment" },
      { slug: "maintenance", title: "Maintenance" },
      { slug: "gum-grafting", title: "Gum Grafting" },
      { slug: "bone-grafting", title: "Bone Grafting" },
      { slug: "crown-lengthening", title: "Crown Lengthening" },
      { slug: "periodontal-scaling-root-planing", title: "Scaling & Root Planing" },
      { slug: "sinus-augmentation", title: "Sinus Augmentation" },
    ],
  },
  {
    slug: "restoration",
    label: "Restoration",
    short: "restoration",
    items: [
      { slug: "dental-implants", title: "Dental Implants" },
      { slug: "composite-fillings", title: "Composite Fillings" },
      { slug: "crowns-caps", title: "Crowns (Caps)" },
      { slug: "dentures-partial-dentures", title: "Dentures & Partial Dentures" },
      { slug: "fixed-bridges", title: "Fixed Bridges" },
    ],
  },
];

export function getCategory(slug: CategorySlug): ProcedureCategory {
  const cat = PROCEDURE_CATEGORIES.find((c) => c.slug === slug);
  if (!cat) throw new Error(`Unknown category: ${slug}`);
  return cat;
}
