import React from "react";
import { Link } from "react-router-dom";
import solarPanelImg from "../../assets/images/reliable_energy.avif";

export const SolarEnergy = () => {
  return (
    <section className="bg-surface py-24 md:py-32 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
            Solar and backup power
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-on-surface">
            Reliable Energy for Homes and Businesses
          </h2>
          <p className="font-body text-lg text-on-surface/80 leading-relaxed mb-8">
            Power supply should not interrupt how you live or work. We design
            and install solar and backup power systems that help homes, offices,
            and commercial properties stay efficient, secure, and prepared for
            everyday demands in Nigeria.
          </p>
          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">
                energy_savings_leaf
              </span>
              <div>
                <span className="font-headline font-bold text-on-surface block">
                  Solar and backup systems tailored to your property
                </span>
                <p className="font-body text-on-surface/60 italic">
                  Custom engineering ensures the right capacity for your
                  specific energy load requirements.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">
                shield_with_heart
              </span>
              <div>
                <span className="font-headline font-bold text-on-surface block">
                  Reliable performance for daily living and business continuity
                </span>
                <p className="font-body text-on-surface/60 italic">
                  Seamless transitions and durable components designed for the
                  local environment.
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
