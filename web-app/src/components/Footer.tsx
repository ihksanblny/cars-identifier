import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-20 border-t border-white/5 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Kolom 1: Brand */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <h2 className="text-xl font-black text-white uppercase tracking-tighter">
                            AutoScan<span className="text-blue-500">.AI</span>
                        </h2>
                        <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                            Membawa teknologi Computer Vision ke genggaman Anda. Solusi cerdas untuk identifikasi dan diagnostik kendaraan berbasis Cloud.
                        </p>
                    </div>

                    {/* Kolom 2: Stack */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Powered By</h3>
                        <ul className="text-sm text-slate-400 space-y-2 font-medium">
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">TensorFlow 2.15</li>
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">FastAPI (Python)</li>
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">React 19 + Vite</li>
                        </ul>
                    </div>

                    {/* Kolom 3: Connect */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 font-medium">
                        © {new Date().getFullYear()} AutoScan.AI. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                        Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by <span className="text-slate-300 font-bold hover:text-blue-400 cursor-pointer transition-colors">Ihksan Balany</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;