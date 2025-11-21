"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

// *************** KATEGORIJE ***************
const kategorije = [
  "lusteri",
  "plafonjere",
  "zidne-lampe",
  "aluminijumski-profili-za-led",
  "spoljna-rasveta",
];

// *************** SLUG GENERATOR ***************
const generateSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[ćčšđž]/g, (c) => ({ ć: "c", č: "c", š: "s", đ: "dj", ž: "z" }[c]))
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function NoviProizvodClientOnly() {
  const [naziv, setNaziv] = useState("");
  const [opis, setOpis] = useState("");
  const [cena, setCena] = useState("");
  const [kategorija, setKategorija] = useState("");
  const [slike, setSlike] = useState<File[]>([]);
  const [preview, setPreview] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // *************** PREVIEW SLIKA ***************
  const handleSlikeSelect = (e: any) => {
    const files = Array.from(e.target.files);
    setSlike(files as File[]);

    const previews = files.map((file: any) => URL.createObjectURL(file));
    setPreview(previews);
  };

  // *************** UPLOAD SLIKE NA SUPABASE ***************
  const uploadSlike = async (slug: string) => {
    const uploadedUrls: string[] = [];

    for (let i = 0; i < slike.length; i++) {
      const file = slike[i];
      const extension = file.name.split(".").pop();
      const fileName = `${slug}/${i === 0 ? "main" : `slika-${i}`}.${extension}`;

      await supabase.storage.from("proizvodi").upload(fileName, file, {
        upsert: true,
      });

      const {
        data: { publicUrl },
      } = supabase.storage.from("proizvodi").getPublicUrl(fileName);

      uploadedUrls.push(publicUrl);
    }

    return uploadedUrls;
  };

  // *************** SUBMIT ***************
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const slug = generateSlug(naziv);

    // UPLOAD SLIKA
    let slikeUrlovi: string[] = [];
    if (slike.length > 0) {
      slikeUrlovi = await uploadSlike(slug);
    }

    // UBACIVANJE U BAZU
    const { error } = await supabase.from("proizvodi").insert({
      naziv,
      slug,
      opis,
      cena: Number(cena),
      kategorija,
      slike: slikeUrlovi,
    });

    setLoading(false);

    if (!error) {
      alert("✔ Proizvod dodat!");
      setNaziv("");
      setOpis("");
      setCena("");
      setKategorija("");
      setSlike([]);
      setPreview([]);
    } else {
      alert("❌ Greška pri snimanju.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Dodaj novi proizvod</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* NAZIV */}
        <input
          className="w-full border p-2"
          placeholder="Naziv"
          value={naziv}
          onChange={(e) => setNaziv(e.target.value)}
          required
        />

        {/* KATEGORIJA */}
        <select
          className="w-full border p-2 bg-white"
          value={kategorija}
          onChange={(e) => setKategorija(e.target.value)}
          required
        >
          <option value="">Izaberite kategoriju</option>
          {kategorije.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>

        {/* OPIS */}
        <textarea
          className="w-full border p-2 h-28"
          placeholder="Opis proizvoda"
          value={opis}
          onChange={(e) => setOpis(e.target.value)}
          required
        />

        {/* CENA */}
        <input
          type="number"
          className="w-full border p-2"
          placeholder="Cena (RSD)"
          value={cena}
          onChange={(e) => setCena(e.target.value)}
          required
        />

        {/* VIŠE SLIKA */}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleSlikeSelect}
          className="w-full"
        />

        {/* PREVIEW */}
        {preview.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {preview.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-full h-24 object-cover rounded border"
              />
            ))}
          </div>
        )}

        {/* DUGME */}
        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded w-full"
        >
          {loading ? "Dodavanje..." : "Dodaj proizvod"}
        </button>
      </form>
    </div>
  );
}
