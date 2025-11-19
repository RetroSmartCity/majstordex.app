export const uslugeMap = {
  "adaptacija-stana": () => import("@/components/usluge/adaptacija-stana"),
  "led-rasveta": () => import("@/components/usluge/led-rasveta"),
  "servis-bojlera": () => import("@/components/usluge/servis-bojlera"),
  "pranje-klime": () => import("@/components/usluge/pranje-klime"),
  "popravka-ta-peci": () => import("@/components/usluge/popravka-ta-peci"),
  "popravka-elektroinstalacija": () =>
    import("@/components/usluge/popravka-elektroinstalacija"),
  "zamena-osiguraca-i-uticnica": () =>
    import("@/components/usluge/zamena-osiguraca-i-uticnica"),
  "hitne-intervencije": () =>
    import("@/components/usluge/hitne-intervencije"),
};
