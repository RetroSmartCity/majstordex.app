import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const hostname = "https://majstordex.rs";
const today = new Date().toISOString().split("T")[0];

// Definiši naselja Beograda za lokalizaciju
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

// Definiši usluge sa slugovima (mora da se poklapa sa tvojim URL šemama)
const usluge = [
  "servis-bojlera",
  "pranje-klime",
  "popravka-ta-peci",
  "popravka-elektroinstalacija",
  "zamena-osiguraca-i-uticnica",
  "hitne-intervencije",
];

// Putanja do blog foldera
const blogDirectory = path.join(process.cwd(), "components/blog");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Učitaj blog fajlove (.md i .mdx)
  const blogSlugs = fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) =>
      file
        .replace(/\.mdx?$/, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9\-]/g, "")
        .toLowerCase()
    );

  // Staticni URL-ovi (početna, usluge bez naselja)
  const staticUrls = [
    {
      loc: hostname,
      lastmod: today,
      priority: "0.7",
      changefreq: "weekly",
    },
    {
      loc: `${hostname}/usluge`,
      lastmod: today,
      priority: "0.7",
      changefreq: "weekly",
    },
    // Glavne usluge bez naselja
    ...usluge.map((usluga) => ({
      loc: `${hostname}/usluge/${usluga}`,
      lastmod: today,
      priority: "0.8",
    })),
  ];

  // Dinamički URL-ovi za usluge + naselja
  const uslugeNaseljaUrls = usluge.flatMap((usluga) =>
    naselja.map((naselje) => ({
      loc: `${hostname}/usluge/${usluga}/${naselje}`,
      lastmod: today,
      priority: "0.7",
    }))
  );

  // Blog URL-ovi iz fajlova
  const blogUrls = blogSlugs.map((slug) => ({
    loc: `${hostname}/blog/${slug}`,
    lastmod: today,
    priority: "0.6",
    changefreq: "monthly",
  }));

  // Spojimo sve URL-ove u jedan niz
  const allUrls = [...staticUrls, ...uslugeNaseljaUrls, ...blogUrls];

  // Generišemo XML sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
>
  ${allUrls
    .map(
      ({ loc, lastmod, priority, changefreq }) => `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
    ${priority ? `<priority>${priority}</priority>` : ""}
  </url>`
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}

