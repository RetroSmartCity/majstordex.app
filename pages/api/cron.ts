// pages/api/cron.ts
// Automatski pinguje Google da reindeksira sitemap

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemapUrl = encodeURIComponent("https://majstordex.rs/sitemap.xml");

  try {
    await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);

    return res.status(200).json({ ok: true, message: "Google pingovan." });
  } catch (err) {
    return res.status(500).json({ ok: false, error: "Greška pri pingu." });
  }
}
