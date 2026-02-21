// src/App.tsx
import React from 'react';
import Header from './components/Header';
import UploadBox from './components/UploadBox';
import PredictButton from './components/PredictButton';
import ResultCard from './components/ResultCard';
import ErrorDisplay from './components/ErrorDisplay';
import { useCarPrediction } from './hooks/useCarPrediction';

const App: React.FC = () => {
  const { 
    file, 
    preview, 
    result, 
    loading, 
    error, 
    handleFileChange, 
    handlePredict 
  } = useCarPrediction();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">
        
        <Header />

        <main className="space-y-6">
          <UploadBox onFileChange={handleFileChange} preview={preview} />
          
          <PredictButton 
            onClick={handlePredict} 
            disabled={!file || loading} 
            loading={loading} 
          />

          {result && (
            <ResultCard carType={result.car_type} confidence={result.confidence} />
          )}

          {error && <ErrorDisplay message={error} />}
        </main>

        <footer className="mt-10 text-center text-slate-500 text-xs">
          Built with React + TypeScript + FastAPI
        </footer>
      </div>
    </div>
  );
}

export default App;