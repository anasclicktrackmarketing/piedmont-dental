import Image from "next/image";

/**
 * Best of the East Bay 2026 award banner.
 *
 * Rendered from the root layout so it sits at the very top of every page,
 * above the announcement bar and the sticky header. It scrolls away with the
 * page — only .site-header sticks.
 *
 * Sizing: the artwork is 1350×200 (6.75:1), which is far too wide to run
 * full-bleed at its natural aspect — a 1440px viewport would make it 213px
 * tall. Instead the strip is full-bleed navy (#202845, sampled from the
 * artwork) with padding above and below, and the artwork itself is capped at
 * 756×112, the largest size that renders it uncropped.
 *
 * The cap in globals.css is a width derived from the height (height × 6.75),
 * not a flat 756px, so the box can never be proportionally wider than the
 * artwork and object-fit: cover can never slice the medals top-and-bottom.
 * Below that width the box narrows and cover trims the decorative corner
 * swooshes instead; the height clamp is tuned so the three medals
 * (source x 240–1109) stay fully visible down to a 320px viewport.
 */
export default function AwardBanner() {
  return (
    <div className="award-banner">
      <div className="award-banner-inner">
        <Image
          src="/img/badges/best-of-east-bay-2026-banner.webp"
          alt="Voted Best of the East Bay 2026 — Gold Medal Winner for Best Dental Practice and Silver Medal Winner for Best Esthetic Dental Practice"
          fill
          sizes="(max-width: 756px) 100vw, 756px"
          priority
        />
      </div>
    </div>
  );
}
