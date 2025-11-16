// pages/index.tsx
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";
import { getAllPosts } from "@/lib/blog";

const Benefits = dynamic(() => import("@/components/Benefits"), { ssr: false });

/* ---------------- HERO PREČICE (APPLE STYLE) ---------------- */

const heroUsluge = [
  {
    key: "led",
    title: "LED rasveta",
    desc: "Profesionalna ugradnja LED rasvete — plafonske, zidne, trake, profili.",
    slug: "led-rasveta",
    icon: "💡",
  },
  {
    key: "ta",
    title: "Popravka TA peći",
    desc: "Brza dijagnostika i zamena grejača, termostata, sklopki i ventilatora.",
    slug: "popravka-ta-peci",
    icon: "🔥",
  },
  {
    key: "bojler",
    title: "Servis bojlera",
    desc: "Zamena grejača, termostata, ventila i kompletno održavanje bojlera.",
    slug: "servis-bojlera",
    icon: "🚿",
  },
  {
    key: "hitne",
    title: "Hitne elektro intervencije",
    desc: "Dolazak majstora za 60–90 minuta. Dostupno 24/7.",
    slug: "hitne-intervencije",
    icon: "⚡",
  },
  {
    key: "struja",
    title: "Popravka elektroinstalacija",
    desc: "Popravka osigurača, utičnica, prekidača i svih elektro instalacija.",
    slug: "popravka-elektroinstalacija",
    icon: "🔧",
  },
  {
    key: "adaptacija",
    title: "Adaptacija stana",
    desc: "Kompletna adaptacija — rušenje, instalacije, keramika, završni radovi.",
    slug: "adaptacija-stana",
    icon: "🏠",
  },
];

/* ---------------- KARTICE USLUGA ---------------- */

const usluge = [
  {
    slug: "adaptacija-stana",
    img: "/images/adaptacija-stanova.webp",
    title: "Kompletna adaptacija stana",
    desc: "Adaptacije, rušenje zidova, vodovod, struja, pločice, moleraj, rasveta.",
  },
  {
    slug: "led-rasveta",
    img: "/images/led-rasveta.webp",
    title: "LED rasveta",
    desc: "Prodaja i montaža LED rasvete. Energetski efikasna rešenja.",
  },
  {
    slug: "popravka-elektroinstalacija",
    img: "/images/popravka-elektroinstalacija.webp",
    title: "Popravka elektroinstalacija",
    desc: "Popravka utičnica, prekidača, kablova i elektro elemenata.",
  },
  {
    slug: "servis-bojlera",
    img: "/images/servis-bojlera.webp",
    title: "Servis bojlera",
    desc: "Popravka grejača, termostata i čišćenje bojlera.",
  },
  {
    slug: "popravka-ta-peci",
    img: "/images/popravka-ta-peci.webp",
    title: "Popravka TA peći",
    desc: "Zamena grejača, termostata i kontakta.",
  },
  {
    slug: "pranje-klime",
    img: "/images/ciscenje-klima.webp",
    title: "Čišćenje klima uređaja",
    desc: "Dubinsko pranje Wipcool opremom.",
  },
  {
    slug: "zamena-osiguraca-i-uticnica",
    img: "/images/zamena-osigraca-i-uticnica.webp",
    title: "Zamena osigurača i utičnica",
    desc: "Ugradnja osigurača i elektrogalanterije.",
  },
  {
    slug: "hitne-intervencije",
    img: "/images/hitne-intervencije.webp",
    title: "Hitne intervencije 0-24",
    desc: "Dolazak u roku od 60–90 min svakog dana.",
  },
];

const naselja = [
  "stari-grad", "savski-venac", "vracar", "novi-beograd",
  "zemun", "cukarica", "vozdovac", "palilula", "rakovica", "zvezdara",
];

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 3);
  return { props: { posts } };
}

/* ---------------- PAGE ---------------- */

export default function HomePage({ posts }) {
  const [active, setActive] = useState(heroUsluge[0].key);
  const current = heroUsluge.find((u) => u.key === active);

  return (
    <>
      {/* SEO */}
      <SEO
        title="MajstorDex - Hitne Elektro Intervencije 24/7 Beograd"
        description="Hitne intervencije, servis bojlera, TA peći, LED rasveta, popravka elektroinstalacija i čišćenje klima. Dolazak 60–90 minuta širom Beograda."
        url="https://majstordex.rs"
        image="/images/pozadinaHero.jpg"
        keywords={[
          "električar beograd", "hitne elektro intervencije",
          "servis bojlera", "popravka TA peći", "LED rasveta",
          "popravka elektroinstalacija", "čišćenje klima", "majstor beograd"
        ]}
      />

      {/* ---------------- HERO SEKCIJA ---------------- */}
     {/* ---------------- HERO SEKCIJA ---------------- */}
<section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

  {/* POZADINA */}
  <Image
    src="/images/pozadinaHero.webp"
    alt="MajstorDex - elektro usluge"
    fill
    className="object-cover object-center"
    priority
  />

  {/* GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

  {/* SADRŽAJ HERO SEKCIJE */}
  <div className="relative z-20 w-full px-4 max-w-3xl mx-auto text-center">

    {/* 🔵 IKONICE — SADA SPUŠTENE I PROPORCIONALNE */}
    <div className="mt-20 mb-12 grid grid-cols-3 sm:grid-cols-6 gap-6 justify-center">
      {heroUsluge.map((u) => (
        <button
          key={u.key}
          onClick={() => setActive(u.key)}
          className={`flex flex-col items-center transition
            ${active === u.key ? "scale-110" : "opacity-90 hover:scale-105"}
          `}
        >
          <div className={`
            h-16 w-16 flex items-center justify-center rounded-full shadow-lg border-2
            ${active === u.key ? "bg-yellow-400 border-yellow-500 text-black" : "bg-white/90 border-gray-300"}
          `}>
            <span className="text-3xl">{u.icon}</span>
          </div>

          <span className="text-white text-xs mt-3 leading-tight drop-shadow-lg">
            {u.title}
          </span>
        </button>
      ))}
    </div>

    {/* KARTICA SA OPISOM USLUGE */}
    <div className="
      bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-200 
      mx-auto max-w-xl min-h-[260px]
      flex flex-col justify-between
    ">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {current.title}
        </h1>

        <p className="text-gray-700 text-base leading-relaxed">
          {current.desc}
        </p>
      </div>

      {/* DUGMIĆI */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <a
          href="tel:+381600500063"
          className="bg-yellow-400 text-black font-semibold py-3 px-10 rounded-lg 
          hover:bg-yellow-500 transition shadow-lg text-lg"
        >
          📞 Pozovi odmah
        </a>

        <Link
          href={`/usluge/${current.slug}`}
          className="bg-white border border-gray-400 text-gray-900 font-semibold py-3 px-10 
          rounded-lg hover:bg-gray-100 transition shadow-lg text-lg"
        >
          📘 Saznaj više
        </Link>
      </div>
    </div>

  </div>
</section>


      {/* BENEFITI */}
      <Benefits />

      {/* USLUGE */}
      <section id="usluge" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Usluge koje nudimo</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {usluge.map((u) => (
              <Link
                key={u.slug}
                href={`/usluge/${u.slug}`}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl transition block text-center"
              >
                <Image
                  src={u.img}
                  alt={u.title}
                  width={220}
                  height={160}
                  className="object-cover rounded-lg mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{u.title}</h3>
                <p className="text-gray-800 text-sm">{u.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NASELJA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">Pokrivamo naselja u Beogradu</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {naselja.map((slug) => {
              const naziv = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition"
                >
                  {naziv}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Najnoviji saveti i vesti</h2>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline text-lg font-medium"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Kontakt</h2>
          <p className="mb-4 text-gray-700">Pozovi nas — dostupni smo 24/7!</p>

          <div className="text-lg mb-4">
            📞{" "}
            <a href="tel:+381600500063" className="text-blue-600 hover:underline font-semibold">
              060 0 5000 63
            </a>
          </div>

          <div className="text-lg mb-4">
            <a href="mailto:dejan@majstordex.rs" className="text-blue-600 hover:underline font-semibold">
              dejan@majstordex.rs
            </a>
          </div>

          <div className="text-sm text-gray-500">
            Radimo 24/7 na teritoriji celog Beograda.
          </div>
        </div>
      </section>
    </>
  );
}
