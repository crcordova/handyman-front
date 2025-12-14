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
      className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-500 transition-all transform hover:-translate-y-2"
    >
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      <div className="mt-6 text-blue-600 font-semibold flex items-center">
        Ver más →
      </div>
    </a>
  );
}