// components/CallToAction.tsx

"use client";

export default function CallToAction() {
  const PHONE_E164 = "+381600500063";
  const TEL_HREF = `tel:${PHONE_E164}`;

  const trackCallClick = (placement: string) => {
    try {
      // GA4 gtag
      const gtag = (window as any).gtag;
      if (typeof gtag === "function") {
        gtag("event", "call_click", {
          phone_number: PHONE_E164,
          link_url: TEL_HREF,
          placement,
          transport_type: "beacon",
        });
        return;
      }

      // GTM dataLayer fallback (ako nekad koristiš GTM)
      const dataLayer = (window as any).dataLayer;
      if (Array.isArray(dataLayer)) {
        dataLayer.push({
          event: "call_click",
          phone_number: PHONE_E164,
          link_url: TEL_HREF,
          placement,
        });
      }
    } catch {
      // ništa - ne prekidaj poziv
    }
  };

  return (
    <div className="bg-blue-100 p-6 rounded-xl text-center mt-8">
      <h2 className="text-xl font-semibold mb-2">Zakažite odmah</h2>
      <p className="mb-4">Pozovite nas ili pošaljite poruku i stižemo brzo na vašu adresu!</p>

      <a
        href={TEL_HREF}
        onClick={() => trackCallClick("CallToAction")}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Pozovi odmah
      </a>
    </div>
  );
}
