// src/data/usluge.ts

export interface UslugaItem {
  naziv: string;
  slug: string;
  icon?: string;

  /* PREMIUM SEO dodatak */
  varijante: string[];
  problemi: string[];
  resenja: string[];
  naslovi: string[];
}

export const sveUsluge: UslugaItem[] = [
  /* ------------------------------------------------------
     1) SERVIS BOJLERA
  -------------------------------------------------------*/
  {
    naziv: "Servis bojlera",
    slug: "servis-bojlera",
    icon: "🚿",

    varijante: [
      "Profesionalan servis bojlera sa brzom dijagnostikom i kvalitetnom zamenom grejača, termostata i sigurnosnih elemenata.",
      "Stručno rešavamo sve kvarove na bojlerima — curenje, pregoreli grejači, kamenac i problem sa termostatom.",
      "Dolazimo na adresu i popravljamo sve vrste bojlera: zamena grejača, termostata, čišćenje kamenca i rešavanje curenja.",
      "Servis bojlera bez čekanja — brzo otkrivamo kvar i popravljamo ili menjamo neispravan deo.",
      "Rešavamo sve vrste kvarova na bojlerima uz garanciju na ugrađene delove i profesionalan pristup.",
    ],

    problemi: [
      "pregoreli grejač",
      "curenje ventila",
      "FID sklopka izbacuje",
      "kamenac u kazanu",
      "pregoreli sigurnosni termostat",
    ],

    resenja: [
      "zamena grejača",
      "zamena termostata",
      "čišćenje bojlera od kamenca",
      "provera instalacije",
      "servis ventila i priključaka",
    ],

    naslovi: [
      "Servis bojlera – hitne intervencije",
      "Majstor za bojlere – dolazak 60–90 min",
      "Popravka bojlera uz garanciju",
    ],
  },

  /* ------------------------------------------------------
     2) POPRAVKA TA PEĆI
  -------------------------------------------------------*/
  {
    naziv: "Popravka TA peći",
    slug: "popravka-ta-peci",
    icon: "🔥",

    varijante: [
      "Stručna popravka TA peći uz kompletnu dijagnostiku grejača, ventilatora i termostata.",
      "Rešavamo sve kvarove na TA pećima — grejači, termostati, kablovi i sigurnosni elementi.",
      "TA peć ne greje, pregreva se ili ventilator ne radi? Dolazimo brzo i popravljamo na licu mesta.",
      "Servis TA peći svih proizvođača uz zamenu grejača i podešavanje termostata.",
      "Profesionalna popravka TA peći uz garanciju i brzu uslugu.",
    ],

    problemi: [
      "pregoreli grejači",
      "ne radi ventilator",
      "slabije grejanje",
      "pregrejavanje",
      "termostat ne isključuje",
    ],

    resenja: [
      "zamena grejača",
      "servo podešavanje termostata",
      "zamena ventilatora",
      "provera instalacije",
      "čišćenje peći i komore",
    ],

    naslovi: [
      "Popravka TA peći – brza usluga",
      "Servis TA peći sa garancijom",
      "Majstor za TA peći – dolazak danas",
    ],
  },

  /* ------------------------------------------------------
     3) ČIŠĆENJE KLIMA UREĐAJA
  -------------------------------------------------------*/
  {
    naziv: "Čišćenje klima uređaja",
    slug: "pranje-klime",
    icon: "❄️",

    varijante: [
      "Dubinsko čišćenje klime uz antibakterijski tretman i uklanjanje neprijatnih mirisa.",
      "Profesionalno pranje klime visokim pritiskom – potpuno čišćenje turbine, isparivača i kadice.",
      "Rešavamo curenje vode, nakupljenu prljavštinu i slabu efikasnost hlađenja.",
      "Detaljno čišćenje unutrašnje jedinice sa dezinfekcijom i odstranjivanjem buđi.",
      "Čišćenje klime koje vraća snagu hlađenja i štedi struju.",
    ],

    problemi: [
      "curenje vode iz klime",
      "neprijatan miris",
      "slabo hlađenje",
      "zapušena drenaža",
      "prljav isparivač",
    ],

    resenja: [
      "profesionalno pranje pod pritiskom",
      "otpušavanje drenaže",
      "dezinfekcija",
      "čišćenje turbine",
      "servis klime i provera freona",
    ],

    naslovi: [
      "Pranje i dezinfekcija klime",
      "Profesionalno dubinsko čišćenje klime",
      "Servis i higijensko čišćenje klime",
    ],
  },

  /* ------------------------------------------------------
     4) POPRAVKA ELEKTRO INSTALACIJA
  -------------------------------------------------------*/
  {
    naziv: "Popravka elektro instalacija",
    slug: "popravka-elektroinstalacija",
    icon: "🔌",

    varijante: [
      "Stručno rešavamo sve probleme na elektro instalacijama – kratki spojevi, pregoreli kablovi, osigurači i prekidači.",
      "Brza intervencija na elektro instalaciji – zamena utičnica, prekidača, kablova i razvodnih kutija.",
      "Rešavanje kvarova koji izazivaju iskakanje osigurača ili FID zaštite.",
      "Kompletna dijagnostika i popravka neispravnih instalacija u stanu ili kući.",
      "Bezbedna i profesionalna popravka svih vrsta elektro kvarova.",
    ],

    problemi: [
      "iskakanje osigurača",
      "FID sklopka se isključuje",
      "pregorele utičnice",
      "kratki spoj",
      "pregrevanje instalacije",
    ],

    resenja: [
      "zamena kablova",
      "servis prekidača",
      "zamena osigurača",
      "popravka razvodne kutije",
      "provera uzemljenja",
    ],

    naslovi: [
      "Popravka elektro instalacija – hitne intervencije",
      "Majstor električar za sve kvarove",
      "Rešavanje problema sa instalacijama",
    ],
  },

  /* ------------------------------------------------------
     5) ZAMENA OSIGURAČA I UTIČNICA
  -------------------------------------------------------*/
  {
    naziv: "Zamena osigurača i utičnica",
    slug: "zamena-osiguraca-i-uticnica",
    icon: "🔧",

    varijante: [
      "Brza zamena osigurača, utičnica i prekidača sa profesionalnom instalacijom.",
      "Rešavamo sve vrste kvarova na osiguračima, automatskim sklopkama i utičnicama.",
      "Zamena dotrajalih ili pregrejanih utičnica, FID sklopki i automatskih osigurača.",
      "Bezbedna montaža novih utičnica, prekidača i rasvetnih elemenata.",
      "Stručna popravka utičnica koje varniče, pregrevaju se ili nemaju kontakt.",
    ],

    problemi: [
      "pregorele utičnice",
      "labav kontakt",
      "varničenje",
      "stara instalacija",
      "pregoreli automatski osigurač",
    ],

    resenja: [
      "zamena utičnice",
      "zamena automatskog osigurača",
      "provera kablova",
      "učvršćivanje instalacije",
      "zamena FID zaštite",
    ],

    naslovi: [
      "Zamena osigurača i utičnica",
      "Servis utičnica i sklopki",
      "Brza popravka električnih priključaka",
    ],
  },

  /* ------------------------------------------------------
     6) LED RASVETA
  -------------------------------------------------------*/
  {
    naziv: "LED rasveta",
    slug: "led-rasveta",
    icon: "💡",

    varijante: [
      "Profesionalna montaža LED rasvete – trake, plafonjere, spotovi i dekorativna rasveta.",
      "Ugradnja LED traka i profila sa preciznim sečenjem i povezivanjem.",
      "Zamena stare rasvete LED rešenjima uz uštedu električne energije.",
      "Montaža LED panela, senzora i spoljne rasvete.",
      "Stručna instalacija LED rasvete u stanu, lokalu ili dvorištu.",
    ],

    problemi: [
      "treperenje LED rasvete",
      "pregorele LED trake",
      "loše povezivanje",
      "neispravni drajveri",
      "prevelika potrošnja starih sijalica",
    ],

    resenja: [
      "zamena LED drajvera",
      "ispravna montaža LED traka",
      "povezivanje prekidača",
      "ugradnja LED panela",
      "energetski efikasna rasveta",
    ],

    naslovi: [
      "Ugradnja i servis LED rasvete",
      "Profesionalna LED montaža",
      "LED trake i profili – instalacija",
    ],
  },

  /* ------------------------------------------------------
     7) HITNE ELEKTRO INTERVENCIJE
  -------------------------------------------------------*/
  {
    naziv: "Hitne elektro intervencije",
    slug: "hitne-intervencije",
    icon: "⚡",

    varijante: [
      "Hitne elektro intervencije 0–24 – rešavamo sve kvarove u najkraćem roku.",
      "Brz dolazak u roku od 60–90 minuta za sve hitne elektro probleme.",
      "Kratki spoj, iskakanje osigurača ili pregorela instalacija? Dolazimo odmah.",
      "Dežurni električar 0–24 za sve tipove hitnih kvarova.",
      "Profesionalno rešavanje urgentnih elektro problema u celom Beogradu.",
    ],

    problemi: [
      "iskakanje osigurača",
      "kratak spoj",
      "pregorela instalacija",
      "ne radi struja u sobi",
      "pregorela utičnica",
    ],

    resenja: [
      "hitna dijagnostika",
      "zamena osigurača",
      "popravka prekidača",
      "učvršćivanje kablova",
      "servis instalacije",
    ],

    naslovi: [
      "Hitne elektro intervencije – 0–24",
      "Dežurni električar Beograd",
      "Brz dolazak za elektro kvarove",
    ],
  },
];
