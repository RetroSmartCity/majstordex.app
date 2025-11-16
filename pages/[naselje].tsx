// pages/[naselje].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const sveUsluge = [
  {
    naziv: "Kompletna adaptacija stana – Ključ u ruke",
    slug: "adaptacija-stana",
    ikona: "🏠",
    slika: "/images/adaptacija-stanova.webp",
  },
  {
    naziv: "LED rasveta – prodaja i ugradnja",
    slug: "led-rasveta",
    ikona: "💡",
    slika: "/images/led-rasveta.webp",
  },
  {
    naziv: "Servis bojlera",
    slug: "servis-bojlera",
    ikona: "🚿",
    slika: "/images/servis-bojlera.webp",
  },
  {
    naziv: "Pranje klima uređaja",
    slug: "pranje-klime",
    ikona: "🧊",
    slika: "/images/ciscenje-klima.webp",
  },
  {
    naziv: "Popravka TA peći",
    slug: "popravka-ta-peci",
    ikona: "🔥",
    slika: "/images/popravka-ta-peci.webp",
  },
  {
    naziv: "Popravka elektroinstalacija",
    slug: "popravka-elektroinstalacija",
    ikona: "💡",
    slika: "/images/popravka-elektroinstalacija.webp",
  },
  {
    naziv: "Zamena osigurača i utičnica",
    slug: "zamena-osiguraca-i-uticnica",
    ikona: "🔌",
    slika: "/images/zamena-osigraca-i-uticnica.webp",
  },
  {
    naziv: "Hitne intervencije 0-24",
    slug: "hitne-intervencije",
    ikona: "🔧",
    slika: "/images/hitne-intervencije.webp",
  },
];

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
];

type Props = {
  naselje: string;
};

export default function NaseljePage({ naselje }: Props) {
  if (!naselje) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-xl text-center">Učitavanje podataka za naselje...</h1>
      </main>
    );
  }

  const capitalized = naselje
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <Head>
        <title>Usluge u naselju {capitalized} | MajstorDex</title>
        <meta
          name="description"
          content={`Brze elektro usluge u naselju ${capitalized}. MajstorDex – dolazak za 60–90 minuta, servis bojlera, adaptacije stanova, LED rasveta, TA peći, klima uređaji i hitne intervencije.`}
        />
        <link rel="canonical" href={`https://majstordex.rs/${naselje}`} />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Naslov */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Usluge u naselju {capitalized}
        </h1>

        {/* Breadcrumb */}
        <nav className="text-sm mb-8 text-gray-500 flex flex-wrap gap-2 justify-center">
          <Link href="/" className="hover:underline text-blue-600">
            Početna
          </Link>
          <span>›</span>
          <span className="font-semibold text-gray-800">{capitalized}</span>
        </nav>

        {/* Grid usluga */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sveUsluge.map((usluga) => (
            <Link
              key={usluga.slug}
              href={`/usluge/${usluga.slug}/${naselje}`}
              className="block p-6 bg-white rounded-xl shadow hover:shadow-md transition text-center"
            >
              {usluga.slika ? (
                <div className="relative w-full h-40 mb-3 rounded-xl overflow-hidden">
                  <Image
                    src={usluga.slika}
                    alt={usluga.naziv}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="text-4xl mb-2">{usluga.ikona}</div>
              )}

              <h2 className="text-lg font-semibold">{usluga.naziv}</h2>
              <p className="text-gray-600 mt-1">
                Detalji usluge u {capitalized}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = naselja.map((naselje) => ({
    params: { naselje },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const naselje = params?.naselje;
  if (typeof naselje !== "string" || !naselja.includes(naselje)) {
    return { notFound: true };
  }

  return {
    props: { naselje },
    revalidate: 60 * 60, // 1h
  };
};
