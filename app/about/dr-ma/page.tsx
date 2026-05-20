import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import DoctorProfile from "@/components/DoctorProfile";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Dr. David Ma — Cosmetic Dentist",
  description:
    "Dr. David Ma — UPenn Dental Medicine graduate with honors and UC Davis training in neurobiology. Expert in full-mouth rehabilitations and complex planning.",
  alternates: { canonical: "/about/dr-ma" },
  openGraph: {
    title: "Dr. David Ma — Piedmont Dental By Design",
    description:
      "Restorative and cosmetic dentistry · UPenn-trained · expert in full mouth rehabilitations.",
    url: "https://piedmontdentalbydesign.com/about/dr-ma",
    type: "profile",
    images: ["/team/dr-ma.webp"],
  },
};

export default function DrMaPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <DoctorProfile
          index="i"
          eyebrow="— Dr. David Ma —"
          name="Dr. David Ma"
          role="Restorative & Cosmetic Dentistry"
          intro="Dr. David Ma is a compassionate, highly skilled dentist dedicated to comprehensive, patient-focused care — combining advanced clinical expertise with a personalized approach."
          photo="/team/dr-ma.webp"
          photoAlt="Dr. David Ma, restorative dentist"
          credentials={[
            { value: "4 yrs", label: "Experience" },
            { value: "UPenn", label: "School of Dental Medicine" },
            { value: "UC Davis", label: "Neurobiology, BS" },
            { value: "VA Hospital", label: "General Practice Residency" },
          ]}
          bioParagraphs={[
            "Dr. David Ma is a compassionate and highly skilled dentist dedicated to delivering comprehensive, patient-focused care. Born in Japan and raised in the Bay Area, Dr. Ma proudly considers Northern California home. He earned his degree in Neurobiology, Physiology, and Behavior from the University of California, Davis, before receiving his dental degree from the University of Pennsylvania School of Dental Medicine, where he graduated with honors in clinical practice and community service.",
            "Following dental school, Dr. Ma completed a General Practice Residency at the Northern California Veterans Affairs Hospital, gaining advanced experience in full mouth rehabilitations and complex treatment planning. He is passionate about helping patients achieve healthy, confident smiles through preventive, restorative, and cosmetic dentistry, combining advanced clinical expertise with a personalized approach to care.",
          ]}
          education={[
            {
              date: "BS",
              text: "Neurobiology, Physiology, and Behavior — UC Davis.",
            },
            {
              date: "DMD",
              text: "Graduated with honors in clinical practice and community service from the University of Pennsylvania School of Dental Medicine.",
            },
            {
              date: "Residency",
              text: "General Practice Residency at the Northern California Veteran Affairs Hospital — extensive experience in full mouth rehabilitations and complex treatment planning.",
            },
          ]}
          specializations={[
            {
              title: "Full mouth rehabilitations",
              body: "Comprehensive treatments designed to restore the function and aesthetics of the entire mouth, addressing complex dental issues with tailored solutions.",
            },
            {
              title: "Complex treatment planning",
              body: "Detailed and personalized treatment plans focused on proactive, effective strategies to manage and improve dental health.",
            },
            {
              title: "Cosmetic dentistry",
              body: "Range of cosmetic procedures aimed at enhancing the appearance of patients' smiles — including teeth whitening, veneers, and other aesthetic treatments.",
            },
            {
              title: "Preventive & restorative",
              body: "Preventive care and restorative treatments such as fillings, crowns, and bridges, designed to repair damage and maintain optimal oral health.",
            },
          ]}
          associations={[
            "California Dental Association",
            "Alameda County Dental Society",
            "American Academy of Facial Esthetics",
            "SPEAR Study Clubs",
            "CDOCS Education",
          ]}
          personal={[
            "Lives in Rockridge with his partner.",
            "Enjoys improving his golf and tennis skills, and playing with his Australian Shepherd, Albie.",
            "Cheers on Philadelphia sports teams.",
          ]}
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
      <BreadcrumbSchema
        crumbs={[
          { name: "About", url: "/about" },
          { name: "Dr. David Ma", url: "/about/dr-ma" },
        ]}
      />
    </>
  );
}
