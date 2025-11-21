import { GetServerSideProps } from "next";

const hostname = "https://majstordex.rs";
const today = new Date().toISOString().split("T")[0];

// Beogradska naselja
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

// Glavne usluge sajta (postojeće rute)
const usluge = [
  "adaptacija-stana",
  "led-rasveta",
  "servis-bojlera",
  "pranje-klime",
  "popravka-ta-peci",
  "popravka-elektroinstalacija",
  "zamena-osiguraca-i-uticnica",
  "hitne-intervencije",
];

// Proizvod kategorije (postoje stvarne stranice)
const kategorijeProizvoda = [
  "lusteri",
  "plafonjere",
  "zidne-lampe",
  "aluminijumski-profili-za-led",
  "spoljna-rasveta",
];

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const urls = [
    // Glavne stranice
    { loc: hostname, priority: "1.0" },
    { loc: `${hostname}/usluge`, priority: "0.9" },
    { loc: `${hostname}/kontakt`, priority: "0.8" },
    { loc: `${hostname}/blog`, priority: "0.7" }, // samo index bloga

    // Sve usluge po naseljima
    ...usluge.flatMap((slug) =>
      naselja.map((n) => ({
        loc: `${hostname}/usluge/${slug}/${n}`,
        priority: "0.85",
      }))
    ),

    // Proizvod kategorije (zbirne stranice)
    ...kategorijeProizvoda.map((k) => ({
      loc: `${hostname}/proizvodi/${k}`,
      priority: "0.8",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ loc, priority }) => `
      <url>
        <loc>${loc}</loc>
        <lastmod>${today}</lastmod>
        <priority>${priority}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default function SitemapXml() {
  return null;
}
