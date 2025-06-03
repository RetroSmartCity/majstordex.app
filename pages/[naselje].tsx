import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

const sveUsluge = [
  { naziv: "Servis bojlera", slug: "servis-bojlera" },
  { naziv: "Pranje klime", slug: "pranje-klime" },
  { naziv: "Hitne intervencije", slug: "hitne-intervencije" },
  { naziv: "Zamena utičnica", slug: "zamena-osiguraca-i-uticnica" },
  { naziv: "Popravka TA peći", slug: "popravka-ta-peci" },
  { naziv: "Popravka instalacija", slug: "popravka-elektroinstalacija" },
];

type Props = {
  naselje?: string;
};

export default function NaseljePage({ naselje }: Props) {
  if (!naselje) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-xl">Učitavanje podataka za naselje...</h1>
      </main>
    );
  }

  const capitalized =
    naselje.charAt(0).toUpperCase() + naselje.slice(1);

  return (
    <>
      <Head>
        <title>Usluge u naselju {capitalized} | MajstorDex</title>
        <meta
          name="description"
          content={`Brze elektro usluge u naselju ${capitalized}. MajstorDex – dolazak za 60-90 minuta.`}
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Usluge u naselju {capitalized}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sveUsluge.map((usluga) => (
            <Link
              key={usluga.slug}
              href={`/usluge/${usluga.slug}/${naselje}`}
              className="block p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{usluga.naziv}</h2>
              <p className="text-gray-600 mt-1">Detalji usluge u {capitalized}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const naselja = [
    "zvezdara", "novi-beograd", "vozdovac", "banovo-brdo",
    "stari-grad", "savski-venac", "vracar", "zemun",
    "cukarica", "palilula", "rakovica"
  ];

  const paths = naselja.map((naselje) => ({
    params: { naselje },
  }));

  return {
    paths,
    fallback: true, // omogućava učitavanje stranica koje nisu unapred generisane
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const naselje = params?.naselje;

  if (typeof naselje !== "string") {
    return { notFound: true };
  }

  return {
    props: {
      naselje,
    },
  };
};
