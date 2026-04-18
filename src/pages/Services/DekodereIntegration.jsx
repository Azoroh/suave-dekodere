import React from 'react';

export const DekodereIntegration = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative flex gap-8">
          <div className="w-[2px] h-full bg-tertiary-container shrink-0 min-h-[200px]"></div>
          <div>
            <span className="font-label text-xs uppercase tracking-[0.15em] text-tertiary mb-4 block">
              Dékódèrè by Suave
            </span>
            <h2 className="font-headline text-4xl md:text-[2.75rem] font-bold text-on-surface mb-8 leading-tight">
              Interior Calm, Lighting, and Finishing
            </h2>
            <div className="font-body text-xl italic text-on-surface mb-12 leading-relaxed">
              "Beyond technical systems, we help shape the final experience of a space through interior finishing, feature lighting, and refined design detail. Dékódèrè brings warmth, mood, and visual balance to the environments we help build and power."
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group cursor-default">
                <span className="material-symbols-outlined text-tertiary">architecture</span>
                <span className="font-headline font-semibold text-lg border-b border-transparent group-hover:border-tertiary/30 transition-all">
                  Interior Finishing
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <span className="material-symbols-outlined text-tertiary">wb_incandescent</span>
                <span className="font-headline font-semibold text-lg border-b border-transparent group-hover:border-tertiary/30 transition-all">
                  Lighting Design
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <span className="material-symbols-outlined text-tertiary">format_paint</span>
                <span className="font-headline font-semibold text-lg border-b border-transparent group-hover:border-tertiary/30 transition-all">
                  Decorative Styling
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 items-start">
          <div className="aspect-[3/4] overflow-hidden bg-surface-container translate-y-8 md:translate-y-12">
            <img 
              className="w-full h-full object-cover" 
              alt="Refined interior detail featuring a brass floor lamp" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYACvOZ1fctU0TCVJzUYKP28OJrWeKMcw30N30NxmGFEEWRiXXEdWGBcNiQTZIvbLka-HC7obi2GIUF-K1DQJXELpcQ5R2J41T063SQIL3NroRnEP0moqDkdqohGqicMHvdeaHYFn06U0qwZ_M93bQCobeOxCEEq5ctqewM-Ou4K009bSzG8sbA-p_dufebvtcNbdobsFvICNaq2DR5P8BoZJ88XljqG9hATgws8HGrR6HlWtDnKy4uY9AFq_7jI4MzUm7CfZC0jY" 
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-surface-container">
            <img 
              className="w-full h-full object-cover" 
              alt="Modern architectural lighting detail" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOHDuNikSjJ9wD5PqO_XRtg7DI9KEnFqAzqG90zBNhK2QRVG3SEaMQfykSKQ-MXhkRwSrjUhsbk0j0Jw1cs2F5asoko4ThvhhTXMDY8NFSWiueZJh--EtV1RHvXeWWLuIcQoiIKf669TJ-IsEuOSXrIc8f6EtLnWvJUyyvc9QK2I5TS9A8KXYq9enOjnsektKQAIb8g85ZeUizWHzn_Kc0uqt7ebABP79fHHOdLCUmVQ195WlqlWee2BkAWzn3BGSczYQkSvDQsSs" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
