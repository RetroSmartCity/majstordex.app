import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

/* ============================================
   LISTA USLUGA — PREMIUM KATEGORIJE
============================================ */
const usluge = [
  {
    slug: "led-rasveta",
    naziv: "LED rasveta – prodaja i ugradnja",
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
    naziv: "Hitne intervencije 0–24",
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
          content="MajstorDex – hitne elektro intervencije, servis bojlera, TA peći, klima uređaja i popravka elektroinstalacija. Dolazak 60–90 min širom Beograda. Pogledajte sve usluge."
        />
        <link rel="canonical" href="https://majstordex.rs/usluge" />
      </Head>

      {/* ============================================
                  PREMIUM LISTA USLUGA
      ============================================ */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
          Sve elektro usluge na jednom mestu
        </h1>

        <p className="text-center text-gray-600 max-w-xl mx-auto mb-14 text-lg">
          MajstorDex pruža kompletne elektro usluge u Beogradu — od popravke TA peći
          i servisa bojlera, do čišćenja klima uređaja i hitnih intervencija 0–24.
        </p>

        {/* PREMIUM GRID */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {usluge.map((u) => (
            <li key={u.slug}>
              <Link
                href={`/usluge/${u.slug}`}
                className="
                  group block bg-white rounded-2xl shadow-md hover:shadow-2xl
                  transition duration-300 border border-gray-100
                  hover:border-yellow-400/50 hover:-translate-y-1
                "
              >
                {/* PREMIUM IMAGE BOX */}
                <div className="relative w-full h-48 rounded-t-2xl overflow-hidden bg-gray-50">
                  <Image
                    src={u.slika}
                    alt={u.naziv}
                    fill
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Glow efekat */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition bg-[radial-gradient(circle_at_center,rgba(255,210,0,0.25),transparent_70%)]"></div>
                </div>

                {/* Naziv usluge */}
                <div className="p-6 text-center">
                  <p className="font-semibold text-lg text-gray-900 group-hover:text-black">
                    {u.naziv}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
