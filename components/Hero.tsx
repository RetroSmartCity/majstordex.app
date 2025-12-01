"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="max-w-3xl mx-auto px-4 text-center">

        {/* H1 NASLOV — stabilan, lagan, SEO maksimalan */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 tracking-tight">
          Električar Beograd 0–24
        </h1>

        {/* PODNASLOV — minimalan DOM, maksimalna čitljivost */}
        <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-2">
          Hitne elektro intervencije sa dolaskom za{" "}
          <span className="font-semibold text-yellow-300">60–90 minuta</span>.
        </p>

        <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-2">
          Najbolje ocenjen električar u Beogradu.
        </p>

        <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-8">
          <span className="font-semibold text-yellow-300">800+ pozitivnih recenzija</span>.
        </p>

        {/* CTA — ultralagan i optimizovan */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="tel:0600500063"
            className="inline-flex items-center justify-center bg-yellow-400 text-slate-900 font-semibold 
                       px-8 py-3 rounded-full text-base md:text-lg shadow-lg shadow-yellow-500/30 
                       hover:bg-yellow-300 hover:shadow-yellow-400/40 active:scale-95 
                       transition-all duration-200"
          >
            📞 Pozovi odmah – 060 0 5000 63
          </a>

          <Link
            href="#usluge"
            className="text-sm md:text-base text-slate-300 hover:text-white underline underline-offset-4"
          >
            Pogledaj sve usluge
          </Link>
        </div>

      </div>
    </section>
  );
}
