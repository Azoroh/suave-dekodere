import React from 'react';

export const Location = () => {
  return (
    <section className="px-6 md:px-16 py-24 md:py-40 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Map */}
        <div className="order-2 md:order-1 h-[600px] bg-surface-container overflow-hidden">
          <iframe
            title="Suave Innovations Office Location"
            src="https://maps.google.com/maps?q=Victoria+Island,+Lagos,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 grayscale-0 lg:grayscale lg:hover:grayscale-0 transition-all duration-700"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2 md:pl-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            Based in Lagos, Serving Modern Spaces
          </h2>
          <p className="font-body text-xl text-on-surface/70 leading-relaxed mb-10 max-w-md">
            We work with residential and commercial clients in Lagos, Nigeria, delivering modern energy, smart systems, and interior finishing solutions.
          </p>
          <div className="flex items-center gap-4 text-secondary">
            <span className="material-symbols-outlined">location_on</span>
            <span className="font-label text-sm uppercase tracking-widest font-bold">Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </section>
  );
};
