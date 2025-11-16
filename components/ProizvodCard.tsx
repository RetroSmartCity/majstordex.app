"use client";

import { useRouter } from "next/router";

export default function ProizvodCard({ proizvod }) {
  const router = useRouter();

  // ----------------------------
  // 1) Normalizacija polja 'slike'
  // ----------------------------
  let slike: string[] = [];

  if (Array.isArray(proizvod.slike)) {
    // već je array
    slike = proizvod.slike;
  } else if (typeof proizvod.slike === "string") {
    // konvertujemo JSON string → array
    try {
      slike = JSON.parse(proizvod.slike);
    } catch (e) {
      console.warn("Ne mogu da parsiram slike:", proizvod.slike);
      slike = [];
    }
  } else {
    slike = [];
  }

  const mainImage = slike[0] || "/placeholder.webp";

  // ----------------------------
  // 2) Brisanje
  // ----------------------------
  const handleDelete = async () => {
    if (!confirm("Da li ste sigurni da želite da obrišete ovaj proizvod?")) return;

    const res = await fetch("/api/proizvodi/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: proizvod.id }),
    });

    if (res.ok) {
      alert("Proizvod uspešno obrisan!");
      router.reload();
    } else {
      alert("Greška pri brisanju proizvoda.");
    }
  };

  // ----------------------------
  // 3) Render
  // ----------------------------
  return (
    <div className="border rounded-lg p-3 shadow-sm bg-white">
      <img
        src={mainImage}
        alt={proizvod.naziv}
        className="w-full h-48 object-cover rounded"
        onError={(e) => ((e.target as HTMLImageElement).src = "/placeholder.webp")}
      />

      <h3 className="text-lg font-semibold mt-2">{proizvod.naziv}</h3>

      <p className="text-gray-600 mb-2">
        {proizvod.cena ? `${proizvod.cena.toLocaleString()} RSD` : ""}
      </p>

      <p className="text-sm text-gray-500 capitalize">
        Kategorija: {proizvod.kategorija || "Nedefinisano"}
      </p>

      <button
        onClick={handleDelete}
        className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Obriši
      </button>
    </div>
  );
}
