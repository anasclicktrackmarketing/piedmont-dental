import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <section className="not-found">
          <div className="not-found-inner">
            <div className="num">— 404 —</div>
            <h1>
              This page took a <em>detour.</em>
            </h1>
            <p>
              The page you're looking for doesn't exist or may have moved.
              Try one of the links below, or head back to the homepage.
            </p>
            <div className="not-found-actions">
              <Link href="/" className="btn btn-primary btn-lg">
                Back to home
              </Link>
              <Link href="/contact" className="btn btn-ghost btn-lg">
                Contact us
              </Link>
            </div>
            <ul className="not-found-links">
              <li>
                <Link href="/procedures">Procedures</Link>
              </li>
              <li>
                <Link href="/about">About the practice</Link>
              </li>
              <li>
                <Link href="/smile-gallery">Smile gallery</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
