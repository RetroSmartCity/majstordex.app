// pages/usluge/pranje-klime.tsx

import Head from "next/head";
import Link from "next/link";

export default function PranjeKlime() {
  return (
    <>
      <Head>
        <title>Pranje klime | MajstorDex</title>
        <meta
          name="description"
          content="Profesionalno pranje i dezinfekcija klima uređaja u Beogradu. Brzo, temeljno i efikasno."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">Početna</Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">Usluge</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Pranje klime</span>
        </nav>

        {/* Naslov */}

        {/* Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Redovno pranje klima uređaja je važno za zdravlje i efikasnost rada.
            Naš tim koristi profesionalna sredstva i opremu za dubinsko
            čišćenje i dezinfekciju.
          </p>
          <p className="mt-4">
            Uslugu vršimo na teritoriji celog Beograda, uz dolazak u roku od
            60–90 minuta. Obezbedite čist i zdrav vazduh u svom domu ili kancelariji.
          </p>
        </section>

        {/* SEO tekst */}
        <section className="mb-12 text-base leading-relaxed text-gray-700">
          <h2 className="text-xl font-semibold mb-4">Pranje klima uređaja – zašto je važno?</h2>
          <p>
            Klima uređaji sakupljaju prašinu, polen, buđ i bakterije koje se bez redovnog čišćenja vraćaju u vazduh koji udišete...
          </p>
          <p className="mt-4">
            MajstorDex nudi profesionalno pranje i dezinfekciju klime po pristupačnim cenama...
          </p>
          <p className="mt-4">
            Bilo da se nalazite na Zvezdari, Novom Beogradu, Voždovcu ili u centru grada – dolazimo brzo i radimo temeljno...
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
            <li>✅ Korišćenje specijalizovanih sredstava i alata</li>
            <li>✅ Garancija na higijensku ispravnost nakon pranja</li>
            <li>✅ Ljubazna i profesionalna usluga</li>
          </ul>
        </section>
      </main>
    </>
  );
}
