import React from 'react';

export const Process = () => {
  return (
    <section className="bg-surface py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <span className="font-label text-xs uppercase tracking-widest text-on-surface/40 mb-4 block text-center">
          How we work
        </span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter mb-20 text-center">
          From Infrastructure to Interior
        </h2>
        
        <div className="space-y-24">
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-baseline">
            <span className="font-headline text-6xl font-extrabold text-outline-variant/20">01</span>
            <div>
              <h4 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface mb-4">
                Consultation & Strategy
              </h4>
              <p className="font-body text-lg text-on-surface/60 italic">
                We start by understanding your power needs, space requirements, and project goals.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-baseline">
            <span className="font-headline text-6xl font-extrabold text-outline-variant/20">02</span>
            <div>
              <h4 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface mb-4">
                Core Infrastructure
              </h4>
              <p className="font-body text-lg text-on-surface/60 italic">
                From solar and backup systems to smart controls and electrical work, we build the technical foundation.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-baseline">
            <span className="font-headline text-6xl font-extrabold text-outline-variant/20">03</span>
            <div>
              <h4 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface mb-4">
                Interior Finishing with Dékódèrè
              </h4>
              <p className="font-body text-lg text-on-surface/60 italic">
                We complete the experience with lighting, interior detail, and finishing touches that bring the space together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
