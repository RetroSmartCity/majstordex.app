import Image from 'next/image';
import Link from 'next/link';
import Benefits from '../components/Benefits';
import Header from "@/components/Footer";
import Footer from "@/components/Footer";


export default function HomePage() {
  const usluge = [
    {
      slug: 'popravka-elektroinstalacija',
      icon: '💡',
      title: 'Popravka elektroinstalacija',
      desc: 'Zamena prekidača, kablova, osigurača i drugih elektro elemenata.',
    },
    {
      slug: 'servis-bojlera',
      icon: '🚿',
      title: 'Servis bojlera',
      desc: 'Zamena grejača, termostata i profesionalno čišćenje bojlera.',
    },
    {
      slug: 'popravka-ta-peci',
      icon: '🔥',
      title: 'Popravka TA peći',
      desc: 'Brza dijagnostika i zamena grejača, termostata i kontakta.',
    },
    {
      slug: 'pranje-klime',
      icon: '🧊',
      title: 'Čišćenje klima uređaja',
      desc: 'Dubinsko pranje, dezinfekcija i održavanje unutrašnje jedinice.',
    },
    {
      slug: 'zamena-osiguraca-i-uticnica',
      icon: '🔌',
      title: 'Zamena osigurača i utičnica',
      desc: 'Montaža sigurnosnih utičnica, osigurača i rasvete.',
    },
    {
      slug: 'hitne-intervencije',
      icon: '🔧',
      title: 'Hitne intervencije 0-24',
      desc: 'Dolazak na teren u roku od 60-90 minuta, svakog dana u nedelji.',
    },
  ];

  const naselja = [
    'stari-grad',
    'savski-venac',
    'vracar',
    'novi-beograd',
    'zemun',
    'cukarica',
    'vozdovac',
    'palilula',
    'rakovica',
    'zvezdara',
  ];

  return (
    <>
     

      {/* HERO SEKCIJA */}
      <section
        className="flex items-center justify-center min-h-screen px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pozadinaHero.jpg')" }}
      >
        <div className="bg-white/80 p-8 rounded-xl shadow-md text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Majstor Dex
            <br />
            <span className="animate-pulse text-yellow-500">
              Hitne intervencije
            </span>
          </h1>
          <p className="text-lg mb-6 text-gray-800">
            Brz dolazak na lice mesta – najčešće u roku od{' '}
            <strong>60 do 90 minuta</strong>!
          </p>
          <a
            href="tel:+381600500063"
            className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition shadow-md"
          >
            📞 Pozovi Dejana: 060 0 5000 63
          </a>
        </div>
      </section>

      <Benefits />

      {/* USLUGE */}
      <section id="usluge" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            Usluge koje nudimo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {usluge.map(({ slug, icon, title, desc }) => (
              <Link
                key={slug}
                href={`/usluge/${slug}`}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition block h-full"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NASELJA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="w-full-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">
            Pokrivamo sledeća naselja u Beogradu
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            {naselja.map((slug) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition"
              >
                {slug
                  .replace('-', ' ')
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Kontakt</h2>
          <p className="mb-4 text-gray-700">
            Pozovi nas ili pošalji poruku u bilo koje doba — dostupni smo 24/7!
          </p>
          <div className="text-lg mb-4">
            📞{' '}
            <a
              href="tel:+381641234567"
              className="text-blue-600 hover:underline font-semibold"
            >
              060 0 5000 63
            </a>
          </div>
          <div className="text-lg mb-4">
            ✉️{' '}
            <a
              href="mailto:dejan@majstordex.rs"
              className="text-blue-600 hover:underline font-semibold"
            >
             dejan@majstordex.rs
            </a>
          </div>
          <div className="text-sm text-gray-500">
            Radimo na teritoriji celog Beograda, 24 časa dnevno, svih 7 dana u
            nedelji.
          </div>
        </div>
      </section>

    </>
  );
}
