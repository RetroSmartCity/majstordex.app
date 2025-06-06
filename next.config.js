const nextConfig = {
  swcMinify: true,
  transpilePackages: [],
  experimental: {
    legacyBrowsers: false, // <== OVDE JE KLJUČ
  },
};

module.exports = nextConfig;
