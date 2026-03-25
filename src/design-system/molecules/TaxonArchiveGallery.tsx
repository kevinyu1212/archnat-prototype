import React, { useState } from 'react';

const TaxonArchiveGallery = ({ initialObservations }) => {
  const [selectedGroup, setSelectedGroup] = useState('ALL');

  return (
    <div className="archive-container">
      {/* 분류군 선택 탭 - 이미지의 아이콘들을 렌더링 */}
      <div className="flex overflow-x-auto gap-4 py-6 border-b no-scrollbar">
        {['관속식물', '포유류', '곤충', '조류'].map(group => (
          <button 
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={lex-shrink-0 flex flex-col items-center px-4 }
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full mb-1"></div>
            <span className="text-[10px] font-bold">{group}</span>
          </button>
        ))}
      </div>

      {/* 실시간 필터링 갤러리 리스트 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
        {/* Closure Table을 통해 가져온 관찰 기록 렌더링 */}
      </div>
    </div>
  );
};

export default TaxonArchiveGallery;
