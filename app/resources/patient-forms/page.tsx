import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";

import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
const PORTAL_URL =
  "https://piedmontdentalbydesign.dentalsymphony.com/Patient/Newpatient.aspx";

export const metadata: Metadata = {
  title: "Patient Forms | Piedmont Dental By Design",
  description:
    "Save time at your visit — fill out new-patient and update forms online before your appointment. Forms upload directly into our system.",
  alternates: { canonical: "/resources/patient-forms" },
  openGraph: {
    title: "Patient Forms — Piedmont Dental By Design",
    description:
      "Save time at your visit — fill out new-patient and update forms online before your appointment.",
    url: "https://piedmontdentalbydesign.com/resources/patient-forms",
    type: "article",
  },
};

export default function PatientFormsPage() {
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
              <h1 className="resource-hero-title">Patient Forms</h1>
              <p className="resource-hero-description">
                Save time at your visit — fill out your new-patient or update
                forms online before your appointment. Everything you submit
                uploads directly into our system, so we can attend to your
                medical needs the moment you walk through the door.
              </p>
            </div>
          </div>
        </section>

        <section className="forms-body">
          <div className="forms-inner">
            <div className="forms-portal-card">
              <span className="num">i. — Online portal</span>
              <h2>Fill out your forms online</h2>
              <p>
                Existing patient updating your info, or new patient prepping
                for your first visit? Use our secure online forms portal —
                everything uploads automatically, no printing required.
              </p>
              <a
                href={PORTAL_URL}
                className="btn btn-primary btn-lg forms-portal-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here for patient forms →
              </a>
              <p className="forms-portal-note">
                Opens our patient portal in a new tab (dentalsymphony.com).
              </p>
            </div>

            <div className="forms-info">
              <span className="num">ii. — Before your visit</span>
              <h2>A few things to know</h2>
              <ul className="forms-info-list">
                <li>
                  <strong>No printing needed.</strong> Forms you complete
                  online upload directly into our system.
                </li>
                <li>
                  <strong>New patients:</strong> we ask that you complete your
                  forms online before your appointment. It lets us focus on
                  your care the moment you arrive instead of paperwork.
                </li>
                <li>
                  <strong>Can&apos;t fill them out online?</strong> No problem
                  — arrive 10 minutes before your appointment and we&apos;ll
                  hand you an iPad to complete them in office.
                </li>
              </ul>
              <p className="forms-info-callout">
                Questions about any of this? Call our office at{" "}
                <a href="tel:5103503937">(510) 350-3937</a> — we&apos;re happy
                to walk you through it.
              </p>
            </div>

            <div className="forms-cta">
              <h2>Ready to book your visit?</h2>
              <p>
                Once your forms are submitted, the next step is picking a date.
                Reserve a comprehensive exam with Dr. Martenson — or call us
                directly and we&apos;ll set you up.
              </p>
              <div className="forms-cta-actions">
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
          { name: "Patient Forms", url: "/resources/patient-forms" },
        ]}
      />
</>
  );
}
