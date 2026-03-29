// app/works/page.tsx

import Image from "next/image";
import Link from "next/link";

type WorkItem = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
};

const works: WorkItem[] = [
  {
    id: 1,
    title: "לוח מוכן 1",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-1.jpg",
  },
  {
    id: 2,
    title: "לוח מוכן 2",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-2.jpg",
  },
  {
    id: 3,
    title: "לוח מוכן 3",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-3.jpg",
  },
  {
    id: 4,
    title: "לוח מוכן 4",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-4.jpg",
  },
  {
    id: 5,
    title: "לוח מוכן 5",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-5.jpg",
  },
  {
    id: 6,
    title: "לוח מוכן 6",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-6.jpg",
  },
  {
    id: 7,
    title: "לוח מוכן 7",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-7.jpg",
  },
  {
    id: 8,
    title: "לוח מוכן 8",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-8.jpg",
  },
  {
    id: 9,
    title: "לוח מוכן 9",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-9.jpg",
  },
  {
    id: 10,
    title: "לוח מוכן 10",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-10.jpg",
  },
];

export default function WorksPage() {
  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#f5f1ea",
        color: "#2f261f",
      }}
    >
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
          לוחות מוכנים
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
          עבודות
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
          לוחות מוכנים — כל לוח הוא יצירה עצמאית, בנויה משפה סימבולית
          ומודולרית ייחודית.
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
          {works.map((work) => (
            <article
              key={work.id}
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
                  src={work.imageSrc}
                  alt={work.title}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <h2
                style={{
                  margin: "0 0 12px",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                {work.title}
              </h2>

              <p
                style={{
                  margin: "0 0 18px",
                  fontSize: "15px",
                  lineHeight: 1.9,
                  color: "#6b5a49",
                }}
              >
                {work.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Link
                  href="/contact"
                  style={{
                    border: "1px solid #2f261f",
                    backgroundColor: "#2f261f",
                    color: "#f8f4ee",
                    borderRadius: "999px",
                    padding: "6px 16px",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  לפרטים ורכישה
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
