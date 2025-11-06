import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/nnNYb3ZFbRxKghMM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
            Live esports operations dashboard
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Run your esports org like a pro
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Manage rosters, schedule scrims, track tournament performance, and visualize your wins — all in one sleek hub.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-600 hover:from-fuchsia-400 hover:to-blue-500 shadow-lg shadow-fuchsia-500/20 text-sm font-medium">
              Explore features
            </a>
            <a href="#how" className="px-5 py-3 rounded-xl border border-white/10 bg-slate-900/70 hover:border-white/20 text-sm font-medium">
              See how it works
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero;
