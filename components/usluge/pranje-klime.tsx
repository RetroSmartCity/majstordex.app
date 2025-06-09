import Link from "next/link"; // dodaj na vrhu ako već nije


type Props = {
  isNaseljePage: boolean;
  naselje: string;
};

export default function PranjeKlime({ isNaseljePage, naselje }: Props) {
  return (
    <article className="space-y-6 text-gray-800 leading-relaxed">
      <p>
        {isNaseljePage ? (
          <>
            Ako ste iz naselja <strong>{naselje}</strong> i klima vam duva neprijatan miris ili slabije hladi – vreme je za temeljno{" "}
            <strong>pranje klima uređaja</strong>.
          </>
        ) : (
          <>
            Klima vam duva neprijatan miris ili slabije hladi? Vreme je za temeljno{" "}
            <strong>pranje klima uređaja</strong>.
          </>
        )}{" "}
        U MajstorDex timu koristimo profesionalna sredstva i opremu koja uklanja bakterije, buđ i prašinu iz unutrašnje i spoljašnje jedinice.
      </p>

      <p>
        <strong>Zašto je važno prati klimu?</strong> Nepravilno održavana klima može izazvati respiratorne probleme, naročito kod dece, starijih i osoba sa alergijama.
        Redovnim pranjem klima uređaja obezbeđujete zdraviji vazduh u stanu i produžavate vek trajanja uređaja.
      </p>

      {isNaseljePage && (
        <p>
          Na teritoriji naselja <strong>{naselje}</strong> dolazimo <strong>za 60–90 minuta</strong>, bez skrivenih troškova.
          Radimo temeljno, čisto i bez žurbe. Možete nas pozvati i <strong>van radnog vremena</strong> – radimo 24/7!
        </p>
      )}

      <ul className="list-disc list-inside">
        <li>Kompletno čišćenje unutrašnje i spoljašnje jedinice</li>
        <li>Dezinfekcija isparivača i ventilatora</li>
        <li>Neutralisanje neprijatnih mirisa</li>
        <li>Zaštita od buđi i bakterija</li>
      </ul>

      <p>
        <strong>Ne čekajte da klima počne da curi ili smrdi –</strong> zakažite pranje na vreme i obezbedite čist vazduh u svom domu.
      </p>
      <p>
  👉{" "}
  <Link href="/blog/pranje-klime" className="text-blue-600 underline hover:text-blue-800">
    Detaljan opis dubinskog pranja klime pogledajte u našem blogu
  </Link>
</p>

    </article>
  );
}
