import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Content from './components/Content';
import TopJokes from './components/TopJokes';
import KidsJokes from './components/KidsJokes';
import BadJokes from './components/BadJokes';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Disclaimer from './components/Disclaimer';
import { fetchDadJokes } from './services/jokeService';

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [jokes, setJokes] = useState<string[]>([]);

  const handleGenerateJokes = async (type: string, language: string) => {
    setLoading(true);
    setError(null);
    try {
      const newJokes = await fetchDadJokes(5, type, language);
      setJokes(newJokes);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate jokes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header currentPage={location.pathname.substring(1) || 'home'} onNavigate={() => {}} />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero onGenerateJokes={handleGenerateJokes} loading={loading} error={error} jokes={jokes} />
              <Content />
            </>
          } />
          <Route path="/top-jokes" element={<TopJokes />} />
          <Route path="/kids-jokes" element={<KidsJokes />} />
          <Route path="/bad-jokes" element={<BadJokes />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}