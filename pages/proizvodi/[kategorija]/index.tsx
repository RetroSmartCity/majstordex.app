import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Proizvod {
  id: string;
  naziv: string;
  opis?: string;
  cena?: number;
  kategorija: string;
  slike?: string; // JSON string iz baze
}

export default function KategorijaPage() {
  const { kategorija } = useRouter().query;
  const [proizvodi, setProizvodi] = useState<Proizvod[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!kategorija) return;

    const fetchProizvodi = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("proizvodi")
        .select("*")
        .eq("kategorija", kategorija);

      if (error) console.error("Greška pri učitavanju:", error);
      else setProizvodi(data || []);
      setLoading(false);
    };

    fetchProizvodi();
  }, [kategorija]);

  if (loading) return <p className="p-8">Učitavanje proizvoda...</p>;

  // SEO
  const seoNaslovi: Record<string, string> = {
    lusteri: "Lusteri - Moderna i klasična rasveta | LuxonLED",
    plafonjere: "Plafonjere - LED rasveta | LuxonLED",
    "zidne-lampe": "Zidne lampe - Dekorativna rasveta | LuxonLED",
    "aluminijumski-profili-za-led": "Alu profili za LED | LuxonLED",
    "spoljna-rasveta": "Spoljna rasveta | LuxonLED",
  };

  const seoOpisi: Record<string, string> = {
    lusteri: "Kupite moderne i klasične lustere po povoljnim cenama.",
    plafonjere: "LED plafonjere za sve prostorije.",
    "zidne-lampe": "Dekorativne zidne lampe za dom i kancelariju.",
    "aluminijumski-profili-za-led": "Alu profili za LED montažu.",
    "spoljna-rasveta": "Spoljna LED svetla za dvorište i fasadu.",
  };

  const seoTitle = seoNaslovi[kategorija as string] || "LuxonLED - Rasveta";
  const seoDesc = seoOpisi[kategorija as string] || "LED rasveta - LuxonLED.";

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={`https://luxonled.rs/proizvodi/${kategorija}`} />
      </Head>

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {kategorija?.toString().replace(/-/g, " ")}
        </h1>

        {proizvodi.length === 0 ? (
          <p className="text-gray-600">Trenutno nema proizvoda u ovoj kategoriji.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {proizvodi.map((p) => {
              const slikeArray = p.slike ? JSON.parse(p.slike) : [];
              const slikaUrl = slikeArray[0] || null;

              return (
                <Link
                  key={p.id}
                  href={`/proizvodi/${p.kategorija}/${p.id}`}
                  className="border rounded-xl shadow-sm hover:shadow-md transition bg-white overflow-hidden"
                >
                  <div className="flex flex-col h-full">
                    {slikaUrl ? (
                      <img
                        src={slikaUrl}
                        alt={p.naziv}
                        className="w-full h-52 object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-52 bg-gray-100 flex items-center justify-center text-gray-400">
                        Nema slike
                      </div>
                    )}

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h2 className="text-lg font-semibold mb-2">{p.naziv}</h2>
                      {p.cena && (
                        <p className="text-green-600 font-semibold mb-2">
                          {p.cena.toLocaleString()} RSD
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
