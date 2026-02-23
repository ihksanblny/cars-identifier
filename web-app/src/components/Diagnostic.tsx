import React, { useEffect } from 'react';
import Hero from './Hero';
import UploadBox from './UploadBox';
import PredictButton from './PredictButton';
import ResultCard from './ResultCard';
import ErrorDisplay from './ErrorDisplay';
import { useCarPrediction } from '../hooks/useCarPrediction';

const Diagnostic: React.FC = () => {
    const { file, preview, result, loading, error, handleFileChange, handlePredict, switchTab } = useCarPrediction();

    // Set tab ke damage saat halaman ini dimuat
    useEffect(() => {
        switchTab('damage');
    }, []);

    return (
        <main className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <Hero activeTab="damage" />
            <div className="glass-card p-10 rounded-[2.5rem] relative">
                <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full"></div>
                <div className="space-y-6">
                    <UploadBox onFileChange={handleFileChange} preview={preview} />
                    <PredictButton
                        onClick={() => handlePredict('predict_damage')}
                        disabled={!file || loading}
                        loading={loading}
                        label="Run Diagnostic Scan"
                    />
                    {result && <ResultCard activeTab="damage" data={result} />}
                    {error && <ErrorDisplay message={error} />}
                </div>
            </div>
        </main>
    );
};

export default Diagnostic;
