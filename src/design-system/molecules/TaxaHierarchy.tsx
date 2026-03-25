import React from 'react';

const TaxaHierarchy = ({ hierarchy }) => {
  return (
    <nav className="flex text-sm text-gray-500 mb-4 overflow-x-auto whitespace-nowrap p-2 bg-gray-50 rounded">
      {hierarchy.map((step, index) => (
        <span key={step.id} className="flex items-center">
          <button className="hover:text-green-600 font-medium">{step.name}</button>
          {index < hierarchy.length - 1 && <span className="mx-2"> > </span>}
        </span>
      ))}
    </nav>
  );
};

export default TaxaHierarchy;
