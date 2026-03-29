import Link from "next/link";

export default function AboutPage() {
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

        {/* ─── HERO ─────────────────────────────────── */}
        <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div
            style={{
              maxWidth: "740px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#a08f7b",
                marginBottom: "18px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
              }}
            >
              ArtNeto
            </div>

            <h1
              style={{
                margin: "0 0 22px 0",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                lineHeight: 1.1,
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "#181512",
              }}
            >
              על המותג
            </h1>

            <p
              style={{
                margin: "0 auto",
                fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
                lineHeight: 1.85,
                color: "#5a5046",
                maxWidth: "46ch",
              }}
            >
              יצירה מודולרית של זיכרון, משמעות וסיפור אישי
            </p>
          </div>
        </section>

        {/* ─── STORY ────────────────────────────────── */}
        <section style={{ paddingBottom: "88px" }}>
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#a08f7b",
                marginBottom: "22px",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
              }}
            >
              הסיפור
            </div>

            <h2
              style={{
                margin: "0 0 32px 0",
                fontSize: "clamp(1.7rem, 2.8vw, 2.6rem)",
                lineHeight: 1.22,
                fontWeight: 600,
                color: "#181512",
                letterSpacing: "-0.02em",
              }}
            >
              איך נולד ArtNeto
            </h2>

            <p
              style={{
                margin: "0 0 22px 0",
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#5d5349",
              }}
            >
              ArtNeto נולד מתוך שאלה פשוטה: מה אם הקיר שלנו יוכל לספר מי אנחנו? לא תמונה שקנינו בחנות, לא דקורציה שמילאה חלל ריק — אלא נרטיב ויזואלי שנבנה בכוונה, מסמלים שבחרנו בעצמנו.
            </p>

            <p
              style={{
                margin: "0 0 22px 0",
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#5d5349",
              }}
            >
              הרעיון של מודולריות הגיע מתוך הבנה שאין קומפוזיציה אחת שמתאימה לכולם. כל אחד מגיע עם עולם שלם של סמלים, זיכרונות וערכים — ולוח האמנות שלו צריך לשקף בדיוק את זה. תשעה אריחים, תשעה רגעים, תשעה משמעויות. יחד — לוח אחד שהוא שלך לגמרי.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#5d5349",
              }}
            >
              המותג בנוי על האמונה שאמנות קיר יכולה להיות גם אישית וגם מלאכותית, גם ייחודית וגם נגישה. כל לוח הוא פרויקט משותף — בין הקונספט שלנו לבין הסיפור שלך.
            </p>
          </div>
        </section>

        {/* ─── WHAT IS A MODULAR BOARD ──────────────── */}
        <section style={{ paddingBottom: "88px" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.52)",
              border: "1px solid rgba(96, 77, 54, 0.08)",
              borderRadius: "32px",
              padding: "52px 48px",
              boxShadow: "0 18px 46px rgba(60,42,22,0.04)",
            }}
          >
            <div
              className="about-board-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#a08f7b",
                    marginBottom: "16px",
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                  }}
                >
                  המבנה
                </div>

                <h2
                  style={{
                    margin: "0 0 24px 0",
                    fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                    lineHeight: 1.22,
                    fontWeight: 600,
                    color: "#181512",
                    letterSpacing: "-0.02em",
                  }}
                >
                  לוח אחד,
                  <br />
                  תשעה סמלים
                </h2>

                <p
                  style={{
                    margin: "0 0 18px 0",
                    fontSize: "15px",
                    lineHeight: 1.9,
                    color: "#5d5349",
                  }}
                >
                  כל לוח ArtNeto בנוי מ־9 אריחים מרובעים הממוקמים בתצורת 3×3. לא מדובר בפאזל שצריך להשלים — אלא בשפה ויזואלית שבה כל מיקום הוא הזדמנות.
                </p>

                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    lineHeight: 1.9,
                    color: "#5d5349",
                  }}
                >
                  כל אריח הוא סמל עצמאי — עם משמעות, עומק ונוכחות. כשתשעה סמלים מתאחדים על לוח אחד, הם יוצרים יחד נרטיב שגדול מסכום חלקיו.
                </p>
              </div>

              {/* Visual 3×3 grid diagram */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "min(260px, 100%)",
                    aspectRatio: "1 / 1",
                    backgroundColor: "#c8a868",
                    padding: "4%",
                    boxSizing: "border-box",
                    borderRadius: "0",
                    boxShadow: "0 16px 48px rgba(8,4,2,0.22), 0 4px 12px rgba(0,0,0,0.12)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gridTemplateRows: "repeat(3, 1fr)",
                      gap: "4%",
                    }}
                  >
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          background: "rgba(30, 20, 8, 0.72)",
                          borderRadius: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "30%",
                            aspectRatio: "1/1",
                            borderRadius: "50%",
                            background: "rgba(200, 168, 104, 0.35)",
                            border: "1px solid rgba(200, 168, 104, 0.4)",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CHOOSING SYMBOLS ─────────────────────── */}
        <section style={{ paddingBottom: "88px" }}>
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#a08f7b",
                marginBottom: "22px",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
              }}
            >
              הבחירה
            </div>

            <h2
              style={{
                margin: "0 0 32px 0",
                fontSize: "clamp(1.7rem, 2.8vw, 2.6rem)",
                lineHeight: 1.22,
                fontWeight: 600,
                color: "#181512",
                letterSpacing: "-0.02em",
              }}
            >
              אין בחירה נכונה
            </h2>

            <p
              style={{
                margin: "0 0 22px 0",
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#5d5349",
              }}
            >
              מתוך ספריית הסמלים של ArtNeto — מאה ועוד סמלים המאורגנים לפי עולמות תוכן — את בוחרת את מה שמדבר אלייך. לא מה שנראה יפה לאחרים. לא מה שמתאים לחדר. מה שמרגיש נכון לך.
            </p>

            <p
              style={{
                margin: "0 0 22px 0",
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#5d5349",
              }}
            >
              הסמלים מקיפים עולמות שונים: טבע, רוח, חיים, ערכים, קשרים. חלק מהן יגעו בזיכרון ישן. חלק ירגישו כמו הצהרה על העתיד. וחלק פשוט ימשכו אותך — בלי להסביר למה.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#5d5349",
              }}
            >
              זה האופן שבו ArtNeto עובדת: לא ניחושים, לא כללים. הבחירה שלך היא הנכונה.
            </p>
          </div>
        </section>

        {/* ─── CRAFT & MATERIALS ────────────────────── */}
        <section style={{ paddingBottom: "88px" }}>
          <div
            style={{
              maxWidth: "820px",
              margin: "0 auto 36px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#a08f7b",
                marginBottom: "14px",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
              }}
            >
              המלאכה
            </div>

            <h2
              style={{
                margin: "0 0 10px 0",
                fontSize: "clamp(1.7rem, 2.8vw, 2.6rem)",
                lineHeight: 1.22,
                fontWeight: 600,
                color: "#181512",
                letterSpacing: "-0.02em",
              }}
            >
              מהדיגיטל לידיים
            </h2>

            <p
              style={{
                margin: "0 auto",
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#5d5349",
                maxWidth: "52ch",
              }}
            >
              כל אריח עובר תהליך ידני מלא — מהגיאומטריה המדויקת שמתוכננת על מסך, ועד המרקם האחרון שמוחל ביד.
            </p>
          </div>

          <div
            className="about-craft-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            {[
              {
                step: "01",
                title: "עיצוב ותלת־ממד",
                text: "כל סמל מתוכנן בתוכנת מודלינג. עומק הרליף, קצוות, שקעים ובליטות — הכל נקבע לפני שנגענו בחומר.",
              },
              {
                step: "02",
                title: "הדפסה",
                text: "האריחים מודפסים בפולימר באיכות גבוהה. ההדפסה מאפשרת פרטים עדינים ועומק שאי אפשר להשיג בשיטות מסורתיות.",
              },
              {
                step: "03",
                title: "ציפוי ומרקמים",
                text: "כל אריח מקבל שכבות של גבס, גוון בסיס וטקסטורות ידניות — תהליך שמעניק לכל יצירה אופי חי ועמוק.",
              },
              {
                step: "04",
                title: "צביעה ופינישינג",
                text: "שכבות צבע, פטינה, עלי זהב או ברונזה — הכל מוחל ביד. הגמר הסופי הוא מה שהופך כל אריח לייחודי.",
              },
            ].map((item) => (
              <article
                key={item.step}
                style={{
                  background: "rgba(255,255,255,0.50)",
                  border: "1px solid rgba(96, 77, 54, 0.08)",
                  borderRadius: "28px",
                  padding: "28px 22px",
                  boxShadow: "0 16px 40px rgba(60,42,22,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "#b8a080",
                    letterSpacing: "0.12em",
                    marginBottom: "12px",
                    fontWeight: 500,
                  }}
                >
                  {item.step}
                </div>

                <h3
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "17px",
                    lineHeight: 1.35,
                    fontWeight: 600,
                    color: "#1b1713",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "#6a5e52",
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── NO TWO BOARDS ALIKE ──────────────────── */}
        <section style={{ paddingBottom: "88px" }}>
          <div
            style={{
              background: "#1f1a17",
              borderRadius: "32px",
              padding: "56px 48px",
              textAlign: "center",
              boxShadow: "0 24px 60px rgba(31,26,23,0.12)",
            }}
          >
            <div
              style={{
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(200, 168, 104, 0.7)",
                  marginBottom: "18px",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                }}
              >
                הייחוד
              </div>

              <h2
                style={{
                  margin: "0 0 20px 0",
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  lineHeight: 1.18,
                  fontWeight: 600,
                  color: "#f3eadc",
                  letterSpacing: "-0.025em",
                }}
              >
                אין שני לוחות זהים
              </h2>

              <p
                style={{
                  margin: "0 0 18px 0",
                  fontSize: "16px",
                  lineHeight: 1.9,
                  color: "rgba(248,244,236,0.78)",
                  maxWidth: "44ch",
                  marginInline: "auto",
                }}
              >
                גם אם שתי אנשים בוחרות את אותם תשעה סמלים, הלוחות שייווצרו יהיו שונים. הסדר שונה. הסיפור שמאחורי הבחירה שונה. הרגע בחיים שונה.
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                  lineHeight: 1.9,
                  color: "rgba(248,244,236,0.78)",
                  maxWidth: "44ch",
                  marginInline: "auto",
                }}
              >
                כל לוח הוא עדות לסיפור אחד בלבד — הסיפור של מי שבנה אותו. זו לא אמנות שמוכפלת בסדרות. זו אמנות שחיה רק אצלך.
              </p>
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────── */}
        <section style={{ paddingBottom: "96px" }}>
          <div
            style={{
              borderRadius: "36px",
              padding: "60px 28px",
              background: "rgba(255,255,255,0.52)",
              border: "1px solid rgba(96, 77, 54, 0.10)",
              textAlign: "center",
              boxShadow: "0 18px 46px rgba(60,42,22,0.05)",
            }}
          >
            <div style={{ maxWidth: "640px", margin: "0 auto" }}>
              <div
                style={{
                  fontSize: "12px",
                  color: "#a08f7b",
                  marginBottom: "18px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                }}
              >
                הצעד הבא
              </div>

              <h2
                style={{
                  margin: "0 0 18px 0",
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  lineHeight: 1.18,
                  fontWeight: 600,
                  color: "#181512",
                  letterSpacing: "-0.025em",
                }}
              >
                התחילי ליצור את הלוח שלך
              </h2>

              <p
                style={{
                  margin: "0 auto 32px",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "#5d5349",
                  maxWidth: "46ch",
                }}
              >
                בספריית הסמלים שלנו תמצאי מאה ועוד סמלים. תשעה מהם יהפכו ללוח שמספר את הסיפור שלך.
              </p>

              <Link
                href="/custom-composition"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  minHeight: "54px",
                  padding: "0 32px",
                  background: "#1f1a17",
                  color: "#f8f4ec",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 600,
                  boxShadow: "0 10px 30px rgba(31,26,23,0.14)",
                  letterSpacing: "0.01em",
                }}
              >
                להרכבה אישית
                <span aria-hidden style={{ fontSize: "16px" }}>←</span>
              </Link>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-craft-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-board-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .about-craft-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

