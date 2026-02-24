import React, { useEffect } from 'react';
import Hero from '../layouts/Hero';
import UploadBox from '../ui/UploadBox';
import PredictButton from '../ui/PredictButton';
import ResultCard from '../features/results/ResultCard';
import ErrorDisplay from '../ui/ErrorDisplay';
import HistoryList from '../features/history/HistoryList';
import { useCarPrediction } from '../../hooks/useCarPrediction';

const Identification: React.FC = () => {
  const { file, preview, result, loading, error, history, handleFileChange, handlePredict, switchTab, clearHistory } = useCarPrediction();

  useEffect(() => { switchTab('identity'); }, []);

  return (
    <main className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
      <div className="lg:sticky lg:top-32">
        <Hero activeTab="identity" />
        <HistoryList history={history.filter(h => h.type === 'identity')} onClear={clearHistory} />
      </div>

      <div className="glass-card p-10 rounded-[2.5rem] relative">
        <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
        <div className="space-y-6">
          <div className="mb-4">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-blue-600"></span> Identifikasi Mobil
            </h2>
          </div>
          <UploadBox onFileChange={handleFileChange} preview={preview} />
          <PredictButton onClick={() => handlePredict('predict_identity')} disabled={!file || loading} loading={loading} label="Identify Vehicle" />
          {result && <ResultCard activeTab="identity" data={result} />}
          {error && <ErrorDisplay message={error} />}
        </div>
      </div>
    </main>
  );
};

export default Identification;
