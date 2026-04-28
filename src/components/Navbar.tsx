'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '700'],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.4)]">
      {/* background */}
      <div className="">
        <div className="max-w-6xl mx-auto flex items-center justify-between pl-4 pr-4 pt-2 pb-2">
          {/* 🧭 Logo */}
          <div className={`text-4xl tracking-wide ${caveat.className}`}>
            <Link href="/">JASPER LI</Link>
          </div>

          {/* 💻 Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-blue-500 transition">
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* 🍔 Mobile button */}
          <div className="md:hidden flex items-center gap-8">
            <ThemeToggle />
            <button className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
              ☰
            </button>
          </div>
        </div>

        {/* 📱 Mobile menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className=" px-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 hover:text-blue-500 transition text-center"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
