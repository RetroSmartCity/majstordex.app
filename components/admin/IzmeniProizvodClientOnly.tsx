"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

const kategorije = [
  "lusteri",
  "plafonjere",
  "zidne-lampe",
  "aluminijumski-profili-za-led",
  "spoljna-rasveta",
];

const generateSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[ćčšđž]/g, (c) => ({ ć: "c", č: "c", š: "s", đ: "dj", ž: "z" }[c]))
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function IzmeniProizvodClientOnly() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState<any>(null);
  const [noveSlike, setNoveSlike] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  // ------------------------------
  // 1) Učitavanje postojećeg proizvoda
  // ------------------------------
  useEffect(() => {
    if (!id) return;

    supabase
      .from("proizvodi")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        if (data) {
          // Ako su slike JSON string, parsiramo
          let slike = [];
          try {
            slike = Array.isArray(data.slike) ? data.slike : JSON.parse(data.slike || "[]");
          } catch {
            slike = [];
          }

          setForm({ ...data, slike });
        }
      });
  }, [id]);

  if (!form) return <p className="p-6">Učitavanje...</p>;

  // ------------------------------
  // Upload jedne slike
  // ------------------------------
  const uploadSlike = async (files: File[], kategorija: string, slug: string) => {
    const uploadedUrls: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = `${kategorija}/${slug}-${i}.webp`;

      const { error: uploadError } = await supabase.storage
        .from("proizvodi")
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        continue;
      }

      const publicURL = supabase.storage.from("proizvodi").getPublicUrl(filePath).data.publicUrl;
      uploadedUrls.push(publicURL);
    }

    return uploadedUrls;
  };

  // ------------------------------
  // 2) Čuvanje (UPDATE)
  // ------------------------------
  const handleSave = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const slug = generateSlug(form.naziv);

    let noveSlikeURL: string[] = [];

    if (noveSlike.length > 0) {
      noveSlikeURL = await uploadSlike(noveSlike, form.kategorija, slug);
    }

    const finalSlike = [...(form.slike || []), ...noveSlikeURL];

    const { error } = await supabase
      .from("proizvodi")
      .update({
        naziv: form.naziv,
        opis: form.opis,
        cena: form.cena,
        kategorija: form.kategorija,
        slug,
        slike: finalSlike,
      })
      .eq("id", id);

    setLoading(false);

    if (!error) {
      alert("Proizvod ažuriran!");
      router.push("/admin-client/proizvodi");
    }
  };

  // ------------------------------
  // Render
  // ------------------------------
  return (
    <form className="max-w-2xl mx-auto p-6" onSubmit={handleSave}>
      <h1 className="text-3xl font-bold mb-6">Izmena proizvoda</h1>

      <label className="block mb-2 font-semibold">Naziv</label>
      <input
        className="border p-2 w-full mb-4"
        value={form.naziv}
        onChange={(e) => setForm({ ...form, naziv: e.target.value })}
      />

      <label className="block mb-2 font-semibold">Kategorija</label>
      <select
        className="border p-2 w-full mb-4"
        value={form.kategorija}
        onChange={(e) => setForm({ ...form, kategorija: e.target.value })}
      >
        {kategorije.map((k) => (
          <option key={k} value={k}>
            {k}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-semibold">Opis</label>
      <textarea
        className="border p-2 w-full mb-4"
        value={form.opis}
        onChange={(e) => setForm({ ...form, opis: e.target.value })}
      />

      <label className="block mb-2 font-semibold">Cena (RSD)</label>
      <input
        type="number"
        className="border p-2 w-full mb-4"
        value={form.cena}
        onChange={(e) => setForm({ ...form, cena: e.target.value })}
      />

      <label className="block mb-2 font-semibold">Dodaj nove slike</label>
      <input
        type="file"
        multiple
        className="border p-2 w-full mb-4"
        onChange={(e) => setNoveSlike(Array.from(e.target.files || []))}
      />

      {/* Preview novih slika */}
      {noveSlike.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-4">
          {noveSlike.map((file, i) => (
            <div key={i} className="border p-2 text-center text-sm">
              <p>{file.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Stare slike */}
      {form.slike?.length > 0 && (
        <div className="mb-4">
          <p className="font-semibold mb-2">Postojeće slike:</p>
          <div className="grid grid-cols-3 gap-4">
            {form.slike.map((url: string, i: number) => (
              <img
                key={i}
                src={url}
                className="w-full h-32 object-cover rounded border"
              />
            ))}
          </div>
        </div>
      )}

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        disabled={loading}
      >
        {loading ? "Čuvanje..." : "Sačuvaj izmene"}
      </button>
    </form>
  );
}
