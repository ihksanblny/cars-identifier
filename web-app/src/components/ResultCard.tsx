import React from 'react';

interface ResultCardProps {
  carType: string;
  confidence: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ carType, confidence }) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 p-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-2xl flex items-center justify-between shadow-inner">
    <div className="space-y-1">
      <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest">Hasil Klasifikasi</p>
      <h2 className="text-4xl font-black text-white">{carType}</h2>
    </div>
    <div className="text-right">
      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Keyakinan</p>
      <div className="text-3xl font-mono font-black text-emerald-400">{confidence}%</div>
    </div>
  </div>
);

export default ResultCard;