import React from 'react';

export const Trust = () => {
  return (
    <section className="py-40 px-6 md:px-16 max-w-[1440px] mx-auto text-center bg-surface">
      <div className="max-w-4xl mx-auto space-y-12">
        <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-4 block">
          Trust &amp; Reliability
        </span>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          Why Clients Choose Suave
        </h2>
        <div className="flex justify-center">
          <div className="w-24 h-[1px] bg-outline-variant/30" />
        </div>
        <p className="font-body text-3xl md:text-4xl text-on-surface italic leading-snug max-w-3xl mx-auto">
          "Clients choose Suave for clear guidance, practical system planning, and premium technical execution that fits modern homes and commercial spaces."
        </p>
      </div>
    </section>
  );
};
