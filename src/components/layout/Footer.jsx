import React from 'react';
import { Link } from 'react-router-dom';
import desktopLogo from '../../assets/images/suaveLogo - short.png';
import dekodereLogo from '../../assets/images/dekodereLogo-initial-black.png';

export const Footer = () => {
  return (
    <footer className="bg-surface-container py-20 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-none">
        
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-4 mb-6">
            <img src={desktopLogo} alt="Suave Innovations" className="h-12 w-auto object-contain" />
            <span className="text-outline-variant/30 text-2xl font-light">|</span>
            <img src={dekodereLogo} alt="Dékódèrè" className="h-8 w-auto object-contain" />
          </div>
          <p className="font-body text-sm text-[#30332f]/60 mb-8 italic leading-relaxed">
            Suave Innovations delivers solar, smart systems, security, and electrical solutions for modern homes and businesses in Lagos, with Dékódèrè providing the refined interior finishing layer.
          </p>
          <p className="font-label text-[10px] uppercase tracking-widest text-[#30332f]/40">
            © 2025 Suave Innovations & Dékódèrè. Lagos, Nigeria.
          </p>
        </div>

        <div>
          <h5 className="font-headline font-bold text-xs uppercase tracking-widest mb-8">Infrastructure</h5>
          <ul className="space-y-4">
            <li><Link to="/solar" className="font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Solar Systems</Link></li>
            <li><Link to="/services" className="font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Integrated Control</Link></li>
            <li><Link to="/services" className="font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Power Distribution</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-bold text-xs uppercase tracking-widest mb-8">Design Atelier</h5>
          <ul className="space-y-4">
            <li><a href="https://www.instagram.com/dekoderebysuave/" target="_blank" rel="noopener noreferrer" className="font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Dékódèrè Instagram</a></li>
            <li><a href="https://www.instagram.com/suave_innovations/" target="_blank" rel="noopener noreferrer" className="font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Suave Instagram</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-bold text-xs uppercase tracking-widest mb-8">Connect</h5>
          <ul className="space-y-4">
            <li className="font-label text-[11px] uppercase tracking-widest text-[#30332f]/60">
              Book a consultation for residential and commercial projects
            </li>
            <li><Link to="/contact#inquiry" className="font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Contact Us</Link></li>
            <li className="pt-4 flex gap-4">
              <a href="https://www.instagram.com/suave_innovations/" target="_blank" rel="noopener noreferrer" title="Suave Innovations Instagram">
                <span className="material-symbols-outlined text-on-surface/40 hover:text-secondary cursor-pointer">public</span>
              </a>
              <a href="https://www.instagram.com/dekoderebysuave/" target="_blank" rel="noopener noreferrer" title="Dékódèrè Instagram">
                <span className="material-symbols-outlined text-on-surface/40 hover:text-tertiary cursor-pointer">palette</span>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};
