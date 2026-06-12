import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../../components/ui/SectionLabel";

export const Furniture = () => {
  return (
    <section id="furniture" className="py-24 md:py-32 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <SectionLabel label="Bespoke Furniture" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-[#30332f] mt-4 mb-8">
              Tailored Comfort <br /> for Modern Living
            </h2>
            <p className="font-body text-lg text-secondary opacity-70 mb-10 leading-relaxed">
              Every piece of furniture we build is a balance of ergonomics and aesthetics. Our Dekodere workshop specializes in creating high-end, durable pieces that fit perfectly into your space.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Couches & Seating', desc: 'Premium fabrics and precision frames.' },
                { title: 'Cabinets & Storage', desc: 'Sleek, space-optimized cabinetry.' },
                { title: 'Dining & Tables', desc: 'Crafted centerpieces for connection.' },
                { title: 'Closets & Wardrobes', desc: 'Smart storage solutions for life.' }
              ].map((item, index) => (
                <div key={index} className="border-l-2 border-[#4b6367]/20 pl-6 py-2">
                  <h4 className="font-bold text-[#30332f] mb-1">{item.title}</h4>
                  <p className="text-sm text-secondary opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000" 
                alt="Custom built luxury sofa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#30332f] flex items-center justify-center p-8 text-white text-center hidden xl:flex">
              <p className="text-xs uppercase tracking-[0.2em] leading-relaxed">Bespoke Manufacturing Lagos</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
