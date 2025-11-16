import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabaseClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id, naziv, opis, cena, kategorija, slika, slike } = req.body;
  if (!id || !naziv) {
    return res.status(400).json({ error: "ID i naziv su obavezni" });
  }

  // 📸 Ako postoji jedno polje "slika", pretvori ga u niz
  const slikeFinal = slike || (slika ? [slika] : []);

  const { error } = await supabase
    .from("proizvodi")
    .update({ naziv, opis, cena, kategorija, slike: slikeFinal })
    .eq("id", id);

  if (error) {
    console.error("Greška pri ažuriranju proizvoda:", error);
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Proizvod uspešno ažuriran" });
}
