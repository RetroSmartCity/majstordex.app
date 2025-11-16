"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        router.push("/admin/login");
      } else {
        setUser(data.user);
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (loading) {
    return <p className="text-center mt-10">Učitavanje...</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Admin panel | LuxonLED</title>
        <meta
          name="description"
          content="Upravljanje proizvodima, kategorijama i sadržajem sajta LuxonLED."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="p-6 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Odjavi se
          </button>
        </div>

        <div className="grid gap-4">
          <Link
            href="/admin/proizvodi"
            className="block p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            📦 Upravljaj proizvodima
          </Link>

          <Link
            href="/admin/kategorije"
            className="block p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            🗂️ Upravljaj kategorijama
          </Link>

          <Link
            href="/admin/novi-proizvod"
            className="block p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            ➕ Dodaj novi proizvod
          </Link>
        </div>
      </main>
    </>
  );
}
