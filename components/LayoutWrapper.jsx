
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';

export default function LayoutWrapper({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Carpintería', href: '/servicios/carpinteria' },
    { name: 'Electricidad', href: '/servicios/electricidad' },
    { name: 'Gasfitería', href: '/servicios/gasfiteria' }
  ];

  const handleClose = () => {
    setIsServicesOpen(false);
  };
  const handleToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              {process.env.NEXT_PUBLIC_BUSINESS_NAME}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Inicio
              </Link>

              <Link href="/about" className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Sobre Mí
              </Link>
              
              {/* Services Dropdown */}
               <ServicesDropdown services={services} isScrolled={isScrolled} />


              <Link href="/precios" className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Precios
              </Link>

              <Link href="/blog" className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Blog
              </Link>

              <Link href="/contacto" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Contacto
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <X className={isScrolled ? 'text-gray-700' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsMenuOpen(false)}>Sobre Mí</Link>
                <div className="px-3 py-2">
                  <p className="text-sm font-semibold text-gray-500 mb-2">Servicios</p>
                  {services.map((service) => (
                    <Link
                    key={service.name}
                    href={service.href}
                    className="block py-2 pl-4 text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link href="/precios" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsMenuOpen(false)}>Precios</Link>
                <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                <Link href="/contacto" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content - añadir padding-top para compensar el nav fijo */}
      <main className="grow pt-20">
        {children}
      </main>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40"
        aria-label="Contactar por WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contacto */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Pichilemu, O'Higgins, Chile</span>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="text-xl font-bold mb-4">Servicios</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="hover:text-blue-400 transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Horarios */}
            <div>
              <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
              <p className="text-gray-300">Lunes a Viernes: 8:00 - 18:00</p>
              <p className="text-gray-300">Sábados: 9:00 - 14:00</p>
              <p className="text-gray-300">Domingos: Cerrado</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BUSINESS_NAME}. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
