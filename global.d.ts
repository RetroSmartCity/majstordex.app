// global.d.ts
export {}; // <- ovo je neophodno da TypeScript ne baci grešku o redefiniciji

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
