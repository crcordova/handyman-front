import './globals.css'
import LayoutWrapper from '../components/LayoutWrapper'
import ClientAnalytics from '../components/ClientAnalytics'

export const metadata = {
  metadataBase: new URL('https://crcordova.cl'),

  title: {
    default: 'Córdova | Carpintería, Electricidad y Gasfitería en Pichilemu',
    template: '%s | CR Córdova'
  },

  description:
    'Servicios profesionales de carpintería, electricidad y gasfitería en Pichilemu y alrededores. Trabajos a medida, seguros y garantizados.',

  keywords: [
    'carpintero en Pichilemu',
    'electricista en Pichilemu',
    'gasfiter en Pichilemu',
    'maestro Pichilemu',
    'remodelaciones',
    'trabajos en madera',
    'instalaciones eléctricas',
    'servicios hogar Pichilemu'
  ],

  authors: [{ name: 'CR Córdova' }],
  creator: 'CR Córdova',
  publisher: 'CR Córdova',

  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://crcordova.cl',
    siteName: 'CR Córdova',
    title: 'CR Córdova | Servicios para el hogar en Pichilemu',
    description:
      'Carpintería, electricidad y gasfitería profesional en Pichilemu. Calidad, confianza y experiencia.',
    images: [
      {
        url: '/og-image.jpg', // crea esta imagen (1200x630)
        width: 1200,
        height: 630,
        alt: 'CR Córdova – Servicios para el hogar en Pichilemu'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CR Córdova | Servicios para el hogar',
    description:
      'Carpintería, electricidad y gasfitería en Pichilemu.',
    images: ['/og-image.jpg']
  },

  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

        {/* Vercel Analytics */}
        <ClientAnalytics />
      </body>
    </html>
  )
}
