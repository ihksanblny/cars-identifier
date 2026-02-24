import React from 'react';
import { History as HistoryIcon, Trash2, Clock } from 'lucide-react';
import type { HistoryItem } from '../../../hooks/useCarPrediction';

interface HistoryListProps {
    history: HistoryItem[];
    onClear: () => void;
}

const HistoryList: React.FC<HistoryListProps> = ({ history, onClear }) => {
    if (history.length === 0) return null;

    return (
        <div className="mt-12 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2 text-white">
                    <HistoryIcon className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-bold uppercase tracking-tight">Recent Activity</h3>
                </div>
                <button
                    onClick={onClear}
                    className="text-xs font-bold text-slate-500 hover:text-red-400 flex items-center gap-1 transition-colors"
                >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                </button>
            </div>

            <div className="space-y-3">
                {history.map((item) => (
                    <div key={item.id} className="group p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-4 hover:bg-white/[0.08] transition-all">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0 border border-white/10">
                            <img src={item.preview} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${item.type === 'identity' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                    }`}>
                                    {item.type}
                                </span>
                                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {item.date}
                                </span>
                            </div>
                            <h4 className="text-white font-bold mt-1 truncate">{item.label}</h4>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-mono font-black text-white">{item.confidence}%</div>
                            <div className="text-[9px] font-bold text-slate-500 uppercase">Match</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryList;
