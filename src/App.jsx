import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Solar from './pages/Solar';
import Contact from './pages/Contact';
import SmartLiving from './pages/SmartLiving';
import DesignBuild from './pages/DesignBuild';
import MEP from './pages/MEP';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Layout isGlassNav={true}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smart-living" element={<SmartLiving />} />
          <Route path="/design-build" element={<DesignBuild />} />
          <Route path="/mep" element={<MEP />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
