import Link from "next/link";
import { getHomePage } from "./lib/fetchers/getHomePage";
import { content } from "./content/content";

const { hero, paths, values, technique, cta } = content.home;

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

            <p style={{ fontSize: "14px", color: "#7a6a52", marginTop: "20px", textAlign: "center", lineHeight: 1.6 }}>
              {hero.personalNote}
            </p>
          </div>
        </section>

        {/* THREE PATHS */}
        <section
          className="artneto-paths-section"
          style={{
            paddingTop: "40px",
            paddingBottom: "72px",
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
            {paths.map((path) => (
              <article
                key={path.title}
                style={{
                  background: "rgba(255,255,255,0.58)",
                  border: "1px solid rgba(96, 77, 54, 0.09)",
                  borderRadius: "32px",
                  padding: "38px 28px 34px",
                  boxShadow: "0 18px 52px rgba(60,42,22,0.10)",
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
                    margin: "0 0 8px 0",
                    fontWeight: 700,
                    fontSize: "19px",
                    color: "#141009",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {path.title}
                </h2>

                <p
                  className="t-body"
                  style={{
                    margin: "0 auto 24px",
                    color: "#5d5349",
                    maxWidth: "26ch",
                  }}
                >
                  {path.description}
                </p>

                <Link
                  href={path.href}
                  className="artneto-path-cta-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "48px",
                    padding: "0 26px",
                    background: "#1f1a17",
                    color: "#f8f4ec",
                    textDecoration: "none",
                    borderRadius: "999px",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section
          className="home-values-section"
          style={{
            paddingTop: "0",
            paddingBottom: "72px",
          }}
        >
          <div
            className="home-values-header"
            style={{
              maxWidth: "680px",
              margin: "0 auto 26px",
              textAlign: "center",
            }}
          >
            <div
              className="t-small home-values-eyebrow"
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
          className="home-technique-section"
          style={{
            paddingTop: "0",
            paddingBottom: "72px",
          }}
        >
          <div
            className="home-technique-header"
            style={{
              maxWidth: "680px",
              margin: "0 auto 26px",
              textAlign: "center",
            }}
          >
            <div
              className="t-small home-technique-eyebrow"
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
          className="home-cta-section"
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
                className="t-small home-cta-eyebrow"
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

          .home-hero-image {
            max-width: 420px;
            margin: 8px auto 16px;
            display: block;
          }

          .artneto-path-cta-btn:hover {
            opacity: 0.78;
          }

          /* Route cards — desktop strengthened */
          @media (min-width: 641px) {
            .artneto-paths-section .artneto-three-paths {
              max-width: 1100px;
              margin-left: auto;
              margin-right: auto;
              gap: 28px !important;
            }

            .artneto-paths-section article {
              padding: 46px 34px 42px !important;
            }

            .artneto-paths-section article h2 {
              font-size: 22px !important;
            }

            .artneto-paths-section article p {
              font-size: 16px !important;
              line-height: 1.65 !important;
            }

            .artneto-paths-section .artneto-path-cta-btn {
              min-height: 52px !important;
              padding: 0 30px !important;
              font-size: 16px !important;
            }
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
              padding-top: 32px;
              padding-bottom: 52px;
            }

            .artneto-paths-section .artneto-three-paths {
              padding-left: 4px;
              padding-right: 4px;
              gap: 20px !important;
            }

            /* Route cards — mobile compact */
            .artneto-paths-section article {
              padding: 24px 20px 22px !important;
            }

            .artneto-paths-section article .t-small {
              margin-bottom: 6px !important;
            }

            .artneto-paths-section article h2 {
              margin-bottom: 6px !important;
            }

            .artneto-paths-section article p {
              font-size: 13px !important;
              line-height: 1.5 !important;
              margin-bottom: 16px !important;
            }

            .artneto-paths-section .artneto-path-cta-btn {
              min-height: 42px !important;
              font-size: 14px !important;
            }

            /* Lower sections vertical rhythm */
            .home-values-section,
            .home-technique-section {
              padding-top: 40px !important;
              padding-bottom: 40px !important;
            }

            .home-cta-section {
              padding-top: 40px !important;
              padding-bottom: 24px !important;
            }

            /* Eyebrow → heading gap */
            .home-values-eyebrow,
            .home-technique-eyebrow,
            .home-cta-eyebrow {
              margin-bottom: 8px !important;
            }

            /* Heading → first card/content gap */
            .home-values-header,
            .home-technique-header {
              margin-bottom: 20px !important;
            }

            /* Stacked card gap */
            .artneto-values-grid,
            .artneto-steps-grid {
              gap: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
