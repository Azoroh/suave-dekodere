import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Assessment',
    body: 'We review your space, energy needs, and usage patterns to ensure the foundation of the system is built on data, not guesswork.',
  },
  {
    number: '02',
    title: 'Design & Build',
    body: 'We plan and install the right solar and backup solution for your property, focusing on aesthetic integration and technical durability.',
  },
  {
    number: '03',
    title: 'Handover',
    body: 'We make sure the system is properly delivered, explained, and ready for reliable use with ongoing maintenance support.',
  },
];

export const Process = () => {
  return (
    <section className="bg-surface-container-low py-32 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-outline-variant/20">
          {steps.map(({ number, title, body }) => (
            <div key={number} className="micro-service-card bg-surface p-12 hover:bg-surface-container-low transition-colors duration-500">
              <span className="font-headline text-5xl font-black text-outline-variant/20 mb-8 block">
                {number}
              </span>
              <h4 className="font-headline font-bold text-xl mb-6 uppercase tracking-wider">{title}</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
