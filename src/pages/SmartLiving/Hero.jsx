import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center px-6 md:px-16 overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          alt="Modern smart home interior with integrated technology"
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1600"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block font-label text-xs uppercase tracking-[0.2em] text-white mb-6"
        >
          Elevating Your Lifestyle
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none mb-8"
        >
          Smart Living. <br /> Seamless Control.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed"
        >
          Transform your space with intelligent automation, immersive cinema experiences, and uncompromising security.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col md:flex-row gap-4"
        >
          <a href="https://wa.me/2349074252223" target="_blank" rel="noopener noreferrer">
            <Button variant="surface" size="lg">
              Get a Smart Quote
            </Button>
          </a>
          <Link to="/shop">
            <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-black">
              View Smart Devices
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
