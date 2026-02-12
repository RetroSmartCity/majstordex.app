"use client";

export default function Hero() {
  const PHONE_E164 = "+381600500063";
  const TEL_HREF = `tel:${PHONE_E164}`;

  const trackCallClick = (placement: string) => {
    try {
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

      const dataLayer = (window as any).dataLayer;
      if (Array.isArray(dataLayer)) {
        dataLayer.push({
          event: "call_click",
          phone_number: PHONE_E164,
          link_url: TEL_HREF,
          placement,
        });
      }
    } catch {}
  };

  return (
    <section className="bg-[#0B1221] text-white pt-36 pb-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Električar Beograd 0–24
        </h1>

        <p className="text-lg md:text-xl mb-4">
          Hitne elektro intervencije sa dolaskom za <span className="font-bold">60–90 minuta.</span>
        </p>

        <p className="text-lg md:text-xl mb-4">Najbolje ocenjen električar u Beogradu.</p>

        <p className="text-lg md:text-xl font-bold text-yellow-400 mb-8">800+ pozitivnih recenzija.</p>

        {/* POZOVI BUTTON */}
        <a
          href={TEL_HREF}
       //   onClick={() => trackCallClick("Hero")}
          className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform transition hover:-translate-y-0.5 mb-6"
        >
          📞 Pozovi odmah – 060 0 5000 63
        </a>

        {/* POGLEDaj SVE USLUGE – FIX za desktop */}
        <a
          href="#usluge"
          className="
            inline-block 
            bg-transparent 
            text-white 
            border border-white 
            px-6 py-2 
            rounded-full 
            font-medium 
            whitespace-nowrap 
            hover:bg-white hover:text-black 
            transition
          "
        >
          Pogledaj sve usluge
        </a>
      </div>
    </section>
  );
}
