import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";

import { KATEGORIJE } from "@/components/kategorije";

export default function NoviProizvod() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [slike, setSlike] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [form, setForm] = useState({
    naziv: "",
    opis: "",
    cena: "",
    kategorija: "",
  });

  // ⭐ Upload slika u Supabase Storage
  const uploadSlike = async (): Promise<string[]> => {
    const uploadedUrls: string[] = [];

    for (const file of slike) {
      const fileName = `${Date.now()}-${file.name}`;
      const { error } = await supabase.storage
        .from("proizvodi")
        .upload(fileName, file);

      if (error) {
        console.error("Greška pri uploadu slike:", error);
        continue;
      }

      const { data: publicUrlData } = supabase.storage
        .from("proizvodi")
        .getPublicUrl(fileName);

      uploadedUrls.push(publicUrlData.publicUrl);
    }

    return uploadedUrls;
  };

  // 📸 Prikaz slika pre upload-a
  const handleSlikeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSlike(filesArray);
      setPreviewUrls(filesArray.map((file) => URL.createObjectURL(file)));
    }
  };

  // 📝 Promena vrednosti input polja
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🚀 Slanje u bazu
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const slikeUrls = await uploadSlike();

      const { error } = await supabase.from("proizvodi").insert([
        {
          naziv: form.naziv,
          opis: form.opis,
          cena: parseFloat(form.cena),
          kategorija: form.kategorija,
          slike: slikeUrls, // niz URL-ova
        },
      ]);

      if (error) throw error;

      alert("✅ Proizvod uspešno dodat!");
      router.push("/admin/proizvodi");
    } catch (err: any) {
      alert("❌ Greška: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Dodaj novi proizvod</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* NAZIV */}
        <div>
          <label className="block mb-1 font-semibold">Naziv</label>
          <input
            name="naziv"
            required
            className="border rounded-lg p-2 w-full"
            onChange={handleChange}
          />
        </div>

        {/* OPIS */}
        <div>
          <label className="block mb-1 font-semibold">Opis</label>
          <textarea
            name="opis"
            rows={3}
            className="border rounded-lg p-2 w-full"
            onChange={handleChange}
          />
        </div>

        {/* CENA */}
        <div>
          <label className="block mb-1 font-semibold">Cena (RSD)</label>
          <input
            type="number"
            name="cena"
            required
            className="border rounded-lg p-2 w-full"
            onChange={handleChange}
          />
        </div>

        {/* KATEGORIJA — ISPRAVLJENO */}
        <div>
          <label className="block mb-1 font-semibold">Kategorija</label>
          <select
            name="kategorija"
            required
            className="border rounded-lg p-2 w-full"
            onChange={handleChange}
          >
            <option value="">-- izaberi kategoriju --</option>

            {KATEGORIJE.map((k) => (
              <option key={k.slug} value={k.slug}>
                {k.naziv}
              </option>
            ))}
          </select>
        </div>

        {/* SLIKE */}
        <div>
          <label className="block mb-1 font-semibold">Slike proizvoda</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleSlikeChange}
            className="block w-full text-sm text-gray-700 border rounded-lg cursor-pointer p-2"
          />

          {/* PREVIEW SLIKA */}
          {previewUrls.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {previewUrls.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`preview-${i}`}
                  className="rounded-lg shadow object-cover h-32 w-full"
                />
              ))}
            </div>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
        >
          {loading ? "Čuvanje..." : "Sačuvaj proizvod"}
        </button>
      </form>
    </div>
  );
}
