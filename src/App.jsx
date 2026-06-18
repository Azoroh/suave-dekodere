import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { PageLoader } from './components/ui/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const Solar = lazy(() => import('./pages/Solar'));
const Contact = lazy(() => import('./pages/Contact'));
const SmartLiving = lazy(() => import('./pages/SmartLiving'));
const DesignBuild = lazy(() => import('./pages/DesignBuild'));
const MEP = lazy(() => import('./pages/MEP'));
const Shop = lazy(() => import('./pages/Shop'));

function App() {
  return (
    <Router>
      <Layout isGlassNav={true}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smart-living" element={<SmartLiving />} />
            <Route path="/design-build" element={<DesignBuild />} />
            <Route path="/mep" element={<MEP />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
