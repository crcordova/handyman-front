import { ServiceCard } from './ServicesCard';
import { servicesData } from '../lib/servicesData';
import Link from 'next/link';

export function ServicesGrid({ title,  titleLink = null, variant = 'default' }) {
  const Title = (
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
      <span className="relative inline-flex items-center">
        <span className="transition-colors duration-200 ease-in-out">

          {title}
        </span>
        
        <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-out"></span>
      </span>
    </h2>
  );

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          titleLink ? (
            <Link href={titleLink} aria-label={typeof title === 'string' ? title : 'Servicios'}>
              {Title}
            </Link>
          ) : (
            Title
          )
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.name} 
              service={service}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}