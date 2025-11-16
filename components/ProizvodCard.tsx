import { useRouter } from "next/router";

export default function ProizvodCard({ proizvod }) {
  const router = useRouter();

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

  return (
    <div className="border rounded-lg p-3 shadow-sm bg-white">
      <img
        src={proizvod.slika || "/placeholder.webp"}
        alt={proizvod.naziv}
        className="w-full h-48 object-cover rounded"
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
