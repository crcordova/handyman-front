'use client';
import { Share2 } from 'lucide-react';

function ShareButton({ title, excerpt }) {
  const handleShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    
    if (navigator.share) {
      navigator.share({
        title: title,
        text: excerpt,
        url: url,
      }).catch(err => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(url);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
    >
      <Share2 className="w-5 h-5" />
      Compartir
    </button>
  );
}

export{ ShareButton };