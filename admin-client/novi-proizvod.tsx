"use client";

import dynamic from "next/dynamic";

// Dinamički učitavamo klijentsku komponentu bez SSR-a
const NoviProizvodClientOnly = dynamic(
  () => import("./NoviProizvodClientOnly"),
  { ssr: false }
);

export default function NoviProizvodPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <NoviProizvodClientOnly />
    </div>
  );
}
