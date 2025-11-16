import dynamic from "next/dynamic";

const ProizvodiKategorijaPage = dynamic(
  () => import("@/components/products/ProizvodiKategorijaClientOnly"),
  { ssr: false }
);

export default ProizvodiKategorijaPage;
