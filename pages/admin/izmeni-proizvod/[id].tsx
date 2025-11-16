import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { KATEGORIJE } from "@/components/kategorije";  // ← OVO MORA RADITI

console.log("PUTANJA UCITAVANJA:", KATEGORIJE);


export default function IzmeniProizvod() {
  const router = useRouter();
  const { id } = router.query;

  const [proizvod, setProizvod] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // DEBUG — da vidimo da li KATEGORIJE postoje
  console.log("DEBUG | Učitane kategorije iz fajla:", KATEGORIJE);

  useEffect(() => {
    if (!id) return;

    const fetchProizvod = async () => {
      const { data, error } = await supabase
        .from("proizvodi")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error("Greška pri učitavanju proizvoda:", error);
      else setProizvod(data);

      setLoading(false);
    };

    fetchProizvod();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setProizvod({ ...proizvod, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const slikeArray =
      typeof proizvod.slike === "string"
        ? proizvod.slike.split(",").map((s) => s.trim())
        : [];

    const kategorijaValue = proizvod.kategorija ? String(proizvod.kategorija) : null;

    console.log("DEBUG | Šaljem u bazu kategoriju:", kategorijaValue);

    const { error } = await supabase
      .from("proizvodi")
      .update({
        naziv: proizvod.naziv,
        opis: proizvod.opis,
        cena: proizvod.cena,
        kategorija: kategorijaValue,
        slike: slikeArray,
      })
      .eq("id", id);

    if (error) alert("Greška: " + error.message);
    else {
      alert("Uspešno izmenjeno!");
      router.push("/admin/proizvodi");
    }
  };

  if (loading) return <p className="p-4">Učitavanje...</p>;
  if (!proizvod) return <p className="p-4">Proizvod nije pronađen.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Izmena proizvoda</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="naziv"
          value={proizvod.naziv || ""}
          onChange={handleChange}
          placeholder="Naziv proizvoda"
          className="border p-2 w-full rounded"
        />

        <textarea
          name="opis"
          value={proizvod.opis || ""}
          onChange={handleChange}
          placeholder="Opis proizvoda"
          className="border p-2 w-full rounded"
        />

        <input
          name="cena"
          value={proizvod.cena || ""}
          onChange={handleChange}
          placeholder="Cena"
          className="border p-2 w-full rounded"
        />

        {/* --- SELECT KATEGORIJE --- */}
        <select
          name="kategorija"
          value={proizvod.kategorija || ""}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="">Izaberi kategoriju</option>

          {KATEGORIJE && KATEGORIJE.length > 0 ? (
            KATEGORIJE.map((k) => (
              <option key={k.slug} value={k.slug}>
                {k.naziv}
              </option>
            ))
          ) : (
            <option disabled>Nema dostupnih kategorija</option>
          )}
        </select>

        {/* --- MULTI SLIKE --- */}
        <input
          name="slike"
          value={
            Array.isArray(proizvod.slike)
              ? proizvod.slike.join(", ")
              : proizvod.slike || ""
          }
          onChange={handleChange}
          placeholder="Više slika odvojiti zarezima"
          className="border p-2 w-full rounded"
        />

        {proizvod.slike && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Pregled slika:</p>
            <div className="grid grid-cols-2 gap-4">
              {(Array.isArray(proizvod.slike)
                ? proizvod.slike
                : [proizvod.slike]
              ).map((slika: string, index: number) => (
                <img
                  key={index}
                  src={slika}
                  alt="Slika proizvoda"
                  className="w-full h-40 object-cover rounded border"
                />
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sačuvaj izmene
        </button>
      </form>
    </div>
  );
}
