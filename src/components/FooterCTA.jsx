import React from 'react';

const FooterCTA = () => {
  return (
    <footer id="cta" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.10),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center px-4">
        <h3 className="text-3xl sm:text-4xl font-semibold">Level up your esports management</h3>
        <p className="mt-3 text-slate-300">Join teams and orgs who run tighter ops with a beautiful, data-driven control center.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-600 hover:from-fuchsia-400 hover:to-blue-500 shadow-lg shadow-fuchsia-500/20 text-sm font-medium">Create free account</button>
          <button className="px-6 py-3 rounded-xl border border-white/10 bg-slate-900/70 hover:border-white/20 text-sm font-medium">Book a demo</button>
        </div>
        <p className="mt-6 text-xs text-slate-400">No credit card required. Cancel anytime.</p>
      </div>
      <div className="mt-12 border-t border-white/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-400 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Esport Manager</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
