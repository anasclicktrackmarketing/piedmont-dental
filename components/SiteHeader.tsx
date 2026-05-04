import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
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
          <Link href="/procedures">Procedures</Link>
          <Link href="/about">About</Link>
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
        </div>
      </nav>
    </header>
  );
}
