"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function AdminHome() {
  const [proizvodi, setProizvodi] = useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const { data } = await supabase.from("proizvodi").select("*");
    setProizvodi(data || []);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Obrisati?")) return;
    await supabase.from("proizvodi").delete().eq("id", id);
    loadData();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin panel</h1>

      <Link href="/admin/novi-proizvod" className="bg-blue-600 text-white px-4 py-2 rounded">
        + Novi proizvod
      </Link>

      <ul className="mt-6 space-y-3">
        {proizvodi.map((p) => (
          <li key={p.id} className="flex justify-between border p-3 rounded">
            <span>{p.naziv}</span>
            <div className="flex gap-3">
              <Link href={`/admin/izmeni-proizvod/${p.id}`} className="text-blue-600">
                Izmeni
              </Link>
              <button className="text-red-600" onClick={() => handleDelete(p.id)}>
                Obriši
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
