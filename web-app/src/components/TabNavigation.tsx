import React from 'react';

interface TabNavigationProps {
  activeTab: 'identity' | 'damage';
  onTabChange: (tab: 'identity' | 'damage') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex p-1 bg-slate-800/50 rounded-xl mb-6 border border-white/5">
      <button 
        onClick={() => onTabChange('identity')}
        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
          activeTab === 'identity' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
        }`}
      >
        Car Identifier
      </button>
      <button 
        onClick={() => onTabChange('damage')}
        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
          activeTab === 'damage' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
        }`}
      >
        Damage Scanner
      </button>
    </div>
  );
};

export default TabNavigation;