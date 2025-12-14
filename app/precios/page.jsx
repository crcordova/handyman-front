'use client';

import { ContactCTA } from '../../components/ContactCTA';
import { PricingTable } from '../../components/PricingTable';
import { pricingData } from '../../lib/pricingData';
import { Shield, DollarSign, FileCheck, Clock } from 'lucide-react';

export default function PreciosPage() {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Precios Transparentes',
      description: 'Sin costos ocultos ni sorpresas. Lo que cotizamos es lo que pagas.'
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Cotización Sin Compromiso',
      description: 'Evaluamos tu proyecto y te damos un presupuesto detallado gratis.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Garantía de Calidad',
      description: 'Todos nuestros trabajos incluyen garantía por escrito.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Puntualidad Garantizada',
      description: 'Cumplimos con los plazos acordados desde el inicio.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/price.JPG)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Precios Justos y Transparentes</h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-4">
            Invertimos en calidad, no en costos ocultos. Nuestros precios reflejan 
            el compromiso con materiales de primera y mano de obra especializada.
          </p>
          <p className="text-lg md:text-xl text-blue-200">
            Pagas por calidad profesional, experiencia comprobada y resultados duraderos.
          </p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Tarifas por Hora
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Nuestras tarifas están diseñadas para ser justas tanto para ti como para nosotros. 
            Cuanto más grande es tu proyecto, mejor precio por hora obtienes. Esta estructura 
            nos permite dedicar el tiempo necesario a trabajos complejos mientras mantenemos 
            precios competitivos.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Para proyectos extensos, ofrecemos cotizaciones por proyecto completo que pueden 
            resultar más económicas. <strong>La evaluación y cotización son siempre gratuitas.</strong>
          </p>
        </div>
      </section>

      {/* Tablas de Precios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Precios por Servicio
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Selecciona el servicio que necesitas para ver nuestras tarifas
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.map((service, index) => (
              <PricingTable key={index} serviceData={service} />
            ))}
          </div>

          {/* Nota importante */}
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              📋 Importante sobre las cotizaciones
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Los precios por hora son para trabajos pequeños a medianos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Proyectos grandes se cotizan de forma integral (más económico)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Los materiales se cobran aparte según el proyecto</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Traslados fuera de Pichilemu pueden tener un cargo adicional</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            ¿Qué Incluyen Nuestros Servicios?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA 
        title="¿Listo para Cotizar tu Proyecto?"
        description="Contáctanos hoy mismo y recibe una cotización detallada sin compromiso. Evaluamos tu proyecto personalmente y te damos el mejor precio."
        whatsappMessage="Hola, me gustaría recibir una cotización para mi proyecto"
        emailSubject="Solicitud de Cotización"
        emailBody="Hola, me gustaría recibir una cotización para mi proyecto."
      />
    </>
  );
}