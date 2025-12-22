'use client';
import {ContactCTA} from '../../components/ContactCTA';

export default function ContactoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/contacto.jpg)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contacto</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Estoy aquí para ayudarte a hacer realidad tu proyecto. 
            Contáctame y conversemos sobre cómo puedo aportar a tu hogar o negocio.
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Texto introductorio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Estemos en Contacto
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            No dudes en contactarme para cualquier consulta, cotización o asesoría sobre tu proyecto. 
            Ya sea una reparación menor, una remodelación completa o simplemente necesitas orientación técnica, 
            estoy disponible para conversar y evaluar la mejor solución para ti.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Respondo todas las consultas de manera rápida y directa. Me gusta conocer los detalles de cada proyecto 
            para poder ofrecer un presupuesto preciso y realista, sin sorpresas ni costos ocultos.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Puedes escribirme por WhatsApp para una respuesta inmediata, enviarme un correo con los detalles de tu proyecto, 
            o llamarme directamente. Trabajo de lunes a sábado y siempre estoy dispuesto a coordinar una visita 
            para evaluar tu proyecto en terreno sin compromiso.
          </p>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
            Formas de Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="bg-green-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">WhatsApp</h3>
              <p className="text-gray-700 mb-4">
                Respuesta rápida y directa
              </p>
              <a 
                href="https://wa.me/56912345678" 
                className="text-green-600 hover:text-green-700 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                +{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
              </a>
            </div>

            {/* Email */}
            <div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Email</h3>
              <p className="text-gray-700 mb-4">
                Envíame los detalles de tu proyecto
              </p>
              <a 
                href="mailto:contacto@tuservicio.cl" 
                className="text-blue-600 hover:text-blue-700 font-semibold break-all"
              >
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
            </div>

            {/* Teléfono */}
            <div className="bg-indigo-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Teléfono</h3>
              <p className="text-gray-700 mb-4">
                Llámame directamente
              </p>
              <a 
                href="tel:+56912345678" 
                className="text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                +{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios de atención */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Horarios de Atención
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Días Laborales</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span className="font-semibold">Lunes - Viernes:</span>
                    <span>8:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Sábados:</span>
                    <span>9:00 - 14:00</span>
                  </p>
                </div>
              </div>
              <div className="pt-6 md:pt-0 md:pl-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Zona de Cobertura</h3>
                <p className="text-gray-700">
                  <span className="font-semibold">Pichilemu</span> y alrededores
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Consulta disponibilidad para otras zonas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <ContactCTA 
        title="¿Listo para Comenzar tu Proyecto?"
        description="Escríbeme hoy mismo y conversemos sobre cómo puedo ayudarte. Te responderé a la brevedad con una propuesta clara y un presupuesto sin compromiso."
        whatsappMessage="Hola, me gustaría contactarme para consultar sobre un proyecto."
        emailSubject="Consulta desde la página web"
        emailBody="Hola, me gustaría ponerme en contacto contigo.\n\nNombre: \nTipo de proyecto: \nDescripción: \n\nGracias."
      />
    </>
  );
}