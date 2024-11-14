import React from 'react';
import { Github, Twitter, Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-purple-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-semibold text-white mb-4">About Best Dad Jokes Generator</h3>
            <p className="text-purple-200">
              Bringing smiles to faces with the best (or worst?) dad jokes around.
              Created with <Heart className="w-4 h-4 inline text-red-400" /> by joke enthusiasts.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/privacy"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@bestdadjokesgenerator.com"
                className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-6 h-6" />
                <span>contact@bestdadjokesgenerator.com</span>
              </a>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                  aria-label="Github"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-700/50 text-center text-purple-200">
          <p>© {new Date().getFullYear()} BestDadJokesGenerator.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}