// src/components/sections/Contact/Contact.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out', duration: 1 } });

    if (contactRef.current) {
      tl.from(contactRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
      });
    }
  }, []);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-gray-100 py-24 px-8 mt-10"
    >
      <div className="max-w-5xl mx-auto" ref={contactRef}>
        <h2 id="contact-heading" className="text-3xl font-bold mb-6">
          Get in touch
        </h2>
        <p className="text-gray-600 mb-6">
          Kontaktieren Sie uns für eine persönliche Beratung oder ein individuelles Angebot.
        </p>
        <div className="space-y-6">
          {/* Adresse */}
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v6h6M8 2v6H2m14 14h6v-6m-6 6v-6m6 0h-6m-8 0v6H2v-6h6m0 0v6m0-6h6" />
            </svg>
            <p className="text-gray-800">Alaskari Tech., Bremen</p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
            </svg>
            <a
              href="mailto:info@alaskaritech.com"
              className="text-gray-800 hover:text-black underline"
            >
              info@alaskaritech.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
