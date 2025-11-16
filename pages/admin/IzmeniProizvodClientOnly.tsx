"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

export default function IzmeniProizvodClientOnly() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    supabase.from("proizvodi").select("*").eq("id", id).single().then(({ data }) => {
      if (data) setForm(data);
    });
  }, [id]);

  if (!form) return <p className="p-6">Učitavanje...</p>;

  const handleSave = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase
      .from("proizvodi")
      .update({
        naziv: form.naziv,
        opis: form.opis,
        cena: form.cena,
        kategorija: form.kategorija,
        slike: form.slike ?? [],
      })
      .eq("id", id);

    if (!error) router.push("/admin");
  };

  return (
    <form className="max-w-lg mx-auto p-6" onSubmit={handleSave}>
      <h1 className="text-2xl font-bold mb-4">Izmena proizvoda</h1>

      <input className="border p-2 w-full mb-2" value={form.naziv}
        onChange={(e) => setForm({ ...form, naziv: e.target.value })}
      />

      <textarea className="border p-2 w-full mb-2" value={form.opis}
        onChange={(e) => setForm({ ...form, opis: e.target.value })}
      />

      <input className="border p-2 w-full mb-2" value={form.cena}
        onChange={(e) => setForm({ ...form, cena: e.target.value })}
      />

      <input className="border p-2 w-full mb-2" value={form.kategorija}
        onChange={(e) => setForm({ ...form, kategorija: e.target.value })}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">Sačuvaj izmene</button>
    </form>
  );
}
