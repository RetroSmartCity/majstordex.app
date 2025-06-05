// pages/usluge/popravka-ta-peci.tsx

import Head from "next/head";
import Link from "next/link";

export default function PopravkaTaPeci() {
  return (
    <>
      <Head>
        <title>Popravka TA peći | MajstorDex</title>
        <meta
          name="description"
          content="Profesionalna popravka TA peći u Beogradu. Brza i kvalitetna usluga sa dolaskom u roku od 60–90 minuta."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">
            Početna
          </Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">
            Usluge
          </Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Popravka TA peći</span>
        </nav>

        {/* Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            TA (termoakumulacione) peći su odličan izbor za grejanje prostora, ali s vremenom mogu doći do kvara grejača, termostata, automatskog osigurača ili termičke zaštite. Naš tim stručno i efikasno dijagnostikuje problem i obavlja sve vrste popravki na TA pećima, bez obzira na model i proizvođača.
          </p>
          <div className="mt-4">
            <p>Popravljamo:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Kvarove na grejačima</li>
              <li>Neispravan termostat</li>
              <li>Zamenu kablova i klema</li>
              <li>Pregorele sklopke i osigurače</li>
              <li>Peći koje se ne pune strujom ili ne greju</li>
              <li>Zamenu ventilatora na TA peći</li>
            </ul>
          </div>
          <p className="mt-4">
            MajstorDex nudi uslugu popravke TA peći na teritoriji celog Beograda – uključujući Zemun, Novi Beograd, Voždovac, Zvezdaru, Palilulu i druga naselja. Dolazak majstora u roku od 60–90 minuta ili po dogovoru.
          </p>
          <p className="mt-4">
            TA peć koja ne radi kako treba ne samo da troši više struje, već može predstavljati i sigurnosni rizik. Ne čekajte – kontaktirajte nas već danas i omogućite svom prostoru sigurnu i efikasnu grejnu podršku.
          </p>
        </section>

        {/* Zašto odabrati MajstorDex? */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto odabrati MajstorDex?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Dolazak u roku od 60–90 minuta širom Beograda</li>
            <li>✅ Iskusni i pouzdani majstori sa višegodišnjim iskustvom</li>
            <li>✅ Transparentne cene i bez skrivenih troškova</li>
            <li>✅ Garancija na ugrađene delove i rad</li>
            <li>✅ Dostupnost 24/7 za hitne intervencije</li>
          </ul>
        </section>
      </main>
    </>
  );
}
