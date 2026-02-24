import React from 'react';

interface TabNavigationProps {
  activeTab: 'identity' | 'damage';
  onTabChange: (tab: 'identity' | 'damage') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex p-1.5 bg-slate-900/80 rounded-2xl border border-white/5 shadow-inner">
      <button 
        onClick={() => onTabChange('identity')}
        className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
          activeTab === 'identity' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:bg-white/5'
        }`}
      >
        IDENTIFICATION
      </button>
      <button 
        onClick={() => onTabChange('damage')}
        className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
          activeTab === 'damage' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:bg-white/5'
        }`}
      >
        SCAN DAMAGE
      </button>
    </div>
  );
};

export default TabNavigation;