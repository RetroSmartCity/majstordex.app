/* ------------------------------------------------------
   MajstorDex – PREMIUM Naselja System (SEO optimized)
   Potpuna podrška za: footer, usluge×naselje,
   sitemap, breadcrumbs, lokalne SEO stranice.
-------------------------------------------------------*/

/* Helper – SEO friendly slug */
const toSlug = (str: string): string =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/đ/g, "dj")
    .replace(/ć/g, "c")
    .replace(/č/g, "c")
    .replace(/š/g, "s")
    .replace(/ž/g, "z")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

/* ------------------------------------------------------
   1) PRIORITET: BRZI DOLAZAK (≈ 30 MIN)
-------------------------------------------------------*/
export const brziDolazakNaselja = [
  "Mirijevo",
  "Mirijevo I",
  "Mirijevo II",
  "Mirijevo III",
  "Mirijevo IV",
  "Višnjica",
  "Mali Mokri Lug",
  "Karaburma",
  "Ovča",
  "Borča",
  "Medaković",
  "Zvezdara",
];

/* ------------------------------------------------------
   2) OSTALA NASELJA (60–90 MIN)
-------------------------------------------------------*/
export const ostalaNaselja = [
  "Stari Grad",
  "Savski Venac",
  "Vračar",
  "Novi Beograd",
  "Zemun",
  "Čukarica",
  "Voždovac",
  "Palilula",
  "Rakovica",
  "Beograd",
];

/* ------------------------------------------------------
   3) Sva Naselja
-------------------------------------------------------*/
export const svaNaselja = [...brziDolazakNaselja, ...ostalaNaselja];

/* ------------------------------------------------------
   4) Objekti za rad sa UI
-------------------------------------------------------*/
export const svaNaseljaObj = svaNaselja.map((naziv) => ({
  naziv,
  slug: toSlug(naziv),
}));

export const brziDolazakNaseljaObj = brziDolazakNaselja.map((naziv) => ({
  naziv,
  slug: toSlug(naziv),
}));

export const ostalaNaseljaObj = ostalaNaselja.map((naziv) => ({
  naziv,
  slug: toSlug(naziv),
}));

/* ------------------------------------------------------
   5) PREMIUM SEO PODACI ZA SVAKO NASELJE
   – opis naselja
   – liste ulica (koristi se za lokalizaciju teksta)
   – tipični kvarovi (koristi se za kombinacije sadržaja)
-------------------------------------------------------*/

export const naseljaInfo: Record<
  string,
  {
    ime: string;
    ulice: string[];
    opis: string;
    problemi: string[];
  }
> = {
  /* ---------- BRZI DOLAZAK NASILJA ---------- */

  mirijevo: {
    ime: "Mirijevo",
    ulice: ["Ustanička", "Matice Srpske", "Mirijevski venac", "Ćalije"],
    opis:
      "Mirijevo ima veliki broj zgrada i kuća sa starijim instalacijama, gde su česti kvarovi na TA pećima, osiguračima i bojlerima zbog variranja napona.",
    problemi: [
      "pregoreli grejači",
      "iskakanje osigurača",
      "pregrevanje TA peći",
      "curenje ventila na bojleru",
    ],
  },

  "mirijevo-i": {
    ime: "Mirijevo I",
    ulice: ["Grčića Milenka", "Mirijevski bulevar", "Ravanička"],
    opis:
      "Mirijevo I je deo sa starijom gradnjom i čestim kvarovima na osiguračima i instalacijama pod opterećenjem.",
    problemi: ["loš kontakt", "pregoreli kablovi", "problemi sa FID sklopkom"],
  },

  "mirijevo-ii": {
    ime: "Mirijevo II",
    ulice: ["Vitezova Karađorđeve zvezde", "Koste Nadja", "Gnjilanska"],
    opis:
      "Mirijevo II ima kombinaciju novih i starih objekata, gde često intervenišemo na TA pećima i bojlerima.",
    problemi: ["pregoreli termostati", "pucanje osigurača", "kratki spoj"],
  },

  "mirijevo-iii": {
    ime: "Mirijevo III",
    ulice: ["Grčića Milenka", "Matice Srpske", "Mirijevski venac"],
    opis:
      "Ovaj deo Mirijeva ima dosta gusto naseljenih zgrada sa problemima u razvodnim kutijama i utičnicama koje se pregrevaju.",
    problemi: ["preopterećenje", "pregorele utičnice", "loša instalacija"],
  },

  "mirijevo-iv": {
    ime: "Mirijevo IV",
    ulice: ["Stevana Dukića", "Ćalije", "Lopudska"],
    opis:
      "Mirijevo IV je naselje u ekspanziji sa problemima usled kombinacije starih i novih instalacija.",
    problemi: ["termostati", "spojnice", "pregorele žice"],
  },

  visnjica: {
    ime: "Višnjica",
    ulice: ["Višnjička", "Koste Nađa", "Zadrugarska"],
    opis:
      "Višnjica ima mnogo starijih kuća i specifičnih instalacija gde su česti kvarovi na osiguračima i priključnim tačkama.",
    problemi: ["iskakanje fid sklopke", "oštećene žice", "kvarovi na bojleru"],
  },

  "mali-mokri-lug": {
    ime: "Mali Mokri Lug",
    ulice: ["Zrenjaninski put", "Majevička", "Mokroluška"],
    opis:
      "Poznat po starijim kućama sa nestandardnim instalacijama koje često zahtevaju hitne intervencije.",
    problemi: ["kratki spoj", "pregrevanje", "loše uzemljenje"],
  },

  karaburma: {
    ime: "Karaburma",
    ulice: ["Višnjička", "Marijane Gregoran", "Mike Alasa"],
    opis:
      "Karaburma je naselje sa velikim brojem starijih zgrada gde se često javljaju kvarovi u razvodnim kutijama i na prekidačima.",
    problemi: ["pregorele žice", "loš kontakt", "problem sa TA pećima"],
  },

  ovca: {
    ime: "Ovča",
    ulice: ["Branka Radičevića", "Ovčanska", "Pančevački put"],
    opis:
      "Ovča ima veliki broj kuća sa starim instalacijama, gde su česty problemi sa vikend – korisinicima i preopterećenjem.",
    problemi: ["pregoreli kablovi", "osigurači", "kvarovi na bojleru"],
  },

  borca: {
    ime: "Borča",
    ulice: ["Zrenjaninski put", "Ranka Miljića", "Branka Radičevića"],
    opis:
      "Borča ima česte probleme sa nestabilnim naponom, što dovodi do kvarova na TA pećima, bojlerima i elektro instalaciji.",
    problemi: ["pregoreli grejači", "FID sklopka", "kratki spoj"],
  },

  medakovic: {
    ime: "Medaković",
    ulice: ["Tošin bunar", "Ignjata Joba", "Vojvode Stepe"],
    opis:
      "Medaković je poznat po kombinaciji stare i nove gradnje, gde su česti problemi sa utičnicama i osiguračima.",
    problemi: ["pregrevanje", "loš kontakt", "pregoreli termostati"],
  },

  zvezdara: {
    ime: "Zvezdara",
    ulice: ["Bulevar Kralja Aleksandra", "Vojislava Ilića", "Đerdapska"],
    opis:
      "Veliko gradsko naselje sa mnogim starijim zgradama i kućama gde su česti elektro problemi zbog starijih instalacija.",
    problemi: [
      "pregoreli kablovi",
      "iskakanje osigurača",
      "problem sa TA pećima",
      "kvarovi na bojlerima",
    ],
  },

  /* ---------- OSTALA NASELJA ---------- */

  "stari-grad": {
    ime: "Stari Grad",
    ulice: ["Knez Mihailova", "Cara Dušana", "Strahinjića Bana"],
    opis:
      "Stari Grad ima mnogo starijih zgrada sa dotrajalim instalacijama koje zahtevaju hitne intervencije.",
    problemi: ["pregorele žice", "stariji automatski osigurači", "problem sa prekidačima"],
  },

  "savski-venac": {
    ime: "Savski Venac",
    ulice: ["Nemanjina", "Sarajevska", "Birčaninova"],
    opis:
      "Savski Venac ima kombinaciju stare i nove gradnje, sa čestom potrebom za servisom osigurača i TA peći.",
    problemi: ["pregoreli grejači", "kvarovi termostata", "loš kontakt"],
  },

  vracar: {
    ime: "Vračar",
    ulice: ["Krunska", "Njegoševa", "Čuburska"],
    opis:
      "Naselje sa velikim brojem starijih zgrada i čestim intervencijama na osiguračima, prekidačima i TA pećima.",
    problemi: ["pregorele instalacije", "problem sa bojlerima", "preopterećenje"],
  },

  "novi-beograd": {
    ime: "Novi Beograd",
    ulice: ["Goce Delčeva", "Bulevar Mihajla Pupina", "Tošin bunar"],
    opis:
      "Modernije naselje ali sa velikim brojem intervencija zbog opterećenih instalacija i velikog broja klima uređaja.",
    problemi: ["grejači", "termostati", "klima drenaža", "FID greške"],
  },

  zemun: {
    ime: "Zemun",
    ulice: ["Glavna", "Kej Oslobođenja", "Prvomajska"],
    opis:
      "Zemun ima raznovrsnu gradnju i često zahteva intervencije na TA pećima, osiguračima i bojlerima.",
    problemi: ["pregrevanje instalacije", "pregorele utičnice", "kvarovi spirala"],
  },

  cukarica: {
    ime: "Čukarica",
    ulice: ["Požeška", "Ace Joksimovića", "Žarkovo"],
    opis:
      "Čukarica je veliko naselje sa raznolikim instalacijama i čestim pozivima za servis TA peći i bojlera.",
    problemi: ["pucanje spirale", "FID problemi", "kratki spoj"],
  },

  vozdovac: {
    ime: "Voždovac",
    ulice: ["Vojvode Stepe", "Bulevar oslobođenja", "Autokomanda"],
    opis:
      "Voždovac ima mnogo kuća i zgrada sa starijim instalacijama, što dovodi do čestih elektro kvarova.",
    problemi: ["pregoreli grejači", "preopterećenje utičnica", "kvarovi prekidača"],
  },

  palilula: {
    ime: "Palilula",
    ulice: ["Bulevar despota Stefana", "Cvijićeva", "Danijelova"],
    opis:
      "Palilula ima dosta starih objekata gde se najčešće javljaju problemi sa razvodnim kutijama i osiguračima.",
    problemi: ["pregorele žice", "FID sklopka", "loš kontakt"],
  },

  rakovica: {
    ime: "Rakovica",
    ulice: ["Patrijarha Joanikija", "Vidikovac", "Kanarevo brdo"],
    opis:
      "Rakovica ima veliki broj TA peći i česte kvarove na bojlerima zbog velikog opterećenja instalacija.",
    problemi: ["kvar grejača", "pregorele spirale", "pregrijavanje"],
  },

  beograd: {
    ime: "Beograd",
    ulice: ["Sve opštine", "Sve gradske zone"],
    opis:
      "Beograd kao celina ima veliki raspon problema – od starih instalacija u centru do opterećenih sistema u novogradnji.",
    problemi: [
      "pregoreli kablovi",
      "problemi sa osiguračima",
      "pucanje grejača na bojlerima",
      "kvarovi TA peći",
    ],
  },
};
