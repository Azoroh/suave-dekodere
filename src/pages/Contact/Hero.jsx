import React from "react";
import contactHeroImg from "../../assets/images/contacts_hero.webp";

const scrollToForm = (e) => {
  e.preventDefault();
  document
    .getElementById("inquiry")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Hero = () => {
  return (
    <section className="pt-32 px-6 md:px-16 mb-24 md:mb-40 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        {/* Left: Text */}
        <div className="md:col-span-7">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-6 block">
            Contact
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8 leading-[1.1]">
            Let's Talk About <br /> Your Space
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface/80 max-w-xl leading-relaxed mb-10">
            Tell us about your home, office, commercial property, or project
            needs, and we will help you plan a solution that fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button
              onClick={scrollToForm}
              className="micro-button bg-[#2C2C2C] hover:bg-black text-white font-label text-xs uppercase tracking-[0.15em] px-8 py-4"
            >
              Book a Consultation
            </button>
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
        <div className="md:col-span-5 h-[500px] overflow-hidden bg-surface-container">
          <img
            className="w-full h-full object-cover md:grayscale hover:grayscale-0 transition-all duration-700"
            alt="Minimalist architectural interior with soft natural light"
            src={contactHeroImg}
          />
        </div>
      </div>
    </section>
  );
};
