'use client';
import Link from 'next/link';
import { useState } from 'react';
import SearchBar from '../shared/SearchBar';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-mara-400">
          Mara<span className="text-gold">TV</span>
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/browse" className="hover:text-mara-300">Browse</Link>
          <Link href="/live-sports" className="hover:text-mara-300">Live Sports</Link>
          <Link href="/my-list" className="hover:text-mara-300">My List</Link>
          <SearchBar />
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/90 px-4 pb-4 space-y-3">
          <Link href="/browse" className="block hover:text-mara-300">Browse</Link>
          <Link href="/live-sports" className="block hover:text-mara-300">Live Sports</Link>
          <Link href="/my-list" className="block hover:text-mara-300">My List</Link>
          <SearchBar mobile />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
