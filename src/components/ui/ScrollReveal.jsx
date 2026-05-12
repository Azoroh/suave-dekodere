import React from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';

export const ScrollReveal = ({ children, delay = 0, y = 50 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
    >
      {children}
    </Motion.div>
  );
};
