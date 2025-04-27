// src/components/sections/Services/Services.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const services = [
  {
    title: 'Webseiten für Ihre Praxis',
    description: 'Professionelle, vertrauensvolle Webauftritte für medizinische und therapeutische Praxen.',
    image: '/images/praxis-website.png',
  },
  {
    title: 'Webseiten für Ihre Person',
    description: 'Individuelle Webseiten für Selbstständige, Freelancer und Persönlichkeiten.',
    image: '/images/personal-website.jpg',
  },
  {
    title: 'Webseiten für Vereine & Organisationen',
    description: 'Starke Online-Präsenz für Vereine, NGOs und Organisationen, um Ihre Ziele sichtbar zu machen.',
    image: '/images/verein-website.jpg',
  },
];

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out', duration: 1 } });

    if (servicesRef.current) {
      tl.from(servicesRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
      });
    }
  }, []);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-gray-100 py-24 px-8 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 id="services-heading" className="text-4xl font-bold mb-10">
          Unsere Leistungen
        </h2>
        <div
          ref={servicesRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow overflow-hidden flex flex-col justify-center"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex flex-col justify-center items-center p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}