import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { Furniture } from './Furniture';
import { Interior } from './Interior';
import { Lighting } from './Lighting';

const DesignBuild = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
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
      <Furniture />
      <Interior />
      <Lighting />
    </>
  );
};

export default DesignBuild;
