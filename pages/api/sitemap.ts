import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const hostname = "https://majstordex.rs";
const today = new Date().toISOString().split("T")[0];

const blogDirectory = path.join(process.cwd(), "components/blog");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const blogSlugs = fs
    .readdirSync(blogDirectory)
    .filter(file => file.endsWith(".md") || file.endsWith(".mdx"))
    .map(file =>
      file
        .replace(/\.mdx?$/, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9\-]/g, "")
        .toLowerCase()
    );

  const staticUrls = [
    {
      loc: `${hostname}`,
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
    {
      loc: `${hostname}/usluge/servis-bojlera`,
      lastmod: "2025-07-02",
      priority: "0.8",
    },
    {
      loc: `${hostname}/usluge/pranje-klime`,
      lastmod: "2025-07-02",
      priority: "0.8",
    },
    {
      loc: `${hostname}/usluge/popravka-ta-peci`,
      lastmod: "2025-07-02",
      priority: "0.8",
    },
    {
      loc: `${
