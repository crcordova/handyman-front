// ============================================
// lib/pricingData.js - Datos de precios
// ============================================
export const pricingData = [
  {
    service: 'Carpintería',
    icon: '🪚',
    ranges: [
      {
        duration: '0 - 1 hora',
        pricePerHour: 20000,
        description: 'Reparaciones menores, ajustes'
      },
      {
        duration: '1 - 4 horas',
        pricePerHour: 15000,
        description: 'Instalaciones medianas'
      },
      {
        duration: '4+ horas',
        pricePerHour: 12000,
        description: 'Proyectos grandes',
        note: 'Se cotiza por proyecto completo'
      }
    ]
  },
  {
    service: 'Electricidad',
    icon: '⚡',
    ranges: [
      {
        duration: '0 - 1 hora',
        pricePerHour: 18000,
        description: 'Reparaciones urgentes'
      },
      {
        duration: '1 - 4 horas',
        pricePerHour: 14000,
        description: 'Instalaciones estándar'
      },
      {
        duration: '4+ horas',
        pricePerHour: 10000,
        description: 'Proyectos completos',
        note: 'Se cotiza por proyecto completo'
      }
    ]
  },
  {
    service: 'Gasfitería',
    icon: '🔧',
    ranges: [
      {
        duration: '0 - 1 hora',
        pricePerHour: 20000,
        description: 'Reparaciones generales '
      },
      {
        duration: '0 - 1 hora',
        pricePerHour: 30000,
        description: 'Reparaciones express, llego en menos de 1 hora'
      },
      {
        duration: '1 - 4 horas',
        pricePerHour: 13000,
        description: 'Instalaciones medianas'
      },
      {
        duration: '4+ horas',
        pricePerHour: 1000,
        description: 'Proyectos integrales',
        note: 'Se cotiza por proyecto completo'
      }
    ]
  }
];

// Función helper para formatear precios
export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(price);
};