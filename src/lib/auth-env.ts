// src/lib/auth-env.ts
export function getAuthOrigin() {
  // Priority: NEXTAUTH_URL -> VERCEL_URL -> localhost
  const fromEnv = process.env.NEXTAUTH_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, ""); // drop trailing slash
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    // VERCEL_URL is like "my-app.vercel.app"
    return `https://${vercel}`;
  }
  return "http://localhost:3000";
}

export function isTrustedHost() {
  // In dev or with explicit flag → trust host
  if (process.env.AUTH_TRUST_HOST?.toLowerCase() === "true") return true;
  return process.env.NODE_ENV !== "production";
}
