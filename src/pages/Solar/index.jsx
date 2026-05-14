import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import { Hero } from './Hero';
import { Overview } from './Overview';
import { Benefits } from './Benefits';
import { Spaces } from './Spaces';
import { SolarServices } from './SolarServices';
import { SolarProjects } from './SolarProjects';
import { Process } from './Process';
import { Trust } from './Trust';
import { CTA } from './CTA';

const Solar = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#projects') {
      const element = document.getElementById('projects');
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
      <ScrollReveal><Overview /></ScrollReveal>
      <ScrollReveal><Benefits /></ScrollReveal>
      <ScrollReveal><Spaces /></ScrollReveal>
      <ScrollReveal><SolarServices /></ScrollReveal>
      <ScrollReveal><SolarProjects /></ScrollReveal>
      <ScrollReveal><Process /></ScrollReveal>
      <ScrollReveal><Trust /></ScrollReveal>
      <ScrollReveal><CTA /></ScrollReveal>
    </>
  );
};

export default Solar;
