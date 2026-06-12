import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../../components/ui/SectionLabel";
import automationImg from "../../assets/images/smarthome.avif";

export const Automation = () => {
  return (
    <section id="automation" className="py-24 md:py-32 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel label="Automation" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-[#30332f] mt-4 mb-8">
              Intelligence Built Into <br /> Your Environment
            </h2>
            <p className="font-body text-lg text-secondary opacity-70 mb-10 leading-relaxed">
              Experience the pinnacle of convenience with centralized control for your entire home. From lighting and climate to curtains and music, manage everything from a single interface or your smartphone.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: 'Smart Lighting', desc: 'Custom scenes for every mood and automated energy saving.' },
                { title: 'Climate Control', desc: 'Precision heating and cooling management for total comfort.' },
                { title: 'Motorized Shades', desc: 'Privacy and natural light control at the touch of a button.' }
              ].map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="material-symbols-outlined text-[#4b6367] mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-[#30332f]">{item.title}</h4>
                    <p className="text-sm text-secondary opacity-70">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img 
                src={automationImg} 
                alt="Smart home tablet control interface" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#4b6367] p-8 text-white hidden md:block">
              <p className="text-3xl font-bold mb-2">100%</p>
              <p className="text-[10px] uppercase tracking-widest opacity-70">Custom Integration</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
