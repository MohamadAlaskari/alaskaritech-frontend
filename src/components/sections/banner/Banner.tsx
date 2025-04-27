'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.to(bannerRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top bottom', // يبدأ من عندما يظهر البانر
          end: 'bottom top',   // ينتهي عند الخروج الكامل
          scrub: true,         // حركة ناعمة مع Scroll
        },
      });
    }
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative h-screen flex items-center justify-start overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="relative z-10 p-8">
        {/* يمكنك إضافة محتوى هنا فوق البانر */}
      </div>
    </section>
  );
}
