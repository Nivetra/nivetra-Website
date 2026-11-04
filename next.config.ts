import type { NextConfig } from "next";

/**
 * Content-Security-Policy for a static marketing site with no backend and no
 * user data. Pragmatic, not nonce-based: with cacheComponents the pages are
 * prerendered, so there is no request to attach a per-response nonce to, and
 * Next/Tailwind both inject inline <script>/<style>. 'unsafe-inline' is the
 * accepted trade-off here — there is no auth or sensitive data to steal.
 *   form-action: the careers form posts resumes to FormSubmit.
 *   img/font/style: self-hosted by next/font + next/image; Google hosts kept
 *   as a harmless fallback. Tighten later if you self-host everything.
 */
const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "form-action 'self' https://formsubmit.co",
  "img-src 'self' data: https:",
  "font-src 'self' https://fonts.gstatic.com data:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Dev-only relaxations: React uses eval() for debugging and HMR runs over a
  // WebSocket. Neither applies in production — prod stays strict.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  `connect-src 'self'${isDev ? " ws: http://localhost:*" : ""}`,
  // Only in prod — on http://localhost this would force a broken https upgrade.
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Sent on every route by the Node/Vercel server. On a pure static host
  // (Cloudflare Pages / Netlify) put the same headers in a public/_headers file.
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
