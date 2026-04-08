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
    title: "לוח — מסע",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-1.jpg",
  },
  {
    id: 2,
    title: "לוח — זיכרון",
    description: "תיאור קצר של הלוח — יוחלף בהמשך בתוכן האמיתי.",
    imageSrc: "/works/work-2.jpg",
  },
  {
    id: 3,
    title: "לוח — איזון",
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
];

export default function WorksPage() {
  return (
    <div
      dir="rtl"
      style={{
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
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          עבודות
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
          לוחות מוכנים — כל לוח הוא יצירה עצמאית, בנויה משפה סימבולית
          ומודולרית ייחודית.
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
          כל לוח ניתן להזמנה בהתאמה אישית לפי הסיפור שלך.
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
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {works.map((work) => (
            <article
              key={work.id}
              style={{
                flex: "1 1 280px",
                maxWidth: "380px",
                backgroundColor: "#fcfbf8",
                border: "1px solid #d8c7b3",
                borderRadius: "28px",
                padding: "24px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "#F4F1EA",
                  borderRadius: "12px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  marginBottom: "18px",
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
                    src={work.imageSrc}
                    alt={work.title}
                    fill
                    style={{ display: "block", width: "100%", borderRadius: "8px", objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              <h2
                className="t-subtitle"
                style={{
                  margin: "0 0 12px",
                  fontWeight: 700,
                }}
              >
                {work.title}
              </h2>

              <p
                className="t-body"
                style={{
                  margin: "0 0 18px",
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
                    padding: "10px 22px",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  לפרטים נוספים
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
