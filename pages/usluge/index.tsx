import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const usluge = [
  {
    slug: "adaptacija-stana",
    naziv: "Kompletna adaptacija stana - Ključ u ruke",
    slika: "/images/adaptacija-stanova.webp",
  },
  {
    slug: "led-rasveta",
    naziv: "LED rasveta - prodaja i ugradnja",
    slika: "/images/led-rasveta.webp",
  },
  {
    slug: "servis-bojlera",
    naziv: "Servis bojlera",
    slika: "/images/servis-bojlera.webp",
  },
  {
    slug: "pranje-klime",
    naziv: "Pranje klima uređaja",
    slika: "/images/ciscenje-klima.webp",
  },
  {
    slug: "popravka-ta-peci",
    naziv: "Popravka TA peći",
    slika: "/images/popravka-ta-peci.webp",
  },
  {
    slug: "popravka-elektroinstalacija",
    naziv: "Popravka elektroinstalacija",
    slika: "/images/popravka-elektroinstalacija.webp",
  },
  {
    slug: "zamena-osiguraca-i-uticnica",
    naziv: "Zamena osigurača i utičnica",
    slika: "/images/zamena-osigraca-i-uticnica.webp",
  },
  {
    slug: "hitne-intervencije",
    naziv: "Hitne intervencije 0-24",
    slika: "/images/hitne-intervencije.webp",
  },
];

export default function UslugeIndex() {
  return (
    <>
      <Head>
        <title>Usluge | MajstorDex</title>
        <meta
          name="description"
          content="MajstorDex – sve elektro i adaptacione usluge u Beogradu. Hitne intervencije, servis bojlera, klima, LED rasveta i još mnogo toga. 24/7 dostupnost."
        />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Usluge koje nudimo
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usluge.map((u) => (
            <li key={u.slug} className="flex justify-center">
              <Link
                href={`/usluge/${u.slug}`}
                className="block bg-gray-50 hover:bg-yellow-50 transition rounded-xl p-4 shadow text-center w-full"
              >

                {/* Slika bez sečenja */}
                <div className="relative w-full mb-4 rounded-xl overflow-hidden bg-white shadow">
                  <Image
                    src={u.slika}
                    alt={u.naziv}
                    width={1600}
                    height={900}
                    className="object-contain w-full h-auto rounded-xl"
                    priority={u.slug === "adaptacija-stana"}
                  />
                </div>

                <p className="font-semibold text-lg">{u.naziv}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
