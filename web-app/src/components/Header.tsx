import React from 'react';
import { Car, Cpu, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass-card border-b border-white/5">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <Car className="w-6 h-6" />
        </div>
        <span className="text-xl font-extrabold tracking-tight text-white uppercase">AutoScan<span className="text-blue-500">.AI</span></span>
      </div>

      {/* HUBUNGKAN TOMBOL DI SINI */}
      <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
        <NavLink
          to="/"
          className={({ isActive }) => `flex items-center gap-2 transition-all ${isActive ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
        >
          <Cpu className="w-4 h-4" /> Identification
        </NavLink>
        <NavLink
          to="/diagnostic"
          className={({ isActive }) => `flex items-center gap-2 transition-all ${isActive ? 'text-red-400' : 'text-slate-400 hover:text-white'}`}
        >
          <ShieldCheck className="w-4 h-4" /> Diagnostic
        </NavLink>
      </div>
      <div className="text-xs font-black px-3 py-1.5 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400">
        v1.0
      </div>
    </div>
  </nav>
);

export default Header;