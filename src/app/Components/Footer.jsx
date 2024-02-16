// FooterTop.js
import { Fragment } from 'react';
import Link from 'next/link';

const FooterTop = () => {
  return (
    <div className="bg-gray-500 ">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-auto">
            <Link href="/" className="text-xl font-bold text-gray-800">Your Logo</Link>
          </div>

          <div className="w-full lg:w-auto">
            <nav className="flex space-x-4">
              <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
              <Link href="/about" className="text-gray-800 hover:text-gray-600">About </Link>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
            </nav>
          </div>

          <div className="w-full lg:w-auto">
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com"
                className="text-gray-800 hover:text-gray-600">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                href="https://www.twitter.com"
                className="text-gray-800 hover:text-gray-600"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href="https://www.linkedin.com"
                className="text-gray-800 hover:text-gray-600"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;