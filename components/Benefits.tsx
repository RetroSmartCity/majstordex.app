'use client';

import {
  BadgeCheck,
  ShieldCheck,
  Gift,
  CheckCircle,
  LucideIcon,
} from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  desc: string;
}

const benefits: Benefit[] = [
  {
    icon: BadgeCheck,
    iconColor: 'text-green-600',
    title: 'Sertifikovani majstori',
    desc: 'Iskusni električari sa licencom i dugogodišnjom praksom.',
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-blue-600',
    title: 'Garancija 6 meseci',
    desc: 'Garancija na sve radove, uz overenu potvrdu.',
  },
  {
    icon: Gift,
    iconColor: 'text-purple-600',
    title: 'Popust za studente i penzionere',
    desc: 'Dodatni popusti uz indeks ili penzioni ček.',
  },
  {
    icon: CheckCircle,
    iconColor: 'text-amber-600',
    title: 'Dolazak u roku od 60-90 minuta',
    desc: 'Brzo reagovanje u celom Beogradu – bez lažnih obećanja.',
  },
];

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-12" aria-label="Prednosti MajstorDex usluge">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Zašto MajstorDex?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, iconColor, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow text-center hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">
                <Icon className={`w-8 h-8 ${iconColor}`} aria-hidden="true">
                  <title>{title}</title>
                </Icon>
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
