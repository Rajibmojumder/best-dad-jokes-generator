import React, { useState } from 'react';
import { Laugh, Home, Star, Baby, ThumbsDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'top-jokes', label: 'Funny Jokes', icon: Star, path: '/top-jokes' },
    { id: 'kids-jokes', label: 'Kids Jokes', icon: Baby, path: '/kids-jokes' },
    { id: 'bad-jokes', label: 'Bad Jokes', icon: ThumbsDown, path: '/bad-jokes' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 border-b border-purple-700/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-purple-100 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo - Centered on mobile, left-aligned on desktop */}
          <Link 
            to="/"
            className="flex-1 md:flex-initial flex items-center justify-center md:justify-start cursor-pointer"
          >
            <Laugh className="w-8 h-8 text-purple-100" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-100 to-blue-200 bg-clip-text text-transparent ml-2">
              Best Dad Jokes Generator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-end">
            <ul className="flex space-x-6">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <Link 
                      to={item.path}
                      className={`flex items-center space-x-2 text-purple-100 hover:text-white transition-colors ${
                        location.pathname === item.path ? 'text-white' : ''
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="py-4 border-t border-purple-700/20">
              <ul className="space-y-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <Link 
                        to={item.path}
                        className={`flex items-center space-x-3 w-full px-4 py-2 text-purple-100 hover:text-white transition-colors ${
                          location.pathname === item.path ? 'bg-purple-800/50 text-white' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}