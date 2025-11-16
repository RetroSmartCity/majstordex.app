"use client";

import dynamic from "next/dynamic";

const NoviProizvodPage = dynamic(
  () => import("@/components/admin/NoviProizvodClientOnly"),
  { ssr: false }
);

export default NoviProizvodPage;
