// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Identification from './components/Identification';
import Diagnostic from './components/Diagnostic';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 overflow-x-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<Identification />} />
        <Route path="/diagnostic" element={<Diagnostic />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;