import Link from "next/link";
import { getHomePage } from "./lib/fetchers/getHomePage";
import { content } from "./content/content";

const { hero, paths, about, values, technique, cta } = content.home;

export default async function HomePage() {
  const page = await getHomePage();
  const pageCta = page?.cta ?? {};

  return (
    <div
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
          className="home-hero-section"
        >
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <img src="/logo/artneto.logo.png" alt={hero.logoAlt} className="home-hero-logo-img" />

            <h1
              className="hero-h1"
              style={{
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginTop: 0,
                textAlign: "center",
                color: "#141009",
              }}
            >
              {hero.heading}
              <br />
              <span style={{ fontWeight: 400, color: "#3d3328" }}>
                {hero.headingAccent}
              </span>
            </h1>

            <p
              className="t-body hero-tagline"
              style={{
                color: "#5a5046",
                maxWidth: "64ch",
              }}
            >
              {hero.tagline1}
              <br />
              {hero.tagline2}
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
                alt={hero.heroImageAlt}
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
              {hero.description}
            </p>

            <div
              className="artneto-hero-actions"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {/* Primary — בניית לוח אישי */}
              <Link
                href="/custom-composition"
                className="artneto-hero-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 32px",
                  background: "#1f1a17",
                  color: "#f8f4ec",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  boxShadow: "0 8px 28px rgba(31,26,23,0.22)",
                  transition: "opacity 0.18s ease",
                }}
              >
                {hero.ctaCustom}
              </Link>

              {/* Secondary — צפייה בלוחות מוכנים */}
              <Link
                href="/works"
                className="artneto-hero-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 28px",
                  background: "transparent",
                  color: "#1f1a17",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  border: "1.5px solid rgba(31,26,23,0.32)",
                  transition: "opacity 0.18s ease",
                }}
              >
                {hero.ctaWorks}
              </Link>

              {/* Tertiary — בחירת סמלים בודדים */}
              <Link
                href="/single-models"
                className="artneto-hero-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "52px",
                  padding: "0 24px",
                  background: "rgba(31,26,23,0.06)",
                  color: "#4a4038",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  transition: "opacity 0.18s ease",
                }}
              >
                {hero.ctaSingle}
              </Link>
            </div>

            <p style={{ fontSize: "14px", color: "#8a7a5c", marginTop: "12px", opacity: 0.9, textAlign: "center" }}>
              {hero.priceNote}
            </p>

            <p style={{ fontSize: "14px", color: "#7a6a52", marginTop: "20px", textAlign: "center", lineHeight: 1.6 }}>
              {hero.personalNote}
            </p>
          </div>
        </section>

        {/* THREE PATHS */}
        <section
          className="artneto-paths-section"
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
            {paths.map((path) => (
              <article
                key={path.title}
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
                  {path.label}
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
                  {path.title}
                </h2>

                <p
                  className="t-body"
                  style={{
                    margin: "0 auto 20px",
                    color: "#5d5349",
                    maxWidth: "26ch",
                  }}
                >
                  {path.description}
                </p>

                <Link
                  href={path.href}
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
                  {path.cta}
                </Link>
              </article>
            ))}
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
                {about.label}
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
                {about.title}
                <br />
                {about.titleAccent}
              </h2>

              <p
                className="t-body"
                style={{
                  margin: "8px 0 20px 0",
                  color: "#5d5349",
                }}
              >
                {about.paragraph1}
              </p>

              <p
                className="t-body"
                style={{
                  margin: 0,
                  color: "#5d5349",
                }}
              >
                {about.paragraph2}
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
              {values.label}
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
              {values.title}
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
            {values.items.map((item) => (
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
              {technique.label}
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
              {technique.title}
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
            {technique.items.map((item) => (
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
                {cta.label}
              </div>

              <h2
                className="t-title"
                style={{
                  margin: "0 0 16px 0",
                  fontWeight: 650,
                  letterSpacing: "-0.022em",
                }}
              >
                {pageCta.title || cta.titleFallback}
              </h2>

              <p
                className="t-body"
                style={{
                  margin: "0 auto 28px",
                  color: "rgba(248,244,236,0.78)",
                  maxWidth: "52ch",
                }}
              >
                {pageCta.description || cta.descriptionFallback}
              </p>

              <Link
                href={pageCta.href || cta.ctaHrefFallback}
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
                {pageCta.label || cta.ctaLabelFallback}
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
            margin: 8px auto 16px;
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

          .home-hero-logo-img {
            width: 286px;
            display: block;
            margin: 0 auto;
          }

          .hero-h1 {
            margin-bottom: 16px;
          }

          .home-hero-section {
            padding-top: 64px;
          }

          @media (max-width: 640px) {
            .home-hero-logo-img {
              width: 236px;
              margin-bottom: 4px;
            }

            .hero-h1 {
              margin-bottom: 10px;
            }

            .home-hero-section {
              padding-top: 8px;
              padding-bottom: 8px;
            }

            .home-hero-image {
              margin: 8px auto 20px;
            }

            .artneto-paths-section {
              padding-top: 16px;
              padding-bottom: 52px;
            }

            .artneto-paths-section .artneto-three-paths {
              padding-left: 4px;
              padding-right: 4px;
            }
          }
        `}
      </style>
    </div>
  );
}
