import React from 'react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import { Hero } from './Hero';
import { SolarEnergy } from './SolarEnergy';
import { SmartSystems } from './SmartSystems';
import { DekodereIntegration } from './DekodereIntegration';
import { FeaturedProjects } from './FeaturedProjects';
import { Process } from './Process';
import { Leadership } from './Leadership';
import { CTA } from './CTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <ScrollReveal><SolarEnergy /></ScrollReveal>
      <ScrollReveal><SmartSystems /></ScrollReveal>
      <ScrollReveal><DekodereIntegration /></ScrollReveal>
      <ScrollReveal><FeaturedProjects /></ScrollReveal>
      <ScrollReveal><Process /></ScrollReveal>
      <ScrollReveal><Leadership /></ScrollReveal>
      <ScrollReveal><CTA /></ScrollReveal>
    </>
  );
};

export default Home;
