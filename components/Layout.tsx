import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Phone } from 'lucide-react';
import SocialBar from './SocialBar'; // Dodajemo SocialBar

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
      
      <SocialBar /> {/* Dodajemo ispod main, iznad Footer */}
      
      <Footer />

      {showButton && (
        <a
          href="tel:+381600500063"
          aria-label="Pozovi Majstora Dejana"
          role="button"
          className="
            fixed bottom-32 right-4 z-50 
            bg-green-600 text-white 
            text-base px-5 py-3 rounded-full 
            shadow-xl flex items-center gap-3 
            hover:bg-green-700 transition-colors duration-300
            md:hidden
            select-none
            active:scale-95 active:shadow-md
            focus:outline-none focus:ring-4 focus:ring-green-400
          "
        >
          <Phone size={20} aria-hidden="true" />
          Pozovi
        </a>
      )}
    </div>
  );
}
