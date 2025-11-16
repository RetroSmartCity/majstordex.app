import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next";

const hostname = "https://majstordex.rs";
const today = new Date().toISOString().split("T")[0];

// ✅ Beogradska naselja
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

// ✅ Glavne usluge sajta
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

// ✅ LED podkategorije (grane ugradnje i prodaje)
const ledPodkategorije = [
  "led-rasveta/lusteri",
  "led-rasveta/plafonjere",
  "led-rasveta/zidne-lampe",
  "led-rasveta/profili",
  "led-rasveta/spoljna-rasveta",
];

// ✅ LED proizvodi (za budući katalog)
const ledProizvodi = [
  "led-rasveta/led-paneli",
  "led-rasveta/reflektori",
  "led-rasveta/led-trake",
  "led-rasveta/led-sijalice",
  "led-rasveta/senzorska-rasveta",
  "led-rasveta/industrijska-rasveta",
];

// 🔧 Glavna funkcija
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Blog postovi (MD/MDX fajlovi)
  const blogDir = path.join(process.cwd(), "components/blog");
  let blogSlugs: string[] = [];

  try {
    blogSlugs = fs
      .readdirSync(blogDir)
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((file) =>
        file
          .replace(/\.mdx?$/, "")
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9\-]/g, "")
          .toLowerCase()
      );
  } catch {
    blogSlugs = [];
  }

  // 🔗 Generisanje svih URL-ova
  const urls = [
    // Glavne stranice
    { loc: hostname, priority: "1.0" },
    { loc: `${hostname}/usluge`, priority: "0.9" },
    { loc: `${hostname}/blog`, priority: "0.7" },
    { loc: `${hostname}/kontakt`, priority: "0.6" },

    // Sve glavne usluge
    ...usluge.map((slug) => ({
      loc: `${hostname}/usluge/${slug}`,
      priority: "0.85",
    })),

    // Sve LED podkategorije
    ...ledPodkategorije.map((slug) => ({
      loc: `${hostname}/usluge/${slug}`,
      priority: "0.8",
    })),

    // LED proizvodi
    ...ledProizvodi.map((slug) => ({
      loc: `${hostname}/usluge/${slug}`,
      priority: "0.75",
    })),

    // Sve usluge po naseljima
    ...usluge.flatMap((u) =>
      naselja.map((n) => ({
        loc: `${hostname}/usluge/${u}/${n}`,
        priority: "0.7",
      }))
    ),

    // LED podkategorije po naseljima
    ...ledPodkategorije.flatMap((u) =>
      naselja.map((n) => ({
        loc: `${hostname}/usluge/${u}/${n}`,
        priority: "0.7",
      }))
    ),

    // LED proizvodi po naseljima
    ...ledProizvodi.flatMap((u) =>
      naselja.map((n) => ({
        loc: `${hostname}/usluge/${u}/${n}`,
        priority: "0.65",
      }))
    ),

    // Blog postovi
    ...blogSlugs.map((slug) => ({
      loc: `${hostname}/blog/${slug}`,
      priority: "0.6",
    })),
  ];

  // 📄 Generisanje XML sadržaja
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
  >
    ${urls
      .map(
        ({ loc, priority }) => `
      <url>
        <loc>${loc}</loc>
        <lastmod>${today}</lastmod>
        <priority>${priority}</priority>
        <changefreq>weekly</changefreq>
      </url>`
      )
      .join("")}
  </urlset>`;

  // ✅ HTTP zaglavlje i odgovor
  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return { props: {} };
};

// Ova stranica ne prikazuje ništa
export default function SitemapXml() {
  return null;
}
