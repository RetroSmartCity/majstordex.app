import Head from "next/head";
import Link from "next/link";

export default function MonitoringTemperatureApoteke() {
  return (
    <>
      <Head>
        <title>Monitoring temperature za apoteke | ColdControl</title>
        <meta
          name="description"
          content="Automatsko praćenje temperature za apoteke, frižidere i skladišta. Evidencija, alarmi i izveštaji spremni za inspekciju."
        />
        <link rel="canonical" href="https://majstordex.rs/monitoring-temperature-apoteke" />
      </Head>

      <main className="bg-white text-gray-900">
        <section className="bg-slate-950 text-white px-4 py-20 text-center">
          <p className="text-yellow-400 font-semibold mb-3">
            ColdControl by MajstorDex
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Monitoring temperature za apoteke
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Automatska evidencija temperature za frižidere, magacine i lokale.
            Podaci se čuvaju, alarmi stižu na vreme, a izveštaji su spremni za inspekciju.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://coldcontrol.app"
              target="_blank"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500"
            >
              Pogledaj sistem
            </a>

            <a
              href="tel:+381600500063"
              className="bg-white text-slate-950 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
            >
              Zakazati demo
            </a>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <h2 className="text-xl font-bold mb-3">🌡️ Stalno merenje</h2>
              <p>Sistem automatski beleži temperaturu bez ručnog upisivanja.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <h2 className="text-xl font-bold mb-3">🚨 Alarmi</h2>
              <p>Kada temperatura izađe iz dozvoljenog opsega, korisnik dobija obaveštenje.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <h2 className="text-xl font-bold mb-3">📄 Izveštaji</h2>
              <p>Podaci se čuvaju i mogu se prikazati kada dođe inspekcija.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Za apoteke, laboratorije i firme
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              ColdControl pomaže firmama da imaju urednu evidenciju temperature bez papira,
              sveski i ručnog zapisivanja.
            </p>

            <ul className="text-left max-w-xl mx-auto space-y-3 text-gray-800">
              <li>✅ apoteke sa frižiderima za lekove</li>
              <li>✅ lanci apoteka sa više lokacija</li>
              <li>✅ laboratorije i ordinacije</li>
              <li>✅ magacini i hladne komore</li>
              <li>✅ firme kojima treba dokaziva evidencija temperature</li>
            </ul>
          </div>
        </section>

        <section className="bg-yellow-400 px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hoćete da vidite kako radi?
          </h2>

          <p className="mb-8">
            Pozovite nas i zakazaćemo kratak demo.
          </p>

          <a
            href="tel:+381600500063"
            className="inline-block bg-black text-yellow-400 px-8 py-3 rounded-lg font-bold"
          >
            📞 060 0 5000 63
          </a>
        </section>

        <section className="px-4 py-10 text-center">
          <Link href="/" className="text-blue-600 underline">
            ← Nazad na MajstorDex
          </Link>
        </section>
      </main>
    </>
  );
}