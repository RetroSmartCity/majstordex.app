import Head from "next/head";
import Link from "next/link";

export default function ProizvodiIndex() {
  const kategorije = [
    { naziv: "Lusteri", slug: "lusteri", slika: "luster.webp" },
    { naziv: "Plafonjere", slug: "plafonjere", slika: "plafonjera.webp" },
    { naziv: "Zidne lampe", slug: "zidne-lampe", slika: "zidna-lampa.webp" },
    { naziv: "LED aluminijumski profili", slug: "aluminijumski-profili-za-led", slika: "al-led-profil.webp" },
    { naziv: "Spoljna LED rasveta", slug: "spoljna-rasveta", slika: "kandilaber.webp" },
  ];

  return (
    <>
      <Head>
        <title>Proizvodi | LuxonLED</title>
        <meta name="description" content="Pregled kategorija LED rasvete." />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Novi elegantni naslov */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Kategorije proizvoda
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Izaberite kategoriju LED rasvete
          </p>
        </div>

        {/* Grid kategorija */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {kategorije.map((kat) => (
            <li key={kat.slug} className="flex">
              <Link href={`/proizvodi/${kat.slug}`} legacyBehavior>
                <a className="flex flex-col bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition rounded-xl overflow-hidden w-full">

                  {/* Slika – 100% poravnata, ništa ne seče */}
                  <div className="bg-gray-100 flex items-center justify-center h-40">
                    <img
                      src={`/images/${kat.slika}`}
                      alt={kat.naziv}
                      className="max-h-full max-w-full object-contain p-2"
                    />
                  </div>

                  {/* Tekst */}
                  <div className="p-4 text-center mt-auto">
                    <h2 className="text-lg font-semibold text-gray-900">{kat.naziv}</h2>
                    <p className="text-sm text-gray-600">Pogledaj ponudu</p>
                  </div>

                </a>
              </Link>
            </li>
          ))}
        </ul>

      </main>
    </>
  );
}
