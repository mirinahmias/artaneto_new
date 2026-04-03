// app/single-models/page.tsx

import Image from "next/image";
import Link from "next/link";
import { singleModelsData } from "../lib/single-models-data";

const demoImages: string[] = [
  "/models/model-1.jpg",
  "/models/model-2.jpg",
  "/models/model-3.jpg",
  "/models/model-4.jpg",
  "/models/model-5.jpg",
  "/models/model-6.jpg",
  "/models/model-7.jpg",
  "/models/model-8.jpg",
  "/models/model-9.jpg",
  "/models/model-10.jpg",
];

export default function SingleModelsPage() {
  return (
    <main
      dir="rtl"
      style={{
        backgroundColor: "#f5f1ea",
        color: "#2f261f",
      }}
    >
      {/* Page header */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 24px 40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "10px 18px",
            border: "1px solid #d8c7b3",
            borderRadius: "999px",
            color: "#8b7355",
            fontSize: "14px",
            marginBottom: "24px",
            backgroundColor: "#f8f4ee",
          }}
        >
          ספריית מודלים
        </div>

        <h1
          style={{
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          מודלים בודדים
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: "#6b5e4a",
            maxWidth: "560px",
            margin: "0 auto 28px auto",
            textAlign: "center",
          }}
        >
          בחירה מתוך מגוון סמלים להרכבה אישית של לוח.
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#8a7a5c",
            textAlign: "center",
            marginTop: "0",
            marginBottom: "8px",
            lineHeight: 1.6,
          }}
        >
          הסמלים מהווים בסיס להרכבת לוח אישי או שילוב בעבודה קיימת.
        </p>
      </section>

      {/* Category card grid */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {singleModelsData.map((category, index) => (
            <Link
              key={category.slug}
              href={`/single-models/${category.slug}`}
              style={{ textDecoration: "none", color: "inherit", display: "block", flex: "1 1 260px", maxWidth: "340px" }}
            >
              <article
                style={{
                  backgroundColor: "#fcfbf8",
                  border: "1px solid #d8c7b3",
                  borderRadius: "28px",
                  padding: "12px 12px 20px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    backgroundColor: "#F4F1EA",
                    borderRadius: "12px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    marginBottom: "26px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "1 / 1",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={demoImages[index]}
                      alt={`${category.title} — דוגמה`}
                      fill
                      style={{ display: "block", width: "100%", borderRadius: "8px", objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                <h2
                  className="t-subtitle"
                  style={{
                    margin: "0 0 6px",
                    fontWeight: 700,
                  }}
                >
                  {category.title}
                </h2>

                <p
                  className="t-small"
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    color: "#8b7355",
                    letterSpacing: "0.02em",
                  }}
                >
                  {category.englishTitle}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Centered CTA button */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 24px 80px",
          textAlign: "center",
        }}
      >
        <Link
          href="/custom-composition"
          style={{
            display: "inline-block",
            padding: "14px 36px",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: 700,
            color: "#2f261f",
            border: "1px solid #d8c7b3",
            backgroundColor: "#f8f4ee",
          }}
        >
          לכל המודלים
        </Link>
      </section>
    </main>
  );
}
