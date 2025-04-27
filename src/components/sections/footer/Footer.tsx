// src/components/sections/Footer/Footer.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out', duration: 1 } });

    if (footerRef.current) {
      tl.from(footerRef.current, {
        opacity: 0,
        y: 30,
      });
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-primary text-white text-center p-8 mt-10"
    >
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/images/logo3.png"
          alt="Alaskari Tech Logo"
          width={80}
          height={80}
          className="object-contain"
        />
        <p className="text-sm text-white">&copy; 2025 AlaskariTech. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
