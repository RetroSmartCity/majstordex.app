// pages/usluge/pranje-klime.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "@/data/cene";

export default function PranjeKlime() {
  const title =
    "Pranje klima uređaja Beograd | Profesionalna dezinfekcija | MajstorDex 24/7";
  const desc =
    "Profesionalno pranje i dezinfekcija klima uređaja u Beogradu. Dubinsko čišćenje unutrašnje jedinice, turbine i uklanjanje neprijatnih mirisa. Dolazak za 60–90 minuta.";
  const url = "https://majstordex.rs/usluge/pranje-klime";
  const ogImage = "https://majstordex.rs/images/ciscenje-klima.webp";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="service" />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/ciscenje-klima.webp"
            alt="Pranje klima uređaja Beograd - profesionalna dezinfekcija"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

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
          <span className="text-gray-800 font-semibold">Pranje klime</span>
        </nav>

        <section className="mb-12 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">
            Pranje klima uređaja u Beogradu — profesionalna dezinfekcija
          </h1>

          <p>
            Klima uređaji nakupljaju prašinu, buđ, bakterije i alergene, pogotovo kada se
            redovno ne održavaju. MajstorDex pruža profesionalno
            <strong> dubinsko pranje i dezinfekciju unutrašnje jedinice</strong>,
            uz dolazak na vašu adresu u roku od 60–90 minuta.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Šta uključuje profesionalno pranje klime?
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>Temeljno hemijsko pranje unutrašnje jedinice</li>
            <li>Dezinfekcija turbine, isparivača i tacne za kondenz</li>
            <li>Uklanjanje buđi, prašine i neprijatnih mirisa</li>
            <li>Detaljno ispiranje unutrašnje jedinice pod pritiskom</li>
            <li>Provera odvoda kondenzacije</li>
            <li>Provera ispravnosti rada klime nakon čišćenja</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Gde radimo?</h2>

          <p>
            Dolazak širom Beograda — Novi Beograd, Zemun, Voždovac, Rakovica,
            Vračar, Palilula, Zvezdara, Borča, Karaburma i ostala naselja.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Zašto je važno redovno pranje klime?
          </h2>

          <p>
            Redovno čišćenje klime poboljšava kvalitet vazduha, smanjuje neprijatne
            mirise, poboljšava protok vazduha i produžava vek uređaja.
            Preporučuje se najmanje jednom godišnje, posebno pre letnje sezone.
          </p>
        </section>

        <section className="bg-blue-50 rounded-xl p-6 shadow-md mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Korisni saveti o čišćenju klime
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Ako klima ima neprijatan miris, slabije duva ili dugo nije čišćena,
              pogledajte detaljno objašnjenje:
              {" "}
              <Link
                href="/blog/pranje-klime"
                className="text-blue-600 font-semibold hover:underline"
              >
                zašto klima ima neprijatan miris i kada je vreme za dubinsko pranje
              </Link>.
            </p>

            <p>
              Ako razmišljate o spreju, peni ili kućnom čišćenju, pročitajte:
              {" "}
              <Link
                href="/blog/sprej-za-klimu-vs-dubinsko-pranje"
                className="text-blue-600 font-semibold hover:underline"
              >
                sprej za klimu ili pravo dubinsko pranje — šta stvarno rešava problem
              </Link>.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Povezane usluge</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/usluge/servis-bojlera">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer">
                <Image
                  src="/images/servis-bojlera.webp"
                  alt="Servis bojlera"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">Servis bojlera</h3>
              </div>
            </Link>

            <Link href="/usluge/popravka-elektroinstalacija">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer">
                <Image
                  src="/images/popravka-elektroinstalacija.webp"
                  alt="Popravka elektroinstalacija"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">Popravka elektroinstalacija</h3>
              </div>
            </Link>

            <Link href="/usluge/hitne-intervencije">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer">
                <Image
                  src="/images/hitne-intervencije.webp"
                  alt="Hitne intervencije"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">Hitne intervencije 24/7</h3>
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-14">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto izabrati MajstorDex?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-xl mx-auto">
            <li>Dolazak za 60–90 minuta</li>
            <li>Profesionalna Wipcool oprema za dubinsko pranje</li>
            <li>Detaljno čišćenje turbine i unutrašnje jedinice</li>
            <li>Bezbedno i higijenski ispravno čišćenje</li>
            <li>Dostupni 24/7 — radimo i praznicima</li>
          </ul>
        </section>

        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">
            Cena pranja klima uređaja
          </h2>

          <p className="text-gray-700 mb-2 text-lg">Orijentaciona cena:</p>

          <p className="text-3xl font-bold text-yellow-600 mb-2">
            {cene.pranjeKlime}
          </p>

          <p className="text-sm text-gray-600">
            Tačna cena nakon pregleda — pozovite nas, dostupni 0–24!
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Često postavljana pitanja</h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Koliko traje pranje klima uređaja?
              </summary>
              <p className="mt-2">Najčešće 30–45 minuta po uređaju.</p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li je sprej za klimu dovoljan?
              </summary>
              <p className="mt-2">
                Sprej može kratko da ublaži miris, ali ne može detaljno da opere turbinu
                i unutrašnju jedinicu kao profesionalno dubinsko pranje.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Kada treba prati klimu?
              </summary>
              <p className="mt-2">
                Pre početka letnje sezone i najmanje jednom godišnje, posebno ako klima
                ima neprijatan miris ili slabije duva.
              </p>
            </details>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Početna", item: "https://majstordex.rs" },
                  { "@type": "ListItem", position: 2, name: "Usluge", item: "https://majstordex.rs/usluge" },
                  { "@type": "ListItem", position: 3, name: "Pranje klime", item: url },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Pranje klima uređaja Beograd",
                description: desc,
                provider: {
                  "@type": "LocalBusiness",
                  name: "MajstorDex",
                  telephone: "+381600500063",
                  url: "https://majstordex.rs",
                  areaServed: "Beograd",
                },
                image: ogImage,
                serviceType: "Pranje klima uređaja",
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Koliko traje pranje klima uređaja?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Pranje klime traje u proseku 30–45 minuta.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Da li je sprej za klimu dovoljan?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sprej može kratko da ublaži miris, ali ne može detaljno da opere turbinu i unutrašnju jedinicu kao profesionalno dubinsko pranje.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Kada treba prati klimu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Pre letnje sezone i najmanje jednom godišnje, posebno ako klima ima neprijatan miris ili slabije duva.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </article>
    </>
  );
}