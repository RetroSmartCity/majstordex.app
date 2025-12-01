"use client";

import Link from "next/link";
import { sveUsluge } from "@/data/usluge";

export default function UslugeIndex() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
        Usluge koje pružamo
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {sveUsluge.map((u) => (
          <Link
            key={u.slug}
            href={`/usluge/${u.slug}`}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm 
              hover:shadow-xl hover:-translate-y-1 transition p-8 text-center"
          >
            <div className="text-5xl mb-4">{u.icon || "💡"}</div>
            <p className="font-semibold text-gray-900 text-lg mb-1">{u.naziv}</p>
            <p className="text-gray-500 text-sm">Detalji usluge →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
