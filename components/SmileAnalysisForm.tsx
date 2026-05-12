"use client";

import { useState, type FormEvent } from "react";

const QUESTIONS: string[] = [
  "Are any of your teeth yellow, stained, or somewhat discolored?",
  "Would you like your teeth to be whiter?",
  "Do you have any gaps or spaces between your teeth?",
  "Are any of your teeth turned, crooked, or uneven?",
  "Are you missing any teeth?",
  "Do you see any pitting or defects on the surfaces of your teeth?",
  "Are the edges of any teeth worn down, chipped, or uneven?",
  "Do any of your teeth appear too small, short, large, or long?",
  "Do you have any prior dental work that appears unnatural?",
  "Do you have any crowns or bridges that appear dark at the edge of your gums?",
  "Do you have any gray, black, or silver (mercury) fillings in your teeth?",
  "Do you have a “gummy” smile (too much of your gums show when smiling)?",
  "Are your gums red, sore, puffy, bleeding, or receded?",
  "Does the appearance of your smile inhibit you from laughing or smiling?",
  "When being photographed, do you smile with your lips closed instead of flashing a full smile?",
  "Are you self-conscious about your teeth or smile?",
  "Would you like to change anything about the appearance of your teeth or smile?",
];

type Answers = Record<number, "yes" | "no" | undefined>;

export default function SmileAnalysisForm() {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additional: "",
  });

  const yesCount = Object.values(answers).filter((a) => a === "yes").length;
  const answeredCount = Object.values(answers).filter((a) => a !== undefined)
    .length;
  const allAnswered = answeredCount === QUESTIONS.length;

  function handleAnswer(i: number, value: "yes" | "no") {
    setAnswers((prev) => ({ ...prev, [i]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Build a mailto: with the answers + contact details so the practice
    // gets a complete picture even without a backend in place.
    const lines = [
      `Smile Analysis from: ${contactData.firstName} ${contactData.lastName}`.trim(),
      `Email: ${contactData.email}`,
      `Phone: ${contactData.phone}`,
      "",
      `Yes count: ${yesCount} / ${QUESTIONS.length}`,
      "",
      "Answers:",
      ...QUESTIONS.map(
        (q, i) => `${i + 1}. ${q}\n   → ${(answers[i] ?? "—").toUpperCase()}`
      ),
      "",
      "Additional info:",
      contactData.additional || "(none provided)",
    ];
    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent(
      `Smile Analysis — ${contactData.firstName} ${contactData.lastName}`.trim()
    );
    window.location.href = `mailto:info@piedmontdentalbydesign.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="smile-analysis-thanks">
        <div className="num">— Thanks —</div>
        <h2>
          Your analysis is on its way.
        </h2>
        <p>
          A message draft just opened in your email client with your answers.
          Send it and we&apos;ll review your responses and follow up within
          one business day.
        </p>
        <p className="smile-analysis-thanks-note">
          If nothing opened, you can email us directly at{" "}
          <a href="mailto:info@piedmontdentalbydesign.com">
            info@piedmontdentalbydesign.com
          </a>{" "}
          or call <a href="tel:5103503937">(510) 350-3937</a>.
        </p>
        <a href="/" className="btn btn-ghost btn-lg">
          Back to home
        </a>
      </div>
    );
  }

  return (
    <form className="smile-analysis-form" onSubmit={handleSubmit}>
      <fieldset className="smile-analysis-questions">
        <legend className="smile-analysis-legend">
          <span className="num">i. — 17 questions</span>
          <span className="smile-analysis-progress" aria-live="polite">
            {answeredCount} of {QUESTIONS.length} answered
          </span>
        </legend>

        <ol>
          {QUESTIONS.map((q, i) => (
            <li key={i} className="smile-analysis-q">
              <div className="smile-analysis-q-text">
                <span className="smile-analysis-q-num">{i + 1}.</span>
                <span>{q}</span>
              </div>
              <div
                className="smile-analysis-q-answers"
                role="radiogroup"
                aria-label={q}
              >
                {(["yes", "no"] as const).map((v) => (
                  <label
                    key={v}
                    className={`smile-analysis-pill ${
                      answers[i] === v ? "is-selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${i}`}
                      value={v}
                      required
                      checked={answers[i] === v}
                      onChange={() => handleAnswer(i, v)}
                    />
                    <span>{v === "yes" ? "Yes" : "No"}</span>
                  </label>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </fieldset>

      <div className="smile-analysis-bridge">
        <p>
          If you answered <strong>YES</strong> to <strong>ANY</strong> of the
          questions above, there are often several alternatives to improve your
          teeth and smile. To receive a personalized response to your smile
          analysis, please complete the form below. You can have the smile
          you&apos;ve always wanted — schedule a <strong>FREE, no-obligation
          office consultation</strong> with us today.
        </p>
        {allAnswered && (
          <p className="smile-analysis-result">
            <strong>Your result:</strong> {yesCount} of {QUESTIONS.length}{" "}
            answered <em>yes</em>.{" "}
            {yesCount === 0
              ? "Great — your smile sounds healthy. Even so, a routine consultation is the best way to confirm."
              : yesCount <= 4
                ? "A few targeted cosmetic options could likely make a meaningful difference."
                : yesCount <= 10
                  ? "Several treatments could help. A consultation will help us prioritize."
                  : "A comprehensive consultation will help us put together a personalized plan."}
          </p>
        )}
      </div>

      <fieldset className="smile-analysis-contact">
        <legend className="smile-analysis-legend">
          <span className="num">ii. — Your contact details</span>
        </legend>

        <div className="form-row form-row--split">
          <div>
            <label htmlFor="sa-first">
              First name <span className="req">*</span>
            </label>
            <input
              id="sa-first"
              type="text"
              required
              autoComplete="given-name"
              value={contactData.firstName}
              onChange={(e) =>
                setContactData((d) => ({ ...d, firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="sa-last">
              Last name <span className="req">*</span>
            </label>
            <input
              id="sa-last"
              type="text"
              required
              autoComplete="family-name"
              value={contactData.lastName}
              onChange={(e) =>
                setContactData((d) => ({ ...d, lastName: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="form-row form-row--split">
          <div>
            <label htmlFor="sa-email">
              Email <span className="req">*</span>
            </label>
            <input
              id="sa-email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={contactData.email}
              onChange={(e) =>
                setContactData((d) => ({ ...d, email: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="sa-phone">
              Phone <span className="req">*</span>
            </label>
            <input
              id="sa-phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(510) 555-0000"
              value={contactData.phone}
              onChange={(e) =>
                setContactData((d) => ({ ...d, phone: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="sa-additional">Additional info</label>
          <textarea
            id="sa-additional"
            rows={4}
            placeholder="Anything else you'd like us to know before reaching out?"
            value={contactData.additional}
            onChange={(e) =>
              setContactData((d) => ({ ...d, additional: e.target.value }))
            }
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg smile-analysis-submit"
          disabled={!allAnswered}
        >
          Submit my analysis →
        </button>
        {!allAnswered && (
          <p className="smile-analysis-hint">
            Answer all {QUESTIONS.length} questions above to enable submission.
          </p>
        )}
      </fieldset>
    </form>
  );
}
