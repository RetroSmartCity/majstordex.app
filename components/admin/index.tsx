"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className="space-y-4">

        <Link
          href="/admin-client/proizvodi"
          className="block p-4 border rounded bg-gray-50 hover:bg-gray-100 transition"
        >
          📦 Lista proizvoda
        </Link>

        <Link
          href="/admin-client/novi-proizvod"
          className="block p-4 border rounded bg-gray-50 hover:bg-gray-100 transition"
        >
          ➕ Dodaj novi proizvod
        </Link>

      </div>
    </div>
  );
}
