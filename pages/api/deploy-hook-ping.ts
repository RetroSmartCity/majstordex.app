// pages/api/deploy-hook-ping.ts
// Automatski ping Google-u posle svakog deploy-a

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const sitemapUrl = encodeURIComponent("https://majstordex.rs/sitemap.xml");

  try {
    const googlePing = `https://www.google.com/ping?sitemap=${sitemapUrl}`;

    await fetch(googlePing);

    return res.status(200).json({ message: "Google uspešno pingovan nakon deploy-a." });
  } catch (error) {
    return res.status(500).json({ error: "Greška pri pingovanju Google-a." });
  }
}
