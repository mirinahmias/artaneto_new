export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#0e0b09",
        color: "#e8dccb",
        padding: "32px 24px 32px",
        marginTop: "120px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            height: "1px",
            width: "100%",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "28px",
          }}
        />

        <div
          style={{
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "0.01em",
            marginBottom: "6px",
          }}
        >
          ArtNeto
        </div>

        <div
          style={{
            fontSize: "13px",
            lineHeight: 1.6,
            color: "rgba(244,241,234,0.82)",
            textAlign: "center",
            marginTop: "6px",
            marginBottom: "28px",
          }}
        >
          לוחות זיכרון מודולריים
          <br />
          תשעה סמלים · סיפור אחד
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="/" style={{ color: "inherit", textDecoration: "none", fontSize: "13px", letterSpacing: "0.02em", opacity: 0.85 }}>בית</a>
          <a href="/works" style={{ color: "inherit", textDecoration: "none", fontSize: "13px", letterSpacing: "0.02em", opacity: 0.85 }}>עבודות</a>
          <a href="/single-models" style={{ color: "inherit", textDecoration: "none", fontSize: "13px", letterSpacing: "0.02em", opacity: 0.85 }}>מודלים בודדים</a>
          <a href="/custom-composition" style={{ color: "inherit", textDecoration: "none", fontSize: "13px", letterSpacing: "0.02em", opacity: 0.85 }}>הרכבה אישית</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none", fontSize: "13px", letterSpacing: "0.02em", opacity: 0.85 }}>על המותג</a>
          <a href="/contact" style={{ color: "inherit", textDecoration: "none", fontSize: "13px", letterSpacing: "0.02em", opacity: 0.85 }}>יצירת קשר</a>
        </div>

        <div
          style={{
            marginTop: "24px",
            fontSize: "12px",
            color: "rgba(244,241,234,0.45)",
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
        >
          לוחות בעבודת יד · התאמה אישית לפי סיפור
        </div>
      </div>
    </footer>
  );
}
