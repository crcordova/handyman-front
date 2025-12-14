'use client';

import { Mail, MessageCircle, Clock, Package } from 'lucide-react';
import { getWhatsAppLink, getEmailLink } from '../lib/contactInfo';

export function ProjectCard({ project, serviceName }) {
  const whatsappMessage = `Hola, me interesa el proyecto "${project.title}" de ${serviceName}. ¿Podrían darme más información?`;
  const emailSubject = `Consulta sobre: ${project.title}`;
  const emailBody = `Hola,\n\nMe interesa saber más sobre el proyecto "${project.title}" que realizaron.\n\n¿Podrían proporcionarme más información y una cotización?\n\nGracias.`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Imagen */}
        <div className="relative h-64 lg:h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {project.category}
          </div>
        </div>

        {/* Contenido */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Detalles del proyecto */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                <span><strong>Duración:</strong> {project.duration}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Package className="w-5 h-5 mr-2 text-blue-600" />
                <span><strong>Materiales:</strong> {project.materials}</span>
              </div>
            </div>
          </div>

          {/* Botones de contacto */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href={getEmailLink(emailSubject, emailBody)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}