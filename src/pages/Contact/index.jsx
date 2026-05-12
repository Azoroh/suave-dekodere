import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import { Hero } from './Hero';
import { ContactMethods } from './ContactMethods';
import { ContactForm } from './ContactForm';
import { Location } from './Location';

const Contact = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#inquiry') {
      const element = document.getElementById('inquiry');
      if (element) {
        // Delay slightly to ensure layout is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <ScrollReveal><ContactMethods /></ScrollReveal>
      <ScrollReveal><ContactForm /></ScrollReveal>
      <ScrollReveal><Location /></ScrollReveal>
    </>
  );
};

export default Contact;
