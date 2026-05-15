import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
export const metadata: Metadata = {
  title: "Dental Videos | Piedmont Dental By Design",
  description:
    "Short animated videos explaining common dental procedures and oral health topics — from exams and whitening to crowns, implants, and root canals.",
  alternates: { canonical: "/resources/dental-videos" },
  openGraph: {
    title: "Dental Videos — Piedmont Dental By Design",
    description:
      "Short animated videos explaining common dental procedures and oral health topics.",
    url: "https://piedmontdentalbydesign.com/resources/dental-videos",
    type: "article",
  },
};

type Video = { src: string; title: string };
type Section = { heading: string; eyebrow: string; videos: Video[] };

const SECTIONS: Section[] = [
  {
    heading: "Exams & Hygiene",
    eyebrow: "i.",
    videos: [
      { src: "/videos/AFV.mp4", title: "New Patient Exam" },
      { src: "/videos/PEDO.mp4", title: "Pediatric First Visit" },
      { src: "/videos/OHI.mp4", title: "Brushing & Flossing" },
    ],
  },
  {
    heading: "Cosmetic",
    eyebrow: "ii.",
    videos: [
      { src: "/videos/HOMBL.mp4", title: "Home Teeth Whitening" },
      { src: "/videos/OFCBL.mp4", title: "In-Office Teeth Whitening" },
      { src: "/videos/VENE.mp4", title: "Porcelain Veneers" },
      { src: "/videos/CRWNPORC.mp4", title: "Porcelain Crown" },
      { src: "/videos/INLAYPORC.mp4", title: "Porcelain Inlay" },
      { src: "/videos/INLAY.mp4", title: "Inlay Filling" },
      { src: "/videos/COMP.mp4", title: "Composite Filling" },
      { src: "/videos/IMPCRWN.mp4", title: "Implant for Crown & Bridge" },
    ],
  },
  {
    heading: "Periodontics",
    eyebrow: "iii.",
    videos: [
      { src: "/videos/PROPHY.mp4", title: "In-Office Cleaning" },
      { src: "/videos/SRP.mp4", title: "Deep Cleaning (Scaling & Root Planing)" },
      { src: "/videos/IMPCRWN-1.mp4", title: "Implant for Crown & Bridge" },
    ],
  },
  {
    heading: "Dental Implants",
    eyebrow: "iv.",
    videos: [
      { src: "/videos/IMPCRWN-1.mp4", title: "Implant for Crown & Bridge" },
      { src: "/videos/IMPDENT.mp4", title: "Implant for Denture" },
    ],
  },
  {
    heading: "Endodontics",
    eyebrow: "v.",
    videos: [
      { src: "/videos/RCT.mp4", title: "Root Canal" },
      { src: "/videos/RCT2.mp4", title: "Alternatives to Root Canal" },
    ],
  },
  {
    heading: "Oral Surgery",
    eyebrow: "vi.",
    videos: [
      { src: "/videos/EXTR.mp4", title: "Tooth Extraction" },
      { src: "/videos/WSDM.mp4", title: "Wisdom Teeth" },
      { src: "/videos/POSTOP.mp4", title: "Post-Op Instructions" },
      { src: "/videos/IMPDENT.mp4", title: "Implant for Denture" },
      { src: "/videos/IMPCRWN.mp4", title: "Implant for Crown & Bridge" },
    ],
  },
  {
    heading: "Crown & Bridge",
    eyebrow: "vii.",
    videos: [
      { src: "/videos/CROWN.mp4", title: "Crown" },
      { src: "/videos/CRWNPORC.mp4", title: "Porcelain Crown" },
      { src: "/videos/CRWNPFTM.mp4", title: "Porcelain-Metal Crown" },
      { src: "/videos/CRWNCMPR-1.mp4", title: "Crown Material Comparison" },
      { src: "/videos/BRIDGE.mp4", title: "Dental Bridge" },
      { src: "/videos/IMPCRWN-1.mp4", title: "Implant for Crown & Bridge" },
      { src: "/videos/VENE.mp4", title: "Porcelain Veneers" },
    ],
  },
  {
    heading: "Other",
    eyebrow: "viii.",
    videos: [
      { src: "/videos/CMPAR.mp4", title: "Dental Filling Materials" },
      { src: "/videos/NIGHTGRD.mp4", title: "Night Guard" },
      { src: "/videos/STAYPLT.mp4", title: "Partial Denture" },
    ],
  },
];

export default function DentalVideosPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <section className="resource-hero">
          <div className="resource-hero-inner">
            <div className="resource-hero-text">
              <Link href="/resources" className="post-hero-back">
                ← Back to resources
              </Link>
              <div className="num" style={{ marginTop: 12 }}>
                Patient Resources
              </div>
              <h1 className="resource-hero-title">Dental Videos</h1>
              <p className="resource-hero-description">
                Short animated videos that walk you through common dental
                procedures and oral health topics. We&apos;ve grouped them by
                category so you can jump straight to what you&apos;re curious
                about — and we&apos;re always happy to answer questions in
                person.
              </p>
            </div>
          </div>
        </section>

        <section className="videos-body">
          <div className="videos-inner">
            {SECTIONS.map((section) => (
              <div className="videos-section" key={section.heading}>
                <div className="videos-section-head">
                  <span className="num">
                    {section.eyebrow} — Category
                  </span>
                  <h2 className="videos-section-heading">{section.heading}</h2>
                </div>
                <div className="videos-grid">
                  {section.videos.map((v, i) => (
                    <article
                      className="video-card"
                      key={`${section.heading}-${v.src}-${i}`}
                    >
                      <div className="video-card-frame">
                        <video
                          src={v.src}
                          controls
                          preload="metadata"
                          playsInline
                        />
                      </div>
                      <h3 className="video-card-title">{v.title}</h3>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="videos-cta">
              <h2>Have questions about a procedure?</h2>
              <p>
                We&apos;re happy to walk through anything you saw here in
                person. Book a consultation and we&apos;ll set aside time to
                answer questions and talk through what&apos;s right for you.
              </p>
              <div className="videos-cta-actions">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Request Appointment →
                </Link>
                <a href="tel:5103503937" className="btn btn-ghost btn-lg">
                  or call (510) 350-3937
                </a>
              </div>
            </div>
          </div>
        </section>

        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    
      <BreadcrumbSchema
        crumbs={[
          { name: "Resources", url: "/resources" },
          { name: "Dental Videos", url: "/resources/dental-videos" },
        ]}
      />
</>
  );
}
