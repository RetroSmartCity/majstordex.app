import Head from "next/head";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import UslugeIndex from "@/components/home/UslugeIndex";
import LokacijeIndex from "@/components/home/LokacijeIndex";
import CTAblok from "@/components/home/CTAblok";

export default function Home() {
  return (
    <>
      <Head>
        <title>MajstorDex – Električar Beograd 0–24</title>
        <meta
          name="description"
          content="Hitne elektro intervencije u Beogradu. Dolazak za 60–90 minuta. Najbolje ocenjen električar sa 800+ pozitivnih recenzija."
        />
        <link rel="canonical" href="https://majstordex.rs/" />
      </Head>

      <main>
        <Hero />

        <TrustBar />

        {/* Sekcija USLUGE — mora imati TAČAN ID */}
        <div id="usluge">
          <UslugeIndex />
        </div>

        <LokacijeIndex />

        <CTAblok />
      </main>
    </>
  );
}
