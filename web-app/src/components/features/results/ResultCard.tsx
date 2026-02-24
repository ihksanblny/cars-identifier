import React from 'react';
import { ShieldAlert } from 'lucide-react';
import IdentityResult from './IdentityResult';
import DamageResult from './DamageResult';

interface ResultCardProps {
  activeTab: 'identity' | 'damage';
  data: any;
}

const ResultCard: React.FC<ResultCardProps> = ({ activeTab, data }) => {
  const isLowConfidence = data.confidence < 50;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-4">
      {/* Box Peringatan Muncul Global */}
      {isLowConfidence && (
        <div className="p-4 bg-amber-500/20 border border-amber-400/30 rounded-2xl flex items-center gap-3 text-amber-300 animate-pulse transition-all">
          <ShieldAlert className="w-6 h-6 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="font-bold text-sm">Akurasi Rendah ({data.confidence}%)</span>
            <p className="text-xs opacity-80">AI ragu, disarankan pengecekan manual.</p>
          </div>
        </div>
      )}

      {/* Tampilkan salah satu berdasarkan activeTab */}
      {activeTab === 'identity' ? (
        <IdentityResult data={data} />
      ) : (
        <DamageResult data={data} />
      )}
    </div>
  );
};

export default ResultCard;