import Head from "next/head";
import Link from "next/link";

const usluge = [
  { slug: "servis-bojlera", naziv: "Servis bojlera", ikona: "🚿" },
  { slug: "pranje-klime", naziv: "Pranje klima uređaja", ikona: "🧊" },
  { slug: "popravka-ta-peci", naziv: "Popravka TA peći", ikona: "🔥" },
  { slug: "popravka-elektroinstalacija", naziv: "Popravka elektroinstalacija", ikona: "💡" },
  { slug: "zamena-osiguraca-i-uticnica", naziv: "Zamena osigurača i utičnica", ikona: "🔌" },
  { slug: "hitne-intervencije", naziv: "Hitne intervencije 0-24", ikona: "🔧" },
];

export default function UslugeIndex() {
  return (
    <>
      <Head>
        <title>Usluge | MajstorDex</title>
        <meta name="description" content="Izaberite uslugu koju nudimo u Beogradu." />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Usluge</h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-16">
          {usluge.map((u) => (
            <li key={u.slug}>
              <Link
                href={`/usluge/${u.slug}`}
                className="block bg-gray-100 hover:bg-yellow-100 transition rounded-xl p-6 shadow text-center cursor-pointer"
              >
                <div className="text-4xl mb-3">{u.ikona}</div>
                <p className="font-semibold text-lg">{u.naziv}</p>
              </Link>
            </li>
          ))}
        </ul>

        <section className="max-w-xl mx-auto bg-yellow-50 rounded-xl p-6 mb-16 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Zašto izabrati MajstorDex?</h2>
          <ul className="text-left list-disc list-inside space-y-2 text-gray-700">
            <li>Brz i pouzdan dolazak na teren (60-90 minuta)</li>
            <li>Iskusni i licencirani majstori</li>
            <li>Dostupnost 24/7, radimo i vikendom</li>
            <li>Transparentne cene bez skrivenih troškova</li>
            <li>Garancija kvaliteta na sve usluge</li>
          </ul>
        </section>

        <section className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p className="mb-4 text-gray-700">
            Pozovite nas ili pošaljite poruku u bilo koje doba – dostupni smo 24/7!
          </p>
          <p className="text-lg mb-2">
            📞{" "}
            <a href="tel:+38160500063" className="text-blue-600 font-semibold hover:underline">
              060 0 5000 63
            </a>
          </p>
          <p className="text-lg">
            ✉️{" "}
            <a href="mailto:dejan@majstordex.rs" className="text-blue-600 font-semibold hover:underline">
              dejan@majstordex.rs
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
