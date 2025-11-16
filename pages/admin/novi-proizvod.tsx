"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { KATEGORIJE } from "@/components/kategorije";
import { useRouter } from "next/router";

export default function NoviProizvodPage() {
  const [naziv, setNaziv] = useState("");
  const [opis, setOpis] = useState("");
  const [cena, setCena] = useState("");
  const [kategorija, setKategorija] = useState("");
  const [slike, setSlike] = useState<File[]>([]);
  const router = useRouter();

  const PUBLIC_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

  const handleSlike = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setSlike(Array.from(e.target.files));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const uploadedURLs: string[] = [];

    for (const file of slike) {
      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("proizvodi")
        .upload(fileName, file);

      if (error) {
        alert("Greška pri upload-u: " + error.message);
        continue;
      }

      uploadedURLs.push(
        `${PUBLIC_URL}/storage/v1/object/public/proizvodi/${fileName}`
      );
    }

    const { error: insertError } = await supabase.from("proizvodi").insert([
      {
        naziv,
        opis,
        cena: Number(cena),
        kategorija,
        slike: uploadedURLs, // JSONB array
      },
    ]);

    if (insertError) {
      alert("Greška pri snimanju: " + insertError.message);
      return;
    }

    alert("Proizvod dodat!");
    router.push("/admin");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dodaj novi proizvod</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2"
          placeholder="Naziv proizvoda"
          value={naziv}
          onChange={(e) => setNaziv(e.target.value)}
          required
        />

        <textarea
          className="w-full border p-2"
          placeholder="Opis"
          value={opis}
          onChange={(e) => setOpis(e.target.value)}
        />

        <input
          className="w-full border p-2"
          placeholder="Cena"
          type="number"
          value={cena}
          onChange={(e) => setCena(e.target.value)}
          required
        />

        <select
          className="w-full border p-2"
          value={kategorija}
          onChange={(e) => setKategorija(e.target.value)}
          required
        >
          <option value="">-- Izaberi kategoriju --</option>
          {KATEGORIJE.map((k) => (
            <option key={k.slug} value={k.slug}>
              {k.naziv}
            </option>
          ))}
        </select>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleSlike}
          className="w-full border p-2"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Sačuvaj proizvod
        </button>
      </form>
    </div>
  );
}
