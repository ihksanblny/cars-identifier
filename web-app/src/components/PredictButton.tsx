import React from 'react';
import { Loader2, Car } from 'lucide-react';

interface PredictButtonProps {
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
}

const PredictButton: React.FC<PredictButtonProps> = ({ onClick, disabled, loading }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${disabled ? 'bg-slate-700 text-slate-500 cursor-not-allowed opacity-50' : 'bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-[0.98]'}`}
  >
    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Car className="w-6 h-6" />}
    {loading ? "Sedang Menganalisis..." : "Identifikasi Mobil"}
  </button>
);

export default PredictButton;