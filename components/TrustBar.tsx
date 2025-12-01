"use client";

import { Clock, Star, Zap } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-4">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between text-center md:text-left">

        {/* GRID – MOBILE SAFE */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* 1. RECENZIJE */}
          <div className="flex items-center justify-center gap-2">
            <Star className="text-yellow-500" size={22} />
            <span className="text-sm font-medium text-slate-700">
              ⭐ 4.9 / 800+ recenzija
            </span>
          </div>

          {/* 2. DOLAZAK */}
          <div className="flex items-center justify-center gap-2">
            <Clock className="text-slate-700" size={22} />
            <span className="text-sm font-medium text-slate-700">
              Dolazak za 60–90 minuta
            </span>
          </div>

          {/* 3. DOSTUPNOST */}
          <div className="flex items-center justify-center gap-2">
            <Zap className="text-blue-600" size={22} />
            <span className="text-sm font-medium text-slate-700">
              24/7 hitne intervencije
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
