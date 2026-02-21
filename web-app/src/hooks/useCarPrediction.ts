// src/hooks/useCarPrediction.ts
import { useState, type ChangeEvent } from 'react';
import axios from 'axios';

interface PredictionResult {
  car_type: string;
  confidence: number;
}

export const useCarPrediction = () => {
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

  return {
    file,
    preview,
    result,
    loading,
    error,
    handleFileChange,
    handlePredict
  };
};