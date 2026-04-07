import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSingleModelsCategory,
  singleModelsData,
} from "../../../lib/single-models-data";

export async function generateStaticParams() {
  return singleModelsData.flatMap((category) =>
    category.items.map((item) => ({
      topic: category.slug,
      model: item.fileName,
    }))
  );
}

type ModelPageProps = {
  params: Promise<{ topic: string; model: string }>;
};

export default async function ModelPage({ params }: ModelPageProps) {
  const { topic, model } = await params;

  const category = getSingleModelsCategory(topic);
  if (!category) {
    return notFound();
  }

  const item = category.items.find((i) => i.fileName === model);
  if (!item) {
    return notFound();
  }

  return (
    <div
      dir="rtl"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f1ea",
        color: "#2f261f",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "56px 24px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "32px",
          }}
        >
          <Link
            href="/single-models"
            style={{
              textDecoration: "none",
              color: "#8b7355",
              fontSize: "14px",
            }}
          >
            מודלים בודדים
          </Link>
          <span style={{ color: "#b8a898", fontSize: "14px" }}>›</span>
          <Link
            href={`/single-models/${category.slug}`}
            style={{
              textDecoration: "none",
              color: "#8b7355",
              fontSize: "14px",
            }}
          >
            {category.title}
          </Link>
        </div>

        <div
          style={{
            backgroundColor: "#fcfbf8",
            border: "1px solid #d8c7b3",
            borderRadius: "32px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "360px",
              background:
                "linear-gradient(135deg, #f6efe5 0%, #fbf8f3 50%, #efe4d5 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "1px solid #e8dccb",
              color: "#5c4837",
              fontSize: "28px",
              fontWeight: 500,
            }}
          >
            תמונת מודל
          </div>

          <div
            style={{
              padding: "36px 32px 40px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#8b7355",
              }}
            >
              {category.title} · {category.englishTitle}
            </div>

            <h1
              style={{
                margin: "0 0 20px",
                fontSize: "40px",
                lineHeight: 1.15,
                fontWeight: 700,
              }}
            >
              {item.displayName}
            </h1>

            <p
              style={{
                margin: "0 auto 28px",
                maxWidth: "600px",
                fontSize: "17px",
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
                marginBottom: "36px",
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
                    padding: "6px 14px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/single-models/${category.slug}`}
              style={{
                display: "inline-block",
                textDecoration: "none",
                border: "1px solid #d8c7b3",
                borderRadius: "999px",
                color: "#8b7355",
                fontSize: "14px",
                padding: "10px 20px",
                backgroundColor: "#f8f4ee",
              }}
            >
              חזרה לכל מודלי {category.title}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
