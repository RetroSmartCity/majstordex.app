"use client";

import dynamic from "next/dynamic";

const IzmeniProizvodPage = dynamic(
  () => import("@/components/admin/IzmeniProizvodClientOnly"),
  { ssr: false }
);

export default IzmeniProizvodPage;
