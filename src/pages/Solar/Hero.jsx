import React from 'react';
import { Link } from 'react-router-dom';

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
            Reliable Solar Power <br />for Modern Living
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
            We design and install solar and backup power systems for homes, offices, and commercial spaces that need dependable performance and smarter long-term energy support.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <Link
              to="/contact#inquiry"
              className="bg-[#2C2C2C] hover:bg-black text-white px-8 py-4 font-label text-xs uppercase tracking-[0.15em] transition-all active:scale-95"
            >
              Book a Consultation
            </Link>
             <a
              href="https://wa.me/2340000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body italic text-tertiary text-lg border-b border-tertiary/30 pb-1 hover:border-tertiary transition-all"
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK3zDzLSJdTmRQJH1WzPb-vbv5x4v_FV-YJj4wZA4alwCyPtwV0IHDh_gEWz78njIQT1MYTiWUnmntX_Ps1UMNFIOhQoUMCEQPkwKdQi34unvTYd7my52WaXwHSJG04C3oQGAUQdU2_9A4Ysk9s4vc-MWVxI9Lt0IDCGTacsceTOdKyoDZULopuecQcxeUNU_I8QQCHWZtPNcS-mKtwR3HFdGfc0XtRg_akb_K9JiyJofTwjhT3dxxT_xZTyu_dvWylLerzD6jyDo"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-tertiary-fixed hidden md:block z-0" />
        </div>
      </div>
    </header>
  );
};
