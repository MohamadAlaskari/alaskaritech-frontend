// src/components/sections/Header/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { NavItem } from '@/types';




const NAV_ITEMS: NavItem[] = [
  { name: 'Start', href: '#home' },
  { name: 'Über uns', href: '#about' },
  { name: 'Leistungen', href: '#services' },
  { name: 'Blog', href: '#blog' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo Bereich */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img src="/images/logo.png" alt="Alaskari Tech Logo" className="h-10 w-auto cursor-pointer" />
          </Link>
          <span className="text-2xl font-bold text-gray-800">Alaskari Tech.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="linkColor transition hover:text-primaryHover"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menü Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {menuOpen ? <X className="h-8 w-8 text-gray-800" /> : <Menu className="h-8 w-8 text-gray-800" />}
        </button>
      </div>

      {/* Mobile Menü */}
      <MobileMenu isOpen={menuOpen} navigation={NAV_ITEMS} onClose={closeMenu} />
    </header>
  );
}