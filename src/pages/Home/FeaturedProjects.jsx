import React from "react";
import { Link } from "react-router-dom";
import movLabImg from "../../assets/images/mov_lab.avif";
import anambraInstallImg from "../../assets/images/anambra_install.avif";

const projects = [
  {
    title: "Anambra Residential Installation",
    category: "Residential Solar",
    location: "Anambra, Nigeria",
    image: anambraInstallImg,
    imageClassName: "aspect-[4/5]",
    accentClassName: "bg-secondary/10 text-secondary",
    description:
      "A residential solar and backup power installation designed to reduce generator reliance and keep essential home systems running reliably.",
  },
  {
    title: "The MOV LAB",
    category: "Interior Finishing",
    location: "Ikoyi, Lagos",
    image: movLabImg,
    imageClassName: "aspect-square",
    accentClassName: "bg-on-surface/10 text-on-surface",
    description:
      "Warm lighting, mirrored depth, and refined finishing for a calm Pilates studio designed around movement, focus, and spatial ease.",
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
                  loading="lazy"
                  decoding="async"
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
          <Link
            to="/solar#projects"
            className="micro-button border border-outline-variant/30 text-on-surface hover:bg-on-surface hover:text-surface-bright px-12 py-5 font-label text-xs uppercase tracking-widest"
          >
            View More Work
          </Link>
        </div>
      </div>
    </section>
  );
};
