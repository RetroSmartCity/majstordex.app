import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

interface Proizvod {
  id: string;
  naziv: string;
  opis?: string;
  cena?: number;
  kategorija?: string;
  slike?: string[] | string;
}

export default function ProizvodPage() {
  const router = useRouter();
  const { id } = router.query;

  const [proizvod, setProizvod] = useState<Proizvod | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalSlika, setModalSlika] = useState<string | null>(null);

  // 🔵 UČITAVANJE PODATAKA
  useEffect(() => {
    if (!id) return;

    const fetchProizvod = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("proizvodi")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error("Greška:", error);
      else setProizvod(data);

      setLoading(false);
    };

    fetchProizvod();
  }, [id]);

  if (loading) return <p className="p-8">Učitavanje…</p>;
  if (!proizvod) return <p className="p-8">Proizvod nije pronađen.</p>;

  // 🟢 PRETVARANJE SLIKA — automatski radi za string i array
  let slikeArray: string[] = [];

  if (Array.isArray(proizvod.slike)) {
    slikeArray = proizvod.slike;
  } else if (typeof proizvod.slike === "string") {
    try {
      slikeArray = JSON.parse(proizvod.slike);
    } catch {
      slikeArray = [];
    }
  }

  const slikaUrl = slikeArray[0] || null;

  // 📌 SEO opis
  const seoOpis = `${proizvod.naziv} — cena ${proizvod.cena?.toLocaleString()} RSD. ${proizvod.opis || ""}`.slice(0, 155);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Head>
        <title>{`${proizvod.naziv} | LuxonLED`}</title>
        <meta name="description" content={seoOpis} />

        {/* OpenGraph SEO */}
        <meta property="og:title" content={`${proizvod.naziv} | LuxonLED`} />
        <meta property="og:description" content={seoOpis} />
        {slikaUrl && <meta property="og:image" content={slikaUrl} />}
        <meta property="og:type" content="product" />
      </Head>

      {/* 🔙 BreadCrumbs */}
      <nav className="mb-5 text-sm text-gray-600">
        <Link href="/proizvodi" className="hover:underline">Proizvodi</Link>
        {proizvod.kategorija && (
          <>
            {" / "}
            <Link
              href={`/proizvodi/${proizvod.kategorija}`}
              className="hover:underline"
            >
              {proizvod.kategorija}
            </Link>
          </>
        )}
        {" / "}
        <span className="font-semibold">{proizvod.naziv}</span>
      </nav>

      {/* 🖼️ PRIKAZ PROIZVODA */}
      <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-sm">
        {slikaUrl ? (
          <img
            src={slikaUrl}
            alt={proizvod.naziv}
            className="w-full h-64 object-cover rounded-xl cursor-pointer"
            onClick={() => setModalSlika(slikaUrl)}
          />
        ) : (
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-xl text-gray-400">
            Nema slike
          </div>
        )}

        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{proizvod.naziv}</h1>

            {proizvod.cena && (
              <p className="text-xl font-semibold text-green-600 mb-2">
                {proizvod.cena.toLocaleString()} RSD
              </p>
            )}

            {proizvod.opis && (
              <p className="text-gray-700 leading-relaxed">{proizvod.opis}</p>
            )}
          </div>
        </div>
      </div>

      {/* 🔍 FULLSCREEN PREVIEW */}
      {modalSlika && (
        <div
          onClick={() => setModalSlika(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 cursor-pointer"
        >
          <img
            src={modalSlika}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </main>
  );
}
