import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../../components/ui/SectionLabel";
import electricalImg from "../../assets/images/electrical.avif";

export const TechnicalServices = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Electrical Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <SectionLabel label="Electrical" />
            <h3 className="text-2xl font-bold mt-4 mb-6 text-[#30332f]">Power Systems & Engineering</h3>
            <div className="aspect-video rounded-sm overflow-hidden mb-8">
              <img src={electricalImg} alt="Professional electrical panel installation" className="w-full h-full object-cover" />
            </div>
            <p className="text-secondary opacity-70 leading-relaxed mb-6">
              Complete electrical design, wiring, and panel installations. We ensure stable, efficient, and safe power distribution for any scale of project.
            </p>
            <ul className="text-sm space-y-3 text-[#30332f]/80 italic">
              <li>• Industrial & Residential Wiring</li>
              <li>• Surge Protection Systems</li>
              <li>• Smart Distribution Panels</li>
            </ul>
          </motion.div>

          {/* Mechanical Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <SectionLabel label="Mechanical" />
            <h3 className="text-2xl font-bold mt-4 mb-6 text-[#30332f]">HVAC & Climate Control</h3>
            <div className="aspect-video rounded-sm overflow-hidden mb-8">
              <img src="https://images.unsplash.com/photo-1517646281694-22c61141e205?auto=format&fit=crop&q=80&w=800" alt="HVAC ducting" className="w-full h-full object-cover" />
            </div>
            <p className="text-secondary opacity-70 leading-relaxed mb-6">
              Advanced heating, ventilation, and air conditioning solutions designed for Nigeria's climate, ensuring optimal air quality and temperature.
            </p>
            <ul className="text-sm space-y-3 text-[#30332f]/80 italic">
              <li>• Centralized Cooling Systems</li>
              <li>• Ventilation Design</li>
              <li>• Smart HVAC Integration</li>
            </ul>
          </motion.div>

          {/* Plumbing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <SectionLabel label="Plumbing" />
            <h3 className="text-2xl font-bold mt-4 mb-6 text-[#30332f]">Hydraulic & Water Systems</h3>
            <div className="aspect-video rounded-sm overflow-hidden mb-8">
              <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800" alt="Modern plumbing fixtures" className="w-full h-full object-cover" />
            </div>
            <p className="text-secondary opacity-70 leading-relaxed mb-6">
              Modern plumbing solutions including water treatment, pressure management, and luxury fixture installations.
            </p>
            <ul className="text-sm space-y-3 text-[#30332f]/80 italic">
              <li>• Water Purification Systems</li>
              <li>• Smart Pump Controllers</li>
              <li>• High-Pressure Distribution</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
