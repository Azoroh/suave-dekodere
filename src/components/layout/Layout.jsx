import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children, isGlassNav = true }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setShowBackToTop(false);
    let observer;

    const setupObserver = window.setTimeout(() => {
      const lastMainSection = mainRef.current?.lastElementChild;
      const footer = footerRef.current;
      const targets = [lastMainSection, footer].filter(Boolean);

      if (!targets.length) return;

      const visibleTargets = new Set();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleTargets.add(entry.target);
            } else {
              visibleTargets.delete(entry.target);
            }
          });

          setShowBackToTop(visibleTargets.size > 0);
        },
        { threshold: 0.12 }
      );

      targets.forEach((target) => observer.observe(target));
    }, 100);

    return () => {
      window.clearTimeout(setupObserver);
      observer?.disconnect();
    };
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isGlass={isGlassNav} />
      <main ref={mainRef} className="flex-1">
        {children}
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-on-surface text-surface-bright shadow-[0_16px_36px_rgba(48,51,47,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-surface ${
          showBackToTop
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined">keyboard_arrow_up</span>
      </button>
    </div>
  );
};
