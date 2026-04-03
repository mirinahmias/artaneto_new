"use client";

import { useState } from "react";

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const [email, setEmail]           = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [phone, setPhone]           = useState("");
  const [phoneError, setPhoneError] = useState("");

  function validateEmail(value: string): string {
    const trimmed = value.trim();
    if (!trimmed) return "חובה להזין כתובת אימייל";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "כתובת אימייל לא תקינה";
    return "";
  }

  function validatePhone(value: string): string {
    const trimmed = value.trim();
    if (!trimmed) return ""; // optional
    const digits = trimmed.replace(/\D/g, "");
    if (!/^[\d\s\-\+\(\)]+$/.test(trimmed) || digits.length < 7) return "מספר הטלפון אינו תקין";
    return "";
  }

  function handleEmailBlur() {
    setEmailTouched(true);
    setEmailError(validateEmail(email));
  }

  function handlePhoneBlur() {
    setPhoneError(validatePhone(phone));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const eErr = validateEmail(email);
    const pErr = validatePhone(phone);

    setEmailTouched(true);
    setEmailError(eErr);
    setPhoneError(pErr);

    if (eErr || pErr) return;

    // TODO: wire to real API
    setShowSuccess(true);
    setEmail("");
    setPhone("");
    setEmailError("");
    setPhoneError("");
    setEmailTouched(false);
    (e.target as HTMLFormElement).reset();
  }

  const emailBorder = emailTouched && emailError
    ? "1px solid #b87c6a"
    : "1px solid #e7dfd3";

  const phoneBorder = phoneError
    ? "1px solid #b87c6a"
    : "1px solid #e7dfd3";

  return (
    <div className="contact-page">

      {/* ── Success Modal ── */}
      {showSuccess && (
        <div
          onClick={() => setShowSuccess(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(20,16,12,0.55)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#faf8f4",
              borderRadius: "20px",
              padding: "40px 36px 32px",
              maxWidth: "440px",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 24px 64px rgba(20,16,12,0.18)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "10px", color: "#1c1410", lineHeight: 1.3 }}>
              ההודעה שלך התקבלה
            </h2>
            <p style={{ fontSize: "15px", color: "#6b5e4a", lineHeight: 1.6, marginBottom: "8px" }}>
              תודה שפנית אליי. אחזור אלייך בהקדם האפשרי.
            </p>
            <p style={{ fontSize: "13px", color: "#8a7a5c", marginBottom: "28px", fontStyle: "italic" }}>
              כל לוח מתחיל בשיחה אחת
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                display: "block", width: "100%", padding: "11px 24px",
                backgroundColor: "#c9a96e", color: "#100b09", border: "none",
                borderRadius: "999px", fontSize: "14px", fontWeight: 700,
                cursor: "pointer", marginBottom: "10px", letterSpacing: "0.02em",
                transition: "background-color 0.18s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b8945a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c9a96e"; }}
            >
              סגירה
            </button>
            <a href="/" style={{ display: "block", fontSize: "13px", color: "#8a7a5c", textDecoration: "none", letterSpacing: "0.02em" }}>
              חזרה לדף הבית
            </a>
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-hero-logo-wrap">
            <img src="/logo/artneto.logo.png" alt="ArtNeto" className="contact-hero-logo" />
          </div>

          <h1 style={{ fontSize: "32px", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "12px", textAlign: "center" }}>
            כל סיפור מתחיל בסמל אחד
          </h1>

          <p style={{ fontSize: "16px", lineHeight: 1.6, color: "#6b5e4a", maxWidth: "560px", margin: "0 auto 28px auto", textAlign: "center" }}>
            ואולי שלך כבר מחכה להפוך ללוח.
            <br />
            מקום קטן על הקיר, שמחזיק משהו גדול יותר.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="contact-form-section">
        <div className="contact-form-wrap">
          <div className="contact-divider" />

          <h2 className="contact-form-title">שלחי הודעה</h2>
          <p className="contact-form-intro">אחזור אלייך בהקדם האפשרי</p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className="contact-field">
              <label htmlFor="name">שם</label>
              <input id="name" type="text" placeholder="השם שלך" />
            </div>

            {/* Email — required */}
            <div className="contact-field">
              <label htmlFor="email">
                אימייל
                <span style={{ color: "#b87c6a", marginRight: "3px" }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                dir="ltr"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailTouched) setEmailError(validateEmail(e.target.value));
                }}
                onBlur={handleEmailBlur}
                style={{ border: emailBorder, transition: "border-color 0.18s ease" }}
              />
              {emailTouched && emailError && (
                <p className="contact-field-error">{emailError}</p>
              )}
            </div>

            {/* Phone — optional */}
            <div className="contact-field">
              <label htmlFor="phone">טלפון</label>
              <input
                id="phone"
                type="tel"
                placeholder="050-0000000"
                value={phone}
                dir="ltr"
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (phoneError) setPhoneError(validatePhone(e.target.value));
                }}
                onBlur={handlePhoneBlur}
                style={{ border: phoneBorder, transition: "border-color 0.18s ease" }}
              />
              {phoneError && (
                <p className="contact-field-error">{phoneError}</p>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="message">הודעה</label>
              <textarea
                id="message"
                rows={6}
                placeholder="ספרי לי על הסיפור, החלל, או סתם מה שעל הלב"
              />
            </div>

            <div className="contact-button-row">
              <button type="submit" className="contact-submit">שליחה</button>
            </div>
          </form>

          <p className="contact-direct-contact">
            טלפון: 050-000-0000 · מייל: <span dir="ltr">hello@artaneto.com</span>
          </p>

          <p className="contact-closing">כל לוח מתחיל בשיחה אחת.</p>
        </div>
      </section>

      <style>{`
        .contact-page {
          width: 100%;
          background: #f4f1ea;
          color: #1f1a17;
        }

        .contact-hero {
          padding: 40px 24px 30px;
        }

        .contact-hero-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-hero-logo-wrap {
          margin-bottom: 28px;
          display: flex;
          justify-content: center;
        }

        .contact-hero-logo {
          height: 160px;
          width: auto;
          opacity: 0.88;
          filter: sepia(10%) contrast(0.95);
        }

        .contact-title {
          font-size: 36px;
          line-height: 1.2;
          font-weight: 300;
        }

        .contact-subtitle {
          margin-top: 18px;
          font-size: 18px;
          line-height: 1.6;
          color: #5f584d;
        }

        .contact-cards-section {
          padding: 18px 24px 34px;
        }

        .contact-cards {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid #ece4d8;
          border-radius: 30px;
          padding: 26px;
          text-align: center;
        }

        .contact-card--featured {
          background: rgba(255, 255, 255, 0.9);
        }

        .contact-card-label {
          font-size: 11px;
          letter-spacing: 0.15em;
          color: #a49172;
          margin-bottom: 10px;
        }

        .contact-card-value {
          font-size: 28px;
          margin-bottom: 10px;
        }

        .contact-card-value--email {
          font-size: 22px;
        }

        .contact-card-note {
          font-size: 16px;
          color: #6b6358;
        }

        .contact-form-section {
          padding: 10px 24px 90px;
        }

        .contact-form-wrap {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-divider {
          height: 1px;
          background: #ddd3c5;
          margin-bottom: 30px;
        }

        .contact-direct-contact {
          margin-top: 24px;
          margin-bottom: 40px;
        }

        .contact-form-title {
          font-size: 36px;
          line-height: 1.2;
          font-weight: 300;
        }

        .contact-form-intro {
          margin-top: 10px;
          font-size: 18px;
          line-height: 1.6;
          color: #746c61;
        }

        .contact-form {
          margin-top: 30px;
        }

        .contact-field {
          margin-bottom: 18px;
          text-align: right;
        }

        .contact-field label {
          font-size: 14px;
          line-height: 1.4;
          color: #8f8577;
          display: block;
          margin-bottom: 6px;
        }

        .contact-field input,
        .contact-field textarea {
          width: 100%;
          border: 1px solid #e7dfd3;
          background: white;
          padding: 14px 18px;
          border-radius: 999px;
          font-size: 18px;
          box-sizing: border-box;
        }

        .contact-field textarea {
          border-radius: 20px;
          min-height: 140px;
        }

        .contact-field-error {
          font-size: 12px;
          color: #b87c6a;
          margin: 5px 0 0 0;
          text-align: right;
        }

        .contact-button-row {
          margin-top: 14px;
        }

        .contact-submit {
          padding: 10px 28px;
          border-radius: 999px;
          border: 1px solid #1f1a17;
          background: transparent;
          cursor: pointer;
          margin-bottom: 32px;
        }

        .contact-closing {
          margin-top: 40px;
          font-size: 14px;
          line-height: 1.4;
          color: #a49172;
          font-style: italic;
        }

        @media (max-width: 900px) {
          .contact-cards {
            grid-template-columns: 1fr;
          }

          .contact-hero-logo {
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}
