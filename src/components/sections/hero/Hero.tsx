// src/components/sections/Hero/Hero.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out', duration: 1 } });

    if (heroRef.current && imageRef.current && headingRef.current && paragraphRef.current && buttonsRef.current) {
      tl.from(heroRef.current, { opacity: 0, y: 50 })
        .from(imageRef.current, { opacity: 0, scale: 0.5 }, "-=0.8")
        .from(headingRef.current, { opacity: 0, y: 20 }, "-=0.6")
        .from(paragraphRef.current, { opacity: 0, y: 20 }, "-=0.6")
        .from(buttonsRef.current, { opacity: 0, y: 20 }, "-=0.6");
    }
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="h-screen pb-24 px-8 flex flex-col justify-center items-center text-center"
    >
      <div ref={heroRef} className="flex flex-col justify-center items-center h-full">
        <Image
          ref={imageRef}
          src="/images/logo.png"
          alt="Alaskari Tech Logo"
          width={128}
          height={128}
          className="w-32 h-32 mb-6"
        />
        <h1
          ref={headingRef}
          id="hero-heading"
          className="text-5xl font-bold"
        >
          Ihre Zukunft im Web beginnt hier
        </h1>
        <p
          ref={paragraphRef}
          className="text-gray-600 mt-4 max-w-xl"
        >
          Innovative Webseiten, starke Marken und effektive digitale Lösungen.
        </p>
        <div
          ref={buttonsRef}
          className="mt-6 flex space-x-4"
        >
          <Link
            href="#contact"
            className="bg-primary text-white px-6 py-3 rounded hover:bg-primaryHover transition"
          >
            Jetzt starten
          </Link>
          <Link
            href="#about"
            className="linkColor text-primary hover:text-primaryHover px-6 py-3"
          >
            Mehr erfahren
          </Link>
        </div>
      </div>
    </section>
  );
}