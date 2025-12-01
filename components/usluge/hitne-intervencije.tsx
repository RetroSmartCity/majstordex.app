// components/usluge/hitne-intervencije.tsx
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { cene } from "@/data/cene";

export default function HitneIntervencije() {
  const title =
    "Hitne elektro intervencije 0–24 Beograd | Električar | MajstorDex";
  const desc =
    "Hitne elektro intervencije 0–24 u Beogradu – kratki spoj, pregoreli osigurači, varničenje, miris paljevine, nestanak struje. Dolazak električara u roku od 30–60 minuta, dostupni 24/7.";
  const url = "https://majstordex.rs/usluge/hitne-intervencije";

  return (
    <>
      <Head>
        {/* ---------------------- SEO ---------------------- */}
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* OG */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://majstordex.rs/images/hitne-intervencije.webp"
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="service" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta
          name="twitter:image"
          content="https://majstordex.rs/images/hitne-intervencije.webp"
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
        {/* ------------------------------------------------ */}
        {/* HERO SLIKA – ista logika kao ostale usluge       */}
        {/* ------------------------------------------------ */}
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/hitne-intervencije.webp"
            alt="Hitne elektro intervencije 0–24 Beograd - MajstorDex"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ------------------------------------------------ */}
        {/* Breadcrumb                                       */}
        {/* ------------------------------------------------ */}
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
            Hitne elektro intervencije 0–24
          </span>
        </nav>

        {/* ------------------------------------------------ */}
        {/* OPIS USLUGE                                      */}
        {/* ------------------------------------------------ */}
        <section className="mb-12 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">
            Hitne elektro intervencije 0–24 u Beogradu
          </h1>

          <p>
            Hitne elektro intervencije zahtevaju brzu reakciju i profesionalnu
            dijagnostiku. MajstorDex izlazi na teren kada dođe do kratkog spoja,
            pregorelih osigurača, varničenja, mirisa paljevine ili potpunog
            nestanka struje u stanu ili poslovnom prostoru.
          </p>

          <p className="mt-3">
            Na raspolaganju smo 0–24, radnim danima, vikendom i praznicima.
            Dolazak na adresu širom Beograda obično je u roku od{" "}
            <strong>30–60 minuta</strong>, u zavisnosti od lokacije i gužve u
            saobraćaju.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Kada pozvati hitnu elektro službu?
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>kratki spoj i ispadanje osigurača pri svakom uključenju</li>
            <li>pregoreo ili istopljen osigurač / automatska sklopka</li>
            <li>miris paljevine iz razvodne table ili utičnice</li>
            <li>varničenje pri uključenju uređaja (šporet, TA peć, bojler…)</li>
            <li>delimičan ili potpuni nestanak struje u stanu</li>
            <li>iskakanje FID sklopke bez vidljivog razloga</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Na kojim lokacijama radimo?
          </h2>
          <p>
            Hitne intervencije radimo na celoj teritoriji Beograda – Novi
            Beograd, Zemun, Zvezdara, Vračar, Stari Grad, Rakovica, Voždovac,
            Čukarica, Palilula i ostala naselja.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Kako izgleda dolazak majstora?
          </h2>
          <p>
            Nakon poziva ukratko proveravamo simptome, dolazimo na lokaciju,
            radimo dijagnostiku, pronalazimo uzrok kvara i otklanjamo problem uz
            maksimalnu brigu o bezbednosti instalacije i uređaja.
          </p>
        </section>

        {/* ------------------------------------------------ */}
        {/* Povezane usluge – 3 kartice sa slikama          */}
        {/* (ovde namerno NEMA „hitne-intervencije“)         */}
        {/* ------------------------------------------------ */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Povezane usluge
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/usluge/popravka-elektroinstalacija">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/popravka-elektroinstalacija.webp"
                  width={300}
                  height={200}
                  alt="Popravka elektroinstalacija"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">
                  Popravka elektroinstalacija
                </h3>
              </div>
            </Link>

            <Link href="/usluge/servis-bojlera">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/servis-bojlera.webp"
                  width={300}
                  height={200}
                  alt="Servis bojlera"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">Servis bojlera</h3>
              </div>
            </Link>

            <Link href="/usluge/zamena-osiguraca-i-uticnica">
              <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center">
                <Image
                  src="/images/zamena-osigraca-i-uticnica.webp"
                  width={300}
                  height={200}
                  alt="Zamena osigurača i utičnica"
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">
                  Zamena osigurača i utičnica
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* ------------------------------------------------ */}
        {/* ZAŠTO MAJSTORDEX                                 */}
        {/* ------------------------------------------------ */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-14">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto izabrati MajstorDex za hitne intervencije?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-xl mx-auto">
            <li>Dolazak na adresu u roku od 30–60 minuta</li>
            <li>Iskusni električari sa višegodišnjim iskustvom</li>
            <li>Profesionalna dijagnostika i brzo otklanjanje kvara</li>
            <li>Radimo 0–24 – radni dani, vikendi i praznici</li>
            <li>Jasno dogovorena cena pre izvođenja radova</li>
          </ul>
        </section>

        {/* ------------------------------------------------ */}
        {/* CENA USLUGE                                      */}
        {/* ------------------------------------------------ */}
        <section className="bg-yellow-50 rounded-xl p-6 shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-800">
            Cena hitnih elektro intervencija
          </h2>

          <p className="text-gray-700 mb-2 text-lg">
            Orijentaciona cena izlaska na teren:
          </p>
          <p className="text-3xl font-bold text-yellow-600 mb-2">
            {cene.hitneIntervencije}
          </p>

          <p className="text-sm text-gray-600">
            Konačna cena zavisi od složenosti kvara i utrošenog materijala.
            Najbolje je da nas pozovete i ukratko opišete problem – dostupni
            smo 0–24.
          </p>
        </section>

        {/* ------------------------------------------------ */}
        {/* FAQ                                              */}
        {/* ------------------------------------------------ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Često postavljana pitanja
          </h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Koliko brzo možete da dođete na intervenciju?
              </summary>
              <p className="mt-2">
                U većini delova Beograda dolazak je u roku od 30–60 minuta od
                poziva, u zavisnosti od lokacije i trenutne gužve u saobraćaju.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Da li radite hitne intervencije noću i vikendom?
              </summary>
              <p className="mt-2">
                Da. MajstorDex radi 0–24, svih 7 dana u nedelji, uključujući
                vikende i praznike.
              </p>
            </details>

            <details className="p-4 border rounded-lg bg-gray-50">
              <summary className="font-semibold cursor-pointer">
                Šta da uradim dok čekam majstora?
              </summary>
              <p className="mt-2">
                Ako osećate miris paljevine ili vidite varnice, isključite
                glavni osigurač ili FID sklopku, ne dirajte mokrim rukama
                instalaciju i ne pokušavajte sami popravku ako niste
                stručni za rad sa strujom.
              </p>
            </details>
          </div>
        </section>

        {/* ------------------------------------------------ */}
        {/* JSON-LD: Breadcrumb + Service + FAQPage          */}
        {/* ------------------------------------------------ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
                    name: "Hitne elektro intervencije 0–24",
                    item: url,
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Hitne elektro intervencije 0–24 Beograd",
                provider: {
                  "@type": "LocalBusiness",
                  name: "MajstorDex",
                  telephone: "+381600500063",
                  areaServed: "Beograd",
                  url: "https://majstordex.rs",
                },
                description: desc,
                serviceType: "Hitne elektro intervencije",
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Koliko brzo možete da dođete na intervenciju?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "U većini delova Beograda dolazak je u roku od 30–60 minuta od poziva, u zavisnosti od lokacije i saobraćaja.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Da li radite hitne intervencije noću i vikendom?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Da, MajstorDex radi 0–24, svih 7 dana u nedelji, uključujući vikende i praznike.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Šta da uradim dok čekam majstora?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Isključite glavni osigurač ili FID sklopku, ne dirajte instalaciju mokrim rukama i ne pokušavajte samostalnu popravku ako niste stručni za rad sa strujom.",
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