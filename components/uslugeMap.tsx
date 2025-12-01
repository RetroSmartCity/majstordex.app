// components/uslugeMap.tsx

export const uslugeMap: Record<string, () => Promise<any>> = {
  "led-rasveta": () =>
    import("@/components/usluge/led-rasveta").then((m) => m.default),

  "servis-bojlera": () =>
    import("@/components/usluge/servis-bojlera").then((m) => m.default),

  "pranje-klime": () =>
    import("@/components/usluge/pranje-klime").then((m) => m.default),

  "popravka-ta-peci": () =>
    import("@/components/usluge/popravka-ta-peci").then((m) => m.default),

  "popravka-elektroinstalacija": () =>
    import("@/components/usluge/popravka-elektroinstalacija").then(
      (m) => m.default
    ),

  "zamena-osiguraca-i-uticnica": () =>
    import("@/components/usluge/zamena-osiguraca-i-uticnica").then(
      (m) => m.default
    ),

  "hitne-intervencije": () =>
    import("@/components/usluge/hitne-intervencije").then((m) => m.default),
};
