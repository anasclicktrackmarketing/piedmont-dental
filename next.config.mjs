/** @type {import('next').NextConfig} */

/* Third-party origins, grouped by vendor. Everything below is injected at
   runtime by the GTM container (GTM-PLVLXN8R) rather than by app code, so a tag
   added in the GTM UI needs its origins added here or the browser silently
   blocks it. Keep the groups named — the next marketing tag should be a
   one-line addition, not a CSP rewrite. */
const GTM = ["https://www.googletagmanager.com"];

const GOOGLE_ANALYTICS = [
  "https://www.google-analytics.com",
  "https://*.google-analytics.com",
  // Bare host is required alongside the wildcard: a `*.` CSP wildcard matches
  // subdomains only, so https://*.analytics.google.com does NOT cover
  // https://analytics.google.com, which is where GA4 posts /g/collect.
  "https://analytics.google.com",
  "https://*.analytics.google.com",
  // GA4 ad-signal / audience pings.
  "https://stats.g.doubleclick.net",
  "https://www.google.com",
];

// GoHighLevel chat widget (widgets.leadconnectorhq.com/loader.js).
const LEADCONNECTOR = [
  "https://widgets.leadconnectorhq.com",
  "https://*.leadconnectorhq.com",
  "https://*.msgsndr.com",
];

/* IntentWave cookie-consent banner — DELIBERATELY NOT ALLOWLISTED.
   cdn.intentwave.com/tag.js is blocked, so the tag never runs. This is on hold
   pending a check with the team: commit d0fc77f allowed it and 2304eca reverted
   that 14 minutes later without recording a reason, and the tag is described
   there as "identity-resolution", which is a privacy call rather than a
   technical one. Do not re-enable without that confirmation.

   When it is confirmed, uncomment this and add ...INTENTWAVE back to
   THIRD_PARTY and to the style-src / font-src / frame-src lines below. All five
   origins are needed: the earlier attempt only covered script-src and
   connect-src, which would still have left the banner unstyled — its own
   stylesheet is served from cdn.intentwave.com and it pulls Roboto from Bunny
   Fonts. Note the banner is geo-gated by IntentWave itself and will not render
   outside a consent-required region regardless of the CSP.

const INTENTWAVE = [
  "https://cdn.intentwave.com",
  "https://*.intentwave.com",
  "https://fonts.bunny.net",
];
*/

const THIRD_PARTY = [...GTM, ...GOOGLE_ANALYTICS, ...LEADCONNECTOR];

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Lenient CSP — allows the Google Maps iframe in Visit, the next/image optimization,
    // Google Fonts via next/font, inline JSON-LD, and the GTM-injected tags above.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      ["script-src 'self' 'unsafe-inline' 'unsafe-eval'", ...THIRD_PARTY].join(" "),
      ["style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", ...LEADCONNECTOR].join(" "),
      ["font-src 'self' data: https://fonts.gstatic.com", ...LEADCONNECTOR].join(" "),
      "img-src 'self' data: blob: https:",
      // The chat widget plays a notification sound on incoming messages.
      ["media-src 'self' data:", ...LEADCONNECTOR].join(" "),
      ["frame-src 'self' https://maps.google.com https://www.google.com https://www.googletagmanager.com", ...LEADCONNECTOR].join(" "),
      ["connect-src 'self'", ...THIRD_PARTY, "wss://*.leadconnectorhq.com"].join(" "),
      // The chat widget runs its realtime transport in a blob-backed worker.
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
