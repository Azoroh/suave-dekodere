import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../../components/ui/SectionLabel";

export const Cinema = () => {
  return (
    <section id="cinema" className="py-24 md:py-32 px-6 md:px-16 bg-[#30332f] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <SectionLabel label="Home Cinema" className="!text-white/60 after:!bg-white/20" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-4">
            The Ultimate Cinematic <br /> Experience at Home
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Visual Excellence',
              icon: 'videocam',
              desc: 'High-performance 4K & 8K projection systems with acoustically transparent screens.'
            },
            {
              title: 'Immersive Sound',
              icon: 'surround_sound',
              desc: 'Dolby Atmos surround sound configurations for breathtaking audio depth.'
            },
            {
              title: 'Custom Seating',
              icon: 'event_seat',
              desc: 'Ergonomic cinema recliners designed for maximum comfort during long marathons.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-10 border border-white/10 rounded-sm hover:bg-white/10 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-4xl mb-6 text-white/40">{item.icon}</span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 relative aspect-video rounded-sm overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1600" 
            alt="Luxury home theater setup" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#30332f] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-10 left-10">
            <p className="font-label text-xs uppercase tracking-widest text-white/70 mb-2">Featured Project</p>
            <h4 className="text-2xl font-bold">Private Residence, Ikoyi</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
