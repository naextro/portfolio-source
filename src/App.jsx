import React from 'react';
import { CMSProvider, useCMS } from './cms/CMSContext';
import CMSLayout from './cms/CMSLayout';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ReactLenis } from 'lenis/react';

const CMSToggle = () => {
  const { isCMSMode, setIsCMSMode } = useCMS();

  return (
    <button
      onClick={() => setIsCMSMode(!isCMSMode)}
      className="fixed bottom-4 right-4 z-50 btn btn-primary h-14 w-14 rounded-full text-2xl shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 transition-shadow"
      title={isCMSMode ? 'Exit CMS' : 'Open CMS'}
    >
      <span className="material-symbols-rounded">
        {isCMSMode ? 'close' : 'edit'}
      </span>
    </button>
  );
};

const PortfolioView = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

const AppContent = () => {
  const { isCMSMode } = useCMS();

  if (isCMSMode) {
    return <CMSLayout />;
  }

  return (
    <>
      <PortfolioView />
      <CMSToggle />
    </>
  );
};

const App = () => {
  return (
    <CMSProvider>
      <AppContent />
    </CMSProvider>
  );
};

export default App;
