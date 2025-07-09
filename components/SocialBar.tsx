import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";

export default function SocialBar() {
  return (
    <div className="bg-gray-100 py-6 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 flex justify-center gap-6 flex-wrap">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61577814248884"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-blue-600 text-2xl hover:bg-blue-50 hover:scale-110 transition-all duration-300"
        >
          <FaFacebookF />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/majstordex.rs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-pink-500 text-2xl hover:bg-pink-50 hover:scale-110 transition-all duration-300"
        >
          <FaInstagram />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@yourpage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-black text-2xl hover:bg-gray-200 hover:scale-110 transition-all duration-300"
        >
          <FaTiktok />
        </a>

        {/* KupujemProdajem - logo sa slikom */}
<a
  href="https://www.kupujemprodajem.com/usluge-majstori/elektricar/elektricar-hitne-intervencije/oglas/174999523"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="KupujemProdajem"
  className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center overflow-hidden relative"
>
  <Image
    src="/images/kp-logo.webp"
    alt="KupujemProdajem"
    width={240}       // 5x veće od 48
    height={240}
    style={{
      objectFit: 'contain',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) scale(0.33)',  // dodatno skalira sliku
      pointerEvents: 'none',
      maxWidth: 'none',
      maxHeight: 'none',
      width: 'auto',
      height: 'auto',
    }}
  />
</a>


      </div>
    </div>
  );
}
