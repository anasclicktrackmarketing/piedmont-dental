"use client";

import { useState } from "react";

export type FAQItem = {
  q: string;
  a: string;
};

export default function AccordionFAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="acc-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className={`acc-item ${isOpen ? "acc-item--open" : ""}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="acc-trigger"
            >
              <span className="acc-trigger-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="acc-trigger-q">{item.q}</span>
              <span className="acc-trigger-chevron" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
            <div
              id={`acc-panel-${i}`}
              className="acc-panel"
              role="region"
              aria-hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
