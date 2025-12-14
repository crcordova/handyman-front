
// components/BlogCard.jsx
'use client';

import { Calendar, Clock } from 'lucide-react';

export function BlogCard({ post }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 block"
    >
      {/* Imagen */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {post.category}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('es-CL')}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} lectura</span>
          </div>
        </div>

        <div className="text-blue-600 font-semibold flex items-center group-hover:gap-2 transition-all">
          Leer más <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </a>
  );
}