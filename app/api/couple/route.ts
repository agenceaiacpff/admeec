import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.message) return NextResponse.json({ error: "Nom et message requis." }, { status: 400 });
  const supabase = createSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ error: "Supabase n’est pas configuré." }, { status: 500 });
  const { error } = await supabase.from("demandes_accompagnement").insert({
    type: "couple",
    name: String(body.name),
    email: body.email ? String(body.email) : null,
    phone: body.phone ? String(body.phone) : null,
    country: body.country ? String(body.country) : null,
    subject: body.subject ? String(body.subject) : "Accompagnement couple",
    message: String(body.message),
    status: "new"
  });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
