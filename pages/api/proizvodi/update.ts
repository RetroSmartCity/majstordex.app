import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id, data } = req.body;

  if (!id) return res.status(400).json({ error: "Missing ID" });

  const { error } = await supabaseAdmin.from("proizvodi").update(data).eq("id", id);

  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({ message: "OK" });
}
