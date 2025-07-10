// pages/sitemap.xml.ts
import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next";

const hostname = "https://majstordex.rs";
const today = new Date().toISOString().split("T")[0];

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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const blogDir = path.join(process.cwd(), "components/blog");
  const blogSlugs: string[] = fs
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

  const urls = [
    { loc: hostname, priority: "1.0" },
    { loc: `${hostname}/usluge`, priority: "0.8" },
    ...usluge.map((slug) => ({
      loc: `${hostname}/usluge/${slug}`,
      priority: "0.8",
    })),
    ...usluge.flatMap((u) =>
      naselja.map((n) => ({
        loc: `${hostname}/usluge/${u}/${n}`,
        priority: "0.7",
      }))
    ),
    ...blogSlugs.map((slug) => ({
      loc: `${hostname}/blog/${slug}`,
      priority: "0.6",
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
