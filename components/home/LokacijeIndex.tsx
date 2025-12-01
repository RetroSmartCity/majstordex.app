"use client";

import Link from "next/link";
import { svaNaseljaObj } from "src/data/naselja";

export default function LokacijeIndex() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
        Radimo na teritoriji celog Beograda
      </h2>

      <div className="flex flex-wrap gap-3 justify-center">
        {svaNaseljaObj.map((n) => (
          <Link
            key={n.slug}
            href={`/naselje/${n.slug}`}
            className="px-6 py-3 bg-white border border-gray-200 rounded-full 
              shadow-sm hover:shadow-md hover:bg-gray-100 transition text-sm"
          >
            {n.naziv}
          </Link>
        ))}
      </div>
    </section>
  );
}
