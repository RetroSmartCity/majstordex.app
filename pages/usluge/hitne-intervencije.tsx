import Head from "next/head";
import Link from "next/link";
//import Footer from "../../components/Footer";

export default function HitneIntervencije() {
  return (
    <>
      <Head>
        <title>Hitne intervencije | MajstorDex</title>
        <meta
          name="description"
          content="Hitne elektro intervencije u Beogradu – dostupni 24/7, dolazak u roku od 60-90 minuta. Iskusni električari rešavaju kvarove bezbedno i pouzdano."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <nav className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">Početna</Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">Usluge</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Hitne intervencije</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Hitne elektro intervencije 0-24
        </h1>

        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Hitne elektro intervencije u Beogradu zahtevaju brzu reakciju, pouzdanost i
            profesionalan pristup. Kvarovi na elektroinstalacijama mogu ugroziti bezbednost
            ukućana i izazvati štetu na uređajima. Zato je važno da pozovete stručnjaka čim
            primetite problem.
          </p>

          <p className="mt-4">
            Naš tim iskusnih električara dolazi na lice mesta najčešće u roku od 60-90 minuta,
            bilo da se nalazite na <strong>Novi Beograd</strong>, <strong>Zvezdari</strong>,
            <strong>Voždovcu</strong>, <strong>Paliluli</strong> ili bilo kojoj drugoj opštini u Beogradu.
            Radimo non-stop, uključujući <strong>vikende, noći i praznike</strong>.
          </p>

          <p className="mt-4">
            Bilo da vam je u stanu nestala struja, iskočio osigurač, osetite miris paljevine iz
            utičnice, ili jednostavno ne radi svetlo u kupatilu – naš tim dolazi brzo i rešava problem
            na licu mesta.
          </p>

          <p className="mt-4">
            Najčešći razlozi za hitne intervencije:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Kratak spoj ili varničenje u instalacijama</li>
            <li>Nagli nestanak struje u celom stanu ili objektu</li>
            <li>Pregoreli osigurač ili elektro-tabla bez napajanja</li>
            <li>Iskakanje diferencijalne zaštite (FID sklopke)</li>
            <li>Pregrejavanje i dim iz utičnica, prekidača ili rasvete</li>
          </ul>

          <p className="mt-4">
            Sve intervencije se obavljaju stručno i uz poštovanje bezbednosnih procedura. Uvek nosimo
            odgovarajuću opremu, merne uređaje i rezervne delove za najčešće kvarove, kako bi sve bilo
            rešeno u jednom dolasku.
          </p>

          <p className="mt-4">
            Ako tražite pouzdanog električara za hitne intervencije u Beogradu, pozovite MajstorDex.
            Naš cilj je da u najkraćem roku osiguramo da vaša instalacija bude bezbedna i potpuno funkcionalna.
          </p>
        </section>

        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto pozvati MajstorDex u hitnim situacijama?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Brz dolazak u svim delovima Beograda</li>
            <li>✅ Majstori dostupni 0-24, bez obzira na dan</li>
            <li>✅ Pouzdana i bezbedna dijagnostika kvarova</li>
            <li>✅ Transparentna cena i bez dodatnih troškova</li>
            <li>✅ Sve intervencije uz garanciju na rad</li>
          </ul>
        </section>
      </main>

   
    </>
  );
}
