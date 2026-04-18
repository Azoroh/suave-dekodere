import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children, isGlassNav = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isGlass={isGlassNav} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
