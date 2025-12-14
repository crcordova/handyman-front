// app/blog/layout.jsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: `Blog | ${process.env.NEXT_PUBLIC_BUSINESS_NAME} - Maestro y Servicios para el Hogar (Pichilemu)`,
  description: "Consejos y guías sobre gasfitería, carpintería, electricidad y mantenimiento del hogar en Pichilemu y Chile.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `${process.env.NEXT_PUBLIC_BUSINESS_NAME} Servicios de Construcción`,
  "description": "Servicios de Construcción: Maestro gasfitería, carpintería, electricidad y mantenimiento del hogar en Pichilemu y zonas cercanas.",
  "url": "https://tusitio.cl",
  "telephone": `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18 de Septiembre 750",
    "addressLocality": "Pichilemu",
    "addressRegion": "O'Higgins",
    "addressCountry": "CL"
  },
  "areaServed": ["Pichilemu", "Litueche", "La Estrella"], 
  "logo": "https://tusitio.cl/logo.png",
  "sameAs": [
    "https://www.instagram.com/ccordovav"
  ],
  "priceRange": "20.000CLP - 100.000CLP"
};

export default function BlogLayout({ children }) {
  return (
    <main className="min-h-screen bg-gray-50">

        <div className="lg:col-span-2">
          {children}
        </div>

      {/* JSON-LD de LocalBusiness para reforzar SEO local */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

    </main>
  );
}