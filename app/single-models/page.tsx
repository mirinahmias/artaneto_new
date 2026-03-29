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
        minHeight: "100vh",
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
            margin: "0 0 20px",
            fontSize: "64px",
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          מודלים בודדים
        </h1>

        <p
          style={{
            margin: "0 auto",
            maxWidth: "900px",
            fontSize: "22px",
            lineHeight: 1.9,
            color: "#6b5a49",
          }}
        >
          בחרי מתוך 10 נושאים מרכזיים. כל נושא מכיל מודלים עצמאיים הניתנים
          לשילוב בלוח אישי.
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
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {singleModelsData.map((category, index) => (
            <Link
              key={category.slug}
              href={`/single-models/${category.slug}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <article
                style={{
                  backgroundColor: "#fcfbf8",
                  border: "1px solid #d8c7b3",
                  borderRadius: "28px",
                  padding: "24px 20px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    borderRadius: "22px",
                    border: "1px solid #eadfce",
                    background:
                      "linear-gradient(135deg, #f6efe5 0%, #fbf8f3 50%, #efe4d5 100%)",
                    overflow: "hidden",
                    marginBottom: "18px",
                  }}
                >
                  <Image
                    src={demoImages[index]}
                    alt={`${category.title} — דוגמה`}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h2
                  style={{
                    margin: "0 0 6px",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: 1.15,
                  }}
                >
                  {category.title}
                </h2>

                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
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
