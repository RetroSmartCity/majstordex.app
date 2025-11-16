import dynamic from "next/dynamic";

const ProizvodPage = dynamic(
  () => import("@/components/products/ProizvodClientOnly"),
  { ssr: false }
);

export default ProizvodPage;
