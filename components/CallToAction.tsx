// components/CallToAction.tsx

export default function CallToAction() {
  return (
    <div className="bg-blue-100 p-6 rounded-xl text-center mt-8">
      <h2 className="text-xl font-semibold mb-2">Zakažite odmah</h2>
      <p className="mb-4">Pozovite nas ili pošaljite poruku i stižemo brzo na vašu adresu!</p>
      <a
        href="tel:+381600500063"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Pozovi odmah
      </a>
    </div>
  );
}
