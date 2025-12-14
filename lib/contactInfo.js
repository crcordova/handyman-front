export const contactInfo = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contacto@miservicio.cl',
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'MiServicio Pro'
};

export const getWhatsAppLink = (message = 'Hola, me gustaría consultar sobre sus servicios') => {
  return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const getEmailLink = (subject = 'Consulta de Servicio', body = '') => {
  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
