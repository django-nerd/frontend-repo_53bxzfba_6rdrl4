import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MobaFeatures from './components/MobaFeatures.jsx';
import SimulatorTeaser from './components/SimulatorTeaser.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Navbar />
      <Hero />
      <MobaFeatures />
      <SimulatorTeaser />
    </div>
  );
}

export default App;
