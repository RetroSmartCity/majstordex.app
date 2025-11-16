// components/usluge/led-rasveta.tsx
import Head from "next/head";
import Link from "next/link";

export default function LedRasveta() {
  return (
    <>
      <Head>
        <title>LED rasveta - prodaja i ugradnja | MajstorDex</title>
        <meta
          name="description"
          content="LED rasveta u Beogradu - prodaja i profesionalna ugradnja. Energetski efikasna i moderna rešenja za vaš dom ili poslovni prostor."
        />
        <link rel="canonical" href="https://majstordex.rs/usluge/led-rasveta" />

        {/* Open Graph */}
        <meta property="og:title" content="LED rasveta - prodaja i ugradnja | MajstorDex" />
        <meta
          property="og:description"
          content="LED rasveta u Beogradu - prodaja i profesionalna ugradnja. Energetski efikasna i moderna rešenja za vaš dom ili poslovni prostor."
        />
        <meta property="og:url" content="https://majstordex.rs/usluge/led-rasveta" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://majstordex.rs/images/led-rasveta.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LED rasveta - prodaja i ugradnja | MajstorDex" />
        <meta
          name="twitter:description"
          content="LED rasveta u Beogradu - prodaja i profesionalna ugradnja. Energetski efikasna i moderna rešenja za vaš dom ili poslovni prostor."
        />
        <meta name="twitter:image" content="https://majstordex.rs/images/led-rasveta.webp" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        {/* Breadcrumb */}
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
          <span aria-current="page" className="text-gray-800 font-semibold">
            LED rasveta - prodaja i ugradnja
          </span>
        </nav>

        {/* Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <div className="mb-6">
            <img
              src="/images/led-rasveta.webp"
              alt="LED rasveta"
              className="rounded-xl w-full shadow-lg"
            />
          </div>
          <p>
            Nudimo prodaju i profesionalnu ugradnju LED rasvete u Beogradu. Naša rešenja su
            energetski efikasna, moderna i prilagođena svakom prostoru – od stambenih do
            poslovnih objekata.
          </p>
          <p className="mt-4">
            Instaliramo plafonske LED panele, trake, zidne lampe i dekorativnu rasvetu. Fokusiramo
            se na kvalitet, dugovečnost i estetski izgled, uz profesionalnu montažu i podršku.
          </p>
        </section>

        {/* Kategorije LED rasvete */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
            Naša ponuda LED rasvete
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { naziv: "Lusteri", slug: "/proizvodi/lusteri", emoji: "💎" },
              { naziv: "Plafonjere", slug: "/proizvodi/plafonjere", emoji: "💡" },
              { naziv: "Zidne lampe", slug: "/proizvodi/zidne-lampe", emoji: "🪔" },
              { naziv: "LED aluminijumski profili", slug: "/proizvodi/led-profili", emoji: "📏" },
              { naziv: "LED za spoljnu upotrebu", slug: "/proizvodi/led-spoljna", emoji: "🌳" },
            ].map((p) => (
              <Link
                key={p.slug}
                href={p.slug}
                className="block bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{p.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900">{p.naziv}</h3>
                <p className="text-sm text-gray-600 mt-1">Pogledaj ponudu</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Zašto odabrati MajstorDex? */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto odabrati MajstorDex?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Kvalitetna LED rasveta i profesionalna ugradnja</li>
            <li>✅ Moderni i energetski efikasni proizvodi</li>
            <li>✅ Transparentne cene i bez skrivenih troškova</li>
            <li>✅ Brza i precizna montaža po dogovoru</li>
            <li>✅ Garancija na instalaciju i proizvode</li>
          </ul>
        </section>

        {/* Kontakt sekcija */}
        <section className="max-w-xl mx-auto text-center mt-10">
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p className="mb-4 text-gray-700">
            Pozovite nas ili pošaljite poruku u bilo koje doba – dostupni smo 24/7!
          </p>
          <p className="text-lg mb-2">
            📞{" "}
            <a
              href="tel:+38160500063"
              className="text-blue-600 font-semibold hover:underline"
            >
              060 0 5000 63
            </a>
          </p>
          <p className="text-lg">
            ✉️{" "}
            <a
              href="mailto:dejan@majstordex.rs"
              className="text-blue-600 font-semibold hover:underline"
            >
              dejan@majstordex.rs
            </a>
          </p>
        </section>

        {/* JSON-LD Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Početna",
                  item: "https://majstordex.rs",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Usluge",
                  item: "https://majstordex.rs/usluge",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "LED rasveta - prodaja i ugradnja",
                  item: "https://majstordex.rs/usluge/led-rasveta",
                },
              ],
            }),
          }}
        />
      </article>
    </>
  );
}
