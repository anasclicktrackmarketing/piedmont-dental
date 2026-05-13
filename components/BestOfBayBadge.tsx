import Image from "next/image";

/**
 * Sticky decorative "Best of the Bay 2025" badge.
 *
 * Pinned to bottom-left of the viewport, present on every page, NOT clickable
 * — purely a recognition / pride display. Hidden from screen readers via
 * aria-hidden because there's a richer textual award reference in the page
 * structured data + about page.
 */
export default function BestOfBayBadge() {
  return (
    <div className="bob-badge" aria-hidden="true">
      <Image
        src="/img/badges/best-of-bay-2025.webp"
        alt=""
        width={140}
        height={95}
        sizes="(max-width: 720px) 80px, 140px"
        priority={false}
      />
    </div>
  );
}
