import Link from "next/link";
import SEO from "@/components/SEO";

export default function Lokacije() {
  const naselja = [
    "stari-grad",
    "savski-venac",
    "vracar",
    "novi-beograd",
    "zemun",
    "cukarica",
    "vozdovac",
    "palilula",
    "rakovica",
    "zvezdara",
    "mirijevo",
    "mali-mokri-lug",
    "karaburma",
  ];

  return (
    <>
      <SEO
        title="Električar Beograd – Lokacije | MajstorDex 0-24"
        description="MajstorDex električar Beograd 0-24. Hitne intervencije, servis bojlera, TA peći i popravke elektroinstalacija u svim beogradskim naseljima."
        url="https://majstordex.rs/lokacije"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Električar Beograd – Lokacije koje pokrivamo
          </h1>

          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Dolazak na teren u roku od 60–90 minuta u svim beogradskim opštinama
            i naseljima. Dostupni smo 24/7 za hitne elektro intervencije.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
            {naselja.map((slug) => {
              const naziv = slug
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase());

              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="bg-gray-50 border border-gray-200 py-3 rounded-lg hover:bg-gray-100 transition text-gray-900 font-medium shadow-sm"
                >
                  {naziv}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
