type Resource = {
  title: string;
  desc: string;
  href: string;
  external?: boolean;
  iconPath: string; // SVG path data
};

type Group = {
  label: string;
  blurb: string;
  items: Resource[];
};

// Each icon is a single SVG path. Style is uniform (1.5px stroke, currentColor).
const ICONS = {
  forms: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M9 13h6M9 17h4",
  postOp: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
  account: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  referral: "M5 12h14M12 5l7 7-7 7",
  videos: "M23 7l-7 5 7 5V7zM14 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
  analysis: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35",
  gallery: "M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM21 15l-5-5L5 21",
  insurance: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  financing: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
};

const groups: Group[] = [
  {
    label: "Forms & Account",
    blurb: "Paperwork before your visit. Account access after.",
    items: [
      {
        title: "Patient Forms",
        desc: "Complete new patient paperwork online before your visit.",
        href: "https://www.dentalsymphony.com",
        external: true,
        iconPath: ICONS.forms,
      },
      {
        title: "Post-Op Instructions",
        desc: "Care instructions following your procedure — what to expect, what to avoid.",
        href: "/resources/post-op",
        iconPath: ICONS.postOp,
      },
      {
        title: "View Your Account",
        desc: "Access statements, treatment history, and balance online.",
        href: "/resources/account",
        iconPath: ICONS.account,
      },
      {
        title: "Referral Portal",
        desc: "For referring practices — submit a patient through Dental Symphony.",
        href: "https://www.dentalsymphony.com",
        external: true,
        iconPath: ICONS.referral,
      },
    ],
  },
  {
    label: "Education & Care",
    blurb: "Understand procedures and explore your options.",
    items: [
      {
        title: "Dental Videos",
        desc: "Educational videos explaining common procedures and what to expect.",
        href: "/resources/videos",
        iconPath: ICONS.videos,
      },
      {
        title: "Smile Analysis",
        desc: "Take our interactive smile analysis to see what cosmetic treatments could help.",
        href: "/resources/smile-analysis",
        iconPath: ICONS.analysis,
      },
      {
        title: "Smile Gallery",
        desc: "Real before-and-after results from the practice — by procedure.",
        href: "/resources/smile-gallery",
        iconPath: ICONS.gallery,
      },
    ],
  },
  {
    label: "Financial",
    blurb: "How treatment is paid for.",
    items: [
      {
        title: "Insurance",
        desc: "Plans we accept and how to verify your coverage before booking.",
        href: "/resources/insurance",
        iconPath: ICONS.insurance,
      },
      {
        title: "Financing",
        desc: "Payment plans and financing options for treatments not fully covered.",
        href: "/resources/financing",
        iconPath: ICONS.financing,
      },
    ],
  },
];

function ResourceCard({ title, desc, href, external, iconPath }: Resource) {
  const targetProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a className="resource-card" href={href} {...targetProps}>
      <span className="resource-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d={iconPath}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div className="resource-text">
        <h4>
          {title}
          {external && (
            <span className="resource-external" aria-label="Opens in a new tab">
              ↗
            </span>
          )}
        </h4>
        <p>{desc}</p>
      </div>
      <span className="resource-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

export default function ResourcesHub() {
  return (
    <section className="resources-hub" id="hub">
      <div className="resources-hub-inner">
        <header className="section-head">
          <div>
            <div className="num">i. — Resources</div>
            <h2>
              Self-service, on <em>your</em> time.
            </h2>
            <p className="about-question">What can I do without calling?</p>
          </div>
          <p className="lede">
            Most patient questions and tasks have an online answer. Forms,
            account, gallery, insurance, and financing — grouped below by what
            you&apos;re trying to do.
          </p>
        </header>

        <div className="resources-groups">
          {groups.map((g) => (
            <div className="resources-group" key={g.label}>
              <header className="resources-group-head">
                <h3 className="resources-group-label">{g.label}</h3>
                <p className="resources-group-blurb">{g.blurb}</p>
              </header>
              <div className="resources-grid">
                {g.items.map((item) => (
                  <ResourceCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
