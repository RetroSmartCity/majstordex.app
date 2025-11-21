"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import ProizvodCard from "@/components/admin/ProizvodCard";

export default function AdminListaProizvoda() {
  const [proizvodi, setProizvodi] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("proizvodi")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data) setProizvodi(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Svi proizvodi</h1>

      <Link
        href="/admin-client/novi-proizvod"
        className="inline-block mb-6 px-4 py-2 bg-green-600 text-white rounded"
      >
        + Dodaj novi proizvod
      </Link>

      {loading ? (
        <p>Učitavanje...</p>
      ) : proizvodi.length === 0 ? (
        <p className="text-gray-600">Nema proizvoda.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proizvodi.map((p) => (
            <div key={p.id}>
              <ProizvodCard proizvod={p} />
              <Link
                href={`/admin-client/izmeni-proizvod/${p.id}`}
                className="block mt-2 text-blue-600 hover:underline"
              >
                ✏️ Izmeni proizvod
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
