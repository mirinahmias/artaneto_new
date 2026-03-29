"use client";

import Image from "next/image";
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
          fontSize: "12px",
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
            gap: "5px",
            paddingBottom: "10px",
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

export default function CustomCompositionPage() {
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [grid, setGrid] = useState<(string | null)[]>(Array(9).fill(null));
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    Object.fromEntries(singleModelsData.map((c, i) => [c.slug, i < 2]))
  );

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

  return (
    <main
      dir="rtl"
      style={{
        height: "calc(100vh - 86px)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f1ea",
        color: "#2f261f",
      }}
    >
      {/* ── Main layout — full height, no separate title bar above ── */}
      <div
        className="cc-layout"
        style={{
          flex: 1,
          minHeight: 0,
          maxWidth: `${LAYOUT_MAX_WIDTH}px`,
          width: "100%",
          margin: "0 auto",
          padding: "10px 24px 10px",
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: "6px",
          boxSizing: "border-box",
          overflow: "hidden",
          alignItems: "stretch",
        }}
      >
        {/* ── Sidebar ── */}
        <aside
          style={{
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fcfbf8",
            border: "1px solid #dfd3c2",
            borderRadius: "10px",
            padding: "12px 12px",
            boxShadow: "0 2px 14px rgba(60,40,20,0.05)",
            boxSizing: "border-box",
          }}
        >
          {/* Sidebar header */}
          <div
            style={{
              flexShrink: 0,
              fontSize: "12px",
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
              fontSize: "12px",
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
          <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
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
            {placedCount > 0 ? (
              <>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#9a7a58",
                    textAlign: "center",
                    marginBottom: "7px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {placedCount === 9
                    ? "לוח מלא — מוכנה לשליחה"
                    : `${placedCount} / 9 סמלים מוצבים`}
                </div>
                <button
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
                    backgroundColor:
                      placedCount === 9 ? "#c9a96e" : "rgba(201,169,110,0.12)",
                    color: placedCount === 9 ? "#100b09" : "#9a7a58",
                    border: `1px solid ${
                      placedCount === 9 ? "transparent" : "rgba(201,169,110,0.28)"
                    }`,
                    borderRadius: "7px",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    transition: "background-color 0.18s ease, color 0.18s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.backgroundColor =
                      placedCount === 9 ? "#b8945a" : "rgba(201,169,110,0.22)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.backgroundColor =
                      placedCount === 9 ? "#c9a96e" : "rgba(201,169,110,0.12)";
                  }}
                >
                  שליחת ההרכבה
                  <span aria-hidden style={{ fontSize: "13px" }}>←</span>
                </button>
              </>
            ) : (
              <div
                style={{
                  fontSize: "11px",
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
          style={{
            height: "100%",
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Title — sits directly above the board controls, belongs to this workspace */}
          <div
            style={{
              flexShrink: 0,
              textAlign: "center",
              paddingBottom: "5px",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(14px, 1.6vw, 20px)",
                lineHeight: 1.2,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                display: "inline",
              }}
            >
              בניית לוח אישי
            </h1>
            <span style={{ margin: "0 7px", color: "#c8b49a", fontSize: "12px" }}>·</span>
            <span style={{ fontSize: "11px", color: "#6b5a49", lineHeight: 1.4 }}>
              בחרי עד 9 סמלים מהספרייה ושבצי אותם על הלוח
            </span>
          </div>

          {/* Toolbar — centered group immediately below title */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              marginBottom: "6px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#7a5c35",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
              }}
            >
              לוח ההרכבה
            </span>

            <span
              style={{
                width: "1px",
                height: "11px",
                backgroundColor: "rgba(0,0,0,0.14)",
                flexShrink: 0,
              }}
            />

            <span style={{ fontSize: "11px", color: "#a08060", fontWeight: 500 }}>
              {placedCount} / 9 סמלים
            </span>

            <span
              style={{
                width: "1px",
                height: "11px",
                backgroundColor: "rgba(0,0,0,0.14)",
                flexShrink: 0,
              }}
            />

            <button
              onClick={handleClearBoard}
              disabled={placedCount === 0 && !selectedModelId}
              style={{
                all: "unset",
                cursor: placedCount > 0 || selectedModelId ? "pointer" : "default",
                fontSize: "11px",
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

          {/* Board area */}
          <div
            style={{
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "min(100%, calc(100vh - 86px - 26px - 28px - 20px - 20px))",
                aspectRatio: "1 / 1",
                backgroundColor: BOARD_COLOR,
                padding: TILE_GAP,
                boxSizing: "border-box",
                borderRadius: "0",
                boxShadow:
                  "0 16px 60px rgba(8,4,2,0.50), 0 4px 16px rgba(0,0,0,0.26)",
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
            <p
              style={{
                flexShrink: 0,
                margin: "7px 0 0",
                fontSize: "11px",
                color: "rgba(107,90,73,0.65)",
                textAlign: "center",
                lineHeight: 1.6,
                letterSpacing: "0.02em",
              }}
            >
              {isPlacingMode
                ? `מציבה: ${selectedModel?.label} — לחצי על תא פנוי בלוח`
                : placedCount > 0
                ? "לחצי ימין על סמל כדי להסיר · בחרי סמל להוספה"
                : "בחרי סמל מהספרייה כדי להתחיל לבנות את הלוח שלך"}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .cc-layout {
            grid-template-columns: 1fr !important;
            height: auto !important;
            overflow: auto !important;
          }
          .cc-layout > aside {
            height: 300px !important;
          }
        }
      `}</style>
    </main>
  );
}
