import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import LayoutWrapper from '../components/LayoutWrapper'; // <-- asegúrate de la ruta

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_BUSINESS_NAME} - Carpintería, Electricidad y Gasfitería`,
  description: 'Servicios profesionales de carpintería, electricidad y gasfitería en Pichilemu',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
