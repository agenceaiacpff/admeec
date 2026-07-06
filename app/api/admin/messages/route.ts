import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { createSupabaseAdminClient } from "@/lib/supabase";
import { slugify } from "@/lib/slug";

export async function POST(req: Request) {
  if (!(await isAdminAuthenticated())) return NextResponse.redirect(new URL("/admin/login", req.url));
  const form = await req.formData();
  const title = String(form.get("title") || "");
  const content = String(form.get("content") || "");
  if (!title || !content) return NextResponse.redirect(new URL("/admin/messages/new?error=1", req.url));
  const supabase = createSupabaseAdminClient();
  if (!supabase) return NextResponse.redirect(new URL("/admin/messages/new?error=supabase", req.url));
  const slug = slugify(String(form.get("slug") || title));
  const { error } = await supabase.from("messages").insert({
    title,
    slug,
    summary: String(form.get("summary") || ""),
    content,
    main_verse: String(form.get("main_verse") || ""),
    category: String(form.get("category") || "Enseignement"),
    author: String(form.get("author") || "ADMEEC"),
    status: String(form.get("status") || "published"),
    is_message_of_day: form.get("is_message_of_day") === "on",
    published_at: new Date().toISOString()
  });
  if (error) return NextResponse.redirect(new URL("/admin/messages/new?error=db", req.url));
  return NextResponse.redirect(new URL(`/messages/${slug}`, req.url));
}
