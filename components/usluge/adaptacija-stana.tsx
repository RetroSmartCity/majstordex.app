import Head from "next/head";
import Link from "next/link";

export default function AdaptacijaStana() {
  return (
    <>
      <Head>
        <title>Kompletna adaptacija stana - Ključ u ruke | MajstorDex</title>
        <meta
          name="description"
          content="Kompletna adaptacija stanova u Beogradu 'ključ u ruke'. Profesionalni tim za renoviranje, uređenje enterijera i sve adaptacione radove."
        />
        <link rel="canonical" href="https://majstordex.rs/usluge/adaptacija-stana" />

        {/* Open Graph */}
        <meta property="og:title" content="Kompletna adaptacija stana - Ključ u ruke | MajstorDex" />
        <meta
          property="og:description"
          content="Kompletna adaptacija stanova u Beogradu 'ključ u ruke'. Profesionalni tim za renoviranje, uređenje enterijera i sve adaptacione radove."
        />
        <meta property="og:url" content="https://majstordex.rs/usluge/adaptacija-stana" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://majstordex.rs/images/adaptacija-stanova.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kompletna adaptacija stana - Ključ u ruke | MajstorDex" />
        <meta
          name="twitter:description"
          content="Kompletna adaptacija stanova u Beogradu 'ključ u ruke'. Profesionalni tim za renoviranje, uređenje enterijera i sve adaptacione radove."
        />
        <meta name="twitter:image" content="https://majstordex.rs/images/adaptacija-stanova.webp" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">
            Početna
          </Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">
            Usluge
          </Link>
          <span>›</span>
          <span aria-current="page" className="text-gray-800 font-semibold">
            Kompletna adaptacija stana - Ključ u ruke
          </span>
        </nav>

        {/* Opis usluge */}
        <section className="mb-12 text-lg leading-relaxed">
          <div className="mb-6">
            <img
              src="/images/adaptacija-stanova.webp"
              alt="Kompletna adaptacija stana"
              className="rounded-xl w-full shadow-lg"
            />
          </div>
          <p>
            Nudimo kompletne adaptacije stanova u Beogradu po sistemu "ključ u ruke". Bilo da planirate renoviranje celog stana ili samo pojedinih prostorija, naš stručni tim pruža profesionalnu uslugu od planiranja do završetka radova.
          </p>
          <p className="mt-4">
            Radimo sve vrste adaptacija: uređenje enterijera, polaganje podova, krečenje, elektro i vodoinstalaterski radovi, montaža kuhinja i sanitarija. Fokusiramo se na kvalitet, preciznost i zadovoljenje želja klijenta.
          </p>
        </section>

        {/* Zašto odabrati MajstorDex? */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto odabrati MajstorDex?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Profesionalni i iskusni majstori</li>
            <li>✅ Kompletna adaptacija stana "ključ u ruke"</li>
            <li>✅ Transparentne cene i bez skrivenih troškova</li>
            <li>✅ Brz i pouzdan dolazak i realizacija radova</li>
            <li>✅ Garancija na izvedene radove</li>
          </ul>
        </section>

        {/* Kontakt */}
        <section className="max-w-xl mx-auto text-center mt-10">
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p className="mb-4 text-gray-700">
            Pozovite nas ili pošaljite poruku u bilo koje doba – dostupni smo 24/7!
          </p>
          <p className="text-lg mb-2">
            📞{" "}
            <a href="tel:+38160500063" className="text-blue-600 font-semibold hover:underline">
              060 0 5000 63
            </a>
          </p>
          <p className="text-lg">
            ✉️{" "}
            <a href="mailto:dejan@majstordex.rs" className="text-blue-600 font-semibold hover:underline">
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
                { "@type": "ListItem", position: 1, name: "Početna", item: "https://majstordex.rs" },
                { "@type": "ListItem", position: 2, name: "Usluge", item: "https://majstordex.rs/usluge" },
                { "@type": "ListItem", position: 3, name: "Kompletna adaptacija stana - Ključ u ruke", item: "https://majstordex.rs/usluge/adaptacija-stana" },
              ],
            }),
          }}
        />
      </article>
    </>
  );
}
