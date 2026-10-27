import { NextResponse } from "next/server";
import { validateLq, type LqFields } from "@/lib/lq-form";

const FIELDS: (keyof LqFields)[] = ["fullName", "title", "company", "email", "mobile", "linkedin", "goal"];

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Reject quietly without forwarding.
  if (typeof body.website === "string" && body.website) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fields = Object.fromEntries(
    FIELDS.map((k) => [k, typeof body[k] === "string" ? (body[k] as string).trim() : ""]),
  ) as LqFields;

  const errors = validateLq(fields);
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const webhook = process.env.LQ_FORM_WEBHOOK_URL;
  if (!webhook) {
    console.error("[lq-registration] LQ_FORM_WEBHOOK_URL is not configured; submission not delivered.");
    return NextResponse.json(
      { error: "Registrations are not being accepted online at the moment. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fields, source: "lq-evaluation", submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[lq-registration] delivery failed:", err);
    return NextResponse.json(
      { error: "We couldn't submit your details just now. Please try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
