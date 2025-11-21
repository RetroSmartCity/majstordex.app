"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Admin Panel – Proizvodi
      </h1>

      <p className="text-gray-600 mb-8">
        Upravljaj svim proizvodima na sajtu – dodavanje, izmena i brisanje.
      </p>

      <div className="space-y-4">

        <Link
          href="/admin-client/proizvodi"
          className="block p-5 border rounded-lg bg-white hover:bg-gray-100 shadow transition"
        >
          📦 <span className="font-semibold">Lista proizvoda</span>
          <p className="text-sm text-gray-500 mt-1">
            Pregled, izmena i brisanje svih proizvoda.
          </p>
        </Link>

        <Link
          href="/admin-client/novi-proizvod"
          className="block p-5 border rounded-lg bg-white hover:bg-gray-100 shadow transition"
        >
          ➕ <span className="font-semibold">Dodaj novi proizvod</span>
          <p className="text-sm text-gray-500 mt-1">
            Kreiraj novi proizvod i otpremi slike.
          </p>
        </Link>

      </div>
    </div>
  );
}
