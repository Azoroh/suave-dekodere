import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import desktopLogo from '../../assets/images/suaveLogo.png';
import mobileLogo from '../../assets/images/suaveLogo-stacked.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solar', href: '/solar' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = ({ isGlass = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={`fixed top-0 z-50 w-full px-6 md:px-16 py-6 transition-colors duration-300 ${
      isGlass && !isMobileMenuOpen ? 'glass-nav' : 'bg-surface'
    }`}>
      <div className="flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center" 
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={desktopLogo} alt="Suave Innovations" loading="eager" decoding="async" className="hidden md:block h-12 w-auto object-contain" />
          <img src={mobileLogo} alt="Suave Innovations" loading="eager" decoding="async" className="block md:hidden h-14 w-auto object-contain" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => window.scrollTo(0, 0)}
                className={`micro-nav-link text-xs font-label uppercase tracking-widest transition-all duration-300 ${
                  isActive 
                    ? 'is-active text-[#4b6367] font-bold' 
                    : 'text-[#30332f] opacity-70 hover:opacity-100 hover:text-[#4b6367]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        
        <div className="hidden md:block">
          <Link to="/contact#inquiry">
            <Button variant="primary" size="sm">
              Book a Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="micro-button md:hidden text-[#30332f] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-outline-variant/20 py-4 px-6 flex flex-col gap-6 shadow-xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`micro-text-link text-sm font-label uppercase tracking-widest transition-all duration-300 ${
                  isActive 
                    ? 'text-[#4b6367] font-bold' 
                    : 'text-[#30332f] hover:text-[#4b6367]'
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/contact#inquiry" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
            <Button variant="primary" className="w-full mt-4" size="md">
              Book a Consultation
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
