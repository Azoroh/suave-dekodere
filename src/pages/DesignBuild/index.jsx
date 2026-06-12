import React from 'react';
import { Hero } from './Hero';
import { Furniture } from './Furniture';
import { Interior } from './Interior';
import { Lighting } from './Lighting';
import { Footer } from '../../components/layout/Footer';

const DesignBuild = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Furniture />
      <Interior />
      <Lighting />
      <Footer />
    </main>
  );
};

export default DesignBuild;
