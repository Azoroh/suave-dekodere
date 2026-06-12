import React from 'react';
import { Hero } from './Hero';
import { TechnicalServices } from './TechnicalServices';
import { Footer } from '../../components/layout/Footer';

const MEP = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <TechnicalServices />
      <div className="bg-[#30332f] py-20 px-6 md:px-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p className="opacity-60 mb-8 max-w-xl mx-auto italic">
          Our team of certified engineers is ready to provide comprehensive MEP solutions for your next build.
        </p>
        <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
          <button className="px-10 py-4 bg-white text-[#30332f] font-label uppercase text-xs tracking-[0.2em] hover:bg-[#4b6367] hover:text-white transition-all duration-300">
            Book Engineering Consultation
          </button>
        </a>
      </div>
      <Footer />
    </main>
  );
};

export default MEP;
