import { NextResponse } from "next/server";
import { adminCookieName } from "@/lib/admin-auth";

export async function POST(req: Request) {
  const res = NextResponse.redirect(new URL("/admin/login", req.url));
  res.cookies.set(adminCookieName, "", { path: "/", maxAge: 0 });
  return res;
}
