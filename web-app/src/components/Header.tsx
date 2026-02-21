import React from 'react';
import { Car } from 'lucide-react';

const Header: React.FC = () => (
  <header className="text-center mb-10">
    <div className="inline-flex p-3 bg-blue-500/20 rounded-2xl mb-4 border border-blue-400/30">
      <Car className="w-10 h-10 text-blue-400" />
    </div>
    <h1 className="text-4xl font-extrabold tracking-tight text-white">AI Cars Identifier</h1>
    <p className="text-slate-300 mt-2">Identifikasi merek mobil secara instan dengan teknologi AI</p>
  </header>
);

export default Header;