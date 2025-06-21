import { FaFacebookF, FaInstagram, FaTiktok, FaStore } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="bg-gray-100 py-6 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 flex justify-center gap-6 flex-wrap">
        <a
          href="https://www.facebook.com/yourpage" // zameni URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-blue-600 text-2xl hover:bg-blue-50 hover:scale-110 transition-all duration-300"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/yourpage" // zameni URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-pink-500 text-2xl hover:bg-pink-50 hover:scale-110 transition-all duration-300"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.tiktok.com/@yourpage" // zameni URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-black text-2xl hover:bg-gray-200 hover:scale-110 transition-all duration-300"
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.kupujemprodajem.com" // zameni URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="KupujemProdajem"
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-orange-500 text-2xl hover:bg-orange-50 hover:scale-110 transition-all duration-300"
        >
          <FaStore />
        </a>
      </div>
    </div>
  );
}
