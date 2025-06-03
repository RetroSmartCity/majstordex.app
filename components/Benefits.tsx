import { BadgeCheck, ShieldCheck, Gift, CheckCircle } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-green-600" />,
      title: "Sertifikovani majstori",
      desc: "Iskusni električari sa licencom i dugogodišnjom praksom.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Garancija 6 meseci",
      desc: "Garancija na sve radove, uz overenu potvrdu.",
    },
    {
      icon: <Gift className="w-8 h-8 text-purple-600" />,
      title: "Popust za studente i penzionere",
      desc: "Dodatni popusti uz indeks ili penzioni ček.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
      title: "Dolazak u roku od 60-90 minuta",
      desc: "Brzo reagovanje u celom Beogradu – bez lažnih obećanja.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Zašto MajstorDex?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow text-center hover:shadow-md transition">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
