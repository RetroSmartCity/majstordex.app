"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const PHONE_E164 = "+381600500063";
  const TEL_HREF = `tel:${PHONE_E164}`;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // dropdowns desktop
  const [showTa, setShowTa] = useState(false);
  const [showBojler, setShowBojler] = useState(false);

  const taRef = useRef<HTMLDivElement | null>(null);
  const bojlerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // zatvori mobile meni kad pređe na desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // zatvori dropdown klikom van
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;

      if (taRef.current && !taRef.current.contains(t)) setShowTa(false);
      if (bojlerRef.current && !bojlerRef.current.contains(t)) setShowBojler(false);
    };

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // zatvori dropdown na ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowTa(false);
        setShowBojler(false);
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setShowTa(false);
    setShowBojler(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-slate-900 shadow-lg" : "bg-slate-900/80"}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3" onClick={closeAll}>
          <Image src="/logo1.webp" alt="MajstorDex" width={36} height={36} priority />
          <span className="font-bold text-white text-lg">MajstorDex</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200 relative">
          {/* TA PEĆI */}
          <div ref={taRef} className="relative">
            <div className="flex items-center gap-2">
              <Link
                href="/usluge/popravka-ta-peci"
                className="font-bold text-white hover:opacity-90 transition"
                onClick={closeAll}
              >
                TA peći
              </Link>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTa((v) => !v);
                  setShowBojler(false);
                }}
                className="text-white/80 hover:text-white transition"
                aria-label="Otvori TA meni"
                aria-haspopup="menu"
                aria-expanded={showTa}
              >
                ▾
              </button>
            </div>

            {showTa && (
              <div
                className="absolute top-10 left-0 bg-black/95 border border-white/10 rounded-xl shadow-xl p-4 space-y-2 z-50 min-w-[220px]"
                role="menu"
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  href="/usluge/popravka-ta-peci/zvezdara"
                  className="block text-white/80 hover:text-white"
                  onClick={closeAll}
                >
                  TA peći Zvezdara
                </Link>
                <Link
                  href="/usluge/popravka-ta-peci/mirijevo"
                  className="block text-white/80 hover:text-white"
                  onClick={closeAll}
                >
                  TA peći Mirijevo
                </Link>
                <Link
                  href="/usluge/popravka-ta-peci/zemun"
                  className="block text-white/80 hover:text-white"
                  onClick={closeAll}
                >
                  TA peći Zemun
                </Link>
              </div>
            )}
          </div>

          {/* SERVIS BOJLERA */}
          <div ref={bojlerRef} className="relative">
            <div className="flex items-center gap-2">
              <Link
                href="/usluge/servis-bojlera"
                className="font-bold text-white hover:opacity-90 transition"
                onClick={closeAll}
              >
                Servis bojlera
              </Link>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBojler((v) => !v);
                  setShowTa(false);
                }}
                className="text-white/80 hover:text-white transition"
                aria-label="Otvori Bojler meni"
                aria-haspopup="menu"
                aria-expanded={showBojler}
              >
                ▾
              </button>
            </div>

            {showBojler && (
              <div
                className="absolute top-10 left-0 bg-black/95 border border-white/10 rounded-xl shadow-xl p-4 space-y-2 z-50 min-w-[240px]"
                role="menu"
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  href="/usluge/servis-bojlera/novi-beograd"
                  className="block text-white/80 hover:text-white"
                  onClick={closeAll}
                >
                  Bojler Novi Beograd
                </Link>
                <Link
                  href="/usluge/servis-bojlera/vozdovac"
                  className="block text-white/80 hover:text-white"
                  onClick={closeAll}
                >
                  Bojler Voždovac
                </Link>
                <Link
                  href="/usluge/servis-bojlera/palilula"
                  className="block text-white/80 hover:text-white"
                  onClick={closeAll}
                >
                  Bojler Palilula
                </Link>
              </div>
            )}
          </div>

          <Link href="/usluge" className="hover:text-white transition" onClick={closeAll}>
            Usluge
          </Link>
          <Link href="/cene" className="hover:text-white transition" onClick={closeAll}>
            Cenovnik
          </Link>
          <Link href="/kontakt" className="hover:text-white transition" onClick={closeAll}>
            Kontakt
          </Link>

          {/* TEL link - BEZ onClick tracking-a (to radi _app.tsx globalno) */}
          <a
            href={TEL_HREF}
            className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold hover:brightness-95 transition"
          >
            📞 060 0 5000 63
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Otvori meni"
          aria-expanded={open}
          type="button"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2 text-gray-200">
            <Link href="/" onClick={closeAll} className="py-2 px-2 rounded-lg hover:bg-white/5">
              Početna
            </Link>

            <div className="pt-2">
              <p className="text-xs text-gray-400 mb-2">Najtraženije:</p>

              <Link
                href="/usluge/popravka-ta-peci"
                onClick={closeAll}
                className="block py-2 px-2 rounded-lg hover:bg-white/5"
              >
                TA peći (Beograd)
              </Link>
              <Link
                href="/usluge/servis-bojlera"
                onClick={closeAll}
                className="block py-2 px-2 rounded-lg hover:bg-white/5"
              >
                Servis bojlera (Beograd)
              </Link>
            </div>

            <Link href="/usluge" onClick={closeAll} className="py-2 px-2 rounded-lg hover:bg-white/5">
              Usluge
            </Link>
            <Link href="/cene" onClick={closeAll} className="py-2 px-2 rounded-lg hover:bg-white/5">
              Cenovnik
            </Link>
            <Link href="/kontakt" onClick={closeAll} className="py-2 px-2 rounded-lg hover:bg-white/5">
              Kontakt
            </Link>

            {/* TEL link - BEZ onClick tracking-a (to radi _app.tsx globalno) */}
            <a
              href={TEL_HREF}
              className="mt-3 bg-yellow-400 text-black px-4 py-3 rounded-xl font-bold text-center hover:brightness-95 transition"
            >
              📞 Pozovi odmah — 060 0 5000 63
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
