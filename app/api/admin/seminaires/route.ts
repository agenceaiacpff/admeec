import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { createSupabaseAdminClient } from "@/lib/supabase";

export async function POST(req: Request) {
  if (!(await isAdminAuthenticated())) return NextResponse.redirect(new URL("/admin/login", req.url));
  const form = await req.formData();
  const title = String(form.get("title") || "");
  if (!title) return NextResponse.redirect(new URL("/admin/seminaires/new?error=1", req.url));
  const supabase = createSupabaseAdminClient();
  if (!supabase) return NextResponse.redirect(new URL("/admin/seminaires/new?error=supabase", req.url));
  const { error } = await supabase.from("seminaires").insert({
    title,
    description: String(form.get("description") || ""),
    start_at: String(form.get("start_at") || "") || null,
    end_at: String(form.get("end_at") || "") || null,
    location: String(form.get("location") || ""),
    online_url: String(form.get("online_url") || ""),
    status: String(form.get("status") || "open")
  });
  if (error) return NextResponse.redirect(new URL("/admin/seminaires/new?error=db", req.url));
  return NextResponse.redirect(new URL("/seminaires", req.url));
}
