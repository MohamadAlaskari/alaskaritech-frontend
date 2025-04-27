// src/components/sections/Hero/Hero.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen pb-24 px-8 flex flex-col justify-center items-center text-center"
      data-aos="fade-up"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <img
          src="/images/logo.png"
          alt="Alaskari Tech Logo"
          className="w-30 h-30 mb-6"
          data-aos="zoom-in"
        />
        <h1
          className="text-4xl font-bold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ihre Zukunft im Web beginnt hier
        </h1>
        <p
          className="text-gray-600 mt-4 max-w-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Innovative Webseiten, starke Marken und effektive digitale Lösungen.
        </p>
        <div className="mt-6 flex space-x-2" data-aos="fade-up" data-aos-delay="600">
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
