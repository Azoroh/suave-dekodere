import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative h-[60vh] flex items-center px-6 md:px-16 overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale-[50%] brightness-[0.7]"
          loading="eager"
          decoding="async"
          alt="Large scale mechanical and electrical infrastructure"
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block font-label text-xs uppercase tracking-[0.2em] text-white/70 mb-6"
        >
          Technical Infrastructure
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none mb-8"
        >
          MEP Excellence. <br /> Total Reliability.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed"
        >
          High-performance Mechanical, Electrical, and Plumbing engineering for luxury residential and commercial projects.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <a href="https://wa.me/2349074252223" target="_blank" rel="noopener noreferrer">
            <Button variant="surface" size="lg">
              Consult with an Engineer
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
