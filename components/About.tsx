"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Doctor = {
  id: string;
  initials: string;
  bg: string;
  name: string;
  suffix?: string;
  role: string;
  yearsLabel?: string;
  awardLabel?: string;
  photo: string;
  photoAlt: string;
  /** Headline question (e.g. "Who is Dr. Jill Martenson?") */
  question: string;
  /** Body paragraphs — 1-2 short paragraphs */
  paragraphs: string[];
  /** Link to the full dedicated page */
  href: string;
};

const DOCTORS: Doctor[] = [
  {
    id: "martenson",
    initials: "JM",
    bg: "var(--teal)",
    name: "Dr. Jill A. Martenson",
    suffix: "DDS",
    role: "Co-founder · cosmetic",
    yearsLabel: "30 years",
    awardLabel: "Best Esthetic Dentist 2024 & 2025",
    photo:
      "/img/lIVE Piedmont website images/Headshot_Dr-Jill-Martenson-scaled.jpg",
    photoAlt: "Dr. Jill Martenson at Piedmont Dental By Design",
    question: "Who is Dr. Jill Martenson?",
    paragraphs: [
      "Dr. Jill A. Martenson, DDS, co-founded Piedmont Dental By Design and has cared for the Piedmont community for 30 years. She was voted Best Esthetic Dentist by Best of the East Bay readers in 2024 and 2025, and is a member of the AACD, ADA, and CDA — three of the professional associations most associated with cosmetic dental standards.",
      "Working alongside Dr. Martenson are Dr. David Ma, who handles restorative work, and Dr. Filippo Cangini, who covers periodontics — so patients can stay with one practice for cosmetic, gum, and structural care.",
    ],
    href: "/about/dr-martenson",
  },
  {
    id: "ma",
    initials: "DM",
    bg: "var(--teal-deep)",
    name: "Dr. David Ma",
    role: "Restorative",
    yearsLabel: "UPenn-trained",
    awardLabel: "Full-mouth rehabilitation",
    photo: "/team/dr-ma.webp",
    photoAlt: "Dr. David Ma, restorative and cosmetic dentist",
    question: "Who is Dr. David Ma?",
    paragraphs: [
      "Dr. Ma's path into dentistry started with neurobiology at UC Davis before graduating with honors from the University of Pennsylvania School of Dental Medicine — bringing both rigor and craft to every restoration.",
      "He completed his General Practice Residency at the Northern California VA Hospital, where he gained extensive experience in full-mouth rehabilitations and complex treatment planning — the foundation he brings to patients today.",
    ],
    href: "/about/dr-ma",
  },
  {
    id: "cangini",
    initials: "FC",
    bg: "var(--ink)",
    name: "Dr. Filippo Cangini",
    role: "Periodontics",
    yearsLabel: "26 years",
    awardLabel: "Board-certified periodontist",
    photo: "/team/dr-cangini.webp",
    photoAlt: "Dr. Filippo Cangini, board-certified periodontist",
    question: "Who is Dr. Filippo Cangini?",
    paragraphs: [
      "Dr. Cangini brings over two decades of clinical and academic experience to Piedmont Dental — training that spans three institutions across general dentistry, periodontics, and oral sciences.",
      "As a board-certified periodontist, his focus is gums and the structures that support your teeth — treating gum disease, performing gum and bone grafting, and surgically placing dental implants in coordination with the rest of the practice.",
    ],
    href: "/about/dr-cangini",
  },
];

export default function About() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = DOCTORS[activeIdx];

  return (
    <section className="about" id="about">
      <div className="about-portrait">
        {/* Render all portraits stacked so swap is instant and pre-cached */}
        {DOCTORS.map((d, i) => (
          <div
            key={d.id}
            className={`about-portrait-layer ${
              i === activeIdx ? "about-portrait-layer--active" : ""
            }`}
            aria-hidden={i !== activeIdx}
          >
            <Image
              src={d.photo}
              alt={d.photoAlt}
              fill
              sizes="(max-width: 1080px) 100vw, 540px"
              style={{ objectFit: "cover" }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="about-text">
        <span className="num">iii. — The dentist</span>
        <h2>
          Thirty years of cosmetic dentistry, <em>in the East Bay.</em>
        </h2>

        <div className="about-doc-content" key={active.id}>
          <p className="about-question">{active.question}</p>
          {active.paragraphs.map((p, i) => (
            <p
              key={i}
              className={i === 0 ? "about-answer" : undefined}
            >
              {p}
            </p>
          ))}

          <aside
            className="about-byline"
            itemScope
            itemType="https://schema.org/Person"
          >
            <span
              className="byline-avatar"
              aria-hidden="true"
              style={{ background: active.bg }}
            >
              {active.initials}
            </span>
            <div className="byline-text">
              <span className="byline-name" itemProp="name">
                {active.name}
                {active.suffix && (
                  <>
                    , <span className="suffix">{active.suffix}</span>
                  </>
                )}
              </span>
              <span className="byline-meta">
                <span itemProp="jobTitle">{active.role}</span>
                {active.yearsLabel && (
                  <>
                    <span className="byline-dot">·</span>
                    {active.yearsLabel}
                  </>
                )}
                {active.awardLabel && (
                  <>
                    <span className="byline-dot">·</span>
                    <span itemProp="award">{active.awardLabel}</span>
                  </>
                )}
              </span>
            </div>
          </aside>
        </div>

        <div className="about-team" role="tablist" aria-label="Choose a doctor">
          {DOCTORS.map((d, i) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={i === activeIdx}
              onClick={() => setActiveIdx(i)}
              className={`doc doc--btn ${
                i === activeIdx ? "doc--active" : ""
              }`}
            >
              <span
                className="doc-avatar doc-avatar--photo"
                aria-hidden="true"
              >
                <Image
                  src={d.photo}
                  alt=""
                  fill
                  sizes="56px"
                  style={{ objectFit: "cover" }}
                />
              </span>
              <div>
                <h4>{d.name}{d.suffix ? `, ${d.suffix}` : ""}</h4>
                <p>{d.role}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="about-cta">
          <Link href={active.href} className="btn btn-primary">
            About {active.name.split(" ").slice(-1)[0]}
            {active.id === "martenson" ? "" : ""} →
          </Link>
          <a href="#booker" className="btn btn-ghost">
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
