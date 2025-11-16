"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

export default function ProizvodClientOnly() {
  const router = useRouter();
  const { id } = router.query;
  const [proizvod, setProizvod] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    supabase.from("proizvodi").select("*").eq("id", id).single().then(({ data }) => {
      if (data) setProizvod(data);
    });
  }, [id]);

  if (!proizvod) return <p className="p-6">Učitavanje...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{proizvod.naziv}</h1>
      <p className="text-lg mb-2">{proizvod.opis}</p>
      <p className="font-semibold text-xl">{proizvod.cena} RSD</p>
    </div>
  );
}
