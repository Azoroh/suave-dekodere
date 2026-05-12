import React from 'react';

export const Process = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-surface-container">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="font-headline text-4xl md:text-[2.75rem] font-bold text-on-surface mb-6">
          One Connected Process
        </h2>
        <p className="font-body text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Suave handles the infrastructure, systems, and performance of the space. Dékódèrè adds the finishing layer that makes the environment feel complete, comfortable, and visually resolved.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
        <div className="micro-service-card bg-surface py-16 px-12 md:py-20 md:px-16 text-center hover:bg-surface-container-low transition-colors duration-500">
          <div className="w-16 h-16 bg-surface-container mx-auto flex items-center justify-center mb-10">
            <span className="font-headline font-bold text-2xl">01</span>
          </div>
          <h3 className="font-headline text-xl font-bold mb-6">Consultation</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Defining the technical requirements and aesthetic vision for your unique space.
          </p>
        </div>
        
        <div className="micro-service-card bg-surface py-16 px-12 md:py-20 md:px-16 text-center hover:bg-surface-container-low transition-colors duration-500">
          <div className="w-16 h-16 bg-surface-container mx-auto flex items-center justify-center mb-10">
            <span className="font-headline font-bold text-2xl text-secondary">02</span>
          </div>
          <h3 className="font-headline text-xl font-bold mb-6">Technical Planning and Installation</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            The heavy lifting—engineering solar, security, and smart systems with surgical precision.
          </p>
        </div>
        
        <div className="micro-service-card bg-surface py-16 px-12 md:py-20 md:px-16 text-center hover:bg-surface-container-low transition-colors duration-500">
          <div className="w-16 h-16 bg-surface-container mx-auto flex items-center justify-center mb-10">
            <span className="font-headline font-bold text-2xl text-tertiary">03</span>
          </div>
          <h3 className="font-headline text-xl font-bold mb-6">Finishing and Delivery</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            The Dékódèrè touch—curating light, texture, and details to bring the technical work to life.
          </p>
        </div>
      </div>
    </section>
  );
};
