export const uslugeMap = {
  "servis-bojlera": () => import("@/components/usluge/servis-bojlera"),
  "pranje-klime": () => import("@/components/usluge/pranje-klime"),
  "popravka-ta-peci": () => import("@/components/usluge/popravka-ta-peci"),
  "popravka-elektroinstalacija": () => import("@/components/usluge/popravka-elektroinstalacija"), // proveri ime fajla
  "zamena-osiguraca-i-uticnica": () => import("@/components/usluge/zamena-osiguraca-i-uticnica"),
  "hitne-intervencije": () => import("@/components/usluge/hitne-intervencije"),
};
