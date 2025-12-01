"use client";

import { Star, Clock, ShieldCheck, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: Star,
    color: "text-yellow-400",
    title: "805+ pozitivnih ocena",
    desc: "Najbolje ocenjen električar u Beogradu – proveren kvalitet usluge.",
  },
  {
    icon: Clock,
    color: "text-blue-400",
    title: "Dolazak za 60–90 min",
    desc: "Brz dolazak u svim beogradskim opštinama, bez lažnih obećanja.",
  },
  {
    icon: ShieldCheck,
    color: "text-green-400",
    title: "Garancija 6 meseci",
    desc: "Garancija na sve popravke i ugrađene delove.",
  },
  {
    icon: BadgeCheck,
    color: "text-purple-400",
    title: "15+ godina iskustva",
    desc: "Profesionalan i sertifikovan majstor sa višegodišnjom praksom.",
  },
];

export default function BenefitsPro() {
  return (
    <section className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
          Zašto MajstorDex?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {items.map(({ icon: Icon, color, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-7 shadow hover:shadow-lg transition border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <Icon className={`w-10 h-10 ${color}`} />
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-gray-900">
                {title}
              </h3>
              <p className="text-center text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
