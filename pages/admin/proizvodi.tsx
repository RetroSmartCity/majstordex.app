"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

interface Proizvod {
  id: string;
  naziv: string;
  cena?: number;
  kategorija?: string;
}

export default function AdminProizvodi() {
  const [proizvodi, setProizvodi] = useState<Proizvod[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProizvodi = async () => {
    const { data, error } = await supabase.from("proizvodi").select("*").order("id", { ascending: false });
    if (!error && data) setProizvodi(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProizvodi();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Da li ste sigurni da želite da obrišete proizvod?")) return;

    const res = await fetch("/api/proizvodi/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      alert("Proizvod uspešno obrisan!");
      fetchProizvodi();
    } else {
      alert("Greška pri brisanju proizvoda!");
    }
  };

  if (loading) return <p className="p-8">Učitavanje...</p>;

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Lista proizvoda</h1>
      <div className="space-y-3">
        {proizvodi.map((p) => (
          <div key={p.id} className="flex justify-between items-center border p-4 rounded-xl shadow-sm">
            <div>
              <p className="font-semibold">{p.naziv}</p>
              <p className="text-gray-600">{p.cena?.toLocaleString()} RSD</p>
            </div>
            <div className="flex gap-3">
              <Link
                href={`/admin/izmeni-proizvod/${p.id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Izmeni
              </Link>
              <button
                onClick={() => handleDelete(p.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Obriši
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
