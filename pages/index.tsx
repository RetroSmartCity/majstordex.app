import Head from "next/head";
import dynamic from "next/dynamic";

// HERO – učitava se odmah (LCP friendly)
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";

// LAZY LOAD BELOW-THE-FOLD
const UslugeIndex = dynamic(() => import("@/components/home/UslugeIndex"), {
  ssr: false,
});
const BenefitsPro = dynamic(() => import("@/components/BenefitsPro"), {
  ssr: false,
});
const LokacijeIndex = dynamic(
  () => import("@/components/home/LokacijeIndex"),
  { ssr: false }
);
const CTAblok = dynamic(() => import("@/components/home/CTAblok"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>MajstorDex – Električar Beograd 0–24 | Hitne intervencije</title>
        <meta
          name="description"
          content="Hitne elektro intervencije u Beogradu 0–24. Brza popravka TA peći, bojlera, šporeta, zamena osigurača i elektro instalacija. Dolazak 60–90 min."
        />
        <meta
          name="keywords"
          content="električar Beograd, hitne intervencije, majstor za struju, popravka bojlera, TA peći"
        />
        <link rel="canonical" href="https://majstordex.rs/" />
      </Head>

      {/* LCP SECTION */}
      <Hero />
      <TrustBar />

      {/* LAZY LOADED SECTIONS */}
      <main className="max-w-6xl mx-auto px-4 py-10">

        {/* USLUGE */}
        <section>
          <UslugeIndex />
        </section>

        {/* BENEFITS */}
        <section>
          <BenefitsPro />
        </section>

        {/* LOKACIJE */}
        <section>
          <LokacijeIndex />
        </section>

        {/* CTA BLOK */}
        <section>
          <CTAblok />
        </section>
      </main>
    </>
  );
}
