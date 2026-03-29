import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArtNeto",
  description: "ArtNeto — אמנות תבליט מודולרית, שפה סימבולית וחוויה אוצרותית אישית.",
};

const navItems: { href: string | null; label: string }[] = [
  { href: "/", label: "בית" },
  { href: "/works", label: "עבודות" },
  { href: "/single-models", label: "מודלים בודדים" },
  { href: "/custom-composition", label: "הרכבה אישית" },
  { href: null, label: "על המותג" },
  { href: null, label: "יצירת קשר" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="artneto-body">
        <div className="artneto-site">
          <header className="artneto-header">
            <div className="artneto-header-inner">
              <a href="/" className="artneto-brand" aria-label="ArtNeto - דף הבית">
                <img
                  src="/logo/artneto.logo.png"
                  alt="ArtNeto"
                  style={{
                    height: "74px",
                    width: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </a>

              <nav className="artneto-nav" aria-label="ניווט ראשי">
                {navItems.map((item) =>
                  item.href ? (
                    <a key={item.label} href={item.href} className="artneto-nav-link">
                      {item.label}
                    </a>
                  ) : (
                    <span key={item.label} className="artneto-nav-link artneto-nav-link--disabled">
                      {item.label}
                    </span>
                  )
                )}
              </nav>
            </div>
          </header>

          <main className="artneto-main">{children}</main>

          <footer className="artneto-footer">
            <div className="artneto-footer-inner">
              <div className="artneto-footer-brand">ArtNeto</div>

              <p className="artneto-footer-text">
                אמנות תבליט מודולרית, שפה סימבולית וחוויה אוצרותית אישית.
              </p>

              <nav className="artneto-footer-nav" aria-label="ניווט תחתון">
                {navItems.map((item) =>
                  item.href ? (
                    <a key={item.label} href={item.href} className="artneto-footer-link">
                      {item.label}
                    </a>
                  ) : (
                    <span key={item.label} className="artneto-footer-link artneto-footer-link--disabled">
                      {item.label}
                    </span>
                  )
                )}
              </nav>
            </div>
          </footer>
        </div>

        <style>{`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            max-width: 100%;
            overflow-x: hidden;
          }

          .artneto-body {
            background: #f5f1ea;
            color: #2f261f;
            font-family: Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }

          .artneto-site {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .artneto-main {
            flex: 1;
            min-width: 0;
          }

          .artneto-header {
            background: #100b09;
            border-bottom: 1px solid rgba(229, 210, 164, 0.14);
          }

          .artneto-header-inner {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 110px;
            min-height: 86px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
          }

          .artneto-brand {
            text-decoration: none;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            opacity: 1;
            transition: opacity 0.2s ease;
          }

          .artneto-brand:hover {
            opacity: 0.82;
          }

          .artneto-nav {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 10px 22px;
          }

          .artneto-nav-link {
            text-decoration: none;
            color: #d7c59a;
            font-size: 15px;
            line-height: 1.4;
            font-weight: 600;
            white-space: nowrap;
            transition: opacity 0.2s ease;
          }

          .artneto-footer {
            background: #100b09;
            color: #e5d2a4;
            margin-top: auto;
          }

          .artneto-footer-inner {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 38px 24px;
            text-align: center;
          }

          .artneto-footer-brand {
            font-size: 28px;
            line-height: 1.1;
            font-weight: 700;
          }

          .artneto-footer-text {
            max-width: 760px;
            margin: 14px auto 0;
            color: #cfbd95;
            font-size: 16px;
            line-height: 1.9;
          }

          .artneto-footer-nav {
            margin-top: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px 22px;
          }

          .artneto-footer-link {
            text-decoration: none;
            color: #d7c59a;
            font-size: 15px;
            line-height: 1.4;
            font-weight: 600;
            white-space: nowrap;
            transition: opacity 0.2s ease;
          }

          .artneto-nav-link--disabled,
          .artneto-footer-link--disabled {
            opacity: 0.38;
            cursor: default;
          }

          .artneto-nav-link:hover,
          .artneto-footer-link:hover {
            opacity: 0.82;
          }

          .artneto-nav-link--disabled:hover,
          .artneto-footer-link--disabled:hover {
            opacity: 0.38;
          }

          @media (max-width: 1100px) {
            .artneto-header-inner {
              padding-left: 56px;
              padding-right: 56px;
            }
          }

          @media (max-width: 900px) {
            .artneto-header-inner {
              min-height: auto;
              padding-top: 18px;
              padding-bottom: 18px;
              padding-left: 32px;
              padding-right: 32px;
              flex-direction: column;
              justify-content: center;
              gap: 14px;
            }

            .artneto-nav {
              justify-content: center;
              gap: 10px 18px;
            }
          }

          @media (max-width: 640px) {
            .artneto-header-inner,
            .artneto-footer-inner {
              padding-left: 16px;
              padding-right: 16px;
            }

            .artneto-header-inner {
              padding-top: 16px;
              padding-bottom: 16px;
              gap: 12px;
            }

            .artneto-nav {
              width: 100%;
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 10px;
            }

            .artneto-nav-link {
              display: block;
              text-align: center;
              padding: 8px 10px;
              border: 1px solid rgba(229, 210, 164, 0.18);
              border-radius: 999px;
              font-size: 14px;
            }

            .artneto-footer-inner {
              padding-top: 30px;
              padding-bottom: 30px;
            }

            .artneto-footer-brand {
              font-size: 26px;
            }

            .artneto-footer-text {
              font-size: 15px;
              line-height: 1.85;
            }

            .artneto-footer-nav {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 10px;
            }

            .artneto-footer-link {
              display: block;
              text-align: center;
              padding: 8px 10px;
              border: 1px solid rgba(229, 210, 164, 0.18);
              border-radius: 999px;
              font-size: 14px;
            }
          }

          @media (max-width: 420px) {
            .artneto-nav,
            .artneto-footer-nav {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
