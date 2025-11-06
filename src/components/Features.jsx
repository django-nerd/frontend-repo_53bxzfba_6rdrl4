import React from 'react';
import { Calendar, LineChart, Users2, Trophy } from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-white/20 transition-colors">
    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-blue-600/20 ring-1 ring-white/10 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="mt-2 text-sm text-slate-300">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Everything you need to run an esports org</h2>
          <p className="mt-3 text-slate-300">A powerful control room for teams, coaches, and managers.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard Icon={Users2} title="Roster Management" description="Build squads, set roles, and track player contracts with clarity." />
          <FeatureCard Icon={Calendar} title="Scrims & Scheduling" description="Plan practice blocks, auto-resolve time zones, and notify teams." />
          <FeatureCard Icon={Trophy} title="Tournaments" description="Register, seed brackets, and monitor live match results." />
          <FeatureCard Icon={LineChart} title="Performance Analytics" description="Heatmaps, K/D trends, agent picks — actionable insights on tap." />
        </div>
      </div>
    </section>
  );
};

export default Features;
