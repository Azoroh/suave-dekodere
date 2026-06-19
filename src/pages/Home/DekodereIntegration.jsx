import React from "react";
import { Link } from "react-router-dom";
import dekodereLogo from "../../assets/images/dekodereLogo-split-black.png";
import dekodereImg from "../../assets/images/dekodere_integration.avif";

export const DekodereIntegration = () => {
  return (
    <section className="bg-surface py-24 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-tertiary-fixed/20 -z-10"></div>
          <img
            className="w-full aspect-[3/4] object-cover"
            loading="lazy"
            decoding="async"
            alt="warmly lit modern living room with exquisite textures of velvet stone and brass accents"
            src={dekodereImg}
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="mb-12">
            <img
              src={dekodereLogo}
              alt="Dékódèrè by Suave"
              loading="lazy"
              decoding="async"
              className="h-20 w-auto object-contain"
            />
          </div>

          <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-10 text-on-surface">
            Artisanal Design.
            <br />
            Atmospheric Living.
          </h2>

          <p className="font-body text-2xl text-on-surface/80 leading-snug italic mb-10">
            Beyond the systems, we craft the soul of your space. Dékódèrè brings custom furniture, artisanal lighting, and refined interior design to every project.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12 max-w-lg">
            <div>
              <h4 className="font-bold text-[#30332f] mb-2 uppercase text-xs tracking-widest">Bespoke Furniture</h4>
              <p className="text-sm text-on-surface/60">Custom couches, cabinets, and masterfully built wooden pieces.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#30332f] mb-2 uppercase text-xs tracking-widest">Interior Styling</h4>
              <p className="text-sm text-on-surface/60">Refined finishes and spatial design for residential and commercial builds.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <Link
              to="/design-build"
              className="micro-text-link group flex items-center gap-4 text-tertiary hover:text-on-surface transition-colors"
            >
              <span className="font-label text-xs uppercase tracking-widest font-bold">
                View Design & Build
              </span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                arrow_right_alt
              </span>
            </Link>
            <a
              href="https://www.instagram.com/dekoderebysuave/"
              target="_blank"
              rel="noopener noreferrer"
              className="micro-text-link group flex items-center gap-4 text-tertiary/60 hover:text-on-surface transition-colors"
            >
              <span className="font-label text-[10px] uppercase tracking-widest">
                Instagram Portfolio
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
