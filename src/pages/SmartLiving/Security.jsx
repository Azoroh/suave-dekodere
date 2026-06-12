import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../../components/ui/SectionLabel";
import securityImg from "../../assets/images/cctv_install.avif";

export const Security = () => {
  return (
    <section id="security" className="py-24 md:py-32 px-6 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-sm overflow-hidden">
                <img src={securityImg} alt="CCTV Installation" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-sm overflow-hidden mt-8">
                <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=800" alt="Security Camera" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <SectionLabel label="Home Security" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-[#30332f] mt-4 mb-8">
              Protect What <br /> Matters Most
            </h2>
            <p className="font-body text-lg text-secondary opacity-70 mb-10 leading-relaxed">
              Complete peace of mind through advanced surveillance and access control systems. Monitor your property from anywhere in the world with real-time alerts and high-definition clarity.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#4b6367]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#4b6367]">visibility</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#30332f] mb-1">24/7 Surveillance</h4>
                  <p className="text-sm text-secondary opacity-70">Professional-grade CCTV systems with cloud backup and AI motion detection.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#4b6367]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#4b6367]">lock</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#30332f] mb-1">Smart Access Control</h4>
                  <p className="text-sm text-secondary opacity-70">Keyless entry, biometric locks, and video doorbells integrated with your phone.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
