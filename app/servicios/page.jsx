'use client';

import { ServicesGrid } from '../../components/ServicesGrid';
import { ContactCTA } from '../../components/ContactCTA';

export default function ServiciosPage() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/services.jpg)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Soluciones profesionales en carpintería, electricidad y gasfitería, ejecutadas con criterio técnico y materiales de calidad.
            Calidad garantizada en cada proyecto.
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
            Servicios Integrales para tu Hogar o Negocio
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ofrezco servicios de carpintería, electricidad y gasfitería enfocados en entregar soluciones completas, seguras y bien ejecutadas.
            Cada trabajo se realiza con planificación, herramientas adecuadas y materiales de calidad, asegurando resultados duraderos y confiables.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mi experiencia en distintas áreas de la construcción me permite abordar proyectos de forma integral, evitando improvisaciones y garantizando una correcta coordinación entre cada especialidad.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Trabajo con herramientas profesionales, técnicas actualizadas y materiales de calidad, según las necesidades de cada proyecto.
            Esto me permite ofrecer un servicio ordenado, eficiente y con terminaciones limpias, cuidando tanto la funcionalidad como la estética del resultado final.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ya sea para una reparación puntual, una mejora en tu hogar o un proyecto más completo, mi objetivo es entregar un servicio confiable, claro y bien ejecutado desde el primer día.
          </p>
        </div>
      </section>

      <ServicesGrid title="Explora Nuestros Servicios" />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">✓ Experiencia Comprobada</h3>
              <p className="text-gray-700">
                Más de una década de experiencia en el rubro nos respalda.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">✓ Garantía de Calidad</h3>
              <p className="text-gray-700">
                Todos nuestros trabajos cuentan con garantía escrita.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">✓ Materiales Premium</h3>
              <p className="text-gray-700">
                Trabajamos solo con materiales de primera calidad.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">✓ Atención Personalizada</h3>
              <p className="text-gray-700">
                Cada proyecto recibe toda nuestra dedicación y atención al detalle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA 
        title="¿Listo para Cotizar tu Proyecto?"
        description="Contáctanos hoy mismo y recibe una cotización detallada sin compromiso. Evaluamos tu proyecto personalmente y te damos el mejor precio."
        whatsappMessage="Hola, me gustaría recibir una cotización para mi proyecto."
        emailSubject="Solicitud de Cotización"
        emailBody="Hola, me gustaría recibir una cotización para mi proyecto.\n\nTipo de servicio: \nDescripción del proyecto: \nUbicación: \n\nGracias."
      />
    </>
  );
}
