import React from 'react';

export const Overview = () => {
  return (
    <section className="bg-surface-container py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
            Built for Everyday <br />Power Needs
          </h2>
          <div className="w-16 h-[2px] bg-tertiary" />
        </div>
        <div>
          <p className="font-body text-xl text-on-surface leading-relaxed">
            In a market where power reliability affects comfort, productivity, and operating costs, solar offers a more dependable way to support daily life and business continuity. Suave Innovations designs practical systems that help clients reduce disruption and power their spaces more confidently.
          </p>
        </div>
      </div>
    </section>
  );
};
