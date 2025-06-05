/** @type {import('next-sitemap').IConfig} */

const usluge = [
  "servis-bojlera",
  "pranje-klime",
  "popravka-ta-peci",
  "popravka-elektroinstalacija",
  "zamena-osiguraca-i-uticnica",
  "hitne-intervencije",
];

const naselja = [
  "stari-grad",
  "savski-venac",
  "vracar",
  "novi-beograd",
  "zemun",
  "cukarica",
  "vozdovac",
  "palilula",
  "rakovica",
  "zvezdara",
];

module.exports = {
  siteUrl: "https://majstordex.rs",// OBAVEZNO zameni sa stvarnim domenom ako bude drugačiji
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path, // URL path
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const paths = [];

    for (const usluga of usluge) {
      // osnovni URL usluge
      paths.push({ loc: `/usluge/${usluga}`, priority: 0.8 });

      // dodaj URL-ove po naseljima
      for (const naselje of naselja) {
        paths.push({ loc: `/usluge/${usluga}/${naselje}`, priority: 0.7 });
      }
    }

    return paths;
  },
};
