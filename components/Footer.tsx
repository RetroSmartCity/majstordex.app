export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-16 text-center text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} MajstorDex. Sva prava zadržana.</p>
      </div>
    </footer>
  );
}
