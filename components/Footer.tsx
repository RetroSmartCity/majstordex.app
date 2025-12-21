"use client";

import Link from "next/link";
import { brziDolazakNaseljaObj } from "@/data/naselja";

export default function Footer() {
  return (
    <footer className="bg-[#071221] text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        {/* 1) BRAND + TRUST */}
        <div>
          <h2 className="text-xl font-bold mb-2">MajstorDex</h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            Hitne elektro intervencije 0–24 u Beogradu.
            <br />
            Prosečan dolazak: 60–90 minuta.
          </p>

          <p className="mt-3 text-sm font-semibold text-white">
            15+ godina iskustva i{" "}
            <span className="text-yellow-400 font-bold">800+ pozitivnih ocena</span>.
          </p>

          {/* Najbrži dolazak (naselja) */}
          <div className="mt-5">
            <p className="text-sm font-semibold text-white mb-2">Najbrži dolazak:</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {brziDolazakNaseljaObj.map((n) => (
                <Link
                  key={n.slug}
                  href={`/naselje/${n.slug}`}
                  className="text-xs text-gray-400 hover:text-yellow-400 transition"
                >
                  {n.naziv}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 2) NAVIGACIJA */}
        <div>
          <h3 className="font-semibold mb-3">Navigacija</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Početna
              </Link>
            </li>
            <li>
              <Link href="/usluge" className="hover:text-yellow-400 transition">
                Usluge
              </Link>
            </li>
            <li>
              <Link href="/cene" className="hover:text-yellow-400 transition">
                Cenovnik
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-yellow-400 transition">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* 3) NAJTRAŽENIJE USLUGE */}
        <div>
          <h3 className="font-semibold mb-3">Najtraženije usluge</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/usluge/popravka-ta-peci" className="hover:text-yellow-400 transition">
                Popravka TA peći
              </Link>
            </li>
            <li>
              <Link href="/usluge/servis-bojlera" className="hover:text-yellow-400 transition">
                Servis bojlera
              </Link>
            </li>
            <li>
              <Link href="/usluge/pranje-klime" className="hover:text-yellow-400 transition">
                Pranje klima uređaja
              </Link>
            </li>
            <li>
              <Link href="/usluge/hitne-intervencije" className="hover:text-yellow-400 transition">
                Hitne intervencije
              </Link>
            </li>
          </ul>
        </div>

        {/* 4) KONTAKT */}
        <div>
          <h3 className="font-semibold mb-3">Kontakt</h3>

          <p className="text-sm text-gray-300">Telefon:</p>
          <a
            href="tel:+381600500063"
            className="inline-block mt-1 text-yellow-400 font-bold text-lg hover:brightness-110 transition"
          >
            060 0 5000 63
          </a>

          <p className="mt-4 text-sm text-gray-300">Email:</p>
          <a
            href="mailto:dejan@majstordex.rs"
            className="text-sm text-gray-200 hover:text-yellow-400 transition break-all"
          >
            dejan@majstordex.rs
          </a>

          <p className="mt-4 text-sm text-gray-300">Beograd — dostupno 0–24 časa.</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-700">
        © {new Date().getFullYear()} MajstorDex — Sva prava zadržana.
      </div>
    </footer>
  );
}
