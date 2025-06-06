import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Phone } from 'lucide-react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); // Pojavi se kad skroluješ 100px
    };

    window.addEventListener('scroll', handleScroll);

    // Poziv odmah da proveri stanje ako si već skrolovao
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />

      {/* Dugme pozovi fiksirano, tik iznad futera, pojavljuje se tek kad se skroluje */}
      {showButton && (
        <a
          href="tel:+381600500063"
          aria-label="Pozovi Majstora Dejana"
          role="button"
          className="fixed bottom-32 right-4 z-50 bg-green-600 text-white text-sm px-4 py-2 rounded-full shadow-lg md:hidden flex items-center gap-2 hover:bg-green-700 transition-all duration-300"
        >
          <Phone size={16} aria-hidden="true" />
          Pozovi
        </a>
      )}
    </div>
  );
}
