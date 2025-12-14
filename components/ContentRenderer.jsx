function ContentRenderer({ content }) {
  const lines = content.split('\n');
  
  return (
    <div className="prose prose-lg max-w-none">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        
        // Headers H2
        if (trimmedLine.startsWith('## ')) {
          return (
            <h2 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900">
              {trimmedLine.replace('## ', '')}
            </h2>
          );
        }
        
        // Headers H3
        if (trimmedLine.startsWith('### ')) {
          return (
            <h3 key={index} className="text-2xl font-bold mt-6 mb-3 text-gray-900">
              {trimmedLine.replace('### ', '')}
            </h3>
          );
        }
        
        // Listas con viñetas
        if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
          return (
            <li key={index} className="ml-6 mb-2 text-gray-700">
              {trimmedLine.replace(/^[*-] /, '')}
            </li>
          );
        }
        
        // Checkmarks
        if (trimmedLine.startsWith('✓ ')) {
          return (
            <li key={index} className="ml-6 mb-2 text-green-700 flex items-start">
              <span className="mr-2">✓</span>
              <span>{trimmedLine.replace('✓ ', '')}</span>
            </li>
          );
        }

        // Alerts con emojis
        if (trimmedLine.startsWith('🚨 ') || trimmedLine.startsWith('⚠️ ')) {
          const isUrgent = trimmedLine.startsWith('🚨');
          return (
            <div key={index} className={`p-4 rounded-lg mb-4 ${isUrgent ? 'bg-red-50 border-l-4 border-red-500' : 'bg-yellow-50 border-l-4 border-yellow-500'}`}>
              <p className={`font-semibold ${isUrgent ? 'text-red-800' : 'text-yellow-800'}`}>
                {trimmedLine}
              </p>
            </div>
          );
        }

        // Errores comunes
        if (trimmedLine.startsWith('❌ ')) {
          return (
            <div key={index} className="ml-6 mb-3 flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <span className="text-gray-700">{trimmedLine.replace('❌ ', '')}</span>
            </div>
          );
        }
        
        // Texto con negrita
        const renderTextWithBold = (text) => {
          const parts = text.split(/(\*\*.*?\*\*)/g);
          return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            return part;
          });
        };
        
        // Párrafos normales
        if (trimmedLine) {
          return (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed text-lg">
              {renderTextWithBold(trimmedLine)}
            </p>
          );
        }
        
        return null;
      })}
    </div>
  );
}
export { ContentRenderer };