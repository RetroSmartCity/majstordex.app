/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://majstordex.rs";

const usluge = [
  "popravka-ta-peci",
  "servis-bojlera",
  "popravka-elektroinstalacija",
  "zamena-osiguraca-i-uticnica",
  "pranje-klime",
  "hitne-intervencije",
  "led-rasveta"
];

const naselja = [
  "stari-grad",
  "savski-venac",
  "vracar",
  "novi-beograd",
  "zemun",
  "cukarica",
  "vozdivac",
  "palilula",
  "rakovica",
  "zvezdara",
  "mirijevo",
  "banovo-brdo",
  "karaburma"
];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  // Canonical base
  canonicalBase: siteUrl,

  // Automatski transform svih stranica
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },

  exclude: [
    "/admin/*",
    "/api/*",
    "/404",
    "/500"
  ],

  additionalPaths: async (config) => {
    let urls = [];

    // 1️⃣ /usluge/[slug]
    usluge.forEach((slug) => {
      urls.push({
        loc: `/usluge/${slug}`,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    });

    // 2️⃣ /usluge/[slug]/[naselje]
    usluge.forEach((slug) => {
      naselja.forEach((n) => {
        urls.push({
          loc: `/usluge/${slug}/${n}`,
          changefreq: "weekly",
          priority: 0.7,
          lastmod: new Date().toISOString(),
        });
      });
    });

    // 3️⃣ /[naselje] — početna stranica naselja
    naselja.forEach((n) => {
      urls.push({
        loc: `/${n}`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      });
    });

    return urls;
  },
};
