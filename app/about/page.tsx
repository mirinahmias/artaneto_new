export default function AboutPage() {
  return (
    <div
      dir="rtl"
      style={{
        background: "#f5f1e8",
        color: "#1c1917",
        overflowX: "hidden",
      }}
    >
      {/* ── HERO ── */}
      <section
        className="about-hero"
        style={{
          textAlign: "center",
          maxWidth: "720px",
          margin: "0 auto",
          padding: "72px 24px 80px",
        }}
      >
        <div className="about-hero-logo" style={{ display: "flex", justifyContent: "center", marginBottom: "36px" }}>
          <img
            src="/logo/artneto.logo.png"
            alt="ArtNeto"
            style={{
              height: "140px",
              width: "auto",
              opacity: 0.88,
              filter: "sepia(10%) contrast(0.95)",
            }}
          />
        </div>

        <p
          className="about-h1"
          style={{
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            margin: "0 auto 20px",
            maxWidth: "540px",
          }}
        >
          כל קיר הוא סיפור. כל סמל הוא רגע.
        </p>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.65,
            color: "#6b5e4a",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          אנחנו לא מוכרים עיצוב.
          <br />
          אנחנו עוזרים לך לבנות שפה אישית על הקיר.
        </p>
      </section>

      {/* ── STORY ── */}
      <section
        className="about-story"
        style={{
          maxWidth: "620px",
          margin: "0 auto",
          padding: "0 24px 88px",
          textAlign: "center",
          borderTop: "1px solid rgba(47, 39, 33, 0.08)",
          paddingTop: "72px",
        }}
      >
        <p
          className="about-story-text"
          style={{
            fontSize: "18px",
            lineHeight: 1.85,
            color: "#3d3328",
            margin: 0,
          }}
        >
          ArtNeto נולדה מתוך אהבה פשוטה —
          <br />
          הרצון לעצור רגעים ולהפוך אותם למשהו שנשאר.
          <br />
          <br />
          לא תמונה שקונים ותולים,
          <br />
          אלא קומפוזיציה אישית
          <br />
          שנבנית מסמלים שנבחרו מתוך משמעות.
        </p>
      </section>

      {/* ── CENTRAL STATEMENT ── */}
      <section
        className="about-central"
        style={{
          maxWidth: "720px",
          margin: "80px auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <p
          className="about-statement"
          style={{
            fontWeight: 350,
            letterSpacing: "-0.02em",
            color: "#181512",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          סמלים אינם קישוט.
          <br />
          הם שפה.
        </p>
      </section>

      {/* ── THREE CARDS ── */}
      <section
        className="about-cards-section"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px 88px",
        }}
      >
        <div className="about-cards-grid">
          {[
            {
              title: "סמלים",
              text: "כל סמל שאנחנו בוחרים לשים על הקיר שלנו מספר משהו על מי שאנחנו. אמנות טובה מדברת בשפה אישית ועמוקה.",
            },
            {
              title: "זיכרון",
              text: "כל קומפוזיציה יכולה לייצג אדם אהוב, תקופה, או ערכים שמנחים אותנו — ולהזכיר לנו מדי יום מה חשוב.",
            },
            {
              title: "חומר",
              text: "העבודות משלבות עומק, מרקם וצבע שמרגישים אמיתיים — נוכחות פיזית שלא ניתן לשכפל.",
            },
          ].map((card) => (
            <article
              key={card.title}
              style={{
                background: "rgba(255,255,255,0.58)",
                border: "1px solid rgba(96, 77, 54, 0.09)",
                borderRadius: "28px",
                padding: "42px 32px 38px",
                boxShadow: "0 10px 32px rgba(60,42,22,0.06)",
                textAlign: "center",
              }}
            >
              <h2
                className="t-subtitle"
                style={{
                  margin: "0 0 14px 0",
                  fontWeight: 650,
                  color: "#141009",
                  letterSpacing: "-0.015em",
                }}
              >
                {card.title}
              </h2>
              <p
                className="t-body"
                style={{
                  margin: "0 auto",
                  color: "#5d5349",
                  maxWidth: "28ch",
                  lineHeight: 1.7,
                }}
              >
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section
        className="about-closing"
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          padding: "0 24px 100px",
          textAlign: "center",
          borderTop: "1px solid rgba(47, 39, 33, 0.08)",
          paddingTop: "72px",
        }}
      >
        <p
          className="about-closing-text"
          style={{
            fontSize: "18px",
            lineHeight: 1.85,
            color: "#3d3328",
            margin: 0,
          }}
        >
          העבודות נוצרות בתהליך שמשלב בין דיוק לבין רגש.
          <br />
          <br />
          אבל בסוף —
          <br />
          המשמעות האמיתית לא נוצרת אצלנו.
          <br />
          <br />
          היא נוצרת אצלך.
        </p>
      </section>

      <style>{`
        .about-statement {
          font-size: 48px;
        }

        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        @media (max-width: 720px) {
          .about-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          /* Statement */
          .about-statement {
            font-size: 34px;
          }

          /* Hero */
          .about-hero {
            padding-top: 36px !important;
            padding-bottom: 40px !important;
          }
          .about-hero-logo {
            margin-bottom: 20px !important;
          }
          .about-h1 {
            margin-bottom: 12px !important;
          }

          /* Story */
          .about-story {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .about-story-text {
            line-height: 1.65 !important;
          }

          /* Central statement */
          .about-central {
            margin-top: 48px !important;
            margin-bottom: 48px !important;
          }

          /* Cards */
          .about-cards-section {
            padding-bottom: 44px !important;
          }
          .about-cards-grid {
            gap: 16px !important;
          }

          /* Closing */
          .about-closing {
            padding-top: 40px !important;
            padding-bottom: 32px !important;
          }
          .about-closing-text {
            line-height: 1.65 !important;
          }
        }
      `}</style>
    </div>
  );
}
