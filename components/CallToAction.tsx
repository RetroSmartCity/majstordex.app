// components/CallToAction.tsx
"use client";

export default function CallToAction() {
  const PHONE_E164 = "+381600500063";
  const TEL_HREF = `tel:${PHONE_E164}`;

  return (
    <div className="bg-blue-100 p-6 rounded-xl text-center mt-8">
      <h2 className="text-xl font-semibold mb-2">Zakažite odmah</h2>
      <p className="mb-4">Pozovite nas ili pošaljite poruku i stižemo brzo na vašu adresu!</p>

      {/* TEL link - BEZ onClick tracking-a (to radi _app.tsx globalno) */}
      <a
        href={TEL_HREF}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Pozovi odmah
      </a>
    </div>
  );
}
