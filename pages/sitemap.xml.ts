import { GetServerSideProps } from "next";

const hostname = "https://majstordex.rs";
const today = new Date().toISOString().split("T")[0];

// ✔ Postojeća beogradska naselja
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

// ✔ PRAVE usluge (postoje na sajtu)
const usluge = [
  "servis-bojlera",
  "pranje-klime",
  "popravka-ta-peci",
  "popravka-elektroinstalacija",
  "zamena-osiguraca-i-uticnica",
  "hitne-intervencije",
];

// ✔ LED kategorije koje stvarno postoje
const ledKategorije = [
  "led-rasveta/lusteri",
  "led-rasveta/plafonjere",
  "led-rasveta/zidne-lampe",
  "led-rasveta/aluminijumski-profili-za-led",
  "led-rasveta/spoljna-rasveta",
];

// 🔧 BLOG: ostaje, ali samo stvarni fajlovi
import fs from "fs";
import path from "path";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const blogDir = path.join(process.cwd(), "posts");
  let blogSlugs: string[] = [];

  try {
    blogSlugs = fs
      .readdirSync(blogDir)
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx?$/, "").trim().toLowerCase());
  } catch {
    blogSlugs = [];
  }

  // GENERIŠEMO URL-ove
  const urls = [
    // Osnovne stranice
    { loc: hostname, priority: "1.0" },
    { loc: `${hostname}/usluge`, priority: "0.9" },
    { loc: `${hostname}/proizvodi`, priority: "0.85" },
    { loc: `${hostname}/blog`, priority: "0.7" },
    { loc: `${hostname}/kontakt`, priority: "0.6" },

    // Usluge (glavne stranice)
    ...usluge.map((slug) => ({
      loc: `${hostname}/usluge/${slug}`,
      priority: "0.85",
    })),

    // Usluge po naseljima
    ...usluge.flatMap((u) =>
      naselja.map((n) => ({
        loc: `${hostname}/usluge/${u}/${n}`,
        priority: "0.75",
      }))
    ),

    // LED kategorije
    ...ledKategorije.map((slug) => ({
      loc: `${hostname}/usluge/${slug}`,
      priority: "0.8",
    })),

    // LED kategorije po naseljima
    ...ledKategorije.flatMap((slug) =>
      naselja.map((n) => ({
        loc: `${hostname}/usluge/${slug}/${n}`,
        priority: "0.7",
      }))
    ),

    // Blog postovi
    ...blogSlugs.map((slug) => ({
      loc: `${hostname}/blog/${slug}`,
      priority: "0.6",
    })),
  ];

  // 📄 XML OUTPUT
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
