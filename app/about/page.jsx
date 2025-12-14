// app/about/page.jsx
'use client';
import Link from "next/link"
import { ContactCTA } from '../../components/ContactCTA';
import { Mail, MessageCircle, Award, Clock, Heart, Shield } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excelencia',
      description: 'Compromiso con la calidad en cada detalle del trabajo'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Puntualidad',
      description: 'Respeto por tu tiempo y cumplimiento de plazos'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Pasión',
      description: 'Amor por lo que hago se refleja en cada proyecto'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Confianza',
      description: 'Transparencia y honestidad en todo momento'
    }
  ];

  return (
    <>
      {/* Hero Section con foto de fondo */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(about.jpg)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Cristóbal Córdova</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Mi camino desde la ingeniería hasta los oficios de la construcción.
          </p>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Sección de historia detallada */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Mi Historia</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Comencé en los oficios hace más de cinco años, luego de dejar un trabajo de oficina donde sentía que no estaba generando un impacto real.
                En la construcción encontré algo distinto: la posibilidad de entregar soluciones tangibles, ver resultados concretos y ayudar directamente a las personas a mejorar sus espacios.
                Lo que empezó como pequeñas reparaciones fue creciendo de forma natural. Con el tiempo, participé en proyectos cada vez más complejos, hasta llegar a construir una vivienda completa, abordando carpintería estructural, instalaciones eléctricas y sistemas de gasfitería.
                Esa experiencia me permitió entender la construcción como un todo, donde cada decisión técnica importa y cada detalle influye en el resultado final.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Experiencia y Formación</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Si bien mi formación es como Ingeniero Civil Industrial, esta me entregó herramientas clave como la matemática, la física y el análisis lógico, que aplico directamente en la construcción.
                Desde el análisis estático de estructuras, hasta la cubicación y optimización de materiales, mi enfoque siempre ha sido trabajar con criterio técnico, eficiencia y seguridad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada proyecto ha sido una oportunidad de aprendizaje y perfeccionamiento. Me he capacitado constantemente en nuevas técnicas y tecnologías, asistiendo a cursos especializados y manteniéndome al día con normativas y buenas prácticas del rubro.
                Esta formación continua me permite ofrecer soluciones modernas, seguras y bien ejecutadas.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mi Filosofía de Trabajo</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Para mí, cada proyecto es único y cada cliente merece toda mi atención y dedicación. 
                No se trata solo de realizar un trabajo técnico, sino de entender las necesidades 
                específicas de cada persona y ofrecer soluciones que realmente mejoren su calidad 
                de vida.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Trabajo con materiales de primera calidad porque sé que la durabilidad y seguridad 
                de mis trabajos dependen de ello. No tomo atajos ni comprometiendo la calidad por 
                rapidez. Prefiero tomarme el tiempo necesario para hacer las cosas bien desde el 
                primer momento.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                La transparencia es fundamental en mi forma de trabajar. Siempre explico claramente 
                qué trabajo se realizará, cuánto tiempo tomará y cuál será el costo, sin sorpresas 
                ni cargos ocultos. Mi reputación se basa en la confianza que mis clientes depositan 
                en mí, y eso es algo que valoro enormemente.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Servicios Integrales</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Contar con experiencia en carpintería, electricidad y gasfitería me permite ofrecer soluciones completas e integradas.
                En muchos proyectos, un trabajo no termina en una sola especialidad: una instalación eléctrica puede requerir carpintería, o una reparación sanitaria puede implicar ajustes estructurales.
                Poder abordar todo bajo un mismo profesional ahorra tiempo, reduce costos y garantiza una mejor integración entre las distintas áreas del proyecto.
                Mi objetivo es entregar soluciones bien pensadas, duraderas y ejecutadas con un estándar profesional.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">Mis Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="text-blue-600 shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h4>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compromiso final */}
          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "Mi satisfacción está en ver los proyectos terminados y a las personas tranquilas con el resultado.
              Cada trabajo lleva mi nombre, y por eso me esfuerzo al máximo en cada detalle. Tu confianza es mi mejor respaldo."
            </p>
          </div>
        </div>
      </section>

      

      {/* Sección de llamado a la acción de servicios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <p className="text-gray-700 mb-8">
            Si buscas a alguien que combine criterio técnico, experiencia en terreno y compromiso con el trabajo bien hecho, estaré encantado de ayudarte.
          </p>
          <Link
            href="/servicios"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
            Ver Mis Servicios
          </Link>

        </div>
      </section>
      {/* Sección de contacto */}
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