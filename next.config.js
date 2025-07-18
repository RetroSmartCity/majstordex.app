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

  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap', // podrazumeva da postoji pages/api/sitemap.ts
      },
      {
        source: '/rss.xml',
        destination: '/api/rss', // destination *ne sme* imati .xml
      },
    ];
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  experimental: {
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
