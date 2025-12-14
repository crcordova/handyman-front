'use client';

import { ProjectsList } from '../../../components/ProjectsList';
import { projectsData } from '../../../lib/projectsData';
import { ContactCTA } from '../../../components/ContactCTA';

export default function GasfiteriaPage(){
  const projects = projectsData.gasfiteria;
  
    return (
      <>
        <section className="relative h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/gasfiteria.jpg)',
            }}
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🪚</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Gasfiteria y Plomeria profesional</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Soluciones sanitarias confiables, duraderas y realizadas con criterio técnico.
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
              Gasfiter y Plomería profesional
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Realizo trabajos de gasfitería orientados a resolver problemas de forma definitiva, cuidando tanto la funcionalidad como la durabilidad de las instalaciones.
              Diagnostico el origen del problema y aplico soluciones adecuadas, utilizando materiales de calidad y buenas prácticas del rubro.

            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Una cañería rota, problemas con el Calefont o una fuga de gas pueden arruinar tu día.
              Estamos aquí para ofrecer soluciones rápidas y efectivas a todos tus problemas.
             
            </p>
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