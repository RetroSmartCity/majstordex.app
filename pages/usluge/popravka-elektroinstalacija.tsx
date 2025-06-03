import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";


export default function PopravkaElektroinstalacija() {
  return (
    <>
      <Head>
        <title>Popravka elektroinstalacija | MajstorDex</title>
        <meta
          name="description"
          content="Stručna popravka elektroinstalacija u Beogradu. Hitne intervencije, dolazak u roku od 60-90 minuta. Dostupni 24/7."
        />
      </Head>

     

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-gray-800">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:underline text-blue-600">
            Početna
          </Link>
          <span>›</span>
          <Link href="/usluge" className="hover:underline text-blue-600">
            Usluge
          </Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">
            Popravka elektroinstalacija
          </span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Popravka elektroinstalacija
        </h1>

        <section className="mb-12 text-lg leading-relaxed">
          <p>
            Imate kvar na elektroinstalaciji? Naši električari brzo izlaze na teren i
            rešavaju problem – bezbedno i profesionalno. Bilo da je u pitanju kratki
            spoj, pregoreli kabl, iskakanje osigurača ili zamena instalacije, MajstorDex
            nudi pouzdanu uslugu širom Beograda.
          </p>
          <p className="mt-4">
            Specijalizovani smo za sve vrste elektro kvarova:
            <ul className="list-disc list-inside mt-2">
              <li>Rešavanje kratkih spojeva i prekida napajanja</li>
              <li>Detekcija i zamena oštećenih kablova</li>
              <li>Ugradnja i zamena osigurača i automatskih sklopki</li>
              <li>Zamena starih i dotrajalih elektroinstalacija</li>
              <li>Popravka razvodnih kutija, prekidača i utičnica</li>
            </ul>
          </p>
          <p className="mt-4">
            Bilo da se radi o stanu, kući, lokalu ili poslovnom prostoru, naši električari su opremljeni
            za sve vrste intervencija – od sitnih kvarova do većih popravki elektroinstalacija.
          </p>
          <p className="mt-4">
            Radimo na teritoriji celog Beograda, uključujući: Voždovac, Novi Beograd, Zemun, Zvezdaru,
            Rakovicu, Palilulu, Čukaricu, Vračar i okolina. Dolazak u roku od 60 do 90 minuta ili po dogovoru.
          </p>
          <p className="mt-4">
            Kontaktirajte nas odmah ukoliko sumnjate na kvar – bolje je sprečiti štetu nego je kasnije
            popravljati. Sigurnost vašeg doma ili poslovnog prostora je prioritet.
          </p>
        </section>

        <section className="bg-yellow-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Zašto odabrati MajstorDex?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base max-w-xl mx-auto">
            <li>✅ Brz dolazak – najčešće u roku od 60-90 minuta</li>
            <li>✅ Iskusni električari i kvalitetna dijagnostika</li>
            <li>✅ Poštovanje svih bezbednosnih standarda</li>
            <li>✅ Pristupačne cene bez skrivenih troškova</li>
            <li>✅ 24/7 dostupnost za hitne slučajeve</li>
          </ul>
        </section>
      </main>

   
    </>
  );
}
