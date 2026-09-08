import Script from "next/script";

const CT_KEY = "cta_piedmontdentalbydesign_com_v1";

/**
 * Click Track Analytics (ct.js) - first-party attribution collector.
 *
 * strategy="beforeInteractive" is deliberate, not cosmetic. Next hoists these
 * into <head> and runs them ahead of every other script, which is what the
 * install SOP means by "before any form scripts": a form script can only read
 * window.CT once the loader has run. It also means ct.js samples the real
 * landing URL and referrer before any client-side navigation can rewrite them,
 * so landing_page_first / referrer_url_captured stay honest.
 *
 * Forms read the captured record at submit time via
 * window.CT.ghlCustomFields(); a native-submit form can instead carry
 * data-ct-capture and ct.js injects the hidden inputs itself.
 */
export function ClickTrackAnalytics() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        id="click-track-analytics"
        src="https://app.clicktrackanalytics.com/ct.js"
        data-key={CT_KEY}
        strategy="beforeInteractive"
      />
    </>
  );
}
