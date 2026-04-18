import React from 'react';
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
  return (
    <>
      <Hero />
      <Overview />
      <Benefits />
      <Spaces />
      <SolarServices />
      <SolarProjects />
      <Process />
      <Trust />
      <CTA />
    </>
  );
};

export default Solar;
