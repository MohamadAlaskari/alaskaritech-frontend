// src/components/sections/Header/MobileMenu.tsx
'use client';

import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navigation: NavItem[];
  onClose: () => void;
}

export default function MobileMenu({ isOpen, navigation, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-md p-4 space-y-2 animate-slide-down">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="block py-2 linkColor transition hover:text-primaryHover"
          onClick={onClose}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
