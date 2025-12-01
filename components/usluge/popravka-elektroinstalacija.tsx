import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function PopravkaElektroinstalacija() {
  const title =
    "Popravka elektroinstalacija u Beogradu | Električar | MajstorDex";
  const desc =
    "Profesionalna popravka elektroinstalacija u Beogradu – kvarovi, iskakanje osigurača, pregorele instalacije, varničenje, zamena kablova i utičnica. Dolazak električara u roku od 60–90 minuta.";
  const url = "https://majstordex.rs/usluge/popravka-elektroinstalacija";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
      </Head>

      {/* HERO - identično kao servis-bojlera */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <h1 className="text-4xl font-bold mb-4">
            Popravka elektroinstalacija
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            MajstorDex – brzo i profesionalno otklanjanje svih elektro kvarova.
            Dolazak na lokaciju u roku od 60–90 minuta širom Beograda.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+381600500063"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow hover:bg-yellow-300 transition"
            >
              📞 Pozovi odmah
            </a>

            <a
              href="#detalji"
              className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              Pogledaj detalje
            </a>
          </div>

        </div>
      </section>

      {/* DETALJI */}
      <article
        id="detalji"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800"
      >
        <Image
          src="/images/popravka-elektroinstalacija.webp"
          alt="Popravka elektroinstalacija"
          width={1600}
          height={900}
          className="rounded-2xl w-full mb-10 shadow-lg"
        />

        <nav
          aria-label="Breadcrumb"
          className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1"
        >
          <Link href="/" className="hover:underline text-blue-600">
            Početna
          </Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">
            Usluge
          </Link>
          <span>›</span>
          <span className="font-semibold text-gray-800">
            Popravka elektroinstalacija
          </span>
        </nav>

        <h2 className="text-3xl font-bold mb-4">
          Popravka elektroinstalacija u Beogradu
        </h2>

        <p className="text-lg mb-4">
          Popravka elektroinstalacija zahteva stručnost, preciznost i potpuno
          poznavanje elektro sistema. MajstorDex obavlja sve vrste intervencija
          – od zamene kablova i utičnica do detaljne dijagnostike.
        </p>

        <p className="text-lg mb-6">
          Dolazimo širom Beograda u roku od <strong>60–90 minuta</strong>.
        </p>

        <h3 className="text-2xl font-semibold mb-3">
          Najčešći kvarovi elektroinstalacija
        </h3>

        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>iskakanje osigurača ili FID sklopke</li>
          <li>pregorele instalacije</li>
          <li>varničenje u utičnicama</li>
          <li>loši kontakti prekidača</li>
          <li>pregoreli kablovi</li>
        </ul>
      </article>
    </>
  );
}
