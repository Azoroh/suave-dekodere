import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../../components/ui/SectionLabel";

export const Lighting = () => {
  return (
    <section id="lighting" className="py-24 md:py-32 px-6 md:px-16 bg-[#30332f] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1543198126-a4ad8e47fb71?auto=format&fit=crop&q=80&w=600" alt="Architectural lighting" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-sm overflow-hidden bg-white/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white/20 font-light">lightbulb</span>
              </div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="aspect-square rounded-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600" alt="Interior light fixtures" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=600" alt="Pendant lighting" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <SectionLabel label="Lighting Design" className="!text-white/60 after:!bg-white/20" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-4 mb-8">
              Setting the Perfect <br /> Ambience
            </h2>
            <p className="font-body text-lg text-white/60 mb-10 leading-relaxed">
              Lighting is the soul of any interior. We design and install sophisticated lighting systems that highlight architectural features, create mood, and enhance the overall aesthetic of your space.
            </p>
            
            <ul className="space-y-8">
              {[
                { title: 'Architectural Lighting', desc: 'Hidden fixtures that accentuate texture and form.' },
                { title: 'Decorative Fixtures', desc: 'Statement chandeliers and pendants sourced globally.' },
                { title: 'Layered Lighting', desc: 'A blend of task, ambient, and accent lighting for every room.' }
              ].map((item, index) => (
                <li key={index} className="flex gap-6">
                  <div className="w-1 px-0.5 bg-white/20" />
                  <div>
                    <h4 className="font-bold text-white mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
