"use client";

export default function CTAblok() {
  return (
    <section className="bg-yellow-400 py-16 mt-10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
          Potreban vam je električar odmah?
        </h2>

        <p className="text-black text-lg mb-8">
          Dostupni smo 0–24, dolazak za 60–90 minuta u sva beogradska naselja.
        </p>

        <a
          href="tel:+381600500063"
          className="inline-block bg-black text-yellow-400 px-10 py-5 
             text-lg font-bold rounded-xl shadow-lg hover:opacity-90 transition"
        >
          📞 Pozovite odmah – 060 0500 063
        </a>
      </div>
    </section>
  );
}
