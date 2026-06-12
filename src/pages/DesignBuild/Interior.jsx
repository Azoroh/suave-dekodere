import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../../components/ui/SectionLabel";

export const Interior = () => {
  return (
    <section id="interior" className="py-24 md:py-32 px-6 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <SectionLabel label="Interior Design" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-[#30332f] mt-4">
            Curated Spaces, <br /> Refined Finishes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Residential Design',
              image: 'https://images.unsplash.com/photo-1616486341351-70252447c574?auto=format&fit=crop&q=80&w=800',
              desc: 'Transforming homes into sanctuaries of style and functionality.'
            },
            {
              title: 'Commercial Fit-outs',
              image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
              desc: 'Productive and inspiring environments for modern businesses.'
            },
            {
              title: 'Renovation & Styling',
              image: 'https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&q=80&w=800',
              desc: 'Breathing new life into existing spaces with expert styling.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#30332f] mb-2">{item.title}</h3>
              <p className="text-secondary opacity-70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
