import React from "react";
import deko1 from "../../assets/images/deko_poster1.avif";
import deko2 from "../../assets/images/deko2.avif";

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
              "Beyond technical systems, we help shape the final experience of a
              space through interior finishing, feature lighting, and refined
              design detail. Dékódèrè brings warmth, mood, and visual balance to
              the environments we help build and power."
            </div>

            <ul className="space-y-6">
              <li className="flex items-center gap-4 group cursor-default">
                <span className="material-symbols-outlined text-tertiary">
                  architecture
                </span>
                <span className="font-headline font-semibold text-lg border-b border-transparent group-hover:border-tertiary/30 transition-all">
                  Interior Finishing
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <span className="material-symbols-outlined text-tertiary">
                  wb_incandescent
                </span>
                <span className="font-headline font-semibold text-lg border-b border-transparent group-hover:border-tertiary/30 transition-all">
                  Lighting Design
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <span className="material-symbols-outlined text-tertiary">
                  format_paint
                </span>
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
              loading="lazy"
              decoding="async"
              alt="Refined interior detail featuring a brass floor lamp"
              src={deko1}
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-surface-container">
            <img
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              alt="Modern architectural lighting detail"
              src={deko2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
