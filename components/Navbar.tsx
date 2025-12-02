import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'py-3 md:py-4 glass-panel border-b border-muted/20 shadow-lg' 
          : 'py-4 md:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <Hexagon className="text-primary w-7 h-7 md:w-8 md:h-8 group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-lg md:text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Syed Mamudul Islam
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  isActive ? 'text-primary' : 'text-muted'
                }`
              }
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
          
          <ThemeToggle />
          
          <a
            href="/resume.pdf"
            className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-white bg-primary hover:bg-secondary transition-colors rounded-sm shadow-lg shadow-primary/20"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-muted hover:text-primary transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-200/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-muted/20 p-6 flex flex-col gap-6 animate-fade-in-down shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium flex items-center justify-between group ${
                  isActive ? 'text-primary' : 'text-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/50'}`}></span>
                </>
              )}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-white bg-primary hover:bg-secondary transition-colors rounded-sm"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;