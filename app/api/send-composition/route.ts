import { NextResponse } from "next/server";

const NEXT_STEP_LABELS: Record<string, string> = {
  quote: "קבלת הצעת מחיר",
  customize: "התאמה אישית של ההרכבה",
  question: "שאלה כללית לפני המשך",
  other: "אחר",
};

type BoardCell =
  | { index: number; empty: true }
  | {
      index: number;
      empty: false;
      id: string;
      label: string;
      categoryTitle: string;
      image: string;
    };

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
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("BOARD DATA:", JSON.stringify(board, null, 2));
    console.log("nextStep:", nextStep);
    console.log(
      "NEXT_STEP_LABELS ref:",
      NEXT_STEP_LABELS[nextStep ?? ""] ?? nextStep
    );
    console.log("phone:", phone);
    console.log("notes:", notes);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("send-composition error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}