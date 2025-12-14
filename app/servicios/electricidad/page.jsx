'use client';

import { ProjectsList } from '../../../components/ProjectsList';
import { projectsData } from '../../../lib/projectsData';
import { ContactCTA } from '../../../components/ContactCTA';
import { getWhatsAppLink, getEmailLink } from '../../../lib/contactInfo';
import { Mail, MessageCircle } from 'lucide-react';

export default function ElectricidadPage(){
  const projects = projectsData.electricidad;

  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/electricidad.jpg)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="text-6xl mb-6">⚡</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Electricidad domiciliaria</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Instalaciones y reparaciones eléctricas seguras, eficientes y bien ejecutadas.
          </p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Electricista profesional
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ofrezco servicios de electricidad domiciliaria enfocados en la seguridad, el cumplimiento normativo y el correcto funcionamiento de cada instalación.
            Trabajo con diagnóstico previo, planificación y materiales adecuados, evitando soluciones improvisadas.
            Cada intervención busca mejorar la seguridad y eficiencia eléctrica del espacio.
          </p>
          {/* <p className="text-lg text-gray-700 leading-relaxed">
            Cambios de enchufes, reparaciones, recableos y más.
          </p> */}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Proyectos Realizados
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Descubre algunos de los trabajos que hemos realizado para nuestros clientes
          </p>
          
          <ProjectsList projects={projects} serviceName="Carpintería" />
        </div>
      </section>

      {/* <section className="py-20 bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Tienes un Proyecto en Mente?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Cuéntanos tu idea y trabajemos juntos para hacerla realidad. 
            Ofrecemos cotizaciones sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink('Hola, me gustaría cotizar un proyecto de electricidad')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Cotizar por WhatsApp
            </a>
            <a
              href={getEmailLink('Cotización Proyecto Carpintería', 'Hola, me gustaría recibir una cotización para un proyecto de carpintería.\n\nDetalles del proyecto:\n')}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              <Mail className="w-6 h-6" />
              Cotizar por Email
            </a>
          </div>
        </div>
      </section> */}
      <ContactCTA 
        title="¿Listo para Cotizar tu Proyecto?"
        description="Contáctanos hoy mismo y recibe una cotización detallada sin compromiso. Evaluamos tu proyecto personalmente y te damos el mejor precio."
        whatsappMessage="Hola, me gustaría recibir una cotización para mi proyecto de electricidad"
        emailSubject="Solicitud de Cotización"
        emailBody="Hola, me gustaría recibir una cotización para mi proyecto eléctrico."
      />
    </>
  );
}