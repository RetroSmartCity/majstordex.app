// src/components/Footer.tsx
"use client";

import Link from "next/link";
import {
  brziDolazakNaseljaObj,
  ostalaNaseljaObj,
} from "@/data/naselja";

export default function Footer() {
  return (
    <footer className="bg-[#071221] text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEVA KOLONA */}
        <div>
          <h2 className="text-xl font-bold mb-3">MajstorDex</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Hitne elektro intervencije 0–24 širom Beograda. <br />
            Prosečan dolazak: <span className="font-bold">60–90 min.</span> <br />
            15+ godina iskustva i {" "}
            <span className="font-bold text-yellow-400">800 + pozitivnih ocena.</span>
          </p>

          <h3 className="mt-6 mb-2 font-semibold">Najbrži dolazak:</h3>

          {/* ——— PREMIUM LISTA NASELJA ——— */}
          <div className="flex flex-wrap gap-2">
            {brziDolazakNaseljaObj.map((item) => (
              <Link
                key={item.slug}
                href={`/naselje/${item.slug}`}
                className="text-sm text-gray-300 hover:text-yellow-400 transition"
              >
                {item.naziv}
              </Link>
            ))}
          </div>
        </div>

        {/* SREDNJA KOLONA — NAVIGACIJA */}
        <div>
          <h3 className="font-semibold mb-3">Navigacija</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/">Početna</Link></li>
            <li><Link href="/usluge">Usluge</Link></li>
            <li><Link href="/cene">Cenovnik</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        {/* DESNA KOLONA — KONTAKT */}
        <div>
          <h3 className="font-semibold mb-3">Kontakt</h3>
          <p className="text-gray-300 text-sm">Telefon:</p>
          <p className="text-yellow-400 font-bold text-lg mb-3">
            060 0 5000 63
          </p>

          <p className="text-gray-300 text-sm">Email:</p>
          <p className="mb-3">dejan@majstordex.rs</p>

          <p className="text-gray-300">Beograd — dolazak 0–24.</p>
        </div>
      </div>

      {/* DONJA TRAKA */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2025 MajstorDex — Sva prava zadržana.
      </div>
    </footer>
  );
}
