"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky efekat
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        border-b backdrop-blur-xl
        ${scrolled ? "bg-slate-900/90 border-white/10 shadow-lg" : "bg-slate-900/60 border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO - Desktop + Mobile identično */}
        <Link href="/" className="flex items-center gap-3 select-none">
          <Image
            src="/logo1.webp"
            alt="MajstorDex"
            width={36}
            height={36}
            className="rounded-sm"
            priority
          />
          <span className="text-lg font-bold tracking-wide text-white">
            MajstorDex
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
          <Link href="/" className="hover:text-white transition">Početna</Link>
          <Link href="/usluge" className="hover:text-white transition">Usluge</Link>
          <Link href="/cene" className="hover:text-white transition">Cenovnik</Link>
          <Link href="/kontakt" className="hover:text-white transition">Kontakt</Link>

          <a
            href="tel:+381600500063"
            className="flex items-center gap-2 bg-yellow-400 text-black
              font-semibold px-4 py-2 rounded-xl shadow-lg hover:bg-yellow-300 transition"
          >
            <Phone size={18} />
            060 0 5000 63
          </a>
        </nav>

        {/* MOBILE ICON BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Otvori meni"
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden bg-slate-900/95 backdrop-blur-xl 
            border-t border-white/10 px-4 py-4 space-y-4 
            text-gray-200 text-base animate-fadeIn
          "
        >
          <Link href="/" onClick={() => setOpen(false)} className="block py-2 border-b border-white/10">
            Početna
          </Link>
          <Link href="/usluge" onClick={() => setOpen(false)} className="block py-2 border-b border-white/10">
            Usluge
          </Link>
          <Link href="/cene" onClick={() => setOpen(false)} className="block py-2 border-b border-white/10">
            Cenovnik
          </Link>
          <Link href="/kontakt" onClick={() => setOpen(false)} className="block py-2 border-b border-white/10">
            Kontakt
          </Link>

          <a
            href="tel:+381600500063"
            className="
              flex items-center gap-2 bg-yellow-400 text-black font-semibold
              px-4 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition
            "
          >
            <Phone size={20} />
            Pozovi odmah
          </a>
        </div>
      )}
    </header>
  );
}
