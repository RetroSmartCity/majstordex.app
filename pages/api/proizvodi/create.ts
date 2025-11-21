import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { naziv, opis, cena, kategorija, slug, slike } = req.body;

    if (!naziv || !slug || !kategorija) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { error } = await supabaseAdmin.from("proizvodi").insert({
      naziv,
      opis,
      cena,
      kategorija,
      slug,
      slike, // array stringova
    });

    if (error) throw error;

    return res.status(200).json({ message: "OK" });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
