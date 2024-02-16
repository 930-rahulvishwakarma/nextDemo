import Link from 'next/link';
import '../globals.css';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            Movie Website
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/About" className="text-white">
              About
            </Link>
            <Link href="/Movies" className="text-white">
              Movies
            </Link>
            <Link href="/Contact" className="text-white">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
