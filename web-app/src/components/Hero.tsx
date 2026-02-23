import React from 'react';

interface HeroProps {
    activeTab: 'identity' | 'damage';
}

const Hero: React.FC<HeroProps> = ({ activeTab }) => {
    const content = {
        identity: {
            badge: "Car Identification Engine",
            title: "Kenali Setiap Merek",
            highlight: "Di Jalanan.",
            desc: "Gunakan kekuatan AI untuk mengidentifikasi merek dan model mobil secara instan hanya dengan satu foto.",
            stats: ["~89%", "0.6s", "7+ Models"]
        },
        damage: {
            badge: "Smart Diagnostic Tools",
            title: "Deteksi Kerusakan",
            highlight: "Tanpa Ragu.",
            desc: "Diagnosa tingkat kerusakan bodi kendaraan Anda secara akurat untuk estimasi perbaikan yang lebih cepat.",
            stats: ["~85%", "1.2s", "AI Repair"]
        }
    };

    const active = content[activeTab];

    return (
        <div className="space-y-8 pt-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border ${activeTab === 'identity' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
                    }`}>
                    {active.badge}
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                    {active.title} <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeTab === 'identity' ? 'from-blue-400 to-indigo-500' : 'from-red-400 to-orange-500'
                        }`}>
                        {active.highlight}
                    </span>
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-lg">{active.desc}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {active.stats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white">{stat}</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-1">
                            {['Accuracy', 'Speed', 'Service'][i]}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;