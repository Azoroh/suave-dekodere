import React from 'react';

const benefits = [
  {
    icon: 'shield_with_heart',
    title: 'Reliable support',
    body: 'Continuous energy for homes and businesses, ensuring no interruption to your essential daily rhythms.',
    offset: '',
  },
  {
    icon: 'ev_station',
    title: 'Reduced dependence',
    body: 'Lessen your reliance on unpredictable fuel-based backup systems and volatile energy prices.',
    offset: 'pt-0 md:pt-24 lg:pt-12',
  },
  {
    icon: 'query_stats',
    title: 'Smarter planning',
    body: 'Long-term energy assets that appreciate in value while providing consistent utility and savings.',
    offset: 'pt-0 lg:pt-24',
  },
  {
    icon: 'architecture',
    title: 'Tailored systems',
    body: "Engineering solutions designed specifically for your property's orientation and actual load requirements.",
    offset: 'pt-0 md:pt-24 lg:pt-36',
  },
];

export const Benefits = () => {
  return (
    <section className="py-32 px-6 md:px-16 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {benefits.map(({ icon, title, body, offset }) => (
          <div key={title} className={`space-y-4 ${offset}`}>
            <span className="material-symbols-outlined text-secondary text-3xl">{icon}</span>
            <h3 className="font-headline font-bold text-lg uppercase tracking-wider">{title}</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
