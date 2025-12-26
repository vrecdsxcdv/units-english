import { headers } from "next/headers";

export default async function AuthDebugPage() {
  const h = headers();
  const host = h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  const origin = `${proto}://${host}`;
  const res = await fetch(`${origin}/api/auth/session`, {
    cache: "no-store",
    headers: { cookie: h.get("cookie") ?? "" },
  });
  let json: any = null;
  try {
    json = await res.json();
  } catch {}
  return (
    <div style={{ padding: 20, fontFamily: "ui-sans-serif" }}>
      <h1>Auth Debug</h1>
      <p>
        <b>Origin:</b> {origin}
      </p>
      <p>
        <b>Status:</b> {res.status}
      </p>
      <pre
        style={{
          background: "#f6f6f6",
          padding: 12,
          borderRadius: 8,
          overflow: "auto",
        }}
      >
        {JSON.stringify(json, null, 2)}
      </pre>
      <p style={{ color: "#666", fontSize: 12 }}>
        If status is 500/404, check NEXTAUTH_URL and route binding.
      </p>
    </div>
  );
}
