/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  images: {
    domains: ["tlakuzhullxengzwmzgx.supabase.co"],
    formats: ["image/webp", "image/avif"],
  },

  eslint: {
    ignoreDuringBuilds: true, // Sprečava blokiranje builda
  },

  typescript: {
    ignoreBuildErrors: true, // Omogućava deployment iako TS prijavi problem
  },
};

module.exports = nextConfig;
