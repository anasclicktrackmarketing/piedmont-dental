// Visible FAQ that mirrors the FAQPage schema in StructuredData.tsx exactly.
// AI engines extract the first 1–2 sentences after each question — answers are
// written so each opens with a self-contained answer before adding context.

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "What insurance do you accept?",
    a: "Piedmont Dental By Design accepts most insurance plans. The simplest path is to call (510) 350-3937 with your card and our team will verify your specific coverage and walk you through what's included before your visit. Financing is also available for treatments not fully covered.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Bring your insurance card, a photo ID, a list of any medications you take, and any dental records or X-rays from a previous practice if you have them. New patient forms can be completed online or at the office; allow an extra ten minutes if you'd rather fill them out in our waiting area.",
  },
  {
    q: "I'm anxious about the dentist. How do you handle that?",
    a: "Dental anxiety is common and we take it seriously. Tell us before your appointment and we'll plan accordingly with slower pacing, longer breaks, and clear explanations of what comes next. Per a Google review of Dr. Martenson, her gentle touch ensures the experience is as pain-free as possible.",
  },
  {
    q: "Where do I park?",
    a: "Street parking is generally available on Grand Avenue near our entrance at 1331 Grand Ave. We're about a five-minute drive from MacArthur BART, and AC Transit serves the area. If accessibility is a concern, mention it when booking and we'll guide you to the closest spot.",
  },
  {
    q: "Should I get veneers or Invisalign?",
    a: "It depends on what you want to change. Veneers reshape the front of teeth — color, length, alignment — typically across two to three visits. Invisalign moves teeth into a new position over six to eighteen months without altering tooth structure. We'll review options together at your consultation.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer financing for treatments that go beyond insurance coverage, including monthly payment plans through third-party financing partners. Our team will outline the available options at your consultation, with no obligation to commit. Ask in advance by calling (510) 350-3937.",
  },
  {
    q: "Do you see kids?",
    a: "We welcome younger patients for routine care including cleanings, exams, and preventive work. For specialized pediatric procedures, we'll refer to a colleague when appropriate. From a recent Google review of a child's first appointment, the team did a great job calming her and making her feel safe.",
  },
  {
    q: "Do you handle dental emergencies?",
    a: "If you're a current patient and have a dental emergency during open hours — a chipped tooth, lost crown, or severe pain — call (510) 350-3937 and we'll do our best to fit you in the same day. For after-hours emergencies, urgent care or your nearest emergency room is the right first call.",
  },
];

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <header className="section-head faq-head">
          <div>
            <div className="num">vi. — Questions</div>
            <h2>
              Common questions, <em>answered.</em>
            </h2>
          </div>
          <p className="lede">
            Everything new patients usually want to know before booking. Don&apos;t
            see your question? Call <a href="tel:5103503937">(510) 350-3937</a> or
            text the practice during open hours.
          </p>
        </header>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="g-faq" key={f.q}>
              <summary className="g-faq-summary">
                <span className="g-faq-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="g-faq-question">{f.q}</h3>
                <svg
                  className="g-faq-chevron"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </summary>
              <p className="g-faq-answer">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="faq-foot">
          <a className="btn btn-primary" href="#booker">
            Ready to book? →
          </a>
        </div>
      </div>
    </section>
  );
}
