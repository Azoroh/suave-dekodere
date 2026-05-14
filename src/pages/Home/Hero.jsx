import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center px-6 md:px-16 overflow-hidden pt-24 md:pt-0">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale-[20%] brightness-75"
          fetchPriority="high"
          alt="luxury modern architectural villa exterior at dusk with warm interior lighting and clean minimalist lines"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTO4fX9XTHQS5mrplo3pWkyYfK2MzyVUUAj8MmKhX8u9i2q3E33hMS69-KEKwM94Hb9CKgFzNnIvN9Rat2UD-V_6zmPByPAV94CmSj0BpJwmWf0nLLoDgXLC7fA50YD0Apr6Ve4BZYba4NzMFB-dL3hchmX_Fu76U7Uzv--kIN14e7XnCgsQs-TJfmf5faGQQuA7GmS7vzyhHHCnBiasPBvxpyreyElm9XoJK3okyx2J2xWdCLXQthztG6BvQ6Erwq7MFzRpX82dA"
        />
      </div>

      <div className="relative z-10 max-w-4xl">
        <span className="inline-block font-label text-xs uppercase tracking-[0.2em] text-surface-bright mb-6">
          Lagos-based solar, smart systems, and interior solutions
        </span>

        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-surface-bright leading-none mb-8">
          Reliable Power.
          <br />
          Smarter Living.
        </h1>

        <p className="font-body text-xl md:text-2xl text-surface-bright/90 max-w-xl italic leading-relaxed">
          We help homes, offices, and commercial spaces across Lagos work better
          with solar installations, backup power, smart systems, security, and
          refined finishing.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-4">
          <Link to="/contact#inquiry">
            <Button variant="surface" size="lg">
              Book a Consultation
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="lg">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
