import React from 'react';
import { Hero } from './Hero';
import { Automation } from './Automation';
import { Cinema } from './Cinema';
import { Security } from './Security';
import { Footer } from '../../components/layout/Footer';

const SmartLiving = () => {
  return (
    <>
      <Hero />
      <Automation />
      <Cinema />
      <Security />
    </>
  );
};

export default SmartLiving;
