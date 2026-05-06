const cols = [
  {
    heading: "Care",
    links: ["Cosmetic", "Restoration", "Periodontal", "Cleanings"],
  },
  {
    heading: "Practice",
    links: ["About", "Meet the team", "Smile gallery", "Patient resources"],
  },
  {
    heading: "Visit",
    links: ["Book online", "Insurance", "Financing", "FAQ"],
  },
  {
    heading: "Patients",
    links: ["New patient forms", "Referral portal", "Smile analysis", "Contact"],
  },
];

const LAST_UPDATED = "May 2026";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="col-brand">
          <a href="/" className="brand" aria-label="Piedmont Dental By Design — Home">
            <img
              src="/logo.webp"
              alt="Piedmont Dental By Design"
              width={210}
              height={90}
              className="brand-logo"
            />
          </a>
          <p>
            1331 Grand Ave
            <br />
            Piedmont, CA 94610
            <br />
            (510) 350-3937 · Mon–Thu
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.heading}>
            <h5>{col.heading}</h5>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 Piedmont Dental By Design · Piedmont, CA
          <span className="footer-updated"> · Last updated {LAST_UPDATED}</span>
        </span>
        <nav className="footer-legal" aria-label="Legal">
          <a href="/terms-and-conditions">Terms</a>
          <a href="/privacy-policy-2">Privacy</a>
          <a href="/notice-of-privacy-practices">Notice of Privacy Practices</a>
        </nav>
        <div className="footer-social">
          <a href="https://www.instagram.com/piedmontdentalbydesign/" aria-label="Instagram">
            IG
          </a>
          <a href="https://www.facebook.com/piedmontdentalbydesign/" aria-label="Facebook">
            FB
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube">
            YT
          </a>
          <a href="https://www.google.com/maps" aria-label="Google">
            G
          </a>
        </div>
      </div>
    </footer>
  );
}
