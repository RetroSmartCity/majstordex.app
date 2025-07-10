import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const hostname = "https://majstordex.rs";
const today = new Date().toISOString().split("T")[0];

// Tip za URL u sitemapu
type SitemapUrl = {
  loc: string;
  lastmod?: string;
  priority?: string;
  changefreq?: string;
};

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

const usluge = [
  "servis-bojlera",
  "pranje-klime",
  "popravka-ta-peci",
  "popravka-elektroinstalacija",
  "zamena-osiguraca-i-uticnica",
  "hitne-intervencije",
];

const blogDirectory = path.join(process.cwd(), "components/blog");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const blogSlugs: string[] = fs
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

  const staticUrls: SitemapUrl[] = [
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
    ...usluge.map((usluga) => ({
      loc: `${hostname}/usluge/${usluga}`,
      lastmod: today,
      priority: "0.8",
    })),
  ];

  const uslugeNaseljaUrls: SitemapUrl[] = usluge.flatMap((usluga) =>
    naselja.map((naselje) => ({
      loc: `${hostname}/usluge/${usluga}/${naselje}`,
      lastmod: today,
      priority: "0.7",
    }))
  );

  const blogUrls: SitemapUrl[] = blogSlugs.map((slug) => ({
    loc: `${hostname}/blog/${slug}`,
    lastmod: today,
    priority: "0.6",
    changefreq: "monthly",
  }));

  const allUrls = [...staticUrls, ...uslugeNaseljaUrls, ...blogUrls];

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
