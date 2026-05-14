import React from 'react';
import founderImg from '../../assets/images/founder.png';

export const Leadership = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          {/* Left: Image Container */}
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-sm">
              <img 
                src={founderImg} 
                alt="Suave Innovations Founder" 
                className="w-full h-full object-cover grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 lg:group-hover:scale-100"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-outline-variant/30 z-0 pointer-events-none" />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-8 block">
              Leadership & Vision
            </span>
            
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">
              Engineering Precision,<br/>Design Intent.
            </h2>
            
            <div className="space-y-8 max-w-2xl">
              <p className="font-body text-xl md:text-2xl text-on-surface-variant italic leading-relaxed">
                "Our goal at Suave Innovations isn't just to install systems, but to build the invisible infrastructure that makes modern life effortless. With Dékódèrè, we ensure that technical excellence is always wrapped in exceptional design."
              </p>
              
              <div className="pt-8 border-t border-outline-variant/20">
                <h4 className="font-headline text-2xl font-bold text-on-surface tracking-tight">
                  Kehinde Dada — <span className="text-secondary/60 font-light">Founder</span>
                </h4>
                <div className="mt-4 flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-surface-container text-on-surface-variant font-label text-[10px] uppercase tracking-widest rounded-full">
                    B.Sc. Engineering
                  </span>
                  <span className="px-4 py-2 bg-surface-container text-on-surface-variant font-label text-[10px] uppercase tracking-widest rounded-full">
                    Energy Systems Specialist
                  </span>
                  <span className="px-4 py-2 bg-surface-container text-on-surface-variant font-label text-[10px] uppercase tracking-widest rounded-full">
                    Interior Design Strategist
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
