import React from "react";
import solarPanelImg from "../../assets/images/reliable_energy.avif";
import inverterInstallImg from "../../assets/images/inverter_install.avif";
import smartHomeImg from "../../assets/images/smart_home.avif";
import cctvImg from "../../assets/images/cctv_install.avif";
import electricalImg from "../../assets/images/electrical.avif";

export const CoreInfrastructure = () => {
  return (
    <section
      id="technical-excellence"
      className="bg-surface-container-low py-32 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-24">
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-[0.15em] text-secondary mb-4 block">
              Core Infrastructure
            </span>
            <h2 className="font-headline text-4xl md:text-[2.75rem] font-bold text-on-surface">
              Suave Technical Excellence
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-24">
          {/* Service 1: Solar */}
          <div className="micro-service-card group p-4 -m-4">
            <div className="mb-8 overflow-hidden aspect-[4/5] bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                alt="Contemporary solar panel installation"
                src={solarPanelImg}
              />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-outline font-light">
                light_mode
              </span>
              Solar Installations
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Reliable solar systems designed for homes, offices, and commercial
              spaces that need efficient, long-term power support.
            </p>
          </div>

          {/* Service 2: Backup Power */}
          <div className="micro-service-card group p-4 -m-4 md:mt-12">
            <div className="mb-8 overflow-hidden aspect-[4/5] bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                alt="Industrial power backup systems"
                src={inverterInstallImg}
              />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-outline font-light">
                battery_charging_full
              </span>
              Backup Power Solutions
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Power systems built to help daily life and business operations
              continue without unnecessary interruption.
            </p>
          </div>

          {/* Service 3: Smart Home */}
          <div className="micro-service-card group p-4 -m-4">
            <div className="mb-8 overflow-hidden aspect-[4/5] bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                alt="High-end smart home touch interface"
                src={smartHomeImg}
              />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-outline font-light">
                settings_remote
              </span>
              Smart Home Automation
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Integrated control for lighting, access, comfort, and everyday
              convenience.
            </p>
          </div>

          {/* Service 4: CCTV */}
          <div className="micro-service-card group p-4 -m-4">
            <div className="mb-8 overflow-hidden aspect-[16/9] w-full bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                alt="Minimalist modern security camera"
                src={cctvImg}
              />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-outline font-light">
                videocam
              </span>
              CCTV and Security Systems
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Modern surveillance and monitoring solutions for better visibility
              and peace of mind.
            </p>
          </div>

          {/* Service 5: Electrical */}
          <div className="micro-service-card group p-4 -m-4 md:col-span-2">
            <div className="mb-8 overflow-hidden aspect-[21/9] w-full bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                alt="Close-up of professional electrical blueprint and tools"
                src={electricalImg}
              />
            </div>
            <div className="max-w-md">
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-outline font-light">
                  electrical_services
                </span>
                Electrical Engineering
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Professional electrical planning and installation for
                high-performance residential and commercial spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
