import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div
      dir="rtl"
      style={{
        background: "#f5f1e8",
        color: "#1c1917",
        minHeight: "60vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "72px 24px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          width: "100%",
          textAlign: "center",
        }}
      >

        {/* A. Main title */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 600,
            marginBottom: "12px",
            lineHeight: 1.3,
            color: "#1c1917",
          }}
        >
          הלוח שלך התקבל — מכאן הוא מתחיל לקבל חיים
        </h1>

        {/* B. Subtitle */}
        <p
          style={{
            fontSize: "14px",
            color: "#6b5e4a",
            marginBottom: "20px",
            lineHeight: 1.6,
          }}
        >
          אני אעבור עליו ואחזור אלייך בקרוב עם הצעת מחיר והתאמות אישיות
        </p>

        {/* C. Supporting line */}
        <p
          style={{
            fontSize: "13px",
            color: "#8a7a5c",
            marginBottom: "32px",
            lineHeight: 1.6,
          }}
        >
          כל לוח הוא יצירה ייחודית — ואני מתייחסת אליו ככזה
        </p>

        {/* D. Board preview placeholder */}
        <div
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            backgroundColor: "#f4f1ea",
            borderRadius: "12px",
            marginBottom: "32px",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        />

        {/* E. What happens now */}
        <div style={{ textAlign: "right", marginBottom: "32px" }}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "12px",
              color: "#1c1917",
            }}
          >
            מה קורה עכשיו?
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "14px",
              lineHeight: 1.6,
              color: "#5a4f45",
            }}
          >
            <li style={{ marginBottom: "6px" }}>אעבור על ההרכבה שלך</li>
            <li style={{ marginBottom: "6px" }}>אבדוק התאמות בין הסמלים</li>
            <li>אשלח לך הצעת מחיר מסודרת</li>
          </ul>
        </div>

        {/* F. CTA buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "320px",
              padding: "12px 24px",
              backgroundColor: "#c9a96e",
              color: "#100b09",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.02em",
              transition: "background-color 0.18s ease",
            }}
          >
            חזרה לדף הבית
          </Link>

          <Link
            href="/custom-composition"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "320px",
              padding: "12px 24px",
              backgroundColor: "transparent",
              color: "#7a6a56",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              border: "1px solid rgba(122,106,86,0.3)",
              transition: "border-color 0.18s ease, color 0.18s ease",
            }}
          >
            יצירת לוח נוסף
          </Link>
        </div>

      </div>
    </div>
  );
}
