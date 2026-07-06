import { NextResponse } from "next/server";
import { adminCookieName, makeAdminCookie } from "@/lib/admin-auth";

export async function POST(req: Request) {
  const form = await req.formData();
  const passcode = String(form.get("passcode") || "");
  const expected = process.env.ADMIN_PASSCODE || "change-moi-avec-un-mot-de-passe-fort";
  if (!passcode || passcode !== expected) {
    return NextResponse.redirect(new URL("/admin/login?error=1", req.url));
  }
  const res = NextResponse.redirect(new URL("/admin", req.url));
  res.cookies.set(adminCookieName, makeAdminCookie(), { httpOnly: true, sameSite: "lax", secure: true, path: "/", maxAge: 60 * 60 * 12 });
  return res;
}
