export function ServiceCard({ service, variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <a
        href={service.href}
        className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-blue-400 transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="text-4xl">{service.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={service.href}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
    >
      {/* Sección de imagen de fondo con título */}
      <div 
        className="relative h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden"
        style={{
          backgroundImage: service.image ? `url(${service.image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay oscuro para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
        
        {/* Título sobre la imagen */}
        <div className="absolute inset-0 flex items-end p-6">
          <h3 className="text-2xl font-bold text-white z-10 drop-shadow-lg">
            {service.name}
          </h3>
        </div>

        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/0 group-hover:to-white/10 transition-all duration-300"></div>
      </div>

      {/* Sección de contenido con fondo blanco */}
      <div className="p-6 bg-white">
        <p className="text-gray-600 mb-4 min-h-[3rem]">
          {service.description}
        </p>
        
        <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
          <span>Ver más</span>
          <svg 
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </div>
      </div>
    </a>
  );
}