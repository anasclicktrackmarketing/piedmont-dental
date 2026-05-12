"use client";

import { useState } from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export type TabCase = {
  id: string;
  number: string;
  shortLabel: string;
  title: string;
  before: string;
  after: string;
  beforeText: string;
  afterText: string;
  procedures: string[];
};

export default function CaseTabs({ cases }: { cases: TabCase[] }) {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <div className="case-tabs">
      <div className="case-tabs-bar" role="tablist" aria-label="Case studies">
        {cases.map((tc, i) => (
          <button
            key={tc.id}
            id={`case-tab-${i}`}
            role="tab"
            aria-selected={i === active}
            aria-controls={`case-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`case-tab ${i === active ? "case-tab--active" : ""}`}
            type="button"
          >
            <span className="case-tab-num">{tc.number}</span>
            <span className="case-tab-label">{tc.shortLabel}</span>
          </button>
        ))}
      </div>

      <div
        className="case-tab-panel"
        role="tabpanel"
        id={`case-panel-${active}`}
        aria-labelledby={`case-tab-${active}`}
        key={c.id}
      >
        <header className="case-tab-head">
          <span className="case-tab-eyebrow">Case study {c.number}</span>
          <h3>{c.title}</h3>
        </header>

        <div className="case-tab-content">
          <div className="case-tab-slider">
            <BeforeAfterSlider
              beforeSrc={c.before}
              afterSrc={c.after}
              beforeAlt={`${c.title} — before`}
              afterAlt={`${c.title} — after`}
            />
            <p className="case-tab-hint">⇄&nbsp; Drag to compare</p>
          </div>

          <div className="case-tab-detail">
            <div className="case-tab-block">
              <span className="case-tab-block-label">Before</span>
              <p>{c.beforeText}</p>
            </div>
            <div className="case-tab-block case-tab-block--after">
              <span className="case-tab-block-label">After</span>
              <p>{c.afterText}</p>
            </div>
            <ul className="case-tab-tags">
              {c.procedures.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
