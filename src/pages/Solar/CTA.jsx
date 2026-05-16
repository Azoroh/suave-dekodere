import React from 'react';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="relative bg-surface-container overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <img
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          alt="Abstract solar cell grid texture"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGkA50HS1xtfx-ZFjBN5rW4nEqaYimsLRyIe9ZOW2r8vPM8ruh5b_R2mLPRjfd8crHusmo8HV-dk6Ot5x-7wzh5bP1RZU4ZUDkF1aEk_1rsilYE_w6mq0cNQi4Xy96N4Z8I95Ec0AvuPnZTJWislGz_Lpw_-SNZUWHJHlMI_p25S1H72PbFZxaLfRhiV5xo9JJ13rj8LAHM51KyeKZ7h-ZGRisgg_tjtGX55w_dBQWiU0388oAFVqQiusPC_wfuRcPjmIkcJ5L4Rs"
        />
      </div>

      <div className="relative z-10 py-32 px-6 md:px-16 max-w-[1440px] mx-auto text-center">
        <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-6 block">
          Ready to get started?
        </span>
        <h2 className="font-headline text-5xl md:text-6xl font-bold text-on-surface mb-8 tracking-tight">
          Plan Your Solar Solution
        </h2>
        <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
          Tell us about your property, power needs, or project goals, and we will help you design a solar solution that fits perfectly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link
            to="/contact#inquiry"
            className="micro-button bg-[#2C2C2C] hover:bg-black text-white px-8 py-4 font-label text-xs uppercase tracking-[0.15em]"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};
