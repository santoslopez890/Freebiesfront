'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-indigo-600">MyLogo</span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-indigo-600 transition">Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-indigo-600 transition">About</Link>
          <Link href="/services" className="block text-gray-700 hover:text-indigo-600 transition">Services</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-indigo-600 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
