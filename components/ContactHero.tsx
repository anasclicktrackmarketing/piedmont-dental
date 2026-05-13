export default function ContactHero() {
  return (
    <section className="page-hero contact-hero">
      <div className="page-hero-inner contact-hero-inner">
        <div className="page-hero-content">
          <div className="num">— Contact Us —</div>
          <h1>
            Get in <em>touch.</em>
          </h1>
          <p className="page-hero-sub">
            We encourage you to contact us with any questions or comments. Send a
            message using the form, or reach the practice directly through the
            channels below — we usually reply within an hour during open hours.
          </p>

          <ul className="contact-channels">
            <li>
              <span className="cc-label">Front desk</span>
              <a href="tel:5103503937" className="cc-value">
                (510) 350-3937
              </a>
              <span className="cc-meta">During open hours · text-friendly</span>
            </li>
            <li>
              <span className="cc-label">Dr. Jill Martenson</span>
              <a
                href="mailto:jmartenson@piedmontdentalbydesign.com"
                className="cc-value"
              >
                jmartenson@piedmontdentalbydesign.com
              </a>
              <span className="cc-meta">Direct email — clinical questions</span>
            </li>
            <li>
              <span className="cc-label">Visit</span>
              <span className="cc-value">1331 Grand Ave, Piedmont, CA 94610</span>
              <span className="cc-meta">5 minutes from MacArthur BART</span>
            </li>
          </ul>
        </div>

        <aside className="contact-form-wrap" id="form">
          <form
            className="contact-form"
            method="post"
            action="#"
            aria-label="Contact Piedmont Dental"
          >
            <header className="contact-form-head">
              <h2>Send a message</h2>
              <span className="contact-form-meta">~ 1 minute</span>
            </header>

            <div className="form-row">
              <label htmlFor="contact-name">
                Name <span className="req" aria-label="required">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your full name"
              />
            </div>

            <div className="form-row form-row--split">
              <div>
                <label htmlFor="contact-email">
                  Email <span className="req">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-phone">
                  Phone <span className="req">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(510) 555-0000"
                />
              </div>
            </div>

            <fieldset className="form-radiogroup">
              <legend>
                Are you a new or existing patient?{" "}
                <span className="req">*</span>
              </legend>
              <div className="form-radiogroup-options">
                <label className="form-radio">
                  <input
                    type="radio"
                    name="patient_status"
                    value="new"
                    required
                  />
                  <span>New patient</span>
                </label>
                <label className="form-radio">
                  <input
                    type="radio"
                    name="patient_status"
                    value="existing"
                  />
                  <span>Existing patient</span>
                </label>
              </div>
            </fieldset>

            <div className="form-row">
              <label htmlFor="contact-message">
                Message <span className="req">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder="Tell us a bit about what brings you in — new patient, specific procedure, scheduling question, etc."
              />
            </div>

            <label className="form-consent">
              <input type="checkbox" name="consent" required />
              <span>
                I consent to receive text messages, phone calls, and emails with
                the information I&apos;ve provided. I can stop that communication
                at any time and Piedmont Dental by Design will honor my request.
              </span>
            </label>

            <p className="form-disclaimer">
              <strong>Disclaimer:</strong> We do not accept Medi-cal and
              Medi-care.
            </p>

            <button type="submit" className="btn btn-teal btn-lg form-submit">
              Send message →
            </button>
            <p className="form-fineprint">
              We typically reply within an hour during open hours · Required
              fields marked with <span className="req">*</span>
            </p>
          </form>
        </aside>
      </div>
    </section>
  );
}
