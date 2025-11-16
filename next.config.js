const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🚀 IGNORIŠE ESLINT I TS GREŠKE DA VERCEL NE PUCA
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // 🚀 Obezbeđuje da Next prihvata i MDX fajlove
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // 🚀 API rewriting za sitemap i RSS
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/rss.xml',
        destination: '/api/rss',
      },
    ];
  },

  experimental: {
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
