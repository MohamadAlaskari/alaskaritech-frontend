// src/components/sections/Banner/Banner.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out', duration: 1.2 } });

    if (bannerRef.current) {
      tl.from(bannerRef.current, {
        opacity: 0,
        scale: 0.95,
      });
    }
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Mobile Banner */}
      <div
        className="absolute inset-0 md:hidden bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/banner-sm.png')" }}
      ></div>

      {/* Desktop Banner */}
      <div
        className="absolute inset-0 hidden md:block bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      ></div>

      {/* Optional Content on Banner */}
      <div className="relative z-10 p-8">
        {/* You can add text or buttons here if needed later */}
      </div>
    </section>
  );
}
