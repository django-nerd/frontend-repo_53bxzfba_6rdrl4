import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import FooterCTA from './components/FooterCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FooterCTA />
    </div>
  );
}

export default App;
