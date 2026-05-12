import React from 'react';

const services = [
  'Solar installation',
  'Backup power integration',
  'System design and planning',
  'Site assessment',
  'Electrical support',
];

export const SolarServices = () => {
  return (
    <section className="py-32 px-6 md:px-16 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left label + heading */}
        <div className="md:w-1/3">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-headline text-4xl font-bold text-on-surface">
            Our Solar <br />Services
          </h2>
        </div>

        {/* Right: service list */}
        <div className="md:w-2/3 border-l border-outline-variant/30 pl-8 md:pl-16 space-y-12">
          {services.map((service) => (
            <div
              key={service}
              className="micro-service-line flex items-center justify-between border-b border-outline-variant/20 pb-6 group cursor-default"
            >
              <span className="font-headline font-bold text-lg uppercase group-hover:text-secondary transition-colors duration-300">
                {service}
              </span>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                arrow_outward
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
