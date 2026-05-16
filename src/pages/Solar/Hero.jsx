import React from "react";
import { Link } from "react-router-dom";
import solarBannerImg from "../../assets/images/solar_page_hero.webp";

export const Hero = () => {
  return (
    <header className="relative pt-32 pb-24 px-6 md:px-16 max-w-[1440px] mx-auto overflow-hidden lg:pt-48 lg:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text */}
        <div className="lg:col-span-7 z-10">
          <span className="inline-block font-label text-xs uppercase tracking-[0.2em] text-secondary mb-6">
            Solar solutions
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8 leading-[1.1]">
            Reliable Solar Power <br />
            for Modern Living
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
            We design and install solar and backup power systems for homes,
            offices, and commercial spaces that need dependable performance and
            smarter long-term energy support.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <Link
              to="/contact#inquiry"
              className="micro-button bg-[#2C2C2C] hover:bg-black text-white px-8 py-4 font-label text-xs uppercase tracking-[0.15em]"
            >
              Book a Consultation
            </Link>
            <a
              href="https://wa.me/2349074252223"
              target="_blank"
              rel="noopener noreferrer"
              className="micro-text-link font-body italic text-tertiary text-lg border-b border-tertiary/30 pb-1 hover:border-tertiary transition-all"
            >
              Call or WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-surface-container relative overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
              alt="Architectural solar integration on a modern villa"
              src={solarBannerImg}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
