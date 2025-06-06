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
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />

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
