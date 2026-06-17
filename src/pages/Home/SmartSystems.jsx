import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export const SmartSystems = () => {
  return (
    <section className="bg-surface-container-low py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
              Smart Living & Automation
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface">
              Intelligent Control, <br /> Cinema & Security
            </h2>
          </div>
          <p className="font-body text-xl text-on-surface/60 italic max-w-sm">
            We integrate home automation, immersive entertainment, and advanced security into one seamless experience.
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
                Smart Automation
              </h3>
              <p className="font-body text-on-surface/70">
                Centralized control for lighting, climate, and comfort, designed to make your space respond to your needs.
              </p>
            </div>
            <Link
              className="micro-text-link font-label text-[10px] uppercase tracking-widest text-on-surface/40 hover:text-secondary transition-colors"
              to="/smart-living#automation"
            >
              Explore Automation
            </Link>
          </div>

          {/* Cinema Card */}
          <div className="micro-service-card bg-surface p-12 flex flex-col justify-between aspect-square">
            <div>
              <span className="material-symbols-outlined text-3xl mb-8 block text-on-surface">
                videocam
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4">
                Home Cinema
              </h3>
              <p className="font-body text-on-surface/70">
                Immersive 4K projection and Dolby Atmos sound systems for the ultimate private cinematic experience.
              </p>
            </div>
            <Link
              className="micro-text-link font-label text-[10px] uppercase tracking-widest text-on-surface/40 hover:text-secondary transition-colors"
              to="/smart-living#cinema"
            >
              Discover Cinema
            </Link>
          </div>

          {/* Security Card */}
          <div className="micro-service-card bg-[#30332f] text-white p-12 flex flex-col justify-between aspect-square">
            <div>
              <span className="material-symbols-outlined text-3xl mb-8 block text-white/40">
                security
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4">
                Advanced Security
              </h3>
              <p className="font-body text-white/70">
                Smart CCTV, biometric access, and remote monitoring for uncompromising property protection.
              </p>
            </div>
            <Link
              className="micro-text-link font-label text-[10px] uppercase tracking-widest text-white/40 hover:text-[#4b6367] transition-colors"
              to="/smart-living#security"
            >
              View Security
            </Link>
          </div>

          {/* MEP Card (Horizontal) */}
          <div className="micro-service-card md:col-span-3 bg-secondary text-surface-bright p-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h3 className="font-headline text-3xl font-bold mb-6">
                MEP Infrastructure
              </h3>
              <p className="font-body text-xl text-surface-bright/70 italic">
                Professional Mechanical, Electrical, and Plumbing engineering for high-performance residential and commercial projects.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Link to="/mep">
                <Button variant="secondary" className="w-full md:w-auto">
                  Talk to Our Engineers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
