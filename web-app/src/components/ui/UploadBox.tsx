import React, { type ChangeEvent } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

interface UploadBoxProps {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  preview: string | null;
}

const UploadBox: React.FC<UploadBoxProps> = ({ onFileChange, preview }) => (
  <div className="relative group cursor-pointer">
    <input 
      type="file" 
      className="absolute inset-0 opacity-0 cursor-pointer z-10" 
      onChange={onFileChange}
      accept="image/*"
    />
    <div className={`border-2 border-dashed rounded-2xl p-10 transition-all duration-300 flex flex-col items-center justify-center ${preview ? 'border-blue-400 bg-blue-500/10' : 'border-slate-700 bg-slate-800/50 group-hover:border-blue-500'}`}>
      {!preview ? (
        <>
          <Upload className="w-12 h-12 text-slate-500 mb-4 group-hover:text-blue-400 transition-colors" />
          <p className="text-slate-400 font-medium text-center">Klik atau seret gambar mobil ke sini</p>
          <p className="text-slate-600 text-xs mt-2 uppercase tracking-widest">JPG, PNG up to 10MB</p>
        </>
      ) : (
        <div className="relative">
          <img src={preview} alt="Preview" className="max-h-64 rounded-xl shadow-lg border border-white/10" />
          <div className="absolute -top-3 -right-3 bg-blue-500 p-1.5 rounded-full shadow-lg">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        </div>
      )}
    </div>
  </div>
);

export default UploadBox;