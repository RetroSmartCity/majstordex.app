const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Uklonjena experimental.legacyBrowsers jer nije podržano u Next.js 15
  // Ovde možeš dodati druge važne opcije ako zatreba
};

module.exports = withBundleAnalyzer(nextConfig);
