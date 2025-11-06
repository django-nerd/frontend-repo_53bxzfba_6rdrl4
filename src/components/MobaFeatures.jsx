import React from 'react';
import { Swords, Users2, Brain, BarChart3, Shield, Globe2 } from 'lucide-react';

const Feature = ({ Icon, title, desc, items }) => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-white/20 transition-colors">
    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-blue-600/20 ring-1 ring-white/10 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="mt-2 text-sm text-slate-300">{desc}</p>
    {items?.length ? (
      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300/90">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
            {it}
          </li>
        ))}
      </ul>
    ) : null}
  </div>
);

const MobaFeatures = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">MOBA esports manager — build your dynasty</h2>
          <p className="mt-3 text-slate-300">Draft stars, craft metas, and dominate global leagues with data-driven decisions.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature Icon={Users2} title="Roster & Roles" desc="Scout players and lock roles across Top/Jungle/Mid/ADC/Support." items={["Contracts & buyouts","Scrim availability","Fatigue & morale","Synergy scores"]} />
          <Feature Icon={Brain} title="Draft Simulator" desc="Train your pick/ban tactics against meta-aware AI." items={["Counter-pick suggestions","Comfort vs meta index","Flex pick detection","Patch-aware drafting"]} />
          <Feature Icon={Swords} title="Scrims & Strategy" desc="Plan comps, assign win conditions, and track execution." items={["Draft scripts","Level 1 plans","Objective timers","Vision plans"]} />
          <Feature Icon={BarChart3} title="Analytics" desc="Turn VODs and match data into winning habits." items={["Gold/XPM graphs","Champion pools","Lane pressure heatmaps","Error taxonomy"]} />
          <Feature Icon={Shield} title="Sports Science" desc="Balance training load with recovery to keep form peak." items={["Sleep & strain","Tilt detection","Focus drills","Nutrition notes"]} />
          <Feature Icon={Globe2} title="Global Leagues" desc="Qualify across regions and climb international rankings." items={["Regional metas","Travel fatigue","Visa planning","Prize tracking"]} />
        </div>
      </div>
    </section>
  );
};

export default MobaFeatures;
