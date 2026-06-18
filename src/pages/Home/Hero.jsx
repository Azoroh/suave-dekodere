import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted to ensure autoplay works on dynamic loads (especially Safari)
    video.defaultMuted = true;
    video.muted = true;

    // Assume true on mount since Hero is at the top of the page
    let isIntersecting = true;

    const attemptPlay = () => {
      if (video && isIntersecting && document.visibilityState === "visible") {
        video.play().catch(() => {});
      }
    };

    // Force play on mount to bypass IntersectionObserver delay
    attemptPlay();

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          attemptPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0 },
    );

    observer.observe(video);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        video.pause();
      } else {
        attemptPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center px-6 md:px-16 overflow-hidden pt-24 md:pt-0">
      <div className="absolute inset-0 z-0">
        {/* <img
          className="w-full h-full object-cover grayscale-[20%] brightness-75"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          alt="luxury modern architectural villa exterior at dusk with warm interior lighting and clean minimalist lines"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTO4fX9XTHQS5mrplo3pWkyYfK2MzyVUUAj8MmKhX8u9i2q3E33hMS69-KEKwM94Hb9CKgFzNnIvN9Rat2UD-V_6zmPByPAV94CmSj0BpJwmWf0nLLoDgXLC7fA50YD0Apr6Ve4BZYba4NzMFB-dL3hchmX_Fu76U7Uzv--kIN14e7XnCgsQs-TJfmf5faGQQuA7GmS7vzyhHHCnBiasPBvxpyreyElm9XoJK3okyx2J2xWdCLXQthztG6BvQ6Erwq7MFzRpX82dA"
        /> */}

        <video
          ref={videoRef}
          className="w-full h-full object-cover grayscale-[20%]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/home-hero-poster.webp"
        >
          <source src="/home-hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <span className="inline-block font-label text-xs uppercase tracking-[0.2em] text-surface-bright mb-6">
          Sustainable Energy, Smart Systems, and Artisanal Design
        </span>

        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-surface-bright leading-none mb-8">
          Reliable Power.
          <br />
          Smarter Living.
          <br />
          Masterful Design.
        </h1>

        <p className="font-body text-xl md:text-2xl text-surface-bright/90 max-w-2xl leading-relaxed">
          We integrate high-performance energy solutions and smart technology with bespoke furniture and refined interiors to create exceptional spaces.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-4">
          <Link to="/contact#inquiry">
            <Button variant="surface" size="lg">
              Book a Consultation
            </Button>
          </Link>
          <Link to="/services#technical-excellence">
            <Button variant="outline" size="lg">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
