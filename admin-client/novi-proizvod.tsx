"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

export default function NoviProizvod() {
  const [form, setForm] = useState({
    naziv: "",
    opis: "",
    cena: "",
    kategorija: "",
    slika: "",
  });

  const router = useRouter();

  const handleSave = async () => {
    const { error } = await supabase.from("proizvodi").insert([form]);

    if (!error) router.push("/admin");
    else alert(error.message);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl mb-4 font-bold">Novi Proizvod</h1>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          className="w-full p-2 mb-3 border rounded"
          value={(form as any)[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}

      <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded">
        Sačuvaj
      </button>
    </div>
  );
}
