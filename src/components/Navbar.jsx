import React from 'react';
import { Gamepad2, Rocket, Trophy, Users } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-600 flex items-center justify-center ring-1 ring-white/20">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Esport Manager</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition-colors flex items-center gap-1"><Rocket className="h-4 w-4"/>Launch</a>
          <a href="#how" className="hover:text-white transition-colors flex items-center gap-1"><Users className="h-4 w-4"/>Teams</a>
          <a href="#cta" className="hover:text-white transition-colors flex items-center gap-1"><Trophy className="h-4 w-4"/>Tournaments</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 text-sm rounded-lg border border-white/10 hover:border-white/20">Sign in</button>
          <button className="px-3.5 py-1.5 text-sm rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-600 hover:from-fuchsia-400 hover:to-blue-500 shadow-lg shadow-fuchsia-500/20">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
