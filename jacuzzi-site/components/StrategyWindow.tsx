import React from 'react';

const StrategyWindow = ({ items, onItemClick }) => {
  return (
    <div className="flex-shrink-0 w-64 bg-gray-100 p-4 top-0 pt-20 h-screen overflow-y-auto">
      <h2 className="text-xl mb-4">Strategies</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => onItemClick(item)}
              className="block w-full text-left py-1 px-2 bg-white hover:bg-gray-200 rounded-md"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrategyWindow;
