import { supabase } from "./supabaseClient";

export async function deleteImagesFromStorage(slike: { url: string }[]) {
  const paths = slike
    .map((s) => s.url.match(/proizvodi\/(.+)$/)?.[1])
    .filter(Boolean) as string[];

  if (paths.length === 0) return;

  const { error } = await supabase.storage.from("proizvodi").remove(paths);
  if (error) console.error("Greška pri brisanju slika iz storage-a:", error);
}
