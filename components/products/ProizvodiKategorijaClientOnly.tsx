"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProizvodiKategorijaClientOnly() {
  const router = useRouter();
  const { kategorija } = router.query;
  const [proizvodi, setProizvodi] = useState([]);

  useEffect(() => {
    if (!kategorija) return;

    supabase.from("proizvodi").select("*").eq("kategorija", kategorija).then(({ data }) => {
      if (data) setProizvodi(data);
    });
  }, [kategorija]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Proizvodi - {kategorija}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proizvodi.map((p: any) => (
          <Link href={`/proizvodi/${kategorija}/${p.id}`} key={p.id} className="border p-4 rounded">
            <p className="font-semibold">{p.naziv}</p>
            <p className="text-gray-600">{p.cena} RSD</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
