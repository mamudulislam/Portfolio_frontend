import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-slate-200 selection:bg-primary/30 selection:text-white">
        <Navbar />
        
        <main className="relative z-0">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/projects" element={<Projects />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
           </Routes>
        </main>

        {/* Global Footer */}
        <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5 bg-surface/50">
           <p>© {new Date().getFullYear()} Syes Mamudul Islam.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;