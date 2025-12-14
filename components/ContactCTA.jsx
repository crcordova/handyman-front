'use client';

import { Mail, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, getEmailLink } from '../lib/contactInfo';

export function ContactCTA({ 
  title = "¿Tienes un Proyecto en Mente?",
  description = "Cuéntanos tu idea y trabajemos juntos para hacerla realidad. Ofrecemos cotizaciones sin compromiso.",
  whatsappMessage = "Hola, me gustaría cotizar un proyecto",
  emailSubject = "Cotización de Proyecto",
  emailBody = "Hola, me gustaría recibir una cotización para un proyecto.\n\nDetalles del proyecto:\n"
}) {
  return (
    <section className="py-20 bg-linear-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Cotizar por WhatsApp
          </a>
          <a
            href={getEmailLink(emailSubject, emailBody)}
            className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            <Mail className="w-6 h-6" />
            Cotizar por Email
          </a>
        </div>
      </div>
    </section>
  );
}