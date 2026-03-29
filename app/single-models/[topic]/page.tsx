import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSingleModelsCategory,
  singleModelsCategoryOrder,
} from "../../lib/single-models-data";

export async function generateStaticParams() {
  return singleModelsCategoryOrder.map((topic) => ({ topic }));
}

type TopicPageProps = {
  params: Promise<{ topic: string }>;
};

export default async function TopicPage({ params }: TopicPageProps) {
  const { topic } = await params;
  const category = getSingleModelsCategory(topic);

  if (!category) {
    return notFound();
  }

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f1ea",
        color: "#2f261f",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "56px 24px 32px",
          textAlign: "center",
        }}
      >
        <Link
          href="/single-models"
          style={{
            display: "inline-block",
            textDecoration: "none",
            border: "1px solid #d8c7b3",
            borderRadius: "999px",
            color: "#8b7355",
            fontSize: "14px",
            padding: "10px 18px",
            backgroundColor: "#f8f4ee",
            marginBottom: "24px",
          }}
        >
          חזרה לכל הנושאים
        </Link>

        <h1
          style={{
            margin: "0 0 10px",
            fontSize: "52px",
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          {category.title}
        </h1>

        <div
          style={{
            marginBottom: "18px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#8b7355",
          }}
        >
          {category.englishTitle}
        </div>

        <p
          style={{
            margin: "0 auto",
            maxWidth: "850px",
            fontSize: "18px",
            lineHeight: 1.9,
            color: "#6b5a49",
          }}
        >
          {category.heroDescription}
        </p>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {category.items.map((item, index) => (
            <Link
              key={`${category.slug}-${index}`}
              href={`/single-models/${category.slug}/${item.fileName}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
            <article
              style={{
                backgroundColor: "#fcfbf8",
                border: "1px solid #d8c7b3",
                borderRadius: "28px",
                padding: "24px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  height: "180px",
                  borderRadius: "22px",
                  border: "1px solid #eadfce",
                  background:
                    "linear-gradient(135deg, #f6efe5 0%, #fbf8f3 50%, #efe4d5 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                  color: "#5c4837",
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                תמונת מודל
              </div>

              <h2
                style={{
                  margin: "0 0 12px",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                {item.displayName}
              </h2>

              <p
                style={{
                  margin: "0 0 18px",
                  fontSize: "15px",
                  lineHeight: 1.9,
                  color: "#6b5a49",
                }}
              >
                {item.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      border: "1px solid #dccdbb",
                      backgroundColor: "#faf5ee",
                      color: "#5f4d3c",
                      borderRadius: "999px",
                      padding: "6px 12px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
