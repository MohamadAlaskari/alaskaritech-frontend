// src/components/sections/About/About.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out', duration: 1 } });

    if (aboutRef.current && imageRef.current && textRef.current) {
      tl.from(aboutRef.current, { opacity: 0, y: 50 })
        .from(imageRef.current, { opacity: 0, x: -50 }, "-=0.8")
        .from(textRef.current, { opacity: 0, x: 50 }, "-=0.8");
    }
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 px-8 max-w-7xl mx-auto flex flex-col justify-center"
    >
      <div ref={aboutRef} className="flex flex-col md:flex-row items-center gap-12 mb-12">
        <div className="flex-shrink-0">
          <Image
            ref={imageRef}
            src="/images/mohamad-alaskari.jpeg"
            alt="Mohamad Alaskari"
            width={256}
            height={256}
            className="w-64 h-64 rounded-full object-cover mx-auto md:mx-0"
          />
        </div>
        <div ref={textRef}>
          <h2 id="about-heading" className="text-4xl font-bold mb-6 text-left">
            Alaskari Tech – Innovation trifft Technologie
          </h2>
          <p className="text-gray-600 text-left max-w-2xl">
            Alaskari Tech. ist ein persönliches Projekt von <strong>Mohamad Alaskari</strong>, das sich auf die Entwicklung
            innovativer Weblösungen und kreativer Markenidentitäten spezialisiert hat. Mit einer Ausbildung im Bereich
            Wirtschaft und einem aktuellen Studium der Medieninformatik verbindet Mohamad Alaskari wirtschaftliches
            Know-how mit technischer Expertise, um individuelle digitale Konzepte für Unternehmen und Organisationen
            nachhaltig umzusetzen.
          </p>
        </div>
      </div>
    </section>
  );
}