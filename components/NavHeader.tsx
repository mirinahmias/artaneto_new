"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems: { href: string; label: string }[] = [
  { href: "/", label: "בית" },
  { href: "/works", label: "עבודות" },
  { href: "/single-models", label: "מודלים בודדים" },
  { href: "/custom-composition", label: "הרכבה אישית" },
  { href: "/about", label: "על המותג" },
  { href: "/contact", label: "יצירת קשר" },
];

const mobileNavItems = navItems.filter((i) => i.href !== "/custom-composition");

export default function NavHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="artneto-header">
      <div className="artneto-header-inner">
        {/* Hamburger – mobile only, shown via CSS */}
        <button
          className="artneto-hamburger"
          aria-label="תפריט"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop nav – unchanged */}
        <nav className="artneto-nav" aria-label="ניווט ראשי">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="artneto-nav-link">
              <span className="artneto-nav-link-inner">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile overlay */}
        <div
          aria-hidden={!open}
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.55)",
            zIndex: 300,
            opacity: open ? 1 : 0,
            pointerEvents: open ? "all" : "none",
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Mobile slide-in panel (right side) */}
        <nav
          aria-label="ניווט ראשי"
          aria-hidden={!open}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: "auto",
            width: "max-content",
            maxWidth: "90vw",
            background: "#100b09",
            borderLeft: "1px solid rgba(229, 210, 164, 0.14)",
            zIndex: 400,
            display: "flex",
            flexDirection: "column",
            transform: open ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Top row: close button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "18px 32px 0",
            }}
          >
            <button
              aria-label="סגור תפריט"
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "1px solid rgba(229, 210, 164, 0.3)",
                color: "#d7c59a",
                fontSize: "18px",
                width: "40px",
                height: "40px",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: "28px 32px 0",
              overflowY: "auto",
            }}
          >
            {mobileNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: isActive ? "#f5efe0" : "#d7c59a",
                    fontWeight: isActive ? 700 : 600,
                    textDecoration: "none",
                    fontSize: "21px",
                    letterSpacing: "0.02em",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(229, 210, 164, 0.09)",
                    display: "block",
                    direction: "rtl",
                    whiteSpace: "nowrap",
                    transition: "opacity 0.15s ease",
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA area */}
          <div
            style={{
              padding: "28px 32px",
              borderTop: "1px solid rgba(229, 210, 164, 0.18)",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <a
              href="/custom-composition"
              onClick={() => setOpen(false)}
              style={{
                display: "inline-block",
                textAlign: "center",
                background: "#e5d2a4",
                color: "#100b09",
                fontWeight: 700,
                fontSize: "17px",
                padding: "15px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
                width: "fit-content",
              }}
            >
              להרכבת לוח אישי
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
