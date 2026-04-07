import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import NavHeader from "@/components/NavHeader";

export const metadata: Metadata = {
  title: "ArtNeto",
  description: "ArtNeto — אמנות תבליט מודולרית, שפה סימבולית וחוויה אוצרותית אישית.",
  other: {
    "format-detection": "telephone=no, date=no, email=no, address=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className="artneto-body"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
          <NavHeader />

          <main className="artneto-main" style={{ flex: 1 }}>{children}</main>

          <Footer />

      </body>
    </html>
  );
}
