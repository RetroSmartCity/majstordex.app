// next.config.js
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

  // Dodatni rewrites (npr. sitemap)
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

  // Omogući MD/MDX + default Next ekstenzije
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Buduće opcije ako budeš dodavao slike, i18n itd.
  experimental: {
    mdxRs: true, // ako koristiš novi Rust-based MDX parser (nije obavezno)
  },
};

module.exports = withMDX(nextConfig);
