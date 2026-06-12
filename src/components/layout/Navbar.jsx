import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import desktopLogo from '../../assets/images/suaveLogo.png';
import mobileLogo from '../../assets/images/suaveLogo-stacked.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'Smart Living', 
    href: '/smart-living',
    submenu: [
      { name: 'Home Automation', href: '/smart-living#automation' },
      { name: 'Home Cinema', href: '/smart-living#cinema' },
      { name: 'Home Security', href: '/smart-living#security' },
    ]
  },
  { 
    name: 'Design & Build', 
    href: '/design-build',
    submenu: [
      { name: 'Custom Furniture', href: '/design-build#furniture' },
      { name: 'Interior Design', href: '/design-build#interior' },
      { name: 'Lighting Design', href: '/design-build#lighting' },
    ]
  },
  { name: 'MEP', href: '/mep' },
  { name: 'Solar', href: '/solar' },
  { name: 'Shop', href: '/shop' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = ({ isGlass = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 96);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, display: 'none' },
    visible: { opacity: 1, y: 0, display: 'block' },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
  };

  return (
    <nav className={`fixed top-0 z-50 w-full px-6 md:px-16 transition-all duration-300 ${
      isScrolled ? 'py-4 md:py-4' : 'py-6'
    } ${
      isGlass && !isMobileMenuOpen ? 'glass-nav' : 'bg-surface'
    }`}>
      <div className="flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center" 
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={desktopLogo} alt="Suave Innovations" loading="eager" decoding="async" className={`hidden md:block w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`} />
          <img src={mobileLogo} alt="Suave Innovations" loading="eager" decoding="async" className={`block md:hidden w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-12' : 'h-14'}`} />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isPathActive = location.pathname === link.href;
            const isSubmenuActive = link.submenu?.some(sub => location.pathname + location.hash === sub.href);
            const isHovered = hoveredLink === link.name;
            const isActive = isPathActive || isSubmenuActive || isHovered;
            
            const hasSubmenu = link.submenu && link.submenu.length > 0;

            return (
              <div 
                key={link.name} 
                className="relative group py-4"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  to={link.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`micro-nav-link text-[10px] lg:text-xs font-label uppercase tracking-widest transition-all duration-300 flex items-center gap-1 ${
                    isActive 
                      ? 'is-active text-[#4b6367] opacity-100' 
                      : 'text-[#30332f] opacity-70 hover:opacity-100 hover:text-[#4b6367]'
                  }`}
                >
                  {link.name}
                  {hasSubmenu && (
                    <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`}>
                      keyboard_arrow_down
                    </span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {hasSubmenu && (
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 min-w-[200px] bg-white/95 backdrop-blur-md border border-outline-variant/20 shadow-xl rounded-sm overflow-hidden"
                      >
                        <div className="py-2">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="block px-6 py-3 text-[10px] uppercase tracking-wider text-[#30332f] hover:bg-[#4b6367]/10 hover:text-[#4b6367] transition-colors"
                              onClick={() => setHoveredLink(null)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="hidden lg:block">
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-outline-variant/20 py-6 px-6 flex flex-col gap-4 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link
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
                  {link.submenu && (
                    <div className="pl-4 flex flex-col gap-3 border-l border-outline-variant/30 ml-1 mt-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="text-[10px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367]"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link to="/contact#inquiry" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
              <Button variant="primary" className="w-full mt-4" size="md">
                Book a Consultation
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
