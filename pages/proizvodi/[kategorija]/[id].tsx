// pages/proizvodi/[kategorija]/[id].tsx
"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";

interface Proizvod {
  id: number;
  naziv: string;
  opis: string;
  cena: number;
  kategorija: string;
  slike: string[] | string | null;
}

export default function ProizvodPage() {
  const router = useRouter();
  const { kategorija, id } = router.query;

  const [proizvod, setProizvod] = useState<Proizvod | null>(null);

  useEffect(() => {
    if (!id) return;

    supabase
      .from("proizvodi")
      .select("*")
      .eq("id", id)            // ← OVO JE GLAVNA IZMJENA (pre je bio slug)
      .single()
      .then(({ data }) => {
        if (data) {
          let slikeArray: string[] = [];

          if (Array.isArray(data.slike)) slikeArray = data.slike;
          else if (typeof data.slike === "string") {
            try {
              slikeArray = JSON.parse(data.slike);
            } catch {
              slikeArray = [];
            }
          }

          setProizvod({
            ...data,
            slike: slikeArray,
          });
        }
      });
  }, [id]);

  if (!proizvod) {
    return <p className="p-6">Učitavanje...</p>;
  }

  const mainImage =
    proizvod.slike && proizvod.slike.length > 0
      ? proizvod.slike[0]
      : "/placeholder.webp";

  return (
    <>
      <Head>
        <title>{proizvod.naziv} | MajstorDex</title>
        <meta name="description" content={proizvod.opis.slice(0, 150) + "..."} />
        <link rel="canonical" href={`https://majstordex.rs/proizvodi/${kategorija}/${id}`} />
      </Head>

      <main className="max-w-4xl mx-auto p-6">
        {/* Dugme za povratak */}
        <button
          onClick={() => router.push(`/proizvodi/${kategorija}`)}
          className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Nazad na {kategorija}
        </button>

        <h1 className="text-3xl font-bold mb-4">{proizvod.naziv}</h1>

        {/* Glavna slika */}
        <img
          src={mainImage}
          alt={proizvod.naziv}
          className="w-full h-96 object-cover rounded shadow mb-6"
        />

        {/* Ostale slike */}
        {proizvod.slike.length > 1 && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {proizvod.slike.slice(1).map((sl, i) => (
              <img
                key={i}
                src={sl}
                alt={`${proizvod.naziv} ${i + 2}`}
                className="w-full h-32 object-cover rounded"
              />
            ))}
          </div>
        )}

        <p className="text-lg text-gray-700 mb-4">{proizvod.opis}</p>

        <p className="text-2xl font-bold text-green-700">
          {proizvod.cena.toLocaleString()} RSD
        </p>
      </main>
    </>
  );
}
