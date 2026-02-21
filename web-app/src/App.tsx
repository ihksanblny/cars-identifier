import React, { useState, type ChangeEvent } from 'react';
import axios from 'axios';
import Header from './components/Header';
import UploadBox from './components/UploadBox';
import PredictButton from './components/PredictButton';
import ResultCard from './components/ResultCard';
import { AlertCircle } from 'lucide-react';

interface PredictionResult {
  car_type: string;
  confidence: number;
}

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
      setError(null);
    }
  };

  const handlePredict = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post<PredictionResult>('http://localhost:8000/predict', formData);
      setResult(response.data);
    } catch (err) {
      setError("Server Backend mati. Tolong nyalakan api.py!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">

        <Header />

        <main className="space-y-6">
          <UploadBox onFileChange={handleFileChange} preview={preview} />

          <PredictButton onClick={handlePredict} disabled={!file || loading} loading={loading} />

          {result && <ResultCard carType={result.car_type} confidence={result.confidence} />}

          {error && (
            <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center gap-3 text-red-300">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}
        </main>

        <footer className="mt-10 text-center text-slate-500 text-xs">
          Built with React + TypeScript + FastAPI
        </footer>
      </div>
    </div>
  );
}

export default App;