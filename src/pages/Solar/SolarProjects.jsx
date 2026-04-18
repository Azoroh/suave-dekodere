import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import project1 from '../../assets/images/solar_project_1.png';
import project2 from '../../assets/images/solar_project_2.png';

const allProjects = [
  {
    id: 1,
    title: "The Zenith Heights Villa",
    location: "Ikoyi, Lagos",
    type: "Residential Solar",
    description: "Full integration of high-efficiency solar panels with smart energy management for a zero-noise luxury residence.",
    image: project1
  },
  {
    id: 2,
    title: "Apex Corporate Headquarters",
    location: "Victoria Island, Lagos",
    type: "Commercial Backup",
    description: "Large-scale industrial backup power solution to ensure 24/7 operations for a leading financial institution.",
    image: project2
  },
  {
    id: 3,
    title: "Crystal Cove Estate",
    location: "Lekki Phase 1, Lagos",
    type: "Smart Solar Community",
    description: "Grid-tied solar systems for a premium estate with centralized monitoring and maintenance support.",
    image: project1 // Reusing images for placeholder purposes
  },
  {
    id: 4,
    title: "The Platinum Executive Suites",
    location: "Banana Island, Lagos",
    type: "Bespoke Power System",
    description: "Custom-engineered power solutions with refined battery storage for executive hospitality.",
    image: project2 // Reusing images for placeholder purposes
  }
];

export const SolarProjects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const displayedProjects = isExpanded ? allProjects : allProjects.slice(0, 2);

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-surface">
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
              <div className="aspect-[16/10] overflow-hidden bg-surface-container-highest mb-8 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-0 lg:grayscale-[30%] lg:group-hover:grayscale-0 lg:group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-on-surface/80 backdrop-blur-sm text-surface-bright font-label text-[10px] uppercase tracking-widest font-bold">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">{project.title}</h3>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface/40">{project.location}</p>
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
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center group-hover:bg-on-surface group-hover:border-on-surface transition-all duration-300">
              <span className={`material-symbols-outlined text-on-surface group-hover:text-surface-bright transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
            </div>
            <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-on-surface">
              {isExpanded ? 'Show Less Projects' : 'Show All Projects'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
