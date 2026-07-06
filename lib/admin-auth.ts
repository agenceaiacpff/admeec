import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "admeec_admin";

function secret() {
  return process.env.ADMIN_SECRET || "admeec-dev-secret-change-me";
}

export function signAdminToken(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function makeAdminCookie() {
  const value = `${Date.now()}`;
  return `${value}.${signAdminToken(value)}`;
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  const raw = store.get(COOKIE_NAME)?.value;
  if (!raw) return false;
  const [value, signature] = raw.split(".");
  if (!value || !signature) return false;
  const expected = signAdminToken(value);
  try {
    const a = Buffer.from(signature, "hex");
    const b = Buffer.from(expected, "hex");
    if (a.length !== b.length) return false;
    const ok = timingSafeEqual(a, b);
    const age = Date.now() - Number(value);
    return ok && Number.isFinite(age) && age < 1000 * 60 * 60 * 12;
  } catch {
    return false;
  }
}

export const adminCookieName = COOKIE_NAME;
