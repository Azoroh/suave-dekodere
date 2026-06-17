import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center px-6 md:px-16 overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale-[30%] brightness-[0.85]"
          loading="eager"
          decoding="async"
          alt="Luxury custom furniture and interior design"
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block font-label text-xs uppercase tracking-[0.2em] text-white/80 mb-6"
        >
          Crafted by Dekodere
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none mb-8"
        >
          Artisanal Design. <br /> Masterful Build.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed"
        >
          From bespoke furniture to complete interior transformations, we create spaces that tell your unique story.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col md:flex-row gap-4"
        >
          <a href="https://wa.me/2349074252223" target="_blank" rel="noopener noreferrer">
            <Button variant="surface" size="lg">
              Start Your Project
            </Button>
          </a>
          <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-label uppercase text-xs tracking-widest hover:bg-white/10 transition-all duration-300">
            View Design Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};
