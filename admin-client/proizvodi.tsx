"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import ProizvodCard from "@/components/ProizvodCard";

export default function AdminListaProizvoda() {
  const [proizvodi, setProizvodi] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("proizvodi")
        .select("*")
        .order("id", { ascending: false });

      if (!error && data) setProizvodi(data);
      setLoading(false);
    };

    load();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Lista proizvoda</h1>

        <Link
          href="/admin-client/novi-proizvod"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          ➕ Dodaj novi proizvod
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500">Učitavanje proizvoda...</p>
      ) : proizvodi.length === 0 ? (
        <p className="text-gray-500">Nema proizvoda u bazi.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {proizvodi.map((proizvod) => (
            <div key={proizvod.id} className="relative">
              {/* Kartica proizvoda */}
              <ProizvodCard proizvod={proizvod} />

              {/* Dugme za izmenu */}
              <Link
                href={`/admin-client/izmeni-proizvod/${proizvod.id}`}
                className="absolute top-2 left-2 bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600"
              >
                Izmeni
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
