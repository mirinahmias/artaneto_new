import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const NEXT_STEP_LABELS: Record<string, string> = {
  quote:     "קבלת הצעת מחיר",
  customize: "התאמה אישית של ההרכבה",
  question:  "שאלה כללית לפני המשך",
  other:     "אחר",
};

type BoardCell =
  | { index: number; empty: true }
  | { index: number; empty: false; id: string; label: string; categoryTitle: string; image: string };

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, notes, nextStep, board } = body as {
      name: string;
      email: string;
      phone?: string;
      notes?: string;
      nextStep?: string;
      board: BoardCell[];
    };

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ── Debug: verify board payload received from client ──
    console.log("BOARD DATA:", JSON.stringify(board, null, 2));
    console.log("BASE_URL in use:", BASE_URL);

    const BOARD_BG   = "#c8a868";
    const CELL_EMPTY = "#1e1408";
    const CELL_SIZE  = "80px";
    const GAP        = "3px";

    // Build each cell — filled or empty
    function renderCell(cell: BoardCell): string {
      console.log("CELL:", JSON.stringify(cell));
      if (cell.empty) {
        return `<td style="width:${CELL_SIZE};height:${CELL_SIZE};padding:0;background:${CELL_EMPTY};text-align:center;vertical-align:middle;">
          <div style="width:10px;height:10px;border-radius:50%;background:rgba(201,169,110,0.2);margin:0 auto;"></div>
        </td>`;
      }
      const src = `${BASE_URL}${cell.image}`;
      return `<td style="width:${CELL_SIZE};height:${CELL_SIZE};padding:0;background:${CELL_EMPTY};overflow:hidden;">
        <img src="${src}" alt="${cell.label}" width="${CELL_SIZE}" height="${CELL_SIZE}"
          style="display:block;width:${CELL_SIZE};height:${CELL_SIZE};object-fit:cover;" />
      </td>`;
    }

    // Split 9 cells into 3 rows of 3
    const rows = [
      (board ?? []).slice(0, 3),
      (board ?? []).slice(3, 6),
      (board ?? []).slice(6, 9),
    ];

    const boardGridHtml = `
      <table cellpadding="0" cellspacing="${GAP}" border="0"
        style="border-collapse:separate;border-spacing:${GAP};background:${BOARD_BG};padding:${GAP};border-radius:4px;">
        <tbody>
          ${rows.map((row) => `<tr>${row.map(renderCell).join("")}</tr>`).join("\n          ")}
        </tbody>
      </table>
    `;

    // Text list of placed symbols
    const placedCells = (board ?? []).filter((c): c is Extract<BoardCell, { empty: false }> => !c.empty);
    const symbolListHtml = placedCells.length > 0
      ? `<table cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;width:100%;max-width:280px;">
          <tbody>
            ${placedCells.map((c) => `
            <tr>
              <td style="padding:3px 0;font-size:12px;color:#7a5c35;white-space:nowrap;padding-left:8px;">תא ${c.index + 1}</td>
              <td style="padding:3px 0;font-size:12px;color:#2f261f;"> — ${c.label}</td>
              <td style="padding:3px 0;font-size:11px;color:#9a7a58;padding-right:0;"> (${c.categoryTitle})</td>
            </tr>`).join("")}
          </tbody>
        </table>`
      : `<p style="font-size:12px;color:#9a7a58;margin:8px 0 0;">לא הוצבו סמלים</p>`;

    const nextStepLabel = nextStep ? (NEXT_STEP_LABELS[nextStep] ?? nextStep) : "לא צוין";
    const placedCount   = placedCells.length;

    const html = `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:24px;background:#f5f1ea;font-family:Arial,sans-serif;direction:rtl;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;margin:0 auto;">
    <tbody>

      <!-- Header -->
      <tr>
        <td style="background:#2f261f;padding:22px 26px;border-radius:12px 12px 0 0;">
          <p style="margin:0;font-size:19px;font-weight:700;color:#c9a96e;letter-spacing:-0.01em;">הרכבה אישית חדשה — ArtNeto</p>
          <p style="margin:4px 0 0;font-size:12px;color:rgba(201,169,110,0.6);">נשלח מטופס ההרכבה באתר</p>
        </td>
      </tr>

      <!-- Customer details -->
      <tr>
        <td style="background:#fcfbf8;padding:20px 26px;border-right:1px solid #e8ddd0;border-left:1px solid #e8ddd0;border-bottom:1px solid #ede5d8;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#9a7a58;letter-spacing:0.1em;text-transform:uppercase;">פרטי הלקוחה</p>
          <p style="margin:8px 0 0;font-size:13px;color:#2f261f;"><strong>שם:</strong> ${name}</p>
          <p style="margin:6px 0 0;font-size:13px;color:#2f261f;"><strong>אימייל:</strong> ${email}</p>
          ${phone ? `<p style="margin:6px 0 0;font-size:13px;color:#2f261f;"><strong>טלפון:</strong> ${phone}</p>` : ""}
          <p style="margin:6px 0 0;font-size:13px;color:#2f261f;"><strong>שלב הבא:</strong> ${nextStepLabel}</p>
          ${notes ? `<p style="margin:10px 0 0;font-size:13px;color:#4a3828;"><strong>הערות:</strong><br/>${notes}</p>` : ""}
        </td>
      </tr>

      <!-- Board section -->
      <tr>
        <td style="background:#fcfbf8;padding:20px 26px 24px;border-right:1px solid #e8ddd0;border-left:1px solid #e8ddd0;border-bottom:1px solid #ede5d8;border-radius:0 0 12px 12px;">
          <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#9a7a58;letter-spacing:0.1em;text-transform:uppercase;">
            הרכבת הלוח
            <span style="margin-right:8px;font-size:11px;color:#b09070;font-weight:400;text-transform:none;">${placedCount} / 9 סמלים</span>
          </p>
          ${boardGridHtml}
          ${symbolListHtml}
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:12px 0 0;text-align:center;">
          <p style="margin:0;font-size:11px;color:#a08060;">ArtNeto · artneto.com</p>
        </td>
      </tr>

    </tbody>
  </table>
</body>
</html>`;

    const data = await resend.emails.send({
      from: process.env.COMPOSITION_FROM_EMAIL!,
      to: process.env.COMPOSITION_TO_EMAIL!,
      subject: `הרכבה חדשה מ-${name} — ArtNeto`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("send-composition error:", error);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
