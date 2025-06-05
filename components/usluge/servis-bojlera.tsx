// pages/usluge/servis-bojlera.tsx

import Head from "next/head";
import Link from "next/link";

export default function ServisBojlera() {
  return (
    <>
      <Head>
        <title>Servis bojlera | MajstorDex</title>
        <meta
          name="description"
          content="Profesionalni servis bojlera u Beogradu. Brza i pouzdana usluga, dolazak 60–90 minuta."
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
          <span className="text-gray-800 font-semibold">Servis bojlera</span>
        </nav>


        {/* SEO Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Potreban vam je <strong>servis bojlera u Beogradu</strong>? MajstorDex tim
            nudi brzu i pouzdanu popravku bojlera svih modela –{" "}
            <strong>dolazak u roku od 60–90 minuta</strong>, radimo 24/7 i pokrivamo sva
            beogradska naselja.
          </p>
          <p className="mt-4">Najčešći problemi koje rešavamo uključuju:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>✔️ Ne greje vodu ili greje previše</li>
            <li>✔️ Pregoreo grejač ili termostat</li>
            <li>✔️ Bojler curi ili se čuje neobično</li>
            <li>✔️ Aktivira osigurače prilikom paljenja</li>
          </ul>
          <p className="mt-4">
            Naši električari dolaze opremljeni delovima i alatom za sve vrste bojlera:
            Ariston, Termor, Gorenje, Tesla, Metalac, Bosch i druge marke. Na licu mesta
            vršimo <strong>dijagnostiku, popravku i zamenu delova</strong>.
          </p>
          <p className="mt-4">
            Pozovite nas odmah i rešite kvar u najkraćem roku! Radimo i vikendom i
            praznicima, a <strong>garancija na ugrađene delove i rad</strong> je uključena
            u cenu.
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
