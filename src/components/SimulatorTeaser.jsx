import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const SimulatorTeaser = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl sm:text-4xl font-semibold">Interactive draft room (preview)</h3>
          <p className="mt-3 text-slate-300">Experience a live pick/ban simulator with patch-aware AI and synergy scoring. Craft comps and see real-time power spikes, counters, and objective plans.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-600 hover:from-fuchsia-400 hover:to-blue-500 shadow-lg shadow-fuchsia-500/20 text-sm font-medium">
              <Play className="h-4 w-4" /> Try the simulator
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-slate-900/70 hover:border-white/20 text-sm font-medium">
              <Sparkles className="h-4 w-4" /> See roadmap
            </button>
          </div>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-fuchsia-600/10 via-blue-600/10 to-emerald-500/10">
          <div className="absolute inset-0 grid grid-cols-5 gap-1 p-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="rounded-md bg-white/5 border border-white/10" />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 p-3 text-xs text-slate-300 bg-slate-900/50 backdrop-blur flex items-center justify-between">
            <span>Patch 14.2 — Meta aware</span>
            <span>Blue side: Engage + Wombo | Red side: Poke + Siege</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorTeaser;
