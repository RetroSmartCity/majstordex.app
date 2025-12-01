// pages/kontakt.tsx
"use client";

import Head from "next/head";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { brziDolazakNaselja, ostalaNaselja } from "@/data/naselja";

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Kontakt | MajstorDex – Električar Beograd 0–24</title>
        <meta
          name="description"
          content="Kontaktirajte MajstorDex – električara sa 15+ godina iskustva. Hitne intervencije, TA peći, bojleri, instalacije. Dolazak za 60–90 min na teritoriji Beograda."
        />
        <link rel="canonical" href="https://majstordex.rs/kontakt" />
      </Head>

      <section className="bg-slate-900 text-white py-20 pt-28">
        <div className="max-w-6xl mx-auto px-4">

          {/* Naslov */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Kontakt – Električar Beograd 0–24
            <span className="block text-yellow-400 mt-1">
              MajstorDex • Hitne elektro intervencije
            </span>
          </h1>

          {/* Opis */}
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Pozovite za hitne intervencije, kvarove na TA pećima, bojlerima, elektroinstalacijama i klima uređajima.
            Dolazak na adresu u Beogradu najčešće u roku od <b>60–90 minuta</b>.
          </p>

          {/* GRID – Kontakt kartice */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">

            {/* Telefon */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-white/10 text-center">
              <Phone className="w-9 h-9 mx-auto text-yellow-400 mb-3" />
              <h3 className="font-bold text-white mb-2 text-lg">Telefon</h3>
              <a
                href="tel:+381600500063"
                className="text-yellow-400 text-xl font-semibold hover:text-yellow-300"
              >
                060 0500 063
              </a>
            </div>

            {/* Email */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-white/10 text-center">
              <Mail className="w-9 h-9 mx-auto text-yellow-400 mb-3" />
              <h3 className="font-bold text-white mb-2 text-lg">Email</h3>
              <a
                className="text-gray-300 hover:text-white break-words"
                href="mailto:dejan@majstordex.rs"
              >
                dejan@majstordex.rs
              </a>
            </div>

            {/* Lokacija */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-white/10 text-center">
              <MapPin className="w-9 h-9 mx-auto text-yellow-400 mb-3" />
              <h3 className="font-bold text-white mb-2 text-lg">Lokacija</h3>
              <p className="text-gray-300">Beograd i okolina</p>
            </div>
          </div>

          {/* RADNO VREME */}
          <div className="bg-slate-800 rounded-xl p-6 text-center text-gray-200 border border-white/10 mb-16">
            <Clock className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
            <h3 className="font-bold text-white text-lg mb-1">Radno vreme</h3>
            <p className="text-gray-300">Hitne intervencije dostupne 0–24</p>
          </div>

          {/* SERVISNE ZONE */}
          <div className="text-center mb-16">
            <h3 className="text-white text-xl font-bold mb-4">
              Najbrži dolazak (≈ 30 min)
            </h3>
            <p className="text-yellow-300 max-w-2xl mx-auto text-sm">
              {brziDolazakNaselja.join(", ")}
            </p>

            <h3 className="text-white text-xl font-bold mt-8 mb-4">
              Ostala pokrivena naselja (60–90 min)
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm">
              {ostalaNaselja.join(", ")}
            </p>
          </div>

          {/* CTA dugme */}
          <div className="text-center mb-16">
            <a
              href="tel:+381600500063"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-4 rounded-xl shadow-xl text-lg transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Pozovi odmah
            </a>
          </div>

          {/* MAPA */}
          <div className="w-full h-[380px] rounded-xl overflow-hidden shadow-xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.2023193507035!2d20.479129!3d44.786568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab00e529e2d%3A0xacf77cedd0f4fd51!2sBeograd!5e0!3m2!1ssr!2srs!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
