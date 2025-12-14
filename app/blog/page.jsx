'use client';

import { BlogCard } from '../../components/BlogCard';
import { blogPosts, categories } from '../../lib/blogData';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(blog1.jpg)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Blog de Consejos</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Guías profesionales, tips prácticos y todo lo que necesitas saber sobre 
            mantenimiento, reparaciones y mejoras para tu hogar.
          </p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Sección de artículos con filtros */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filtros y Búsqueda */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              
              {/* Barra de búsqueda */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Filtros por categoría */}
              <div className="flex gap-2 flex-wrap justify-center">
                <button
                  onClick={() => setSelectedCategory('Todas')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === 'Todas'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Todas
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Contador de resultados */}
            <p className="text-gray-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}
            </p>
          </div>

          {/* Grid de artículos */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No se encontraron artículos con esos criterios</p>
              <button
                onClick={() => {
                  setSelectedCategory('Todas');
                  setSearchTerm('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Sección de llamado a la acción */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            ¿Te resultó útil esta información?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Si necesitas ayuda profesional con algún proyecto, estamos aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/56912345678?text=Hola,%20leí%20un%20artículo%20en%20su%20blog%20y%20me%20gustaría%20consultar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="/servicios"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Nuestros Servicios
            </a>
          </div>
        </div>
      </section>
    </>
  );
}