import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import DoctorProfile from "@/components/DoctorProfile";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Dr. Jill Martenson, DDS — Owner & Lead Dentist | Piedmont Dental By Design",
  description:
    "Meet Dr. Jill A. Martenson, DDS — owner of Piedmont Dental By Design and Best Esthetic Dentist 2024. UCLA & UOP-trained with 29 years of experience in cosmetic and restorative dentistry.",
  alternates: { canonical: "/about/dr-martenson" },
  openGraph: {
    title: "Dr. Jill Martenson, DDS — Piedmont Dental By Design",
    description:
      "Owner & Lead Dentist · 29 years of cosmetic and restorative dentistry · Best Esthetic Dentist 2024.",
    url: "https://piedmontdentalbydesign.com/about/dr-martenson",
    type: "profile",
    images: ["/team/dr-martenson.webp"],
  },
};

export default function DrMartensonPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <DoctorProfile
          index="i"
          eyebrow="— Dr. Jill Martenson —"
          name="Dr. Jill A. Martenson, DDS"
          role="Owner & Lead Dentist · Cosmetic Dentistry"
          intro="Dr. Jill Martenson is a highly accomplished dentist with a passion for providing exceptional dental care. She has a strong educational background and a deep commitment to her profession, making her a trusted name in the field of dentistry."
          photo="/team/dr-martenson.webp"
          photoAlt="Dr. Jill Martenson, DDS"
          credentials={[
            { value: "29 yrs", label: "Experience" },
            { value: "2024", label: "Best Esthetic Dentist" },
            { value: "2013", label: "Angie's List Super Service Award" },
            { value: "Owner", label: "Piedmont Dental by Design" },
          ]}
          bioParagraphs={[
            "Dr. Martenson grew up in the Bay Area and has been practicing dentistry there for nearly three decades. After graduating with high honors from UOP School of Dentistry and completing a General Practice Residency in Denver, she returned home to join Piedmont Dental by Design — first as an associate, then as a partner, and ultimately as owner.",
            "She has been a member of an Implant Study Club since 1997, incorporating implant treatment planning and restoration into her practice from the beginning. She is dedicated to continuing education, consistently adding hours to her CE courses in implants, aesthetics, and bonding — and to courses in personal growth and leadership to further enhance her practice.",
          ]}
          education={[
            {
              date: "1991",
              text: "Graduated with honors from UCLA with a BS degree in Kinesiology.",
            },
            {
              date: "1996",
              text: "Graduated with high honors from UOP School of Dentistry.",
            },
            {
              date: "Post-Graduation",
              text: "Completed a General Practice Residency at the University of Colorado Health Science Center in Denver — an advanced dental educational program.",
            },
          ]}
          career={[
            {
              date: "1997",
              text: "Returned to the Bay Area and joined Piedmont Dental by Design as an associate dentist.",
            },
            {
              date: "2000",
              text: "Became a partner with Dr. Herrero at Piedmont Dental by Design.",
            },
            {
              date: "2014",
              text: "After Dr. Herrero's retirement, Dr. Martenson acquired the practice and continues to provide high-quality dental care.",
            },
          ]}
          specializations={[
            {
              title: "Implant treatment planning",
              body: "Member of an Implant Study Club since 1997. Incorporates implant treatment planning and restoration into the practice as a core service.",
            },
            {
              title: "Aesthetics & bonding",
              body: "Consistently adds CE hours in cosmetic dentistry, bonding, and esthetic restoration to stay current with technique and materials.",
            },
            {
              title: "Personal growth & leadership",
              body: "Pursues courses in personal growth and leadership in addition to clinical training — to enhance the practice itself, not only the dentistry.",
            },
          ]}
          associations={[
            "American Dental Association (ADA)",
            "California Dental Association (CDA)",
            "Alameda County Dental Society",
            "American Academy of Cosmetic Dentistry (AACD)",
            "New Dentists Alliance",
            "Academy of General Dentistry",
            "International Congress of Implantology",
          ]}
          personal={[
            "Married to Mike McDonald, with two daughters — Jenner and Erin.",
            "Family enjoys exploring the East Bay's parks, lakes, and local farmer's markets.",
            "Loves skiing trips to Lake Tahoe, beach outings to Santa Cruz, and traveling across the country to visit family.",
          ]}
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
