type Day = { n: number; state?: "dim" | "avail" | "sel" | "closed" };

const calendarRows: Day[][] = [
  [
    { n: 26, state: "dim" },
    { n: 27, state: "dim" },
    { n: 28, state: "dim" },
    { n: 29, state: "dim" },
    { n: 30, state: "dim" },
    { n: 1, state: "closed" },
    { n: 2, state: "closed" },
  ],
  [
    { n: 3, state: "closed" },
    { n: 4, state: "avail" },
    { n: 5, state: "avail" },
    { n: 6, state: "avail" },
    { n: 7, state: "avail" },
    { n: 8, state: "closed" },
    { n: 9, state: "closed" },
  ],
  [
    { n: 10, state: "closed" },
    { n: 11, state: "avail" },
    { n: 12, state: "avail" },
    { n: 13, state: "sel" },
    { n: 14, state: "avail" },
    { n: 15, state: "closed" },
    { n: 16, state: "closed" },
  ],
  [
    { n: 17, state: "closed" },
    { n: 18, state: "avail" },
    { n: 19, state: "avail" },
    { n: 20, state: "avail" },
    { n: 21, state: "avail" },
    { n: 22, state: "closed" },
    { n: 23, state: "closed" },
  ],
  [
    { n: 24, state: "closed" },
    { n: 25, state: "avail" },
    { n: 26, state: "avail" },
    { n: 27, state: "avail" },
    { n: 28, state: "avail" },
    { n: 29, state: "closed" },
    { n: 30, state: "closed" },
  ],
];

const slots = [
  "8:00 AM",
  "9:30 AM",
  "10:30 AM",
  "11:15 AM",
  "1:00 PM",
  "2:30 PM",
  "3:45 PM",
  "4:30 PM",
];
const selectedSlot = "10:30 AM";

function GoogleG({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function StarRow() {
  return (
    <span className="booker-stars" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z"
          />
        </svg>
      ))}
    </span>
  );
}

export default function Booker() {
  return (
    <section className="booker-section" id="booker">
      <div className="booker-bg" aria-hidden="true" />
      <div className="booker-inner">
        <div className="booker-pitch">
          <div className="num">iv. — Reserve</div>
          <h2>
            Reserve your <em>visit.</em>
          </h2>
          <p className="booker-lede">
            Comprehensive exam, digital X-rays, and a one-on-one consultation with
            Dr. Martenson. Pick a date and a time — we&apos;ll confirm by email.
          </p>
          <ul className="booker-bullets">
            <li>
              <b>Now accepting</b> new patients
            </li>
            <li>
              <b>Insurance accepted</b> · financing available
            </li>
            <li>
              Or call <a href="tel:5103503937">(510) 350-3937</a>
            </li>
          </ul>

          <figure className="booker-quote">
            <StarRow />
            <blockquote>
              &ldquo;I have been a patient with Dr. Martenson for over 20 years. The
              entire experience is Spa-like. I love it!&rdquo;
            </blockquote>
            <figcaption>
              <span className="who">Devony C.</span>
              <span className="src">
                <GoogleG size={11} /> Posted on Google
              </span>
            </figcaption>
          </figure>
        </div>

        <aside className="booker">
          <div className="booker-head">
            <h3>Book a visit</h3>
            <span className="duration">New patient</span>
          </div>

          <div className="booker-row">
            <span>
              <div className="lbl">Visit type</div>
              <div className="val">New patient · Comprehensive exam</div>
            </span>
            <span className="chev">⌄</span>
          </div>
          <div className="booker-row">
            <span>
              <div className="lbl">Provider</div>
              <div className="val">Dr. Jill Martenson</div>
            </span>
            <span className="chev">⌄</span>
          </div>

          <div className="booker-cal">
            <div className="cal-month">
              <span className="nav-arr">‹</span>
              <span>May 2026</span>
              <span className="nav-arr">›</span>
            </div>
            <div className="cal-grid">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <span className="dow" key={`dow-${i}`}>
                  {d}
                </span>
              ))}
              {calendarRows.flat().map((d, i) => (
                <span
                  key={`day-${i}`}
                  className={`day${d.state ? ` ${d.state}` : ""}`}
                >
                  {d.n}
                </span>
              ))}
            </div>
          </div>

          <div className="slots">
            {slots.map((s) => (
              <span
                key={s}
                className={`slot${s === selectedSlot ? " sel" : ""}`}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="booker-confirm">CONFIRM · Wed May 13, 10:30 AM</div>
          <div className="booker-tiny">1331 Grand Ave, Piedmont · CA 94610</div>
        </aside>
      </div>
    </section>
  );
}
