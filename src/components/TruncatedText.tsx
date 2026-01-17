import { useState } from 'react';

interface TruncatedTextProps {
  text: string;
  maxWords?: number;
  bold?: boolean;
}

export default function TruncatedText({ text, maxWords = 200, bold = false }: TruncatedTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.split(' ');
  const shouldTruncate = words.length > maxWords;
  const displayText = isExpanded || !shouldTruncate 
    ? text 
    : words.slice(0, maxWords).join(' ') + '...';

  return (
    <div>
      <p className={`text-gray-300 leading-relaxed ${bold ? 'font-bold' : ''}`}>{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-200"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}
