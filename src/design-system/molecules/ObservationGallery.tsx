import React from 'react';

const ObservationGallery = ({ observations }) => {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {observations.map((obs) => (
        <div key={obs.id} className="break-inside-avoid mb-4 rounded-xl overflow-hidden shadow-lg hover:ring-2 ring-green-500 transition-all cursor-pointer group">
          <div className="relative">
            <img src={obs.imageUrl} alt={obs.commonName} className="w-full h-auto object-cover" />
            {obs.isEndangered && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full font-bold">
                멸종위기
              </span>
            )}
          </div>
          <div className="p-3 bg-white">
            <p className="font-bold text-sm">{obs.commonName}</p>
            <p className="text-xs text-gray-500 italic">{obs.scientificName}</p>
            <div className="flex justify-between items-center mt-2 border-t pt-2">
              <span className="text-[10px] text-gray-400">{obs.observedAt}</span>
              <span className="text-[10px] font-bold text-green-600">ID {obs.agreementCount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ObservationGallery;
