// pages/usluge/zamena-osiguraca-i-uticnica.tsx

import Head from "next/head";
import Link from "next/link";

export default function ZamenaOsiguracaIUticnica() {
  return (
    <>   
      <Head>
        <title>Zamena osigurača i utičnica | MajstorDex</title>
        <meta
          name="description"
          content="Brza i profesionalna zamena osigurača i utičnica u Beogradu. Hitne elektro intervencije dostupne 24/7. Pozovite MajstorDex za sigurnost u vašem domu!"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <nav className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">Početna</Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">Usluge</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Zamena osigurača i utičnica</span>
        </nav>


        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Osigurači i utičnice su ključni delovi elektroinstalacija i njihova
            ispravnost direktno utiče na bezbednost vašeg doma ili poslovnog prostora.
          </p>
          <p className="mt-4">
            MajstorDex nudi uslugu brze i profesionalne zamene osigurača i utičnica
            na celoj teritoriji Beograda...
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Pregoreli ili neispravni osigurači</li>
            <li>Iskakanje struje pri uključivanju uređaja</li>
            <li>Pregrijavanje utičnica i neispravni kontakti</li>
            <li>Stare, labave ili napukle utičnice</li>
            <li>Modernizacija elektroinstalacije u starim objektima</li>
          </ul>
          <p className="mt-4">
            Intervencije vršimo u svim beogradskim opštinama...
          </p>
          <p className="mt-4">
            Ne odlažite zamenu dotrajalih elektro komponenti – pozovite nas...
          </p>
        </section>

        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto izabrati MajstorDex?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Brz dolazak – najčešće u roku od 60-90 minuta</li>
            <li>✅ Iskusni majstori i bezbedan rad sa strujom</li>
            <li>✅ Cene unapred poznate – bez skrivenih troškova</li>
            <li>✅ Garancija na sve izvedene radove</li>
            <li>✅ Dostupni 0-24, uključujući vikende i praznike</li>
          </ul>
        </section>
      </main>
    </>
  );
}
