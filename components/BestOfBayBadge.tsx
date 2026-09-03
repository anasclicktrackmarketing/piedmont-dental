import Image from "next/image";

/**
 * Sticky decorative "Best of the East Bay 2026" badge.
 *
 * Pinned to the bottom-right of the viewport, to the left of the GTM-injected
 * LeadConnector chat launcher rather than under it — see .bob-badge in
 * globals.css. Present on every page, NOT clickable — purely a recognition /
 * pride display. Hidden from screen readers via aria-hidden because there's a
 * richer textual award reference in the page structured data + about page.
 *
 * The mark is portrait (292×350) where the 2025 one it replaced was landscape,
 * so the widths in globals.css came down to keep the corner footprint roughly
 * where it was. Source note: cropped from the client's 2026 award banner
 * artwork, the only 2026 mark we have — swap in the official EBX winner icon
 * here if they send the standalone file.
 */
export default function BestOfBayBadge() {
  return (
    <div className="bob-badge" aria-hidden="true">
      <Image
        src="/img/badges/best-of-east-bay-2026-icon.webp"
        alt=""
        width={292}
        height={350}
        sizes="(max-width: 720px) 60px, (max-width: 1080px) 82px, 104px"
        priority={false}
      />
    </div>
  );
}
