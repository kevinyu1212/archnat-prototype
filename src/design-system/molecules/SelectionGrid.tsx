import React from 'react';

const SelectionGrid = ({ title, items, onSelect }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-bold mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <button 
            key={item.id}
            onClick={() => onSelect(item.id)}
            className="flex flex-col items-center hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              <img src={item.iconUrl} alt={item.label} className="w-10 h-10 opacity-60" />
            </div>
            <span className="text-xs text-gray-600">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectionGrid;
