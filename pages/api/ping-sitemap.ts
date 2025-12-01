import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemapUrl = encodeURIComponent("https://majstordex.rs/sitemap.xml");

  try {
    const googlePing = `https://www.google.com/ping?sitemap=${sitemapUrl}`;
    await fetch(googlePing);

    return res.status(200).json({ message: "Google uspešno pingovan." });
  } catch (error) {
    return res.status(500).json({ error: "Greška pri pingovanju Google-a." });
  }
}
