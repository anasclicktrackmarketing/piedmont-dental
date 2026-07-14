"use client";

import Link from "next/link";

interface SmsConsentProps {
  /** Unique DOM id — required so multiple forms on the same page have stable labels. */
  id: string;
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
  /** Error string shown below the checkbox when submit is blocked. */
  errorMessage?: string;
}

/**
 * A2P 10DLC SMS consent checkbox. Required on every form on this site that
 * collects a phone number. The consent copy below is the carrier-approved
 * language (brand name, message types, frequency disclosure, rate
 * disclosure, HELP/STOP instructions, Privacy/Terms links) — do not edit
 * without re-checking against the Twilio brand/campaign registration.
 *
 * Each form using this component must:
 *   1. Manage its own `checked` state.
 *   2. Gate submission on `checked === true`.
 *   3. Send `form_consent_sms: true, form_consent_marketing: true`,
 *      `form_consent_sms_timestamp`, and `form_consent_sms_text` in the
 *      lead payload when submitted.
 *
 * Place directly under the form's Submit button.
 */
export default function SmsConsent({
  id,
  checked,
  onCheckedChange,
  errorMessage,
}: SmsConsentProps) {
  const errorId = errorMessage ? `${id}-error` : undefined;
  return (
    <div className="sms-consent">
      <label htmlFor={id} className="form-consent">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheckedChange(e.target.checked)}
          aria-invalid={Boolean(errorMessage)}
          aria-describedby={errorId}
          required
        />
        <span>
          I consent to receive text messages from Piedmont Dental By Design,
          including appointment reminders, scheduling follow-ups, and
          practice updates. Message frequency varies. Message &amp; data
          rates may apply. Text HELP for assistance. Reply STOP to
          unsubscribe at any time. View our{" "}
          <Link href="/privacy-policy-2" target="_blank" rel="noopener noreferrer">
            Privacy Policy
            <span className="sr-only"> (opens in a new window)</span>
          </Link>{" "}
          and{" "}
          <Link href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
            Terms &amp; Conditions
            <span className="sr-only"> (opens in a new window)</span>
          </Link>
          .
        </span>
      </label>
      {errorMessage && (
        <p id={errorId} className="sms-consent-error" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

/**
 * The exact consent copy shown above, as a plain string — sent in the lead
 * payload as `form_consent_sms_text` so the legal record survives even if
 * the on-page text is later edited.
 */
export const SMS_CONSENT_TEXT =
  "I consent to receive text messages from Piedmont Dental By Design, including appointment reminders, scheduling follow-ups, and practice updates. Message frequency varies. Message & data rates may apply. Text HELP for assistance. Reply STOP to unsubscribe at any time.";
