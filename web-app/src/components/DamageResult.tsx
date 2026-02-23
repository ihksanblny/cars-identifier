import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface DamageResultProps {
  data: { status: string; confidence: number };
}

const DamageResult: React.FC<DamageResultProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      <div className="p-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl flex items-center justify-between shadow-xl text-white">
        <div className="space-y-1">
          <p className="text-orange-200 text-xs font-bold uppercase tracking-widest">Tingkat Kerusakan</p>
          <h2 className="text-4xl font-black">{data.status}</h2>
        </div>
        <div className="text-right">
          <div className="text-3xl font-mono font-black">{data.confidence}%</div>
          <p className="text-orange-200 text-xs font-bold uppercase tracking-widest">Confidence</p>
        </div>
      </div>
      
      <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4">
        <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0" />
        <div className="space-y-1">
          <p className="text-slate-300 font-bold uppercase text-xs tracking-widest">Saran Diagnostik</p>
          <p className="text-white text-sm leading-relaxed font-medium">
            {data.status === 'Minor' && "Kerusakan ringan terdeteksi. Disarankan melakukan poles atau perbaikan cat di salon mobil terdekat."}
            {data.status === 'Moderate' && "Kerusakan menengah terdeteksi. Mungkin memerlukan perbaikan bodi atau penggantian komponen kecil."}
            {data.status === 'Severe' && "Kerusakan berat terdeteksi! Segera hubungi asuransi atau bengkel spesialis perbaikan bodi."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DamageResult;