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

      {/* ── 1. HERO ── */}
      <section style={{ textAlign: "center", maxWidth: 820, margin: "0 auto", paddingTop: 40, paddingBottom: "16px" }}>

        {/* logo as hero mark */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <img
            src="/logo/artneto.logo.png"
            alt="ArtNeto"
            style={{
              height: "160px",
              width: "auto",
              opacity: 0.88,
              filter: "sepia(10%) contrast(0.95)",
            }}
          />
        </div>

        <p
          style={{
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          כל קיר הוא סיפור. כל סמל הוא רגע.
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: "#6b5e4a",
            maxWidth: "560px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          ArtNeto נולדה מתוך אהבה פשוטה — הרצון לעצור רגעים ולהפוך אותם למשהו שנשאר.
        </p>

      </section>

      {/* ── 2. VALUES SECTION ── */}
      <section
        style={{
          background: "#f4f1ea",
          padding: "16px 64px 80px",
          marginTop: "0",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >

          {/* section intro line */}
          <p
            className="t-body"
            style={{
              margin: "0 0 36px 0",
              color: "#5a554f",
              textAlign: "center",
              letterSpacing: "-0.01em",
            }}
          >
            מה שמנחה כל עבודה שאנחנו יוצרים
          </p>

          {/* values list */}
          <div style={{ display: "flex", flexDirection: "column" }}>

            {/* סמלים */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "0 16px",
                alignItems: "start",
                padding: "28px 0",
                borderTop: "1px solid rgba(47, 39, 33, 0.12)",
              }}
            >
              <p
                className="t-subtitle"
                style={{
                  margin: 0,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "#2f2721",
                }}
              >
                סמלים
              </p>
              <p
                className="t-body"
                style={{
                  margin: 0,
                  color: "#5a554f",
                  paddingTop: "3px",
                }}
              >
                כל סמל שאנחנו בוחרים לשים על הקיר שלנו מספר משהו על מי שאנחנו.
                ArtNeto מאמינה שהאמנות הטובה ביותר היא זו שמדברת בשפה אישית ועמוקה.
              </p>
            </div>

            {/* זיכרון */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "0 16px",
                alignItems: "start",
                padding: "28px 0",
                borderTop: "1px solid rgba(47, 39, 33, 0.12)",
              }}
            >
              <p
                className="t-subtitle"
                style={{
                  margin: 0,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "#2f2721",
                }}
              >
                זיכרון
              </p>
              <p
                className="t-body"
                style={{
                  margin: 0,
                  color: "#5a554f",
                  paddingTop: "3px",
                }}
              >
                כל קומפוזיציה יכולה לייצג אדם אהוב, תקופה, או ערכים שמנחים אותנו —
                ולהזכיר לנו מדי יום מה חשוב.
              </p>
            </div>

            {/* מרקמים */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "0 16px",
                alignItems: "start",
                padding: "28px 0",
                borderTop: "1px solid rgba(47, 39, 33, 0.12)",
              }}
            >
              <p
                className="t-subtitle"
                style={{
                  margin: 0,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "#2f2721",
                }}
              >
                מרקמים
              </p>
              <p
                className="t-body"
                style={{
                  margin: 0,
                  color: "#5a554f",
                  paddingTop: "3px",
                }}
              >
                העבודות משלבות עומק, צבעים וחומרים שמרגישים אמיתיים —
                לא רק דיגיטליים.
              </p>
            </div>

            {/* טכנולוגיה */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "0 16px",
                alignItems: "start",
                padding: "28px 0",
                borderTop: "1px solid rgba(47, 39, 33, 0.12)",
                borderBottom: "1px solid rgba(47, 39, 33, 0.12)",
              }}
            >
              <p
                className="t-subtitle"
                style={{
                  margin: 0,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "#2f2721",
                }}
              >
                טכנולוגיה
              </p>
              <p
                className="t-body"
                style={{
                  margin: 0,
                  color: "#5a554f",
                  paddingTop: "3px",
                }}
              >
                הדפסת תלת־ממד מאפשרת ליצור פרטים מדויקים ועומק שלא ניתן להגיע אליו
                בשיטות מסורתיות.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. CLOSING COMPOSITION ── */}
      <section
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "28px 48px 88px",
          textAlign: "center",
        }}
      >

        {/* slogan */}
        <div style={{ marginBottom: 28, borderTop: "1px solid rgba(47, 39, 33, 0.07)", paddingTop: 28, maxWidth: "320px", margin: "0 auto 28px" }}>
          <p
            className="t-title"
            style={{
              margin: "0 0 1px 0",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              color: "#181512",
            }}
          >
            כל אריח הוא סמל.
          </p>
          <p
            className="t-title"
            style={{
              margin: 0,
              fontWeight: 300,
              letterSpacing: "-0.025em",
              color: "#181512",
            }}
          >
            כל סמל הוא רעיון.
          </p>
        </div>

        {/* supporting process text */}
        <div
          style={{
            borderTop: "1px solid rgba(47, 39, 33, 0.1)",
            paddingTop: 22,
            marginBottom: 22,
          }}
        >
          <p
            className="t-body"
            style={{
              margin: "0 0 12px 0",
              color: "#5d5049",
            }}
          >
            העבודות נוצרות בתהליך שמשלב בין דיוק טכנולוגי
            לבין עבודה ידנית איטית.
          </p>
          <p
            className="t-body"
            style={{
              margin: 0,
              color: "#5d5049",
            }}
          >
            המודלים מודפסים בתלת־ממד,
            ומקבלים שכבות של צבע, מרקם ופיניש ידני.
          </p>
        </div>

        {/* final closing lines */}
        <div
          style={{
            borderTop: "1px solid rgba(47, 39, 33, 0.1)",
            paddingTop: 20,
          }}
        >
          <p
            className="t-body"
            style={{
              margin: "0 0 8px 0",
              fontWeight: 400,
              color: "#211b14",
              letterSpacing: "-0.015em",
            }}
          >
            סמלים אינם קישוט. הם שפה.
          </p>
          <p
            className="t-small"
            style={{
              margin: 0,
              color: "#9a8878",
            }}
          >
            והשפה הזו ממשיכה להיכתב
            <br />
            על הקיר, בתוך הבית, ובתוך הזיכרון.
          </p>
        </div>

      </section>

    </div>
  );
}
