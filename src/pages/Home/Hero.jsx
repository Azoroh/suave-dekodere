import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../components/ui/Button";

// --- Typewriter Hook ---
const PHRASES = ["Reliable Power.", "Smarter Living.", "Masterful Design."];
const TYPE_SPEED = 70;   // ms per character typed
const DELETE_SPEED = 40; // ms per character deleted
const HOLD_DURATION = 1800; // ms to hold completed phrase

function useTypewriter() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = PHRASES[phraseIndex];

    const tick = () => {
      if (!isDeleting) {
        // Still typing
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
          timeoutRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          // Finished typing — hold then start deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, HOLD_DURATION);
        }
      } else {
        // Deleting
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
          timeoutRef.current = setTimeout(tick, DELETE_SPEED);
        } else {
          // Finished deleting — move to next phrase
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, phraseIndex]);

  return displayed;
}

export const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "40%"]);

  // Only run typewriter on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const typewriterText = useTypewriter();

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center px-6 md:px-16 overflow-hidden pt-24 md:pt-0">
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 w-full h-[140%] -top-[20%]"
          style={{ y: backgroundY }}
        >
          <img
            className="w-full h-full object-cover grayscale-[30%] brightness-75"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            alt="luxury modern architectural villa exterior at dusk with warm interior lighting and clean minimalist lines"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTO4fX9XTHQS5mrplo3pWkyYfK2MzyVUUAj8MmKhX8u9i2q3E33hMS69-KEKwM94Hb9CKgFzNnIvN9Rat2UD-V_6zmPByPAV94CmSj0BpJwmWf0nLLoDgXLC7fA50YD0Apr6Ve4BZYba4NzMFB-dL3hchmX_Fu76U7Uzv--kIN14e7XnCgsQs-TJfmf5faGQQuA7GmS7vzyhHHCnBiasPBvxpyreyElm9XoJK3okyx2J2xWdCLXQthztG6BvQ6Erwq7MFzRpX82dA"
          />
        </motion.div>

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 opacity-60" />
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-4xl"
      >
        <motion.span 
          variants={fadeUp}
          className="inline-block font-label text-xs uppercase tracking-[0.2em] text-surface-bright/80 mb-6"
        >
          Sustainable Energy, Smart Systems, and Artisanal Design
        </motion.span>

        {/* Desktop: staggered three-line reveal */}
        {!isMobile && (
          <motion.h1 
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-surface-bright leading-[1.05] mb-8"
          >
            <motion.div variants={fadeUp} className="overflow-hidden">
              Reliable Power.
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden">
              Smarter Living.
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden">
              Masterful Design.
            </motion.div>
          </motion.h1>
        )}

        {/* Mobile: single-line typewriter */}
        {isMobile && (
          <motion.h1
            variants={fadeUp}
            className="font-headline text-5xl font-bold tracking-tighter text-surface-bright leading-[1.05] mb-8 min-h-[3.5em]"
          >
            {typewriterText}
            <span className="inline-block w-[3px] h-[0.9em] bg-surface-bright/80 ml-1 align-middle animate-pulse" />
          </motion.h1>
        )}

        <motion.p 
          variants={fadeUp}
          className="font-body text-xl md:text-2xl text-surface-bright/80 max-w-2xl leading-relaxed font-light"
        >
          We integrate high-performance energy solutions and smart technology with bespoke furniture and refined interiors to create exceptional spaces.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-12 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <Link to="/contact#inquiry">
            <Button variant="surface" size="lg" className="hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/20">
              Book a Consultation
            </Button>
          </Link>
          <Link to="/smart-living">
            <button className="flex items-center gap-3 text-surface-bright/70 hover:text-surface-bright transition-colors duration-300 group">
              <span className="font-label text-xs uppercase tracking-[0.15em]">Explore Our Systems</span>
              <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Glass Widget — desktop only */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 z-20 flex-col gap-6"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl flex items-center gap-4 w-64"
        >
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white">solar_power</span>
          </div>
          <div>
            <div className="text-white font-bold text-xl">150+</div>
            <div className="text-white/70 text-xs font-label uppercase tracking-widest">Installations</div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl flex items-center gap-4 w-64 ml-12"
        >
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white">home_iot_device</span>
          </div>
          <div>
            <div className="text-white font-bold text-xl">99.9%</div>
            <div className="text-white/70 text-xs font-label uppercase tracking-widest">System Uptime</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-label uppercase tracking-[0.25em] text-surface-bright/50">Scroll</span>
        <motion.div 
          animate={{ height: ["0px", "36px", "0px"], y: [0, 18, 36] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-surface-bright/70 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
};
