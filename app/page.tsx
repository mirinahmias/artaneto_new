import Link from "next/link";
import { getHomePage } from "./lib/fetchers/getHomePage";

export default async function HomePage() {
  const page = await getHomePage();
  const cta = page?.cta ?? {};

  return (
    <main
      dir="rtl"
      style={{
        background: "#f5f1e8",
        color: "#1c1917",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* HERO */}
        <section
          style={{
            paddingTop: "64px",
            paddingBottom: "32px",
          }}
        >
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <img src="/logo/artneto.logo.png" alt="ArtNeto" style={{ width: "286px", display: "block", margin: "0 auto" }} />

            <h1
              style={{
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: "16px",
                textAlign: "center",
                color: "#141009",
              }}
            >
              לוחות זיכרון מודולריים
              <br />
              <span style={{ fontWeight: 400, color: "#3d3328" }}>
                בתשעה סמלים
              </span>
            </h1>

            <p
              className="t-body"
              style={{
                margin: "0 auto 30px",
                color: "#5a5046",
                maxWidth: "64ch",
              }}
            >
              ArtNeto יוצרת קומפוזיציות קיר ייחודיות מאריחים מודולריים תלת־ממדיים. כל אריח הוא סמל — ויחד הם מרכיבים נרטיב ויזואלי אישי ועמוק.
            </p>
          </div>

          <div
            style={{
              maxWidth: "560px",
              margin: "0 auto 32px",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                boxShadow: "0 20px 52px rgba(60,42,22,0.10)",
              }}
            >
              <img
                src="/hero-board.jpg"
                alt="לוח זיכרון מודולרי של ArtNeto"
                className="home-hero-image"
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>

          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              className="t-body"
              style={{
                margin: "0 auto 28px",
                color: "#6a5e52",
                maxWidth: "46ch",
              }}
            >
              קומפוזיציות קיר תלת־ממדיות שנבנות מסמלים — לרכישה כיצירה שלמה, להרכבה אישית או לבחירת מודלים בודדים
            </p>

            <div
              className="artneto-hero-actions"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {/* Primary */}
              <Link
                href="/works"
                className="artneto-hero-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 30px",
                  background: "#1f1a17",
                  color: "#f8f4ec",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  boxShadow: "0 8px 28px rgba(31,26,23,0.18)",
                  transition: "opacity 0.18s ease",
                }}
              >
                צפייה בלוחות מוכנים
              </Link>

              {/* Secondary */}
              <Link
                href="/custom-composition"
                className="artneto-hero-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 30px",
                  background: "#1f1a17",
                  color: "#f8f4ec",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  boxShadow: "0 8px 28px rgba(31,26,23,0.18)",
                  transition: "opacity 0.18s ease",
                }}
              >
                בניית לוח אישי
              </Link>

              {/* Tertiary */}
              <Link
                href="/single-models"
                className="artneto-hero-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 30px",
                  background: "#1f1a17",
                  color: "#f8f4ec",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  boxShadow: "0 8px 28px rgba(31,26,23,0.18)",
                  transition: "opacity 0.18s ease",
                }}
              >
                בחירת סמלים בודדים
              </Link>
            </div>

            <p style={{ fontSize: "14px", color: "#8a7a5c", marginTop: "12px", opacity: 0.9, textAlign: "center" }}>
              מודלים בודדים החל מ־₪XX
            </p>
          </div>
        </section>

        {/* THREE PATHS */}
        <section
          style={{
            paddingTop: "0",
            paddingBottom: "72px",
          }}
        >
          <div
            className="artneto-three-paths"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <article
              style={{
                background: "rgba(255,255,255,0.58)",
                border: "1px solid rgba(96, 77, 54, 0.09)",
                borderRadius: "28px",
                padding: "28px 24px 26px",
                boxShadow: "0 12px 36px rgba(60,42,22,0.05)",
                textAlign: "center",
              }}
            >
              <div
                className="t-small"
                style={{
                  color: "#907e6a",
                  marginBottom: "9px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                }}
              >
                מסלול ראשון
              </div>

              <h2
                className="t-subtitle"
                style={{
                  margin: "0 0 12px 0",
                  fontWeight: 650,
                  color: "#141009",
                  letterSpacing: "-0.015em",
                }}
              >
                לוחות מוכנים
              </h2>

              <p
                className="t-body"
                style={{
                  margin: "0 auto 20px",
                  color: "#5d5349",
                  maxWidth: "26ch",
                }}
              >
                עבודות מוגמרות הבנויות מ־9 יחידות סמליות, שנוצרו כקומפוזיציות שלמות בעלות נוכחות פיסולית וזהות חזותית ברורה.
              </p>

              <Link
                href="/works"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 22px",
                  background: "#1f1a17",
                  color: "#f8f4ec",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                לעמוד הלוחות
              </Link>
            </article>

            <article
              style={{
                background: "rgba(255,255,255,0.58)",
                border: "1px solid rgba(96, 77, 54, 0.09)",
                borderRadius: "28px",
                padding: "28px 24px 26px",
                boxShadow: "0 12px 36px rgba(60,42,22,0.05)",
                textAlign: "center",
              }}
            >
              <div
                className="t-small"
                style={{
                  color: "#907e6a",
                  marginBottom: "9px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                }}
              >
                מסלול שני
              </div>

              <h2
                className="t-subtitle"
                style={{
                  margin: "0 0 12px 0",
                  fontWeight: 650,
                  color: "#141009",
                  letterSpacing: "-0.015em",
                }}
              >
                הרכבה אישית
              </h2>

              <p
                className="t-body"
                style={{
                  margin: "0 auto 20px",
                  color: "#5d5349",
                  maxWidth: "26ch",
                }}
              >
                גלריות נושא עם מודלים סמליים לבחירה — מהם ניתן להרכיב לוח אישי שמספר את הסיפור שלך דרך סימנים, זיכרונות וערכים.
              </p>

              <Link
                href="/custom-composition"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 22px",
                  background: "#1f1a17",
                  color: "#f8f4ec",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                להתחיל לבחור סמלים
              </Link>
            </article>

            <article
              style={{
                background: "rgba(255,255,255,0.58)",
                border: "1px solid rgba(96, 77, 54, 0.09)",
                borderRadius: "28px",
                padding: "28px 24px 26px",
                boxShadow: "0 12px 36px rgba(60,42,22,0.05)",
                textAlign: "center",
              }}
            >
              <div
                className="t-small"
                style={{
                  color: "#907e6a",
                  marginBottom: "9px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                }}
              >
                מסלול שלישי
              </div>

              <h2
                className="t-subtitle"
                style={{
                  margin: "0 0 12px 0",
                  fontWeight: 650,
                  color: "#141009",
                  letterSpacing: "-0.015em",
                }}
              >
                מודלים בודדים
              </h2>

              <p
                className="t-body"
                style={{
                  margin: "0 auto 20px",
                  color: "#5d5349",
                  maxWidth: "26ch",
                }}
              >
                אפשרות לבחור ולרכוש סמלים כיחידות נפרדות — להשלמה, לאיסוף, או לשילוב אישי בפרויקטים ובהרכבות עתידיות.
              </p>

              <Link
                href="/single-models"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 22px",
                  background: "#1f1a17",
                  color: "#f8f4ec",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                לעמוד המודלים
              </Link>
            </article>
          </div>
        </section>

        {/* ABOUT */}
        <section
          style={{
            paddingTop: "0",
            paddingBottom: "72px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.50)",
              border: "1px solid rgba(96, 77, 54, 0.09)",
              borderRadius: "28px",
              padding: "40px 36px",
            }}
          >
            <div
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <div
                className="t-small"
                style={{
                  color: "#907e6a",
                  marginBottom: "12px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                }}
              >
                על המותג
              </div>

              <h2
                className="t-title"
                style={{
                  margin: "0 0 36px 0",
                  fontWeight: 650,
                  color: "#141009",
                  letterSpacing: "-0.022em",
                }}
              >
                אמנות קיר
                <br />
                סימבולית ומודולרית
              </h2>

              <p
                className="t-body"
                style={{
                  margin: "8px 0 20px 0",
                  color: "#5d5349",
                }}
              >
                הטכניקה משלבת הדפסת תלת־ממד, בס־רליף, ומרקמים מעורבים ליצירת יצירות אמנות שהן גם פיסוליות וגם אינטימיות, שמספרות את הסיפור שלך.
              </p>

              <p
                className="t-body"
                style={{
                  margin: 0,
                  color: "#5d5349",
                }}
              >
                ArtNeto נולד מתוך אמונה פשוטה: הקיר שלנו יכול לספר מי אנחנו. לא כתמונה שקנינו בחנות, אלא כנרטיב ויזואלי שנבנה מסמלים שבחרנו בעצמנו.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section
          style={{
            paddingTop: "0",
            paddingBottom: "72px",
          }}
        >
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto 26px",
              textAlign: "center",
            }}
          >
            <div
              className="t-small"
              style={{
                color: "#907e6a",
                marginBottom: "14px",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              הערכים שלנו
            </div>

            <h2
              className="t-title"
              style={{
                margin: 0,
                fontWeight: 650,
                color: "#141009",
                letterSpacing: "-0.022em",
              }}
            >
              ארבעה עמודי תווך
            </h2>
          </div>

          <div
            className="artneto-values-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                title: "סמליות",
                text: "כל סמל שאנחנו בוחרים לשים על הקיר שלנו מספר משהו על מי שאנחנו. ArtNeto מאמינה שהאמנות הטובה ביותר היא זו שמדברת בשפה אישית ועמוקה.",
              },
              {
                title: "זיכרון",
                text: "יצירות ArtNeto מיועדות להיות עוגנים של זיכרון. כל קומפוזיציה יכולה לייצג אדם אהוב, תקופה חשובה או ערכים שמנחים אותנו.",
              },
              {
                title: "מרקמים",
                text: "המרקם הוא נשמת היצירה. גבס מוחלק, שכבות של צבע ועלי זהב שנמרחים ביד — כל יצירה היא חוויה מישושית שמזמינה להתבונן מקרוב.",
              },
              {
                title: "הדפסת תלת־ממד",
                text: "הטכנולוגיה משרתת את האמנות. הדפסת תלת־ממד מאפשרת עומק ופרטים עדינים שלא ניתן להשיג בשיטות מסורתיות.",
              },
            ].map((item) => (
              <article
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.54)",
                  border: "1px solid rgba(96, 77, 54, 0.09)",
                  borderRadius: "22px",
                  padding: "30px 26px 28px",
                  boxShadow: "0 10px 32px rgba(60,42,22,0.05)",
                  textAlign: "center",
                }}
              >
                <h3
                  className="t-subtitle"
                  style={{
                    margin: "0 0 10px 0",
                    fontWeight: 650,
                    color: "#141009",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="t-body"
                  style={{
                    margin: "0 auto",
                    color: "#5d5349",
                    maxWidth: "26ch",
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNIQUE */}
        <section
          style={{
            paddingTop: "0",
            paddingBottom: "72px",
          }}
        >
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto 26px",
              textAlign: "center",
            }}
          >
            <div
              className="t-small"
              style={{
                color: "#907e6a",
                marginBottom: "14px",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              הטכניקה
            </div>

            <h2
              className="t-title"
              style={{
                margin: 0,
                fontWeight: 650,
                color: "#141009",
                letterSpacing: "-0.022em",
              }}
            >
              מהדיגיטל לאמנות יד
            </h2>
          </div>

          <div
            className="artneto-steps-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                title: "עיצוב דיגיטלי",
                text: "כל סמל מעוצב בתוכנת תלת־ממד עם תשומת לב לפרטים — עומק הרליף, מרקם פני השטח ופרופורציות מדויקות.",
              },
              {
                title: "הדפסת תלת־ממד",
                text: "האריחים מודפסים בפולימר איכותי, המאפשר פרטים עדינים ועומק רליף שלא ניתן להשיג בשיטות מסורתיות.",
              },
              {
                title: "גיבוס ומרקמים",
                text: "כל אריח מקבל שכבות של גבס, מרקמים ייחודיים וצבעים — תהליך ידני שמעניק לכל יצירה אופי ייחודי.",
              },
              {
                title: "ציפוי זהב ופינישינג",
                text: "עלי זהב, פטינה ברונזה או ציפויים מיוחדים מוחלים ביד — שכבה אחרונה שמעניקה לכל יצירה את הברק הסופי.",
              },
            ].map((item) => (
              <article
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.54)",
                  border: "1px solid rgba(96, 77, 54, 0.09)",
                  borderRadius: "22px",
                  padding: "30px 26px 28px",
                  boxShadow: "0 10px 32px rgba(60,42,22,0.05)",
                  textAlign: "center",
                }}
              >
                <h3
                  className="t-subtitle"
                  style={{
                    margin: "0 0 10px 0",
                    fontWeight: 650,
                    color: "#141009",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="t-body"
                  style={{
                    margin: "0 auto",
                    color: "#5d5349",
                    maxWidth: "26ch",
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            paddingTop: 0,
            paddingBottom: "80px",
          }}
        >
          <div
            style={{
              borderRadius: "32px",
              padding: "48px 36px",
              background: "#1f1a17",
              color: "#f8f4ec",
              textAlign: "center",
              boxShadow: "0 20px 56px rgba(31,26,23,0.16)",
            }}
          >
            <div
              style={{
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              <div
                className="t-small"
                style={{
                  color: "rgba(248,244,236,0.55)",
                  marginBottom: "12px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                }}
              >
                יצירה מותאמת אישית
              </div>

              <h2
                className="t-title"
                style={{
                  margin: "0 0 16px 0",
                  fontWeight: 650,
                  letterSpacing: "-0.022em",
                }}
              >
                {cta.title || "רוצה לבנות עבודה ייחודית לחלל שלך?"}
              </h2>

              <p
                className="t-body"
                style={{
                  margin: "0 auto 28px",
                  color: "rgba(248,244,236,0.78)",
                  maxWidth: "52ch",
                }}
              >
                {cta.description || "ניתן ליצור קומפוזיציה מותאמת אישית."}
              </p>

              <Link
                href={cta.href || "/contact"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "50px",
                  padding: "0 28px",
                  background: "#f3eadc",
                  color: "#1f1a17",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                {cta.label || "לדבר על יצירה"}
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style>
        {`
          .home-hero-logo {
            width: 120px;
            margin: 0 auto 16px;
            display: block;
          }

          .artneto-hero-cta-btn:hover {
            opacity: 0.75;
          }

          .home-hero-image {
            max-width: 420px;
            margin: 24px auto;
            display: block;
          }

          .home-about-content {
            max-width: 520px;
            margin-right: auto;
            text-align: right;
          }

          .home-about-content h2 {
            margin-bottom: 12px;
          }

          @media (max-width: 1024px) {
            .artneto-three-paths,
            .artneto-values-grid,
            .artneto-steps-grid {
              grid-template-columns: 1fr 1fr !important;
            }

            .artneto-about-grid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 720px) {
            .artneto-three-paths,
            .artneto-values-grid,
            .artneto-steps-grid {
              grid-template-columns: 1fr !important;
            }

            .artneto-hero-actions {
              flex-direction: column;
              align-items: stretch !important;
            }

            main {
              overflow-x: hidden;
            }
          }
        `}
      </style>
    </main>
  );
}
