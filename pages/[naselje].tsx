// pages/[naselje].tsx

import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// Lista svih naselja
const naselja = [
  "stari-grad",
  "savski-venac",
  "vracar",
  "novi-beograd",
  "zemun",
  "cukarica",
  "vozdovac",
  "palilula",
  "rakovica",
  "zvezdara",
];

// Opis svakog naselja – 150–200 reči
const seoText: Record<string, string> = {
  "stari-grad": `Stari Grad je srce Beograda, prepoznatljiv po starim zgradama, uskim ulicama i objektima koji često imaju dotrajale instalacije. U ovom delu grada česti su problemi sa osiguračima, pregorelim instalacijama, starim prekidačima i kvarovima koji zahtevaju hitnu intervenciju. MajstorDex pruža kompletne električarske usluge — od popravke elektroinstalacija, zamene osigurača i utičnica, preko servisa bojlera i TA peći, do ugradnje moderne LED rasvete. Dolazak u roku od 60–90 minuta i dostupnost 0–24 čine nas idealnim izborom za sve koji žive ili rade u ovom starinskom, prometnom naselju. Bilo da je u pitanju stan u staroj zgradi, lokal ili poslovni prostor, rešavamo kvar brzo, stručno i pouzdano.`,
  
  "savski-venac": `Savski Venac je kombinacija starijih zgrada, ambasada, poslovnih objekata i elitnog stanovanja, što donosi specifične potrebe kada je reč o elektroinstalacijama. U ovom kraju često se susreću i stare instalacije i novi, moderni sistemi rasvete. MajstorDex obezbeđuje brzu i profesionalnu pomoć — od zamene utičnica i prekidača, hitnih intervencija, servisa bojlera i TA peći, do adaptacije elektroinstalacija i ugradnje LED osvetljenja. Dolazak za 60–90 minuta i dostupnost 24/7 čine nas pouzdanim partnerom za sve stanovnike i poslovne korisnike Savskog Venca.`,
  
  "vracar": `Vračar je poznat po gustini naseljenosti, starim soliterima i modernim novoizgrađenim objektima. Zbog mešavine starog i novog, električarske intervencije su česte — od pregorelih instalacija i preopterećenja osigurača, do servisa TA peći i bojlera. MajstorDex pruža brzu i sigurnu uslugu, sa dolaskom u roku 60–90 minuta. Ugrađujemo LED rasvetu, popravljamo elektroinstalacije, rešavamo hitne kvarove i obezbeđujemo kvalitetnu podršku 0–24. Ako živite na Vračaru, MajstorDex je idealno rešenje za pouzdane i profesionalne elektro usluge.`,
  
  "novi-beograd": `Novi Beograd je moderno uređeno i najbrže rastuće naselje sa velikim brojem stanova, poslovnih prostora i tržnih centara. Ovde su česti problemi sa inverter klima uređajima, osiguračima, utičnicama, kuhinjskim linijama i velikim brojem potrošača u domaćinstvu. MajstorDex nudi širok spektar električarskih usluga — od servisa bojlera, TA peći i elektroinstalacija, do ugradnje LED rasvete i hitnih intervencija. Dolazimo za 60–90 minuta i dostupni smo 24/7, idealni za sve koji žive u ubrzanom ritmu Novog Beograda.`,
  
  "zemun": `Zemun ima specifičnu mešavinu starih kuća, privatnih objekata i novijih zgrada, što zahteva stručno poznavanje različitih sistema elektroinstalacija. Problemi sa instalacijama, prekidačima, osiguračima, kao i servis bojlera i TA peći – česti su u ovom kraju. MajstorDex rešava kvarove brzo i efikasno, sa dolaskom za 60–90 minuta. Pružamo sve vrste elektro usluga, uključujući modernizaciju rasvete i ugradnju LED sistema. Idealni smo za domaćinstva i lokale širom Zemuna.`,
  
  "cukarica": `Čukarica obuhvata naselja različite starosti — od Banovog brda do Žarkova i Bele reke — gde su problemi sa instalacijama veoma česti. Pregorele utičnice, prekidači, osigurači, kao i kvarovi na TA pećima i bojlerima, tipični su za ovaj kraj. MajstorDex pruža profesionalne električarske usluge uz brzi dolazak od 60–90 minuta. Pomažemo i oko LED rasvete, adaptacije instalacija i hitnih 0–24 intervencija.`,
  
  "vozdovac": `Voždovac je veliko i raznovrsno naselje, sa starim kućama, soliterima i novogradnjom. Zbog toga su elektro kvarovi česti — od problema sa instalacijama i štekdozama, do servisa klima, bojlera i TA peći. MajstorDex pruža brze i pouzdane električarske usluge sa dolaskom za 60–90 minuta. Radimo 24/7 i pokrivamo sve delove Voždovca, uključujući Banjicu, Medaković i Stepu.`,
  
  "palilula": `Palilula obuhvata široku teritoriju — od centra do Borče, Krnjače i Koteža — gde različiti tipovi objekata imaju specifične potrebe za elektroinstalacijama. Kvarovi su česti zbog starijih instalacija, vlage i preopterećenja električne mreže. MajstorDex pruža servis bojlera, TA peći, hitne intervencije, zamenu utičnica i LED rasvetu uz brzi dolazak 60–90 minuta.`,
  
  "rakovica": `Rakovica ima kombinaciju starih zgrada i kuća gde vlaga, dotrajale instalacije i peći na struju često prave probleme. MajstorDex pokriva čitavu Rakovicu, pružajući električarske usluge 24/7 — od popravke instalacija, servisa TA peći i bojlera, do ugradnje LED rasvete. Dolazak je u roku od 60–90 minuta.`,
  
  "zvezdara": `Zvezdara je veliko urbano naselje sa mnogo domaćinstava i starijih instalacija koje zahtevaju redovno održavanje. Kvarovi sa osiguračima, utičnicama i prekidačima su česti, a MajstorDex pruža brzu i pouzdanu pomoć 0–24. Ugradnja LED rasvete, servis bojlera i TA peći i popravka instalacija — sve na jednom mestu, sa dolaskom 60–90 minuta.`,
};

// Sve usluge (slike + slugovi)
const sveUsluge = [
  {
    naziv: "Kompletna adaptacija stana – Ključ u ruke",
    slug: "adaptacija-stana",
    slika: "/images/adaptacija-stanova.webp",
  },
  {
    naziv: "LED rasveta – prodaja i ugradnja",
    slug: "led-rasveta",
    slika: "/images/led-rasveta.webp",
  },
  {
    naziv: "Servis bojlera",
    slug: "servis-bojlera",
    slika: "/images/servis-bojlera.webp",
  },
  {
    naziv: "Pranje klima uređaja",
    slug: "pranje-klime",
    slika: "/images/ciscenje-klima.webp",
  },
  {
    naziv: "Popravka TA peći",
    slug: "popravka-ta-peci",
    slika: "/images/popravka-ta-peci.webp",
  },
  {
    naziv: "Popravka elektroinstalacija",
    slug: "popravka-elektroinstalacija",
    slika: "/images/popravka-elektroinstalacija.webp",
  },
  {
    naziv: "Zamena osigurača i utičnica",
    slug: "zamena-osiguraca-i-uticnica",
    slika: "/images/zamena-osiguraca-i-uticnica.webp",
  },
  {
    naziv: "Hitne intervencije 0-24",
    slug: "hitne-intervencije",
    slika: "/images/hitne-intervencije.webp",
  },
];

type Props = {
  naselje: string;
};

export default function NaseljePage({ naselje }: Props) {
  const capitalized = naselje
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <Head>
        <title>Električarske usluge u {capitalized} | MajstorDex</title>
        <meta
          name="description"
          content={`Električarske usluge u naselju ${capitalized} – brza i pouzdana pomoć 24/7. Dolazak za 60–90 minuta. MajstorDex rešava instalacije, kvarove, bojler, TA peći i LED rasvetu.`}
        />
        <link rel="canonical" href={`https://majstordex.rs/${naselje}`} />
      </Head>

      {/* HERO */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 bg-black overflow-hidden mb-10">
        <Image
          src="/images/hero.webp"
          alt="MajstorDex hero"
          fill
          className="object-cover blur-2xl opacity-40 scale-125"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
            Električarske usluge u {capitalized}
          </h1>
        </div>
      </div>

      {/* SEO TEKST */}
      <section className="max-w-4xl mx-auto px-4 text-lg text-gray-700 leading-relaxed mb-12">
        {seoText[naselje]}
      </section>

      {/* GRID USLUGA */}
      <main className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sveUsluge.map((u) => (
            <Link
              key={u.slug}
              href={`/usluge/${u.slug}/${naselje}`}
              className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center border"
            >
              <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                <Image src={u.slika} alt={u.naziv} fill className="object-contain p-2" />
              </div>

              <h2 className="text-lg font-bold">{u.naziv}</h2>
              <p className="text-gray-600 text-sm mt-1">Detalji usluge u {capitalized}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: naselja.map((n) => ({ params: { naselje: n } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const naselje = params?.naselje;

  if (typeof naselje !== "string" || !naselja.includes(naselje)) {
    return { notFound: true };
  }

  return {
    props: { naselje },
    revalidate: 3600,
  };
};
