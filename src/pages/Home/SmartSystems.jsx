import React from "react";
import { Button } from "../../components/ui/Button";

export const SmartSystems = () => {
  return (
    <section className="bg-surface-container-low py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
              Smart systems and security
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface">
              Smart Home and Integrated Systems
            </h2>
          </div>
          <p className="font-body text-xl text-on-surface/60 italic max-w-sm">
            We bring power, automation, security, and convenience together in
            one coordinated system for modern spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Smart Systems Card */}
          <div className="micro-service-card bg-surface p-12 flex flex-col justify-between aspect-square">
            <div>
              <span className="material-symbols-outlined text-3xl mb-8 block text-on-surface">
                settings_input_component
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4">
                Integrated Automation
              </h3>
              <p className="font-body text-on-surface/70">
                Smart control for lighting, access, and everyday comfort,
                designed to make your space easier to manage.
              </p>
            </div>
            <a
              className="micro-text-link font-label text-[10px] uppercase tracking-widest text-on-surface/40 hover:text-secondary transition-colors"
              href="#"
            >
              System Architecture
            </a>
          </div>

          {/* Security Card (Image) */}
          <div className="md:col-span-2 relative overflow-hidden group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="luxury home interior with sophisticated tech-integrated security panels and minimalist design"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6RlyfUvXymbs4MNahiNVySaXGZkv4KlZRcQ1vmgungJi1mUiJRMTAkhse9fvOxQmS-G5o9mZQjCDTdGzMUryxWJg6SmDcK2CJIO9aHGUrAkdQndYJmdfdBxEpN5Bba_xjTU3wxfdUeQpSIOexRnGrOootGR1T6QXLaXECeq-Ql2mFPILdwPpVcRNKgQciZF0Dekslsh0BE-C9hgi21W2FALMpNBSECwD3Ze5I8G6760fne75LEUsAnwIzI6Jn-V9mO8gtqiaM07k"
            />
            <div className="absolute inset-0 bg-on-surface/20 flex flex-col justify-end p-12">
              <h3 className="font-headline text-3xl font-bold text-surface-bright mb-2">
                Advanced Security & CCTV
              </h3>
              <p className="font-body text-surface-bright/80 italic">
                Protection and visibility for homes, offices, and commercial
                spaces.
              </p>
            </div>
          </div>

          {/* Electrical Card (Horizontal) */}
          <div className="micro-service-card md:col-span-3 bg-secondary text-surface-bright p-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h3 className="font-headline text-3xl font-bold mb-6">
                Electrical Engineering
              </h3>
              <p className="font-body text-xl text-surface-bright/70 italic">
                Professional electrical design and installation for
                high-performance residential and commercial projects.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Button variant="secondary" className="w-full md:w-auto">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
