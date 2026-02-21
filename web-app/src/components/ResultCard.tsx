// src/components/ResultCard.tsx
import React from 'react';
import { CAR_METADATA } from '../constants/carData';
import { Zap, Tag, Settings, Info } from 'lucide-react';

interface ResultCardProps {
  carType: string;
  confidence: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ carType, confidence }) => {
  const specs = CAR_METADATA[carType];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-4">
      {/* Kartu Utama */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-between shadow-xl">
        <div className="space-y-1">
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Terdeteksi Sebagai</p>
          <h2 className="text-4xl font-black text-white">{carType}</h2>
        </div>
        <div className="text-right">
          <div className="text-3xl font-mono font-black text-white">{confidence}%</div>
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Confidence</p>
        </div>
      </div>

      {/* Grid Spesifikasi */}
      {specs && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3">
            <Settings className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Mesin</p>
              <p className="text-white font-medium">{specs.engine}</p>
            </div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3">
            <Zap className="w-5 h-5 text-amber-400 mt-1" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Tenaga</p>
              <p className="text-white font-medium">{specs.power}</p>
            </div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3">
            <Tag className="w-5 h-5 text-emerald-400 mt-1" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Kategori & Harga</p>
              <p className="text-white font-medium">{specs.category} • <span className="text-emerald-400">{specs.price}</span></p>
            </div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3">
            <Info className="w-5 h-5 text-purple-400 mt-1" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Tentang Mobil Ini</p>
              <p className="text-white text-sm leading-relaxed">{specs.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultCard;