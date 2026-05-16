import React from 'react';
import { Link } from 'react-router-dom';
import desktopLogo from '../../assets/images/suaveLogo - short.png';
import dekodereLogo from '../../assets/images/dekodereLogo-initial-black.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container py-20 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-none">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-4 mb-6">
            <img src={desktopLogo} alt="Suave Innovations" loading="lazy" decoding="async" className="h-12 w-auto object-contain" />
            <span className="text-outline-variant/30 text-2xl font-light">|</span>
            <img src={dekodereLogo} alt="Dékódèrè" loading="lazy" decoding="async" className="h-8 w-auto object-contain" />
          </div>
          <p className="font-body text-sm text-[#30332f]/60 mb-8 italic leading-relaxed">
            Suave Innovations delivers solar, smart systems, security, and electrical solutions for modern homes and businesses in Lagos, with Dékódèrè providing the refined interior finishing layer.
          </p>
          <p className="font-label text-[10px] uppercase tracking-widest text-[#30332f]/40">
            © {currentYear} Suave Innovations & Dékódèrè. Lagos, Nigeria.
          </p>
        </div>

        <div>
          <h5 className="font-headline font-bold text-xs uppercase tracking-widest mb-8">Infrastructure</h5>
          <ul className="space-y-4">
            <li><Link to="/solar" className="micro-text-link font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Solar Systems</Link></li>
            <li><Link to="/services" className="micro-text-link font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Integrated Control</Link></li>
            <li><Link to="/services" className="micro-text-link font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Power Distribution</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-bold text-xs uppercase tracking-widest mb-8">Design Atelier</h5>
          <ul className="space-y-4">
            <li><a href="https://www.instagram.com/dekoderebysuave/" target="_blank" rel="noopener noreferrer" className="micro-text-link font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Dékódèrè Instagram</a></li>
            <li><a href="https://www.instagram.com/suave_innovations/" target="_blank" rel="noopener noreferrer" className="micro-text-link font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Suave Instagram</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-bold text-xs uppercase tracking-widest mb-8">Connect</h5>
          <ul className="space-y-4">
            <li className="font-label text-[11px] uppercase tracking-widest text-[#30332f]/60">
              Book a consultation for residential and commercial projects
            </li>
            <li><Link to="/contact#inquiry" className="micro-text-link font-label text-[11px] uppercase tracking-widest text-[#30332f]/60 hover:text-[#4b6367] transition-colors">Contact Us</Link></li>
            <li className="pt-4 flex gap-4">
              <a href="mailto:robinsonsuave@gmail.com" title="Email Suave Innovations" aria-label="Email Suave Innovations" className="micro-text-link text-on-surface/40 hover:text-secondary">
                <span className="material-symbols-outlined cursor-pointer">mail</span>
              </a>
              <a href="https://www.instagram.com/suave_innovations/" target="_blank" rel="noopener noreferrer" title="Suave Innovations Instagram" aria-label="Suave Innovations Instagram" className="micro-text-link text-on-surface/40 hover:text-secondary">
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
              </a>
              <a href="https://wa.me/2349074252223" target="_blank" rel="noopener noreferrer" title="WhatsApp Suave Innovations" aria-label="WhatsApp Suave Innovations" className="micro-text-link text-on-surface/40 hover:text-secondary">
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M12.04 2a9.93 9.93 0 0 0-8.48 15.08L2.2 22l5.04-1.32A9.93 9.93 0 1 0 12.04 2Zm0 1.88a8.05 8.05 0 1 1-4.1 14.98l-.3-.18-2.98.78.8-2.9-.2-.32A8.05 8.05 0 0 1 12.04 3.88Zm-3.5 3.77c-.18 0-.47.06-.72.34-.25.27-.94.92-.94 2.24 0 1.32.96 2.6 1.1 2.78.13.18 1.9 2.9 4.6 4.06.64.28 1.14.44 1.54.56.65.2 1.24.17 1.7.1.52-.08 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.72-1.35-1.6-1.5-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
