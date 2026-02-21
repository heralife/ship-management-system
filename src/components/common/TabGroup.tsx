import React from 'react';

interface Tab {
  key: string;
  label: string;
}

interface TabGroupProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
}

const TabGroup: React.FC<TabGroupProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex gap-1 bg-navy-900 p-1 rounded-lg mb-4">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === tab.key
              ? 'bg-maritime-blue text-white'
              : 'text-navy-300 hover:text-foreground hover:bg-navy-700/20'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabGroup;
