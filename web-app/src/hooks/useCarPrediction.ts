// src/hooks/useCarPrediction.ts
import { useState, type ChangeEvent } from 'react';
import axios from 'axios';

interface PredictionResult {
  name: string;
  status: string;
  confidence: number;
}

export const useCarPrediction = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'identity' | 'damage'>('identity');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
      setError(null);
    }
  };

  const handlePredict = async (customEndpoint?: string) => {
    if (!file) return;
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', file);
    try {
      // Panggil endpoint berdasarkan parameter atau tab yang aktif
      const endpoint = customEndpoint || (activeTab === 'identity' ? 'predict_identity' : 'predict_damage');
      const response = await axios.post<PredictionResult>(`http://localhost:8000/${endpoint}`, formData);
      setResult(response.data);
    } catch (err) {
      setError("Server Backend mati. Tolong nyalakan api.py!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const switchTab = (tab: 'identity' | 'damage') => {
    setActiveTab(tab);
    setResult(null); // Reset hasil saat pindah tab
  };

  return {
    file, preview, result, loading, error, activeTab,
    handleFileChange, handlePredict, switchTab
  };
};