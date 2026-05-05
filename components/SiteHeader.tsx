"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ABOUT_DROPDOWN = [
  { href: "/about/dr-martenson", label: "Dr. Jill Martenson" },
  { href: "/about/dr-cangini", label: "Dr. Filippo Cangini" },
  { href: "/about/dr-ma", label: "Dr. David Ma" },
  { href: "/about/team", label: "Meet the Team" },
  { href: "/about/tour", label: "Office Tour" },
];

type DropdownItem = { href: string; label: string; muted?: boolean };
type DropdownGroup = { heading: string; items: DropdownItem[] };

const PROCEDURES_DROPDOWN: DropdownGroup[] = [
  {
    heading: "Restoration",
    items: [
      { href: "/procedures/restoration", label: "Overview" },
      { href: "/procedures/restoration/dental-implants", label: "Dental Implants" },
      { href: "/procedures/restoration/composite-fillings", label: "Composite Fillings" },
      { href: "/procedures/restoration/crowns-caps", label: "Crowns (Caps)" },
      { href: "/procedures/restoration/dentures-partial-dentures", label: "Dentures & Partial Dentures" },
      { href: "/procedures/restoration/fixed-bridges", label: "Fixed Bridges" },
    ],
  },
  {
    heading: "Cosmetic Dentistry",
    items: [
      { href: "/procedures/cosmetic-dentistry", label: "Overview" },
      { href: "/procedures/cosmetic-dentistry/porcelain-veneers", label: "Porcelain Veneers" },
      { href: "/procedures/cosmetic-dentistry/tooth-whitening", label: "Tooth Whitening" },
      { href: "/procedures/cosmetic-dentistry/cerec", label: "CEREC®" },
      { href: "/procedures/cosmetic-dentistry/invisalign", label: "Invisalign®" },
      { href: "/procedures/cosmetic-dentistry/surgery", label: "Cosmetic Surgery" },
    ],
  },
  {
    heading: "Other categories",
    items: [
      { href: "/procedures#periodontal", label: "Periodontal Services", muted: true },
      { href: "/procedures#prevention", label: "Cleanings & Prevention", muted: true },
    ],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu whenever route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav">
        <Link href="/" className="brand" aria-label="Piedmont Dental By Design — Home">
          <Image
            src="/logo.webp"
            alt="Piedmont Dental By Design"
            width={234}
            height={100}
            priority
            className="brand-logo"
          />
        </Link>
        <div className="nav-links">
          <div className="nav-dropdown nav-dropdown--wide">
            <Link href="/procedures" className="nav-dropdown-trigger">
              Procedures
              <svg
                className="nav-dropdown-icon"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </Link>
            <div className="nav-dropdown-menu nav-dropdown-menu--grouped" role="menu">
              {PROCEDURES_DROPDOWN.map((group) => (
                <div className="nav-dropdown-group" key={group.heading}>
                  <span className="nav-dropdown-heading">{group.heading}</span>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className={item.muted ? "is-muted" : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <Link href="/about" className="nav-dropdown-trigger">
              About
              <svg
                className="nav-dropdown-icon"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </Link>
            <div className="nav-dropdown-menu" role="menu">
              {ABOUT_DROPDOWN.map((item) => (
                <Link key={item.href} href={item.href} role="menuitem">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/resources">Resources</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-right">
          <a href="tel:5103503937" className="phone-link">
            (510) 350-3937
          </a>
          <Link href="/#booker" className="btn btn-primary">
            Book a visit
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`nav-toggle-bars ${open ? "is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!open}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-section">
            <span className="mobile-menu-heading">Procedures</span>
            <Link href="/procedures" className="mobile-menu-link">All procedures</Link>

            {PROCEDURES_DROPDOWN.map((group) => (
              <div className="mobile-menu-group" key={group.heading}>
                <span className="mobile-menu-subheading">{group.heading}</span>
                {group.items.map((item) =>
                  item.muted ? (
                    <span key={item.href} className="mobile-menu-link is-muted">
                      {item.label} <em>· coming soon</em>
                    </span>
                  ) : (
                    <Link key={item.href} href={item.href} className="mobile-menu-link">
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>

          <div className="mobile-menu-section">
            <span className="mobile-menu-heading">About</span>
            <Link href="/about" className="mobile-menu-link">About the practice</Link>
            {ABOUT_DROPDOWN.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-menu-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mobile-menu-section">
            <span className="mobile-menu-heading">More</span>
            <Link href="/resources" className="mobile-menu-link">Resources</Link>
            <Link href="/blog" className="mobile-menu-link">Blog</Link>
            <Link href="/faqs" className="mobile-menu-link">FAQs</Link>
            <Link href="/contact" className="mobile-menu-link">Contact</Link>
          </div>

          <div className="mobile-menu-cta">
            <a href="tel:5103503937" className="mobile-menu-phone">
              <span className="mobile-menu-phone-label">Call the office</span>
              <span className="mobile-menu-phone-num">(510) 350-3937</span>
            </a>
            <Link href="/#booker" className="btn btn-primary btn-lg mobile-menu-book">
              Book a visit →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
