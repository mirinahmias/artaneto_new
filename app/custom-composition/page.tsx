"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { singleModelsData } from "../lib/single-models-data";

const BOARD_COLOR      = "#c8a868";
const TILE_GAP         = "2%";
const LAYOUT_MAX_WIDTH = 1200;

type ModelItem = {
  id: string;
  image: string;
  label: string;
  categorySlug: string;
  categoryTitle: string;
};

let globalIdx = 0;
const allModelsFlat: ModelItem[] = singleModelsData.flatMap((cat) =>
  cat.items.map((item) => {
    const imgNum = (globalIdx++ % 10) + 1;
    return {
      id: `${cat.slug}__${item.fileName}`,
      image: `/models/model-${imgNum}.jpg`,
      label: item.displayName,
      categorySlug: cat.slug,
      categoryTitle: cat.title,
    };
  })
);

const allModelsById: Record<string, ModelItem> = Object.fromEntries(
  allModelsFlat.map((m) => [m.id, m])
);

function ModelCard({
  model,
  isSelected,
  onClick,
}: {
  model: ModelItem;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={model.label}
      aria-label={model.label}
      style={{
        all: "unset",
        cursor: "pointer",
        display: "block",
        width: "100%",
        aspectRatio: "1 / 1",
        position: "relative",
        overflow: "hidden",
        borderRadius: "4px",
        outline: isSelected
          ? "2px solid #c9a96e"
          : "1px solid rgba(200,174,130,0.18)",
        outlineOffset: isSelected ? "2px" : "0px",
        boxShadow: isSelected ? "0 0 0 4px rgba(201,169,110,0.18)" : "none",
        transition: "outline 0.15s ease, box-shadow 0.15s ease",
        background: "#1e1610",
      }}
    >
      <Image
        src={model.image}
        alt={model.label}
        fill
        style={{ objectFit: "cover" }}
        sizes="72px"
      />
      {isSelected && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(201,169,110,0.12)",
            pointerEvents: "none",
          }}
        />
      )}
    </button>
  );
}

function CategorySection({
  title,
  models,
  selectedModelId,
  onSelect,
  isOpen,
  onToggle,
}: {
  title: string;
  models: ModelItem[];
  selectedModelId: string | null;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid rgba(200,174,130,0.12)" }}>
      <button
        onClick={onToggle}
        style={{
          all: "unset",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "8px 0",
          fontSize: "14px",
          fontWeight: 700,
          color: "#b89a6a",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>{title}</span>
        <span
          style={{
            fontSize: "10px",
            opacity: 0.55,
            transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "transform 0.2s ease",
            display: "inline-block",
          }}
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "4px",
            paddingBottom: "8px",
          }}
        >
          {models.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              isSelected={selectedModelId === model.id}
              onClick={() => onSelect(model.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function BoardTile({
  model,
  isPlacingMode,
  onClick,
  onRemove,
}: {
  model: ModelItem | null;
  isPlacingMode: boolean;
  onClick: () => void;
  onRemove: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  function handleContextMenu(e: React.MouseEvent) {
    e.preventDefault();
    if (model) onRemove();
  }

  return (
    <div
      onClick={onClick}
      onContextMenu={handleContextMenu}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        cursor: model ? "context-menu" : isPlacingMode ? "crosshair" : "default",
        background: "#1e1408",
        outline:
          !model && isPlacingMode && hovered
            ? "1.5px solid rgba(201,169,110,0.55)"
            : "none",
        outlineOffset: "-1.5px",
        transition: "outline 0.1s ease",
      }}
    >
      {model ? (
        <>
          <Image
            src={model.image}
            alt={model.label}
            fill
            style={{
              objectFit: "cover",
              opacity: hovered ? 0.78 : 1,
              transition: "opacity 0.18s ease",
            }}
            sizes="240px"
          />
          {hovered && (
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(15,9,4,0.38)",
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  color: "rgba(229,210,164,0.88)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "4px 8px",
                  background: "rgba(0,0,0,0.45)",
                  borderRadius: "3px",
                }}
              >
                לחצי ימין להסרה
              </span>
            </div>
          )}
        </>
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              border: "1px solid",
              borderColor:
                isPlacingMode && hovered
                  ? "rgba(201,169,110,0.7)"
                  : "rgba(201,169,110,0.22)",
              transition: "border-color 0.15s ease",
            }}
          />
        </div>
      )}
    </div>
  );
}

const NEXT_STEP_OPTIONS = [
  { value: "quote", label: "קבלת הצעת מחיר" },
  { value: "customize", label: "התאמה אישית של ההרכבה" },
  { value: "question", label: "שאלה כללית לפני המשך" },
  { value: "other", label: "אחר" },
];

export default function CustomCompositionPage() {
  const router = useRouter();
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [grid, setGrid] = useState<(string | null)[]>(Array(9).fill(null));
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    Object.fromEntries(singleModelsData.map((c, i) => [c.slug, i < 2]))
  );

  // ── Submission form state ──
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formNotes, setFormNotes] = useState("");
  const [formNextStep, setFormNextStep] = useState("");
  const [formConsent, setFormConsent] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formServerError, setFormServerError] = useState("");

  const selectedModel = selectedModelId ? allModelsById[selectedModelId] : null;
  const placedCount = grid.filter(Boolean).length;
  const isPlacingMode = selectedModelId !== null;

  function handleModelSelect(id: string) {
    setSelectedModelId((prev) => (prev === id ? null : id));
  }

  function handleCellClick(index: number) {
    if (!isPlacingMode) return;
    setGrid((prev) => {
      const next = [...prev];
      next[index] = selectedModelId;
      return next;
    });
  }

  function handleCellRemove(index: number) {
    setGrid((prev) => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
  }

  function handleClearBoard() {
    setGrid(Array(9).fill(null));
    setSelectedModelId(null);
  }

  function toggleCategory(slug: string) {
    setOpenCategories((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }

  function handleOpenSubmitForm() {
    if (placedCount === 0) return;
    setShowSubmitForm(true);
    setFormSubmitted(false);
    setFormErrors({});
    setFormServerError("");
    setFormLoading(false);
  }

  function handleCloseSubmitForm() {
    setShowSubmitForm(false);
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormServerError("");

    // Client-side validation
    const errors: Record<string, string> = {};
    if (!formName.trim()) errors.name = "שדה חובה";
    if (!formEmail.trim()) {
      errors.email = "שדה חובה";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail.trim())) {
      errors.email = "כתובת אימייל לא תקינה";
    }
    if (!formConsent) errors.consent = "יש לאשר את תנאי השיתוף";
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    // Build board payload — include image path so the email can render it
    const boardPayload = grid.map((cellModelId, index) => {
      if (!cellModelId) return { index, empty: true };
      const m = allModelsById[cellModelId];
      if (!m) return { index, empty: true };
      return {
        index,
        empty: false,
        id: m.id,
        label: m.label,
        categoryTitle: m.categoryTitle,
        image: m.image, // e.g. "/models/model-3.jpg"
      };
    });

    setFormLoading(true);
    try {
      const res = await fetch("/api/send-composition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName.trim(),
          email: formEmail.trim(),
          phone: formPhone.trim() || undefined,
          notes: formNotes.trim() || undefined,
          nextStep: formNextStep || undefined,
          board: boardPayload,
        }),
      });
      const json = await res.json();
      if (!res.ok || json.error) {
        setFormServerError(json.error ?? "שגיאה בשליחה, נסי שנית");
      } else {
        router.push("/thank-you");
      }
    } catch {
      setFormServerError("בעיית חיבור, בדקי את החיבור לאינטרנט ונסי שנית");
    } finally {
      setFormLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      className="cc-main"
      style={{
        backgroundColor: "#f5f1ea",
        color: "#2f261f",
      }}
    >
      <div
        className="cc-layout"
        style={{
          maxWidth: `${LAYOUT_MAX_WIDTH}px`,
          width: "100%",
          margin: "0 auto",
          padding: "40px 24px 64px",
          display: "grid",
          gridTemplateColumns: "260px 1fr 260px",
          gap: "12px",
          boxSizing: "border-box",
          alignItems: "stretch",
        }}
      >
        {/* ── Sidebar / Model library ── */}
        <aside
          className="cc-library"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fcfbf8",
            border: "1px solid #dfd3c2",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 2px 14px rgba(60,40,20,0.05)",
            boxSizing: "border-box",
          }}
        >
          {/* Sidebar header */}
          <div
            style={{
              flexShrink: 0,
              fontSize: "14px",
              fontWeight: 700,
              color: "#7a5c35",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              marginBottom: "8px",
              paddingBottom: "8px",
              borderBottom: "1px solid #e5d8c8",
            }}
          >
            ספריית סמלים
          </div>

          {/* Status indicator */}
          <div
            style={{
              flexShrink: 0,
              marginBottom: "10px",
              padding: "7px 10px",
              borderRadius: "7px",
              backgroundColor: selectedModel
                ? "rgba(201,169,110,0.10)"
                : "rgba(0,0,0,0.03)",
              border: `1px solid ${
                selectedModel ? "rgba(201,169,110,0.35)" : "rgba(0,0,0,0.06)"
              }`,
              fontSize: "14px",
              color: selectedModel ? "#7a5c2e" : "#9a7a58",
              transition: "all 0.18s ease",
              minHeight: "32px",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              lineHeight: 1.4,
            }}
          >
            {selectedModel ? (
              <>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    backgroundColor: "#c9a96e",
                    boxShadow: "0 0 0 3px rgba(201,169,110,0.22)",
                  }}
                />
                <span>
                  <strong style={{ fontWeight: 700 }}>{selectedModel.label}</strong>
                  {" — לחצי על תא בלוח"}
                </span>
              </>
            ) : (
              <span style={{ opacity: 0.58 }}>בחרי סמל מהספרייה</span>
            )}
          </div>

          {/* Scrollable category list */}
          <div className="cc-library-scroll" style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
            {singleModelsData.map((cat) => {
              const catModels = allModelsFlat.filter(
                (m) => m.categorySlug === cat.slug
              );
              return (
                <CategorySection
                  key={cat.slug}
                  title={cat.title}
                  models={catModels}
                  selectedModelId={selectedModelId}
                  onSelect={handleModelSelect}
                  isOpen={!!openCategories[cat.slug]}
                  onToggle={() => toggleCategory(cat.slug)}
                />
              );
            })}
          </div>

          {/* Subtle CTA */}
          <div
            style={{
              flexShrink: 0,
              marginTop: "10px",
              paddingTop: "10px",
              borderTop: "1px solid #e5d8c8",
            }}
          >
            {placedCount === 9 ? (
              <>
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    marginBottom: "8px",
                    textAlign: "center",
                    margin: "0 0 8px 0",
                    color: "#1c1410",
                  }}
                >
                  זה הלוח שלך.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b5e4a",
                    marginBottom: "20px",
                    textAlign: "center",
                    lineHeight: 1.5,
                    margin: "0 0 20px 0",
                  }}
                >
                  רוצה להתקדם? שלחי את הלוח ונחזור אלייך עם הצעת מחיר והתאמות אם צריך.
                </p>
                <button
                  onClick={handleOpenSubmitForm}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "10px 16px",
                    backgroundColor: "#c9a96e",
                    color: "#100b09",
                    borderRadius: "7px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    transition: "background-color 0.18s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b8945a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c9a96e";
                  }}
                >
                  שלחי לקבלת הצעת מחיר
                </button>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#8a7a5c",
                    marginTop: "8px",
                    textAlign: "center",
                    margin: "8px 0 0 0",
                  }}
                >
                  ללא התחייבות · מענה אישי
                </p>
              </>
            ) : placedCount > 0 ? (
              <>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#9a7a58",
                    textAlign: "center",
                    marginBottom: "7px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {placedCount} / 9 סמלים מוצבים
                </div>
                <button
                  onClick={handleOpenSubmitForm}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "9px 16px",
                    backgroundColor: "rgba(201,169,110,0.12)",
                    color: "#9a7a58",
                    border: "1px solid rgba(201,169,110,0.28)",
                    borderRadius: "7px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    transition: "background-color 0.18s ease, color 0.18s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(201,169,110,0.22)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(201,169,110,0.12)";
                  }}
                >
                  שליחת ההרכבה
                  <span aria-hidden style={{ fontSize: "13px" }}>←</span>
                </button>
              </>
            ) : (
              <div
                style={{
                  fontSize: "14px",
                  color: "rgba(107,90,73,0.45)",
                  textAlign: "center",
                  letterSpacing: "0.03em",
                }}
              >
                בחרי סמלים להפעלת השליחה
              </div>
            )}
          </div>
        </aside>

        {/* ── Board column ── */}
        <div
          className="cc-board-col"
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          {/* Header: title + instruction + toolbar — scoped to board width */}
          <div
            style={{
              textAlign: "center",
              paddingBottom: "4px",
            }}
          >
            <h1
              className="t-subtitle"
              style={{
                margin: 0,
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              בניית לוח אישי
            </h1>
            <p
              className="t-body"
              style={{
                margin: "3px 0 0",
                color: "#6b5a49",
              }}
            >
              בחרי עד 9 סמלים מהספרייה ושבצי אותם על הלוח
            </p>
          </div>

          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              paddingBottom: "8px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#7a5c35",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
              }}
            >
              לוח ההרכבה
            </span>
            <span style={{ width: "1px", height: "11px", backgroundColor: "rgba(0,0,0,0.14)", flexShrink: 0 }} />
            <span style={{ fontSize: "14px", color: "#a08060", fontWeight: 500 }}>
              {placedCount} / 9 סמלים
            </span>
            <span style={{ width: "1px", height: "11px", backgroundColor: "rgba(0,0,0,0.14)", flexShrink: 0 }} />
            <button
              onClick={handleClearBoard}
              disabled={placedCount === 0 && !selectedModelId}
              style={{
                all: "unset",
                cursor: placedCount > 0 || selectedModelId ? "pointer" : "default",
                fontSize: "14px",
                fontWeight: 500,
                color: "#a08060",
                padding: "3px 12px",
                border: "1px solid #dfd3c2",
                borderRadius: "999px",
                backgroundColor: "transparent",
                opacity: placedCount > 0 || selectedModelId ? 1 : 0.4,
                transition: "opacity 0.15s ease",
              }}
            >
              נקה לוח
            </button>
          </div>

          {/* Board — square, fills available column space */}
          <div
            className="cc-board-area"
            style={{
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              className="cc-board"
              style={{
                width: "min(100%, 500px)",
                aspectRatio: "1 / 1",
                backgroundColor: BOARD_COLOR,
                padding: TILE_GAP,
                boxSizing: "border-box",
                borderRadius: "0",
                boxShadow: "0 16px 60px rgba(8,4,2,0.50), 0 4px 16px rgba(0,0,0,0.26)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridTemplateRows: "repeat(3, 1fr)",
                  gap: TILE_GAP,
                }}
              >
                {grid.map((cellModelId, i) => (
                  <BoardTile
                    key={i}
                    model={cellModelId ? allModelsById[cellModelId] : null}
                    isPlacingMode={isPlacingMode}
                    onClick={() => handleCellClick(i)}
                    onRemove={() => handleCellRemove(i)}
                  />
                ))}
              </div>
            </div>

            {/* Caption */}
            {(isPlacingMode || placedCount > 0) && (
              <p
                style={{
                  margin: "7px 0 0",
                  fontSize: "14px",
                  color: "rgba(107,90,73,0.65)",
                  textAlign: "center",
                  lineHeight: 1.6,
                  letterSpacing: "0.02em",
                }}
              >
                {isPlacingMode
                  ? `מציבה: ${selectedModel?.label} — לחצי על תא פנוי בלוח`
                  : "לחצי ימין על סמל כדי להסיר · בחרי סמל להוספה"}
              </p>
            )}
          </div>
        </div>

        {/* ── Spacer (mirrors library width to keep board truly centered) ── */}
        <div className="cc-spacer" aria-hidden="true" />
      </div>

      {/* ── Submission form overlay ── */}
      {showSubmitForm && (
        <div
          className="sf-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseSubmitForm();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            backgroundColor: "rgba(18,12,6,0.58)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            overflowY: "auto",
          }}
        >
          <div
            className="sf-card"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "520px",
              backgroundColor: "#fcfbf8",
              borderRadius: "14px",
              boxShadow: "0 24px 80px rgba(8,4,2,0.42), 0 4px 20px rgba(0,0,0,0.16)",
              border: "1px solid #e8ddd0",
              overflowY: "auto",
              maxHeight: "calc(100vh - 32px)",
            }}
          >
            {formSubmitted ? (
              /* ── Success state ── */
              <div
                style={{
                  padding: "48px 36px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(201,169,110,0.12)",
                    border: "1px solid rgba(201,169,110,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                  }}
                >
                  ✓
                </div>
                <h2
                  className="t-subtitle"
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    color: "#2f261f",
                    letterSpacing: "-0.01em",
                  }}
                >
                  ההרכבה נשלחה בהצלחה
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    color: "#6b5a49",
                    lineHeight: 1.6,
                    maxWidth: "340px",
                  }}
                >
                  תודה {formName.split(" ")[0]}. אחזור אלייך בהקדם עם המשך תהליך והצעת מחיר.
                </p>
                <button
                  onClick={handleCloseSubmitForm}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    marginTop: "8px",
                    padding: "10px 28px",
                    backgroundColor: "#c9a96e",
                    color: "#100b09",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  חזרה ללוח
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleFormSubmit} noValidate>
                {/* Header */}
                <div
                  style={{
                    padding: "24px 28px 0",
                    borderBottom: "1px solid #ede5d8",
                    paddingBottom: "18px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                    <div>
                      <h2
                        className="t-subtitle"
                        style={{
                          margin: 0,
                          fontWeight: 700,
                          color: "#2f261f",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        שליחת הרכבה אישית
                      </h2>
                      <p
                        className="t-body"
                        style={{
                          margin: "6px 0 0",
                          color: "#6b5a49",
                          maxWidth: "340px",
                        }}
                      >
                        שלחי את הלוח שבנית ואחזור אלייך עם המשך תהליך, התאמות והצעת מחיר.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleCloseSubmitForm}
                      aria-label="סגירה"
                      style={{
                        all: "unset",
                        cursor: "pointer",
                        flexShrink: 0,
                        width: "28px",
                        height: "28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        color: "#9a7a58",
                        fontSize: "18px",
                        lineHeight: 1,
                        backgroundColor: "rgba(0,0,0,0.04)",
                        transition: "background-color 0.15s ease",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(0,0,0,0.09)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(0,0,0,0.04)"; }}
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Board summary */}
                <div
                  style={{
                    margin: "18px 28px 0",
                    padding: "14px",
                    backgroundColor: "#f5f0e8",
                    borderRadius: "10px",
                    border: "1px solid #e8ddd0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#7a5c35",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        הרכבה נוכחית
                      </span>
                      <span
                        style={{
                          marginRight: "8px",
                          fontSize: "14px",
                          color: "#9a7a58",
                        }}
                      >
                        {placedCount} / 9 סמלים
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCloseSubmitForm}
                      style={{
                        all: "unset",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "#9a7a58",
                        borderBottom: "1px solid rgba(154,122,88,0.35)",
                        lineHeight: 1.3,
                        transition: "color 0.15s ease",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#7a5c35"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#9a7a58"; }}
                    >
                      עריכת הלוח
                    </button>
                  </div>

                  {/* Mini board preview */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gridTemplateRows: "repeat(3, 1fr)",
                      gap: "3px",
                      aspectRatio: "1 / 1",
                      width: "90px",
                      backgroundColor: BOARD_COLOR,
                      padding: "3px",
                      borderRadius: "3px",
                      boxSizing: "border-box",
                      boxShadow: "0 4px 16px rgba(8,4,2,0.32)",
                    }}
                  >
                    {grid.map((cellModelId, i) => {
                      const m = cellModelId ? allModelsById[cellModelId] : null;
                      return (
                        <div
                          key={i}
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            backgroundColor: "#1e1408",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {m ? (
                            <Image
                              src={m.image}
                              alt={m.label}
                              fill
                              style={{ objectFit: "cover" }}
                              sizes="28px"
                            />
                          ) : (
                            <div
                              style={{
                                width: "5px",
                                height: "5px",
                                borderRadius: "50%",
                                backgroundColor: "rgba(201,169,110,0.18)",
                              }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Contact fields */}
                <div style={{ padding: "20px 28px 0" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                    {/* שם מלא */}
                    <div>
                      <label className="sf-label" htmlFor="sf-name">
                        שם מלא
                        <span style={{ color: "#c9a96e", marginRight: "3px" }}>*</span>
                      </label>
                      <input
                        id="sf-name"
                        type="text"
                        value={formName}
                        onChange={(e) => { setFormName(e.target.value); setFormErrors((prev) => ({ ...prev, name: "" })); }}
                        placeholder="השם שלך"
                        className={`sf-input${formErrors.name ? " sf-input--error" : ""}`}
                      />
                      {formErrors.name && <span className="sf-error">{formErrors.name}</span>}
                    </div>

                    {/* אימייל */}
                    <div>
                      <label className="sf-label" htmlFor="sf-email">
                        אימייל
                        <span style={{ color: "#c9a96e", marginRight: "3px" }}>*</span>
                      </label>
                      <input
                        id="sf-email"
                        type="email"
                        value={formEmail}
                        onChange={(e) => { setFormEmail(e.target.value); setFormErrors((prev) => ({ ...prev, email: "" })); }}
                        placeholder="example@mail.com"
                        className={`sf-input${formErrors.email ? " sf-input--error" : ""}`}
                        dir="ltr"
                        style={{ textAlign: "right" }}
                      />
                      {formErrors.email && <span className="sf-error">{formErrors.email}</span>}
                    </div>

                    {/* טלפון */}
                    <div>
                      <label className="sf-label" htmlFor="sf-phone">
                        טלפון
                        <span style={{ fontSize: "11px", color: "#b09070", marginRight: "5px", fontWeight: 400 }}>(אופציונלי)</span>
                      </label>
                      <input
                        id="sf-phone"
                        type="tel"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="050-0000000"
                        className="sf-input"
                        dir="ltr"
                        style={{ textAlign: "right" }}
                      />
                    </div>

                    {/* הערות */}
                    <div>
                      <label className="sf-label" htmlFor="sf-notes">
                        הערות / בקשות מיוחדות
                      </label>
                      <textarea
                        id="sf-notes"
                        value={formNotes}
                        onChange={(e) => setFormNotes(e.target.value)}
                        placeholder="גודל, חומרים, תזמון — כל פרט שחשוב לך"
                        rows={3}
                        className="sf-input sf-textarea"
                      />
                    </div>
                  </div>
                </div>

                {/* Next step */}
                <div style={{ padding: "20px 28px 0" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#4a3828",
                      marginBottom: "10px",
                    }}
                  >
                    מה תרצי בשלב הבא?
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                    {NEXT_STEP_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                          padding: "9px 12px",
                          borderRadius: "8px",
                          border: `1px solid ${formNextStep === opt.value ? "rgba(201,169,110,0.55)" : "#e8ddd0"}`,
                          backgroundColor: formNextStep === opt.value ? "rgba(201,169,110,0.07)" : "transparent",
                          transition: "all 0.15s ease",
                          fontSize: "14px",
                          color: formNextStep === opt.value ? "#5a3e20" : "#6b5a49",
                          fontWeight: formNextStep === opt.value ? 600 : 400,
                        }}
                      >
                        <input
                          type="radio"
                          name="nextStep"
                          value={opt.value}
                          checked={formNextStep === opt.value}
                          onChange={() => setFormNextStep(opt.value)}
                          style={{ accentColor: "#c9a96e", flexShrink: 0 }}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Consent */}
                <div style={{ padding: "18px 28px 0" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formConsent}
                      onChange={(e) => {
                        setFormConsent(e.target.checked);
                        setFormErrors((prev) => ({ ...prev, consent: "" }));
                      }}
                      style={{ accentColor: "#c9a96e", flexShrink: 0, marginTop: "2px" }}
                    />
                    <span style={{ fontSize: "12.5px", color: "#6b5a49", lineHeight: 1.55 }}>
                      אני מאשרת את שיתוף ההרכבה ופרטי הקשר שלי לצורך חזרה אליי
                      <span style={{ color: "#c9a96e", marginRight: "3px" }}>*</span>
                    </span>
                  </label>
                  {formErrors.consent && (
                    <span className="sf-error" style={{ marginTop: "5px", display: "block" }}>
                      {formErrors.consent}
                    </span>
                  )}
                </div>

                {/* Server error */}
                {formServerError && (
                  <div
                    style={{
                      margin: "12px 28px 0",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(190,80,60,0.07)",
                      border: "1px solid rgba(190,80,60,0.28)",
                      fontSize: "14px",
                      color: "#b84040",
                      lineHeight: 1.5,
                    }}
                  >
                    {formServerError}
                  </div>
                )}

                {/* Action buttons */}
                <div
                  style={{
                    padding: "20px 28px 24px",
                    display: "flex",
                    gap: "10px",
                    flexDirection: "row-reverse",
                  }}
                >
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="sf-btn-primary"
                    style={{ opacity: formLoading ? 0.7 : 1, cursor: formLoading ? "default" : "pointer" }}
                  >
                    {formLoading ? "שולחת…" : "שליחת ההרכבה"}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseSubmitForm}
                    disabled={formLoading}
                    className="sf-btn-secondary"
                  >
                    חזרה ללוח
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        /* ── Desktop: 3-col centered layout, normal document flow ── */
        @media (min-width: 860px) {
          .cc-spacer {
            /* mirrors library column — keeps board visually centered */
          }
          .cc-library-scroll {
            max-height: 520px;
            overflow-y: auto;
          }
          .cc-board-area {
            justify-content: center !important;
          }
          .cc-board {
            width: min(100%, 500px) !important;
          }
        }

        /* ── Narrow / tablet: vertical stack, scrollable ── */
        @media (max-width: 859px) {
          .cc-main {
            height: auto;
            overflow: visible;
          }
          .cc-layout {
            display: flex !important;
            flex-direction: column !important;
            padding: 16px !important;
            gap: 20px !important;
          }
          .cc-spacer {
            display: none;
          }
          .cc-board-col {
            order: 1;
          }
          .cc-library {
            order: 2;
            max-height: none;
          }
          .cc-library-scroll {
            max-height: 420px;
            overflow-y: auto;
          }
          .cc-board {
            width: min(100%, 480px) !important;
          }
        }

        /* ── Submission form shared styles ── */
        .sf-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #4a3828;
          margin-bottom: 5px;
          letter-spacing: 0.01em;
        }
        .sf-input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          padding: 9px 12px;
          font-size: 16px;
          color: #2f261f;
          background: #ffffff;
          border: 1px solid #dfd3c2;
          border-radius: 8px;
          outline: none;
          font-family: inherit;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          text-align: right;
        }
        .sf-input:focus {
          border-color: rgba(201,169,110,0.7);
          box-shadow: 0 0 0 3px rgba(201,169,110,0.12);
        }
        .sf-input--error {
          border-color: rgba(190,80,60,0.55) !important;
        }
        .sf-input--error:focus {
          box-shadow: 0 0 0 3px rgba(190,80,60,0.10) !important;
        }
        .sf-textarea {
          resize: vertical;
          min-height: 72px;
        }
        .sf-error {
          display: block;
          margin-top: 4px;
          font-size: 11.5px;
          color: #b84040;
          font-weight: 500;
        }
        .sf-btn-primary {
          all: unset;
          cursor: pointer;
          padding: 10px 24px;
          background-color: #c9a96e;
          color: #100b09;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.02em;
          transition: background-color 0.15s ease;
          font-family: inherit;
        }
        .sf-btn-primary:hover {
          background-color: #b8945a;
        }
        .sf-btn-secondary {
          all: unset;
          cursor: pointer;
          padding: 10px 20px;
          background-color: transparent;
          color: #7a6250;
          border: 1px solid #dfd3c2;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 500;
          transition: background-color 0.15s ease, border-color 0.15s ease;
          font-family: inherit;
        }
        .sf-btn-secondary:hover {
          background-color: rgba(0,0,0,0.03);
          border-color: #c9b89a;
        }
      `}</style>
    </main>
  );
}
