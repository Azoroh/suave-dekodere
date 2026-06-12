import React from 'react';
import { Hero } from './Hero';
import { Furniture } from './Furniture';
import { Interior } from './Interior';
import { Lighting } from './Lighting';
import { Footer } from '../../components/layout/Footer';

const DesignBuild = () => {
  return (
    <>
      <Hero />
      <Furniture />
      <Interior />
      <Lighting />
    </>
  );
};

export default DesignBuild;
