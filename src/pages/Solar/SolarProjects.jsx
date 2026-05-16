import React, { useState } from "react";
import { Button } from "../../components/ui/Button";
import anambraInstallImg from "../../assets/images/anambra_install.avif";
import estateInstallImg from "../../assets/images/estate_install.avif";
import inverterInstallImg from "../../assets/images/inverter_install.avif";
import ketuInstallImg from "../../assets/images/ketu_install.avif";

const allProjects = [
  {
    id: crypto.randomUUID(),
    title: "Anambra Residential Installation",
    type: "Residential Solar",
    location: "Anambra, Nigeria",
    image: anambraInstallImg,
    description:
      "A residential solar and backup power installation designed to reduce generator reliance and keep essential home systems running reliably.",
  },
  {
    id: crypto.randomUUID(),
    title: "Inverter & Battery Backup Installation",
    type: "Backup Power",
    location: "Lagos, Nigeria",
    image: inverterInstallImg,
    description:
      "An inverter and tubular battery backup setup designed to keep essential systems running during power interruptions.",
  },
  {
    id: crypto.randomUUID(),
    title: "Estate Rooftop Solar Installation",
    type: "Residential Solar",
    location: "Lagos, Nigeria",
    image: estateInstallImg,
    description:
      "A clean rooftop solar installation for a modern estate residence, designed to support dependable energy use.",
  },
  {
    id: crypto.randomUUID(),
    title: "Ketu Rooftop Solar Installation",
    type: "Residential Solar",
    location: "Ketu, Lagos",
    image: ketuInstallImg,
    description:
      "A residential rooftop solar system in Ketu, designed to reduce power interruptions and support dependable daily energy use.",
  },
];

export const SolarProjects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedProjects = isExpanded ? allProjects : allProjects.slice(0, 2);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-16 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">
            Proof of performance
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
            Selected Solar Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 transition-all duration-500 ease-in-out">
          {displayedProjects.map((project) => (
            <div key={project.id} className="group overflow-hidden">
              <div className="micro-project-image aspect-[16/10] bg-surface-container-highest mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale-0 lg:grayscale-[30%] lg:group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-2 bg-on-surface/80 backdrop-blur-sm text-surface-bright font-label text-[10px] uppercase tracking-widest font-bold">
                    {project.type}
                  </span>
                </div>
                <div className="micro-project-caption">
                  <span className="font-label text-[10px] uppercase tracking-widest text-surface-bright/70 block mb-2">
                    {project.location}
                  </span>
                  <span className="font-headline text-2xl font-bold text-surface-bright">
                    {project.title}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">
                    {project.title}
                  </h3>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface/40">
                    {project.location}
                  </p>
                </div>
              </div>
              <p className="font-body text-on-surface-variant max-w-xl italic leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="micro-text-link flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center group-hover:bg-on-surface group-hover:border-on-surface transition-all duration-300">
              <span
                className={`material-symbols-outlined text-on-surface group-hover:text-surface-bright transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
              >
                keyboard_arrow_down
              </span>
            </div>
            <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-on-surface">
              {isExpanded ? "Show Less Projects" : "Show All Projects"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
