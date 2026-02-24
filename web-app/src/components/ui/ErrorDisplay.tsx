// src/components/ErrorDisplay.tsx
import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => (
  <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center gap-3 text-red-300">
    <AlertCircle className="w-5 h-5 flex-shrink-0" />
    <p className="text-sm font-medium">{message}</p>
  </div>
);

export default ErrorDisplay;