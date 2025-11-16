"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

export default function EditProizvod() {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    if (id) load();
  }, [id]);

  const load = async () => {
    const { data } = await supabase.from("proizvodi").select("*").eq("id", id).single();
    setForm(data);
  };

  const handleSave = async () => {
    await supabase.from("proizvodi").update(form).eq("id", id);
    router.push("/admin");
  };

  if (!form) return <div className="p-6">Učitavanje...</div>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl mb-4 font-bold">Izmena proizvoda</h1>

      {Object.keys(form).map((key) =>
        key === "id" ? null : (
          <input
            key={key}
            placeholder={key}
            className="w-full p-2 mb-3 border rounded"
            value={form[key] ?? ""}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        )
      )}

      <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
        Sačuvaj izmene
      </button>
    </div>
  );
}
