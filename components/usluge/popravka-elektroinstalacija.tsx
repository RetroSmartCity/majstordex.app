// pages/usluge/popravka-elektroinstalacija.tsx

import Head from "next/head";
import Link from "next/link";

export default function PopravkaElektroinstalacija() {
  return (
    <>
      <Head>
        <title>Popravka elektroinstalacija | MajstorDex</title>
        <meta
          name="description"
          content="Stručna popravka elektroinstalacija u Beogradu. Hitne intervencije, dolazak u roku od 60-90 minuta. Dostupni 24/7."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">Početna</Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">Usluge</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Popravka elektroinstalacija</span>
        </nav>

        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Imate kvar na elektroinstalaciji? Naši električari brzo izlaze na teren i
            rešavaju problem – bezbedno i profesionalno...
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
            Zašto odabrati MajstorDex?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Brz dolazak – najčešće u roku od 60-90 minuta</li>
            <li>✅ Iskusni električari i kvalitetna dijagnostika</li>
            <li>✅ Poštovanje svih bezbednosnih standarda</li>
            <li>✅ Pristupačne cene bez skrivenih troškova</li>
            <li>✅ 24/7 dostupnost za hitne slučajeve</li>
          </ul>
        </section>
      </main>
    </>
  );
}
