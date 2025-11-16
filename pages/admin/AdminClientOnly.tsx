"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function AdminClientOnly() {
  const [proizvodi, setProizvodi] = useState([]);

  useEffect(() => {
    supabase.from("proizvodi").select("*").then(({ data }) => {
      if (data) setProizvodi(data);
    });
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin panel</h1>

      <Link href="/admin/novi-proizvod" className="bg-blue-600 text-white px-4 py-2 rounded">
        ➕ Novi proizvod
      </Link>

      <ul className="mt-6 space-y-3">
        {proizvodi.map((p: any) => (
          <li key={p.id} className="border p-4 rounded flex justify-between items-center">
            <span>{p.naziv}</span>
            <Link href={`/admin/izmeni-proizvod/${p.id}`} className="text-blue-500">
              ✏️ Izmeni
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
