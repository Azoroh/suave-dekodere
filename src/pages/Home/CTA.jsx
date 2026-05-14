import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export const CTA = () => {
  return (
    <section className="bg-on-surface py-32 px-6 md:px-16 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="font-label text-xs uppercase tracking-[0.3em] text-surface-bright/40 mb-8 block">
          Ready to get started?
        </span>
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-surface-bright mb-12">
          Start Your Consultation
        </h2>
        <p className="font-body text-xl text-surface-bright/60 italic mb-12">
          Whether you are upgrading your home, planning a new project, or improving your business space, we deliver practical solutions with a premium finish.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/contact#inquiry">
            <Button variant="surface" size="xl">
              Book a Consultation
            </Button>
          </Link>
          <a href="tel:+2349074252223">
            <Button variant="outline" size="xl">
              Call 09074252223
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
