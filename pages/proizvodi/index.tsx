import Head from "next/head";
import Link from "next/link";
import { KATEGORIJE } from "@/components/kategorije";

export default function ProizvodiIndex() {
  const SUPABASE_URL =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://tlakuzhullxengzwmzgx.supabase.co";

  const BUCKET = "proizvodi";

  const getCategoryImage = (slug: string) => {
    const map: Record<string, string> = {
      "led-sijalice": `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/led-sijalice.webp`,
      reflektori: `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/reflektori.webp`,
      trake: `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/trake.webp`,
      plafonjere: `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/plafonjere.webp`,
      lusteri: `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/lusteri.webp`,
    };
    return map[slug] || "/placeholder.webp";
  };

  return (
    <>
      <Head>
        <title>Proizvodi | LuxonLED</title>
        <meta
          name="description"
          content="Pregled svih kategorija LED rasvete: sijalice, reflektori, trake, plafonjere i lusteri."
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          💡 Kategorije proizvoda
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {KATEGORIJE.map((kat) => (
            <li key={kat.slug}>
              <Link
                href={`/proizvodi/${kat.slug}`}
                className="block border rounded-2xl bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <img
                  src={getCategoryImage(kat.slug)}
                  alt={kat.naziv}
                  className="w-full h-40 object-cover rounded-t-2xl"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src = "/placeholder.webp")
                  }
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {kat.naziv}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
