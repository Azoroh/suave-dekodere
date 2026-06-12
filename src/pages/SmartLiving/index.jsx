import React from 'react';
import { Hero } from './Hero';
import { Automation } from './Automation';
import { Cinema } from './Cinema';
import { Security } from './Security';
import { Footer } from '../../components/layout/Footer';

const SmartLiving = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Automation />
      <Cinema />
      <Security />
      <Footer />
    </main>
  );
};

export default SmartLiving;
