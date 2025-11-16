import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabaseClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.body;
  if (!id) return res.status(400).json({ error: "ID proizvoda je obavezan" });

  const { error } = await supabase.from("proizvodi").delete().eq("id", id);

  if (error) {
    console.error("Greška pri brisanju proizvoda:", error);
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Proizvod uspešno obrisan" });
}
