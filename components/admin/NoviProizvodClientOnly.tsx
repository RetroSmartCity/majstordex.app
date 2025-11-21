"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

// 🔧 Dozvoljene kategorije
const kategorije = [
  "lusteri",
  "plafonjere",
  "zidne-lampe",
  "aluminijumski-profili-za-led",
  "spoljna-rasveta",
];

// 🔧 Automatski slug
const generateSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[ćčšđž]/g, (c) => ({ ć: "c", č: "c", š: "s", đ: "dj", ž: "z" }[c]))
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function NoviProizvodClientOnly() {
  const router = useRouter();

  const [naziv, setNaziv] = useState("");
  const [opis, setOpis] = useState("");
  const [cena, setCena] = useState("");
  const [kategorija, setKategorija] = useState("");
  const [slike, setSlike] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  // 👉 Upload jedne slike
  const uploadSingle = async (file: File, putanja: string): Promise<string> => {
    await supabase.storage.from("proizvodi").upload(putanja, file, {
      upsert: true,
    });

    const { data } = supabase.storage.from("proizvodi").getPublicUrl(putanja);
    return data.publicUrl;
  };

  // 👉 Upload niza slika
  const uploadSlike = async (slug: string): Promise<string[]> => {
    const urls: string[] = [];

    for (let i = 0; i < slike.length; i++) {
      const file = slike[i];
      const filename = `${Date.now()}-${i}.webp`;

      const putanja = `${kategorija}/${slug}/${filename}`;
      const url = await uploadSingle(file, putanja);

      urls.push(url);
    }

    return urls;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!kategorija) {
      alert("Izaberite kategoriju.");
      return;
    }

    if (slike.length === 0) {
      alert("Morate izabrati bar jednu sliku.");
      return;
    }

    setLoading(true);

    const slug = generateSlug(naziv);

    // ⬆️ upload svih slika
    const slikeUrl = await uploadSlike(slug);

    // ⬆️ glavna slika = prva u nizu
    const glavnaSlika = slikeUrl[0];

    const { error } = await supabase.from("proizvodi").insert([
      {
        naziv,
        opis,
        cena: Number(cena),
        kategorija,
        slug,
        slike: slikeUrl, // array slika
        slika: glavnaSlika, // glavna slika
      },
    ]);

    setLoading(false);

    if (error) {
      alert("Greška pri snimanju proizvoda.");
      console.log(error);
    } else {
      alert("Proizvod uspešno dodat!");
      router.push("/admin-client/proizvodi");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Dodaj novi proizvod</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          className="w-full border p-2"
          placeholder="Naziv"
          value={naziv}
          onChange={(e) => setNaziv(e.target.value)}
          required
        />

        <select
          className="w-full border p-2"
          value={kategorija}
          onChange={(e) => setKategorija(e.target.value)}
          required
        >
          <option value="">Izaberite kategoriju</option>
          {kategorije.map((k) => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>

        <textarea
          className="w-full border p-2"
          placeholder="Opis"
          value={opis}
          onChange={(e) => setOpis(e.target.value)}
          required
        />

        <input
          type="number"
          className="w-full border p-2"
          placeholder="Cena"
          value={cena}
          onChange={(e) => setCena(e.target.value)}
          required
        />

        {/* MULTI upload */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setSlike(Array.from(e.target.files || []))}
        />

        {/* Preview slika */}
        {slike.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-3">
            {slike.map((slika, i) => (
              <div key={i} className="border p-1">
                <img
                  src={URL.createObjectURL(slika)}
                  alt=""
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
        >
          {loading ? "Dodavanje..." : "Dodaj proizvod"}
        </button>
      </form>
    </div>
  );
}
