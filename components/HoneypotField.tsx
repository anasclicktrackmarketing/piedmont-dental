import { HONEYPOT_FIELD } from "@/lib/spam-guard-fields";

/**
 * Anti-spam honeypot. Positioned off-screen (not display:none — many bots
 * skip those) and excluded from tab order, screen readers, and autofill,
 * so no human ever touches it. Any value here marks the submission as a bot.
 */
export default function HoneypotField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="form-hp" aria-hidden="true">
      <label htmlFor={`hp-${HONEYPOT_FIELD}`}>Company website</label>
      <input
        id={`hp-${HONEYPOT_FIELD}`}
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
