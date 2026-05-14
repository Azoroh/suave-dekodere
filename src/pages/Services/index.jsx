import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import { Hero } from './Hero';
import { CoreInfrastructure } from './CoreInfrastructure';
import { DekodereIntegration } from './DekodereIntegration';
import { Process } from './Process';
import { CTA } from './CTA';

export const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#technical-excellence') {
      const element = document.getElementById('technical-excellence');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <ScrollReveal><CoreInfrastructure /></ScrollReveal>
      <ScrollReveal><DekodereIntegration /></ScrollReveal>
      <ScrollReveal><Process /></ScrollReveal>
      <ScrollReveal><CTA /></ScrollReveal>
    </>
  );
};

export default Services;
