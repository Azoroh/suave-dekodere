import React from "react";
import { Link } from "react-router-dom";
import solarPanelImg from "../../assets/images/reliable_energy.avif";

export const SolarEnergy = () => {
  return (
    <section className="bg-surface py-24 md:py-24 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
            Sustainable Power & Infrastructure
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-on-surface">
            Reliable Energy, <br /> Built for the Future
          </h2>
          <p className="font-body text-lg text-on-surface/80 leading-relaxed mb-8">
            Power is the foundation of a modern home. We design and install high-performance solar and MEP infrastructure that ensures your space remains efficient, comfortable, and fully operational 24/7.
          </p>
          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">
                bolt
              </span>
              <div>
                <span className="font-headline font-bold text-on-surface block">
                  Solar & MEP Infrastructure
                </span>
                <p className="font-body text-on-surface/60 italic">
                  Complete energy and utility engineering tailored for luxury residential and commercial builds.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">
                eco
              </span>
              <div>
                <span className="font-headline font-bold text-on-surface block">
                  Sustainable Luxury
                </span>
                <p className="font-body text-on-surface/60 italic">
                  Clean, quiet, and reliable power that enhances your lifestyle without compromise.
                </p>
              </div>
            </li>
          </ul>
          <Link
            className="micro-text-link font-body text-secondary italic text-lg underline editorial-underline hover:text-on-surface transition-colors"
            to="/solar#projects"
          >
            Explore Solar Solutions
          </Link>
        </div>

        <div className="md:col-span-7 order-1 md:order-2">
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
            <img
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              alt="high-end modern solar panel installation on a sleek architectural roof with blue sky reflection"
              src={solarPanelImg}
            />
            <div className="absolute bottom-0 left-0 bg-surface-bright p-8 max-w-sm hidden md:block">
              <p className="font-body italic text-on-surface/70">
                "Practical energy systems designed for modern living and
                business use"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
