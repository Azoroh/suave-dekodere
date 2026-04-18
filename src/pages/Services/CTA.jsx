import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export const CTA = () => {
  return (
    <section className="py-40 px-6 md:px-16 bg-surface-container-highest relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <span className="font-label text-[0.85rem] uppercase tracking-[0.2em] text-on-surface-variant mb-6 block">
            Ready to get started?
          </span>
          <h2 className="font-headline text-5xl md:text-[3.5rem] font-bold text-on-surface mb-10 leading-none">
            Let’s Plan Your Space
          </h2>
          <p className="font-body text-2xl text-on-surface-variant mb-14 leading-relaxed max-w-2xl">
            Tell us what your home, office, or commercial space needs, and we will help you create a solution that is reliable, practical, and well-finished.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <Link to="/contact#inquiry">
              <Button variant="primary" size="lg" className="px-12 py-6 text-[0.85rem] tracking-[0.2em]">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact" className="border-b-2 border-primary text-primary px-2 py-4 font-label text-[0.85rem] uppercase tracking-[0.2em] hover:text-secondary hover:border-secondary transition-all flex items-center gap-3">
              Contact Us
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top hidden md:block"></div>
    </section>
  );
};
