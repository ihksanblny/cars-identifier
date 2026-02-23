import React from 'react';
import Hero from './Hero';
import UploadBox from './UploadBox';
import PredictButton from './PredictButton';
import ResultCard from './ResultCard';
import ErrorDisplay from './ErrorDisplay';
import { useCarPrediction } from '../hooks/useCarPrediction';

const Identification: React.FC = () => {
    const { file, preview, result, loading, error, handleFileChange, handlePredict } = useCarPrediction();

    return (
        <main className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <Hero activeTab="identity" />
            <div className="glass-card p-10 rounded-[2.5rem] relative">
                <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
                <div className="space-y-6">
                    <UploadBox onFileChange={handleFileChange} preview={preview} />
                    <PredictButton
                        onClick={() => handlePredict('predict_identity')}
                        disabled={!file || loading}
                        loading={loading}
                        label="Process Identification"
                    />
                    {result && <ResultCard activeTab="identity" data={result} />}
                    {error && <ErrorDisplay message={error} />}
                </div>
            </div>
        </main>
    );
};

export default Identification;