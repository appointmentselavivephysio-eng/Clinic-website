/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Placeholders are now local SVGs in /public/placeholders (see data.ts).
    // TODO: when real photos land on a CDN, add its hostname here.
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      // Believable dummy founder headshot until a real portrait lands.
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
  // three.js ships ESM that transpiles cleanly; transpilePackages keeps R3F deps happy.
  transpilePackages: ["three"],
  // 301 legacy .php URLs from the old site to their Next.js equivalents.
  async redirects() {
    return [
      {
        source: "/services.php",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.php",
        destination: "/about",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com; style-src 'self' 'unsafe-inline' https://assets.calendly.com; img-src 'self' data: https: blob: https://assets.calendly.com; font-src 'self'; frame-src https://www.google.com https://calendly.com; connect-src 'self'; object-src 'none'; base-uri 'self'",
          },
        ],
      },
      // Keep Vercel preview deployments (*.vercel.app) out of search indexes so
      // only the production domain is crawled. Placed after the security rule so
      // it never overrides those headers.
      {
        source: "/(.*)",
        has: [{ type: "host", value: "(?:.*\\.)?vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
