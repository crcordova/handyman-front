import { ContactCTA } from '../../../components/ContactCTA';
import { BlogCard } from '../../../components/BlogCard';
import { getPostBySlug, blogPosts } from '../../../lib/blogData';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { ContentRenderer } from '../../../components/ContentRenderer';
import { ShareButton } from '../../../components/ShareButton';

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Artículo no encontrado | MiServicio Pro'
    };
  }

  return {
    title: `${post.title} | Blog MiServicio Pro`,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-6">Lo sentimos, el artículo que buscas no existe.</p>
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al blog
          </a>
        </div>
      </div>
    );
  }

  // Artículos relacionados (misma categoría)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero del artículo */}
      <article className="pt-20">
        <div className="relative h-96 md:h-[500px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${post.image})`,
            }}
          />
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <a 
                href="/blog"
                className="inline-flex items-center gap-2 text-white hover:text-blue-300 mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver al blog
              </a>
              <div className="inline-block bg-blue-600 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.date).toLocaleDateString('es-CL', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime} de lectura</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido del artículo */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 -mt-20 relative z-20">
            
            {/* Botón compartir */}
            <div className="flex justify-end mb-8">
              <ShareButton title={post.title} excerpt={post.excerpt} />
            </div>

            {/* Contenido renderizado */}
            <ContentRenderer content={post.content} />

            {/* Keywords para SEO */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Palabras clave:</p>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Artículos relacionados */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Artículos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <ContactCTA 
          title="¿Necesitas Ayuda Profesional?"
          description="Si este artículo te resultó útil pero prefieres que un profesional se encargue, estamos aquí para ayudarte."
          whatsappMessage={`Hola, leí el artículo "${post.title}" y me gustaría consultar sobre este tema`}
          emailSubject={`Consulta sobre: ${post.title}`}
        />
      </article>
    </>
  );
}
