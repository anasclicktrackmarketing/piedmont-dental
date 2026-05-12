"use client";

import Image from "next/image";
import { useState } from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export type RailCase = {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  before: string;
  after: string;
  beforeText: string;
  afterText: string;
  procedures: string[];
};

export default function CaseGalleryRail({ cases }: { cases: RailCase[] }) {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <div className="case-rail">
      <nav className="case-rail-thumbs" aria-label="Case studies">
        {cases.map((tc, i) => (
          <button
            key={tc.id}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`case-rail-thumb ${
              i === active ? "case-rail-thumb--active" : ""
            }`}
          >
            <div className="case-rail-thumb-image">
              <Image
                src={tc.after}
                alt=""
                fill
                sizes="(max-width: 1080px) 25vw, 160px"
                style={{ objectFit: "cover" }}
              />
              <span className="case-rail-thumb-num">{tc.number}</span>
            </div>
            <span className="case-rail-thumb-label">{tc.shortTitle}</span>
          </button>
        ))}
      </nav>

      <div className="case-rail-viewer" key={c.id}>
        <header className="case-rail-head">
          <span className="case-rail-eyebrow">Case study {c.number} of {cases.length}</span>
          <h3>{c.title}</h3>
        </header>

        <div className="case-rail-slider">
          <BeforeAfterSlider
            beforeSrc={c.before}
            afterSrc={c.after}
            beforeAlt={`${c.title} — before`}
            afterAlt={`${c.title} — after`}
          />
          <p className="case-rail-hint">⇄&nbsp; Drag to compare</p>
        </div>

        <div className="case-rail-detail">
          <div className="case-rail-block">
            <span className="case-rail-block-label">Before</span>
            <p>{c.beforeText}</p>
          </div>
          <div className="case-rail-block case-rail-block--after">
            <span className="case-rail-block-label">After</span>
            <p>{c.afterText}</p>
          </div>
        </div>

        <ul className="case-rail-tags">
          {c.procedures.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
