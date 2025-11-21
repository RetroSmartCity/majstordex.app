import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { id } = req.body;

    if (!id) return res.status(400).json({ error: "Missing ID" });

    const { error } = await supabaseAdmin
      .from("proizvodi")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return res.status(200).json({ message: "OK" });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
