import React from 'react';

const ExpertCard = ({ expert }) => {
  return (
    <div className="flex items-center p-4 border rounded-lg hover:shadow-md transition-shadow">
      <div className="w-16 h-16 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center font-bold text-green-700">
        {expert.initials}
      </div>
      <div className="ml-4 flex-grow">
        <h4 className="font-bold text-lg">{expert.name} <span className="text-sm font-normal text-gray-500">@{expert.id}</span></h4>
        <p className="text-xs text-blue-600 font-semibold">{expert.mainCategory} 전문</p>
        <div className="flex gap-2 mt-1">
          <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded">채택 {expert.solvedCount}건</span>
          <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded">신뢰도 {expert.trustRate}%</span>
        </div>
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">구독</button>
    </div>
  );
};

export default ExpertCard;
