"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

export default function NoviProizvodClientOnly() {
  const router = useRouter();
  const [form, setForm] = useState({
    naziv: "",
    opis: "",
    cena: "",
    kategorija: "",
    slika: ""
  });

  const handleSave = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from("proizvodi").insert([
      {
        naziv: form.naziv,
        opis: form.opis,
        cena: form.cena,
        kategorija: form.kategorija,
        slike: form.slika ? [form.slika] : [],
      },
    ]);

    if (!error) router.push("/admin");
  };

  return (
    <form className="max-w-lg mx-auto p-6" onSubmit={handleSave}>
      <h1 className="text-2xl font-bold mb-4">Novi proizvod</h1>

      <input className="border p-2 w-full mb-2" placeholder="Naziv"
        onChange={(e) => setForm({ ...form, naziv: e.target.value })}
      />

      <textarea className="border p-2 w-full mb-2" placeholder="Opis"
        onChange={(e) => setForm({ ...form, opis: e.target.value })}
      />

      <input className="border p-2 w-full mb-2" placeholder="Cena"
        onChange={(e) => setForm({ ...form, cena: e.target.value })}
      />

      <input className="border p-2 w-full mb-2" placeholder="Kategorija"
        onChange={(e) => setForm({ ...form, kategorija: e.target.value })}
      />

      <input className="border p-2 w-full mb-4" placeholder="URL slike"
        onChange={(e) => setForm({ ...form, slika: e.target.value })}
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">Sačuvaj</button>
    </form>
  );
}
