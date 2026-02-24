import { useState, useEffect, type ChangeEvent } from 'react';
import axios from 'axios';

interface PredictionResult {
  name: string;
  status: string;
  confidence: number;
}

export interface HistoryItem {
  id: string;
  type: 'identity' | 'damage';
  label: string;
  confidence: number;
  date: string;
  preview: string; // Kode Base64 agar gambar permanen
}

export const useCarPrediction = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'identity' | 'damage'>('identity');
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    const saved = localStorage.getItem('autoscan_history');
    return saved ? JSON.parse(saved) : [];
  });

  // Save history change to localStorage
  useEffect(() => {
    localStorage.setItem('autoscan_history', JSON.stringify(history));
  }, [history]);

  // Fungsi helper mengubah File ke Base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  };

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
      const mode = (customEndpoint === 'predict_identity' || activeTab === 'identity') ? 'identity' : 'damage';
      const endpoint = customEndpoint || (activeTab === 'identity' ? 'predict_identity' : 'predict_damage');
      const response = await axios.post<PredictionResult>(`http://localhost:8000/${endpoint}`, formData);

      const newResult = response.data;
      setResult(newResult);

      // Simpan sebagai Base64 agar permanen
      const base64Img = await fileToBase64(file);

      const historyEntry: HistoryItem = {
        id: Date.now().toString(),
        type: mode,
        label: mode === 'identity' ? newResult.name : newResult.status,
        confidence: newResult.confidence,
        date: new Date().toLocaleTimeString(),
        preview: base64Img
      };

      setHistory(prev => [historyEntry, ...prev].slice(0, 10));
    } catch (err) {
      setError("Server Backend mati. Tolong nyalakan api.py!");
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => setHistory([]);
  const switchTab = (tab: 'identity' | 'damage') => { setActiveTab(tab); setResult(null); };

  return {
    file, preview, result, loading, error, activeTab, history,
    handleFileChange, handlePredict, switchTab, clearHistory
  };
};
