import React, { useState } from 'react';
import { Laugh, RefreshCw, AlertCircle, Globe2 } from 'lucide-react';
import { supportedLanguages } from '../services/jokeService';
import JokeCard from './JokeCard';

interface HeroProps {
  onGenerateJokes: (type: string, language: string) => void;
  loading: boolean;
  error: string | null;
  jokes: string[];
}

const jokeTypes = [
  { id: 'funny', label: 'Funny', emoji: '😂' },
  { id: 'family', label: 'Family Friendly', emoji: '👨‍👩‍👧‍👦' },
  { id: 'kids', label: 'Kids', emoji: '🧒' },
  { id: 'bad', label: 'So Bad It\'s Good', emoji: '🤦‍♂️' },
  { id: 'clean', label: 'Clean', emoji: '😇' },
];

export default function Hero({ onGenerateJokes, loading, error, jokes }: HeroProps) {
  const [selectedType, setSelectedType] = useState('funny');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleGenerateClick = () => {
    onGenerateJokes(selectedType, selectedLanguage);
  };

  return (
    <section className="text-center py-8 md:py-16 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <Laugh className="w-20 h-20 text-purple-100 animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-100 to-blue-200 bg-clip-text text-transparent">
          Dad Jokes Generator
        </h1>
        <p className="text-xl text-purple-100 mb-8">
          Need a laugh? Generate some hilarious dad jokes that are so bad, they're actually good! 
          Perfect for brightening anyone's day. 😄
        </p>
        
        {error && (
          <div className="mb-6 p-4 bg-red-900/50 rounded-lg flex items-center justify-center text-red-100 gap-2 mx-auto max-w-md border border-red-700/50">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm text-left">{error}</span>
          </div>
        )}

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {jokeTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedType === type.id
                    ? 'bg-purple-100 text-purple-900 shadow-lg scale-105'
                    : 'bg-purple-800/50 text-purple-100 hover:bg-purple-700/50 border border-purple-600/30'
                }`}
              >
                <span className="mr-1">{type.emoji}</span>
                {type.label}
              </button>
            ))}
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative inline-block">
              <div className="flex items-center gap-2 bg-purple-800/50 border border-purple-600/30 rounded-full px-4 py-2">
                <Globe2 className="w-4 h-4 text-purple-100" />
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-transparent appearance-none outline-none pr-8 text-purple-100"
                >
                  {supportedLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-purple-900 text-purple-100">
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleGenerateClick}
          disabled={loading}
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-200 text-purple-900 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
        >
          {loading ? (
            <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <Laugh className="w-5 h-5 mr-2" />
          )}
          {loading ? 'Generating...' : 'Generate Dad Jokes'}
        </button>

        {jokes.length > 0 && (
          <div className="mt-12 space-y-4">
            {jokes.map((joke, index) => (
              <JokeCard key={index} joke={joke} index={index} language={selectedLanguage} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}