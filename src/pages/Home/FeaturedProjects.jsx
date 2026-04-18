import React from 'react';
import { Button } from '../../components/ui/Button';

export const FeaturedProjects = () => {
  return (
    <section className="bg-surface-container py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="font-label text-xs uppercase tracking-widest text-on-surface/40 mb-4 block">
            Selected projects
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface">
            Our Work
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* Project 1 */}
          <div className="md:mt-32">
            <div className="overflow-hidden mb-8">
              <img 
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-1000" 
                alt="commercial office lobby with high-tech lighting systems and sustainable wood architecture" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBUfFkcx-aEPdAXrRh2qc2SnsPifnNOuJgZ8cloFMIIBO6n1cfAXa-pbWv8a19hsXISD0sG3LaolZSddT0eWx3dV_am11vQBMkhkrFyIVbqcI2Enclls9Y9GTAnGSHUfnRAsJr-UR7mkO2mKU9wO29uPD27TD-g2mgneGnDtdaqUD-nacGN5vdysdyWh6zUvyfsXyg_NWPr-WCjDCPekJx48iJYU3eYboDL_try2L6fOygejw3SdIy9qTbCnbFe-ATNdhyI47YN4g"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-secondary/10 text-secondary font-label text-[10px] uppercase tracking-widest font-bold">
                Commercial Interior
              </span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface/40">
                The Meridian Corporate Plaza
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">The Meridian Corporate Plaza</h3>
            <p className="font-body text-on-surface/60 italic">
              A refined commercial interior delivered with clean lighting, warm finishes, and a modern spatial feel.
            </p>
          </div>
          
          {/* Project 2 */}
          <div>
            <div className="overflow-hidden mb-8">
              <img 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000" 
                alt="luxury bedroom with sophisticated indirect mood lighting and bespoke textile wall finishes" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs_3z34rpNd0HqAM0ohT1oZJnd6tJqHgJBLvORz-wzPGNuPHKt60FAuLCWlTgqSTzEA-iESj3CnE-APeEcsHpvPnYZxgmw9F9089z5Ad65MLSkG9kdrmUjar2DuyJ9WsvBBimk_r_7aFu4yhZVGTDjRxVHQkhMVgPboxgaavP0peLU60r79kfR7SliAjbuwSAyoTWZyHIy4QEVR-LZbYwle2scwSns-AbODKdIP5xDM6dDEtrWsAOfimi6qoebKOkUTMMh1oYDN2A"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-tertiary/10 text-tertiary font-label text-[10px] uppercase tracking-widest font-bold">
                Residential Interior
              </span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface/40">
                The Quartz Residence
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">The Quartz Residence</h3>
            <p className="font-body text-on-surface/60 italic">
              A calm bedroom interior shaped with layered lighting, soft finishes, and a clean minimalist palette.
            </p>
          </div>
        </div>
        
        <div className="mt-24 flex justify-center">
          <a 
            href="https://www.instagram.com/suave_innovations/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-outline-variant/30 text-on-surface hover:bg-on-surface hover:text-surface-bright transition-all px-12 py-5 font-label text-xs uppercase tracking-widest"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};
