/**
 * Field names shared between the forms (client) and the spam guard
 * (server). Kept separate from lib/spam-guard.ts so client bundles don't
 * pull in the server-only screening code.
 */

/** Visually hidden input real users never fill; bots auto-fill it. */
export const HONEYPOT_FIELD = "company_website";

/** Milliseconds between the form rendering and the user submitting it. */
export const FILL_MS_FIELD = "form_fill_ms";
