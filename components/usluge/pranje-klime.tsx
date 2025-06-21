import Link from "next/link";

type Props = {
  isNaseljePage: boolean;
  naselje: string;
};

const lokalniOpisi: Record<string, string> = {
  "Novi Beograd":
    "Radimo sve blokove na Novom Beogradu: Blok 21, Blok 22, Blok 23, Blok 24, Blok 29, Blok 30, Blok 45, Blok 61, Blok 62, Blok 63, Blok 64, Blok 70, Blok 72 i ostale blokove duž Jurija Gagarina, Gandijeve, Bulevara Zorana Đinđića i Omladinskih brigada.",
  Zvezdara:
    "Pokrivamo Zvezdaru: Đeram pijaca, Bulbulder, Mirijevo, Lion, Cvetkova pijaca, Vukov spomenik, Slavujev venac i sve okolne ulice – Bulevar kralja Aleksandra, Dimitrija Tucovića, Ruzveltova i Maksima Gorkog.",
};

export default function PranjeKlime({ isNaseljePage, naselje }: Props) {
  const jeAkcijaNoviBeograd = isNaseljePage && naselje === "Novi Beograd";
  const jeAkcijaZvezdara = isNaseljePage && naselje === "Zvezdara";

  return (
    <article className="space-y-6 text-gray-800 leading-relaxed">
      {jeAkcijaNoviBeograd && (
        <>
          <h2 className="text-2xl font-bold text-gray-900">
            Akcija – Profesionalno pranje klima uređaja Novi Beograd!
          </h2>
          <p>
            Samo za korisnike sa teritorije <strong>Novi Beograd</strong> nudimo promotivnu cenu za{" "}
            <strong>profesionalno dubinsko pranje i dezinfekciju unutrašnje jedinice klima uređaja</strong>.
            Obezbedite zdrav i prijatan vazduh u vašem domu – već danas!
          </p>
        </>
      )}

      {jeAkcijaZvezdara && (
        <>
          <h2 className="text-2xl font-bold text-gray-900">
            Akcija – Pranje klima uređaja Zvezdara po promotivnoj ceni!
          </h2>
          <p>
            Stanovnici naselja <strong>Zvezdara</strong> ostvaruju specijalne uslove za{" "}
            <strong>temeljno čišćenje i dezinfekciju klima uređaja</strong>.
            Očistite vašu klimu i uživajte u zdravijem, svežem vazduhu!
          </p>
        </>
      )}

      <p>
        {isNaseljePage ? (
          <>
            Ako ste iz naselja <strong>{naselje}</strong> i klima vam duva neprijatan miris, slabije hladi, ili primećujete curenje – vreme je za profesionalno{" "}
            <strong>pranje klima uređaja</strong>.
          </>
        ) : (
          <>
            Klima vam duva neprijatan miris ili slabije hladi? Primećujete curenje ili vlagu? Vreme je za temeljno{" "}
            <strong>pranje klima uređaja</strong>.
          </>
        )}{" "}
        Tim <strong>MajstorDex Beograd</strong> koristi profesionalna sredstva i opremu koja temeljno uklanja bakterije, buđ, prašinu i naslage iz unutrašnje i spoljašnje jedinice.
      </p>

      {isNaseljePage && lokalniOpisi[naselje] && (
        <p className="text-gray-700">
          {lokalniOpisi[naselje]}
        </p>
      )}

      <p>
        <strong>Zašto je važno redovno čistiti klimu?</strong> Nepravilno održavana klima može izazvati respiratorne tegobe, naročito kod dece, starijih i osoba sa alergijama.
        Redovnim pranjem klima uređaja obezbeđujete:
      </p>

      <ul className="list-disc list-inside">
        <li>Čist i zdrav vazduh u prostoru</li>
        <li>Otklanjanje neprijatnih mirisa</li>
        <li>Zaštitu od buđi i bakterija</li>
        <li>Produženje veka trajanja klima uređaja</li>
        <li>Uštedu na potrošnji električne energije</li>
      </ul>

      {isNaseljePage && (
        <p>
          Na teritoriji naselja <strong>{naselje}</strong> dolazimo na Vašu adresu u roku od <strong>60–90 minuta</strong>.
          Nema skrivenih troškova – radimo temeljno, detaljno i bez žurbe. <strong>Dostupni smo 24/7</strong>, čak i van standardnog radnog vremena.
        </p>
      )}

      <p>
        U našoj usluzi je uključeno:
      </p>

      <ul className="list-disc list-inside">
        <li>Kompletno čišćenje i dezinfekcija unutrašnje jedinice</li>
        <li>Pranje spoljašnje jedinice (po potrebi i dostupnosti)</li>
        <li>Čišćenje filtera i ventilatora</li>
        <li>Neutralisanje neprijatnih mirisa</li>
        <li>Zaštita od buđi i alergena</li>
      </ul>

      <p>
        <strong>Ne čekajte da klima počne da curi ili da širi neprijatne mirise –</strong>{" "}
        zakažite pranje na vreme i obezbedite zdrav vazduh za Vašu porodicu!
      </p>

      <p>
        👉{" "}
        <Link href="/blog/pranje-klime" className="text-blue-600 underline hover:text-blue-800">
          Pročitajte više o detaljnom pranju klima uređaja na našem blogu
        </Link>
      </p>
    </article>
  );
}
