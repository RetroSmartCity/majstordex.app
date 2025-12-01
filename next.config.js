/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ⚡ Brži build + manji JS bundle
  swcMinify: true,

  // ⚡ Uklanja legacy polyfills koje Lighthouse detektuje
  experimental: {
    legacyBrowsers: false,
    optimizeCss: true,
    scrollRestoration: true,
    serverActions: true,
  },

  // ⚡ Optimizacija slika
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // ⚡ Poboljšanje cache-a na statički generisanim stranicama
  compress: true,

  // ⚡ Strict security headers (podiže Best Practices SEO score)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // ⚡ Ako koristiš next-sitemap — obavezno ovo
  output: "standalone",
};

module.exports = nextConfig;
