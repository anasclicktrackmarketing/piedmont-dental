"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getAttributionData } from "@/lib/attribution";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Pushes a `virtualPageview` dataLayer event on every App Router route
 * change, carrying the 15 Peoplelytics attribution fields so the GTM
 * "GA4 - page_view (SPA)" tag has full attribution context on every hit.
 *
 * Must run AFTER AttributionCapture's effect on the same pathname change —
 * mount this second in app/layout.tsx so getAttributionData() reads the
 * just-updated record, not the previous page's.
 *
 * The Google tag's native page_view must be disabled (send_page_view=false)
 * in GTM, or every load double-counts. See peoplelytics-ga4-setup SKILL.md.
 */
function VirtualPageviewInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const attribution = getAttributionData();
    const search = searchParams?.toString();
    const pagePath = search ? `${pathname}?${search}` : pathname;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "virtualPageview",
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
      visitor_source_first: attribution.visitor_source_first,
      visitor_source_recent: attribution.visitor_source_recent,
      attribution_method: attribution.attribution_method,
      attribution_confidence: attribution.attribution_confidence,
      aeo_source_engine_first: attribution.aeo_source_engine_first,
      aeo_source_engine_recent: attribution.aeo_source_engine_recent,
      utm_source_captured: attribution.utm_source_captured,
      utm_medium_captured: attribution.utm_medium_captured,
      utm_campaign_captured: attribution.utm_campaign_captured,
      utm_term_captured: attribution.utm_term_captured,
      utm_content_captured: attribution.utm_content_captured,
      gclid_captured: attribution.gclid_captured,
      fbclid_captured: attribution.fbclid_captured,
      msclkid_captured: attribution.msclkid_captured,
      ttclid_captured: attribution.ttclid_captured,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return null;
}

export default function VirtualPageview() {
  return (
    <Suspense fallback={null}>
      <VirtualPageviewInner />
    </Suspense>
  );
}
