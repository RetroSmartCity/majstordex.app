import Head from "next/head";
import Link from "next/link";

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

        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Hitne elektro intervencije u Beogradu zahtevaju brzu reakciju, pouzdanost i
            profesionalan pristup...
          </p>
                   <p className="mt-4">
            Specijalizovani smo za sve vrste elektro kvarova:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Rešavanje kratkih spojeva i prekida napajanja</li>
            <li>Detekcija i zamena oštećenih kablova</li>
            <li>Ugradnja i zamena osigurača i automatskih sklopki</li>
            <li>Zamena starih i dotrajalih elektroinstalacija</li>
            <li>Popravka razvodnih kutija, prekidača i utičnica</li>
          </ul>
          <p className="mt-4">
            Bilo da se radi o stanu, kući, lokalu ili poslovnom prostoru...
          </p>
          <p className="mt-4">
            Radimo na teritoriji celog Beograda, uključujući Voždovac, Novi Beograd...
          </p>
          <p className="mt-4">
            Kontaktirajte nas odmah ukoliko sumnjate na kvar...
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
