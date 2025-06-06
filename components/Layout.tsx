import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Phone } from 'lucide-react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />

      {/* Mobilno "Pozovi" dugme – samo ispod md breakpointa */}
      <a
        href="tel:+381600500063"
        aria-label="Pozovi Majstora Dejana"
        role="button"
        className="fixed bottom-4 right-4 z-50 bg-green-600 text-white text-sm px-4 py-2 rounded-full shadow-lg md:hidden flex items-center gap-2 hover:bg-green-700 transition-colors"
      >
        <Phone size={16} aria-hidden="true" />
        Pozovi
      </a>
    </div>
  );
}
