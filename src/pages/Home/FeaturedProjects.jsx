import React from "react";
import solarProject1 from "../../assets/images/solar_project_1.png";
import solarProject2 from "../../assets/images/solar_project_2.png";

const projects = [
  {
    title: "Ikoyi Private Residence",
    category: "Residential Solar",
    location: "Ikoyi, Lagos",
    image: solarProject1,
    imageClassName: "aspect-[4/5]",
    accentClassName: "bg-secondary/10 text-secondary",
    description:
      "Solar and backup power integration for a quiet, reliable luxury home with smarter daily energy support.",
  },
  {
    title: "Victoria Island Office",
    category: "Commercial Power",
    location: "Victoria Island, Lagos",
    image: solarProject2,
    imageClassName: "aspect-square",
    accentClassName: "bg-on-surface/10 text-on-surface",
    description:
      "Backup power and electrical infrastructure planned around continuity, clean installation, and business use.",
  },
  {
    title: "Lekki Smart Home",
    category: "Smart Systems",
    location: "Lekki, Lagos",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6RlyfUvXymbs4MNahiNVySaXGZkv4KlZRcQ1vmgungJi1mUiJRMTAkhse9fvOxQmS-G5o9mZQjCDTdGzMUryxWJg6SmDcK2CJIO9aHGUrAkdQndYJmdfdBxEpN5Bba_xjTU3wxfdUeQpSIOexRnGrOootGR1T6QXLaXECeq-Ql2mFPILdwPpVcRNKgQciZF0Dekslsh0BE-C9hgi21W2FALMpNBSECwD3Ze5I8G6760fne75LEUsAnwIzI6Jn-V9mO8gtqiaM07k",
    imageClassName: "aspect-square",
    accentClassName: "bg-secondary/10 text-secondary",
    description:
      "Integrated lighting, access, CCTV, and control systems designed to make a modern home easier to manage.",
  },
  {
    title: "Dékódèrè Living Suite",
    category: "Interior Finishing",
    location: "Lagos, Nigeria",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKdreWA5ABHHifUFVR9GtK1i23agb2JMq5R2IHsCcivkLcSw3rHnZ1Fd7K83CNlsBgy3bQM2KvJOhBL3EP4yiTM55hDYhztpfcDr2JrowbURXvEkGiGSeoa40qgD31RM9KOXkWTTvnFlVTkry1H0OuiA-_RBkXuv5iO9mRhajInH1zJ5o5AJWR0UMgmwvzmE1LaZmDzuqr1R1oKpvwmXIVCIbwmIvt6de9pWYT2UboO8Ex70FNSxEPe3JoycGsnhnpayHZYDJlKqU",
    imageClassName: "aspect-[4/5]",
    accentClassName: "bg-tertiary/10 text-tertiary",
    description:
      "Warm lighting, soft texture, and final interior details layered over the technical systems beneath.",
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="bg-surface-container py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface/40 mb-4 block">
              Proof of work
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface">
              Selected Work
            </h2>
          </div>
          <p className="font-body text-xl text-on-surface/60 italic max-w-md">
            A focused look at the power, automation, security, and interior
            details we bring together for modern spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-x-20 lg:gap-y-24 items-start">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={index % 2 === 0 ? "md:mt-12" : ""}
            >
              <div className="micro-project-image mb-8">
                <img
                  className={`w-full ${project.imageClassName} object-cover`}
                  alt={`${project.category} project at ${project.location}`}
                  src={project.image}
                />
                <div className="micro-project-caption">
                  <span className="font-label text-[10px] uppercase tracking-widest text-surface-bright/70 block mb-2">
                    {project.category}
                  </span>
                  <span className="font-headline text-2xl font-bold text-surface-bright">
                    {project.title}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span
                  className={`px-3 py-1 font-label text-[10px] uppercase tracking-widest font-bold ${project.accentClassName}`}
                >
                  {project.category}
                </span>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface/40">
                  {project.location}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                {project.title}
              </h3>
              <p className="font-body text-on-surface/60 italic leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <a
            href="https://www.instagram.com/suave_innovations/"
            target="_blank"
            rel="noopener noreferrer"
            className="micro-button border border-outline-variant/30 text-on-surface hover:bg-on-surface hover:text-surface-bright px-12 py-5 font-label text-xs uppercase tracking-widest"
          >
            View More Work
          </a>
        </div>
      </div>
    </section>
  );
};
