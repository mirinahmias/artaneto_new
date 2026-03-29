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
        minHeight: "100vh",
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
            paddingTop: "72px",
            paddingBottom: "92px",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                margin: "0 0 20px 0",
                fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                lineHeight: 1.12,
                fontWeight: 600,
                letterSpacing: "-0.035em",
                color: "#181512",
              }}
            >
              לוחות זיכרון מודולריים ב־9 סמלים
            </h1>

            <p
              style={{
                margin: "0 auto 34px",
                fontSize: "clamp(1rem, 1.35vw, 1.14rem)",
                lineHeight: 1.9,
                color: "#5a5046",
                maxWidth: "60ch",
              }}
            >
              ArtNeto יוצרת קומפוזיציות קיר ייחודיות מאריחים מודולריים תלת־ממדיים. כל אריח הוא סמל — ויחד הם מרכיבים נרטיב ויזואלי אישי ועמוק.
            </p>
          </div>

          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto 34px",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: "10px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(239,233,223,0.72) 100%)",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(60,42,22,0.10)",
                border: "1px solid rgba(104, 83, 57, 0.10)",
              }}
            >
              <img
                src="/hero-board.jpg"
                alt="לוח זיכרון מודולרי של ArtNeto"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          <div
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: "0 auto 24px",
                fontSize: "clamp(1rem, 1.2vw, 1.08rem)",
                lineHeight: 1.9,
                color: "#5a5046",
                maxWidth: "48ch",
              }}
            >
              קומפוזיציות קיר תלת־ממדיות שנבנות מסמלים — לרכישה כיצירה שלמה, להרכבה אישית או לבחירת מודלים בודדים
            </p>

            <div
              className="artneto-hero-actions"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                href="/works"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 28px",
                  background: "#1f1a17",
                  color: "#f8f4ec",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 500,
                  boxShadow: "0 10px 30px rgba(31,26,23,0.10)",
                }}
              >
                לצפייה בלוחות מוכנים
              </Link>

              <Link
                href="/custom"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 28px",
                  background: "transparent",
                  color: "#312923",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 500,
                  border: "1px solid rgba(77, 63, 45, 0.18)",
                }}
              >
                להרכבת לוח אישי
              </Link>

              <Link
                href="/models"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 28px",
                  background: "rgba(255,255,255,0.55)",
                  color: "#312923",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 500,
                  border: "1px solid rgba(77, 63, 45, 0.14)",
                }}
              >
                לקניית מודלים בודדים
              </Link>
            </div>
          </div>
        </section>

        {/* THREE PATHS */}
        <section
          style={{
            paddingTop: "0",
            paddingBottom: "92px",
          }}
        >
          <div
            className="artneto-three-paths"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "24px",
            }}
          >
            <article
              style={{
                background: "rgba(255,255,255,0.52)",
                border: "1px solid rgba(96, 77, 54, 0.08)",
                borderRadius: "30px",
                padding: "34px 28px",
                boxShadow: "0 18px 46px rgba(60,42,22,0.04)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "#a08f7b",
                  marginBottom: "12px",
                  letterSpacing: "0.08em",
                }}
              >
                מסלול ראשון
              </div>

              <h2
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                  lineHeight: 1.25,
                  fontWeight: 500,
                  color: "#181512",
                }}
              >
                לוחות מוכנים
              </h2>

              <p
                style={{
                  margin: "0 auto 22px",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#5d5349",
                  maxWidth: "28ch",
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
                  minHeight: "48px",
                  padding: "0 22px",
                  background: "#1f1a17",
                  color: "#f8f4ec",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                לעמוד הלוחות
              </Link>
            </article>

            <article
              style={{
                background: "rgba(255,255,255,0.52)",
                border: "1px solid rgba(96, 77, 54, 0.08)",
                borderRadius: "30px",
                padding: "34px 28px",
                boxShadow: "0 18px 46px rgba(60,42,22,0.04)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "#a08f7b",
                  marginBottom: "12px",
                  letterSpacing: "0.08em",
                }}
              >
                מסלול שני
              </div>

              <h2
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                  lineHeight: 1.25,
                  fontWeight: 500,
                  color: "#181512",
                }}
              >
                הרכבה אישית
              </h2>

              <p
                style={{
                  margin: "0 auto 22px",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#5d5349",
                  maxWidth: "28ch",
                }}
              >
                גלריות נושא עם מודלים סמליים לבחירה — מהם ניתן להרכיב לוח אישי שמספר את הסיפור שלך דרך סימנים, זיכרונות וערכים.
              </p>

              <Link
                href="/custom"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "48px",
                  padding: "0 22px",
                  background: "transparent",
                  color: "#312923",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 500,
                  border: "1px solid rgba(77, 63, 45, 0.18)",
                }}
              >
                להתחיל לבחור סמלים
              </Link>
            </article>

            <article
              style={{
                background: "rgba(255,255,255,0.52)",
                border: "1px solid rgba(96, 77, 54, 0.08)",
                borderRadius: "30px",
                padding: "34px 28px",
                boxShadow: "0 18px 46px rgba(60,42,22,0.04)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "#a08f7b",
                  marginBottom: "12px",
                  letterSpacing: "0.08em",
                }}
              >
                מסלול שלישי
              </div>

              <h2
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                  lineHeight: 1.25,
                  fontWeight: 500,
                  color: "#181512",
                }}
              >
                מודלים בודדים
              </h2>

              <p
                style={{
                  margin: "0 auto 22px",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#5d5349",
                  maxWidth: "28ch",
                }}
              >
                אפשרות לבחור ולרכוש סמלים כיחידות נפרדות — להשלמה, לאיסוף, או לשילוב אישי בפרויקטים ובהרכבות עתידיות.
              </p>

              <Link
                href="/models"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "48px",
                  padding: "0 22px",
                  background: "transparent",
                  color: "#312923",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 500,
                  border: "1px solid rgba(77, 63, 45, 0.18)",
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
            paddingBottom: "92px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.46)",
              border: "1px solid rgba(96, 77, 54, 0.08)",
              borderRadius: "32px",
              padding: "42px 30px",
            }}
          >
            <div
              className="artneto-about-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "0.9fr 1.1fr",
                gap: "30px",
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#a08f7b",
                    marginBottom: "12px",
                    letterSpacing: "0.08em",
                  }}
                >
                  על המותג
                </div>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.8rem, 3vw, 3rem)",
                    lineHeight: 1.22,
                    fontWeight: 600,
                    color: "#181512",
                  }}
                >
                  אמנות קיר
                  <br />
                  סימבולית ומודולרית
                </h2>
              </div>

              <div>
                <p
                  style={{
                    margin: "0 0 18px 0",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#5d5349",
                  }}
                >
                  הטכניקה משלבת הדפסת תלת־ממד, בס־רליף, ומרקמים מעורבים ליצירת יצירות אמנות שהן גם פיסוליות וגם אינטימיות, שמספרות את הסיפור שלך.
                </p>

                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#5d5349",
                  }}
                >
                  ArtNeto נולד מתוך אמונה פשוטה: הקיר שלנו יכול לספר מי אנחנו. לא כתמונה שקנינו בחנות, אלא כנרטיב ויזואלי שנבנה מסמלים שבחרנו בעצמנו.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section
          style={{
            paddingTop: "0",
            paddingBottom: "92px",
          }}
        >
          <div
            style={{
              maxWidth: "820px",
              margin: "0 auto 34px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#a08f7b",
                marginBottom: "12px",
                letterSpacing: "0.08em",
              }}
            >
              הערכים שלנו
            </div>

            <h2
              style={{
                margin: "0 0 10px 0",
                fontSize: "clamp(1.8rem, 3vw, 3rem)",
                lineHeight: 1.22,
                fontWeight: 600,
                color: "#181512",
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
              gap: "20px",
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
                  background: "rgba(255,255,255,0.50)",
                  border: "1px solid rgba(96, 77, 54, 0.08)",
                  borderRadius: "28px",
                  padding: "26px 22px",
                  boxShadow: "0 16px 40px rgba(60,42,22,0.04)",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "20px",
                    lineHeight: 1.35,
                    fontWeight: 500,
                    color: "#1b1713",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: "0 auto",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#5d5349",
                    maxWidth: "28ch",
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
            paddingBottom: "96px",
          }}
        >
          <div
            style={{
              maxWidth: "820px",
              margin: "0 auto 34px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#a08f7b",
                marginBottom: "12px",
                letterSpacing: "0.08em",
              }}
            >
              הטכניקה
            </div>

            <h2
              style={{
                margin: "0 0 10px 0",
                fontSize: "clamp(1.8rem, 3vw, 3rem)",
                lineHeight: 1.22,
                fontWeight: 600,
                color: "#181512",
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
              gap: "20px",
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
                  background: "rgba(255,255,255,0.50)",
                  border: "1px solid rgba(96, 77, 54, 0.08)",
                  borderRadius: "28px",
                  padding: "26px 22px",
                  boxShadow: "0 16px 40px rgba(60,42,22,0.04)",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "20px",
                    lineHeight: 1.35,
                    fontWeight: 500,
                    color: "#1b1713",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: "0 auto",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#5d5349",
                    maxWidth: "28ch",
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
            paddingBottom: "96px",
          }}
        >
          <div
            style={{
              borderRadius: "36px",
              padding: "52px 28px",
              background: "#1f1a17",
              color: "#f8f4ec",
              textAlign: "center",
              boxShadow: "0 24px 60px rgba(31,26,23,0.14)",
            }}
          >
            <div
              style={{
                maxWidth: "760px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(248,244,236,0.72)",
                  marginBottom: "12px",
                  letterSpacing: "0.08em",
                }}
              >
                יצירה מותאמת אישית
              </div>

              <h2
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "clamp(1.9rem, 3vw, 3rem)",
                  lineHeight: 1.18,
                  fontWeight: 600,
                }}
              >
                {cta.title || "רוצה לבנות עבודה ייחודית לחלל שלך?"}
              </h2>

              <p
                style={{
                  margin: "0 auto 28px",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "rgba(248,244,236,0.84)",
                  maxWidth: "60ch",
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
                  minHeight: "52px",
                  padding: "0 26px",
                  background: "#f3eadc",
                  color: "#1f1a17",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 600,
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