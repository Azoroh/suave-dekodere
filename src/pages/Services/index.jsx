import React from 'react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import { Hero } from './Hero';
import { CoreInfrastructure } from './CoreInfrastructure';
import { DekodereIntegration } from './DekodereIntegration';
import { Process } from './Process';
import { CTA } from './CTA';

export const Services = () => {
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
