'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Link } from 'lucide-react';
import { ServicesGrid } from '../components/ServicesGrid'


// Layout Component
const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Carpintería', href: '/servicios/carpinteria' },
    { name: 'Electricidad', href: '/servicios/electricidad' },
    { name: 'Gasfitería', href: '/servicios/gasfiteria' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      

      {/* Main Content */}
      <main className="grow">
        {children}
      </main>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40"
        aria-label="Contactar por WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>

      
    </div>
  );
};

// Home Page Component
const HomePage = () => {


  const reviews = [
    {
      name: 'María González',
      text: 'Excelente servicio, muy profesional y rápido. Totalmente recomendado.',
      rating: 5
    },
    {
      name: 'Juan Pérez',
      text: 'Muy satisfecho con el trabajo realizado. Cumplió con los plazos acordados.',
      rating: 5
    },
    {
      name: 'Carolina Silva',
      text: 'Trabajo impecable y precios justos. Volveré a contratar sus servicios.',
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      title: 'Experiencia Comprobada',
      description: 'Más de 5 años de experiencia en el rubro',
      icon: '🏆'
    },
    {
      title: 'Tarifas Justas',
      description: 'Precios competitivos sin sorpresas',
      icon: '💰'
    },
    {
      title: 'Garantía de Calidad',
      description: 'Todos nuestros trabajos tienen garantía',
      icon: '✓'
    },
    {
      title: 'Atención Personalizada',
      description: 'Cada proyecto es único y lo tratamos así',
      icon: '👤'
    }
  ];

  const workZones = [
    'Pichilemu',
    'Punta Lobos',
    'Cahuil',

  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/main.jpg)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Servicios de Mantención Profesional para tu Hogar</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Carpintería, electricidad y gasfitería realizados por ingeniero con experiencia en obra.
          </p>
          <a 
            href="#servicios" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Ver Servicios
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Sobre Mí</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Soy ingeniero con más de 5 años de experiencia en trabajos de construcción y mantención del hogar.
            Combino formación técnica con experiencia real en terreno para entregar soluciones seguras, funcionales y bien ejecutadas, cuidando cada detalle del trabajo. 
            
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Cada proyecto es único y merece toda mi dedicación. Trabajo con pasión y profesionalismo 
            para superar las expectativas de mis clientes, garantizando resultados duraderos y satisfactorios.
          </p>
        </div>
      </section>

     

      {/* services Section */}
      {/* <ServicesGrid title={
        <Link href="/servicios" className="hover:underline">Mis Servicios</Link>
      } /> */}
      <ServicesGrid title="Mis Servicios" titleLink="/servicios" />


      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Lo Que Dicen Mis Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-gray-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Zones Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Zonas de Cobertura</h2>
          <p className="text-xl mb-8">Brindo mis servicios en las siguientes comunas:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {workZones.map((zone) => (
              <div key={zone} className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
                {zone}
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg">¿Tu zona no está en la lista? ¡Contáctanos de todas formas!</p>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;