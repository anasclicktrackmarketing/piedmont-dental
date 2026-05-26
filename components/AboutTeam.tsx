import Image from "next/image";

type Member = {
  name: string;
  role: string;
  /** Optional: drop a headshot at /public/team/<file> and reference here. */
  photo?: string;
  /** CSS background used as a placeholder when no photo is set. */
  bg: string;
};

// Tasteful photo-style gradients that read as "image placeholder" until real headshots land.
// Each gradient is two-stop, light-top → dark-bottom, suggesting a portrait against a backdrop.
const GRADIENTS = {
  teal: "linear-gradient(140deg, #5dd0c2 0%, #2c8c82 100%)",
  ink: "linear-gradient(140deg, #4a4a4a 0%, #1a1a1a 100%)",
  warm: "linear-gradient(140deg, #8a7860 0%, #4a3a2a 100%)",
  tealDeep: "linear-gradient(140deg, #4dc4b6 0%, #1f6b62 100%)",
} as const;

const doctors: Member[] = [
  {
    name: "Dr. Jill A. Martenson",
    role: "Co-Owner · Cosmetic",
    bg: GRADIENTS.teal,
    // photo: "/team/dr-martenson.jpg",  // ← drop file here when available
  },
  {
    name: "Dr. David Ma",
    role: "Co-Owner · Restorative",
    bg: GRADIENTS.warm,
  },
  {
    name: "Dr. Filippo Cangini",
    role: "Periodontics",
    bg: GRADIENTS.ink,
  },
];

const PALETTE = [GRADIENTS.teal, GRADIENTS.ink, GRADIENTS.warm, GRADIENTS.tealDeep];

const staffRaw: Omit<Member, "bg">[] = [
  { name: "Christine", role: "Patient Services Manager · RDA" },
  { name: "Elaina", role: "Financial, Treatment & Business Manager" },
  { name: "Michelle", role: "Registered Dental Hygienist" },
  { name: "Kelley", role: "Registered Dental Hygienist" },
  { name: "Cesar", role: "Registered Dental Hygienist" },
  { name: "Lee'Lannee", role: "Expanded Function Dental Assistant 2" },
  { name: "Debra", role: "Registered Dental Assistant" },
  { name: "Susana", role: "Registered Dental Assistant" },
];

const staff: Member[] = staffRaw.map((m, i) => ({
  ...m,
  bg: PALETTE[i % PALETTE.length],
}));

function PersonGlyph() {
  // Soft generic person silhouette — only shown when no photo is set.
  return (
    <svg
      className="team-avatar-glyph"
      viewBox="0 0 64 64"
      width="34"
      height="34"
      aria-hidden="true"
    >
      <circle cx="32" cy="22" r="10" fill="rgba(255,255,255,0.55)" />
      <path
        d="M12 56c0-11 9-18 20-18s20 7 20 18"
        fill="rgba(255,255,255,0.55)"
      />
    </svg>
  );
}

function TeamCard({ name, role, photo, bg }: Member) {
  return (
    <article className="team-card">
      <span className="team-avatar" style={!photo ? { background: bg } : undefined}>
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="64px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <PersonGlyph />
        )}
      </span>
      <div className="team-card-text">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </article>
  );
}

export default function AboutTeam() {
  return (
    <section className="team-section" id="team">
      <div className="team-inner">
        <header className="section-head team-head">
          <div>
            <div className="num">ii. — Team</div>
            <h2>
              Meet the people behind <em>your care.</em>
            </h2>
            <p className="about-question">Who works at Piedmont Dental?</p>
          </div>
          <p className="lede">
            Three dentists and eight practice staff. The same hygienist or
            assistant tends to handle the same patients visit after visit —
            it&apos;s how we keep care personal.
          </p>
        </header>

        <div className="team-block">
          <h3 className="team-subhead">Dentists</h3>
          <div className="team-grid team-grid--doctors">
            {doctors.map((d) => (
              <TeamCard key={d.name} {...d} />
            ))}
          </div>
        </div>

        <div className="team-block">
          <h3 className="team-subhead">Practice team</h3>
          <div className="team-grid team-grid--staff">
            {staff.map((s) => (
              <TeamCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
