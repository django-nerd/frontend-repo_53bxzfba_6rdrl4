import React from 'react';

const Step = ({ step, title, desc }) => (
  <div className="relative p-6 rounded-2xl border border-white/10 bg-slate-900/50">
    <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-600 text-white flex items-center justify-center text-sm font-semibold ring-1 ring-white/20">
      {step}
    </div>
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="mt-2 text-sm text-slate-300">{desc}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">How it works</h2>
          <p className="mt-3 text-slate-300">From setup to victory, your operations in three simple steps.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step step="1" title="Create your org" desc="Set your region, titles, and competitive divisions. Invite staff and players." />
          <Step step="2" title="Plan and practice" desc="Build schedules, book scrims, attach VODs, and set daily goals." />
          <Step step="3" title="Compete and optimize" desc="Track tournament runs, review heatmaps, and iterate with data." />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
