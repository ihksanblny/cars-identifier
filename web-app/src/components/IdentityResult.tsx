import React from 'react';
import { CAR_METADATA } from '../constants/carData';
import { Zap, Tag, Settings, Info } from 'lucide-react';

interface IdentityResultProps {
  data: { name: string; confidence: number };
}

const IdentityResult: React.FC<IdentityResultProps> = ({ data }) => {
  const specs = CAR_METADATA[data.name];

  return (
    <div className="space-y-4">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-between shadow-xl">
        <div className="space-y-1">
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Terdeteksi Sebagai</p>
          <h2 className="text-4xl font-black text-white">{data.name}</h2>
        </div>
        <div className="text-right">
          <div className="text-3xl font-mono font-black text-white">{data.confidence}%</div>
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Confidence</p>
        </div>
      </div>

      {specs && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3">
            <Settings className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Mesin</p>
              <p className="font-medium">{specs.engine}</p>
            </div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3">
            <Zap className="w-5 h-5 text-amber-400 mt-1" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Tenaga</p>
              <p className="font-medium">{specs.power}</p>
            </div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3">
            <Tag className="w-5 h-5 text-emerald-400 mt-1" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Kategori & Harga</p>
              <p className="font-medium">{specs.category} • <span className="text-emerald-400">{specs.price}</span></p>
            </div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3">
            <Info className="w-5 h-5 text-purple-400 mt-1" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Tentang Mobil Ini</p>
              <p className="text-sm leading-relaxed">{specs.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdentityResult;