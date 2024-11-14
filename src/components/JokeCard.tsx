import React, { useState } from 'react';
import { Copy, Check, Star } from 'lucide-react';
import { supportedLanguages } from '../services/jokeService';

interface JokeCardProps {
  joke: string;
  index: number;
  language?: string;
}

export default function JokeCard({ joke, language = 'en' }: JokeCardProps) {
  const [copied, setCopied] = useState(false);
  const [rating] = useState(() => Math.floor(Math.random() * 3) + 3);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(joke);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const langConfig = supportedLanguages.find(l => l.code === language) || supportedLanguages[0];
  const isRTL = langConfig.direction === 'rtl';

  return (
    <div className="transform hover:scale-105 transition-all duration-300">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 relative group border border-purple-100 backdrop-blur-sm bg-white/90">
        <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-full text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
            aria-label="Copy joke"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="mt-4 mb-6">
          <p className={`text-gray-800 text-lg leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`} dir={langConfig.direction}>
            {joke}
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm text-gray-500 font-medium">Joke Rating</span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {copied && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-sm shadow-lg">
            Copied!
          </div>
        )}
      </div>
    </div>
  );
}