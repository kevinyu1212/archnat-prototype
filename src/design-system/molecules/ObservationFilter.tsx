import React from 'react';

const ObservationFilter = () => {
  return (
    <div className="bg-gray-50 p-6 border-b">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 생물분류/서식지 섹션 (아이콘 그리드) */}
        <div className="space-y-4">
          <h4 className="font-bold border-b pb-2">생물분류</h4>
          {/* 아이콘 그리드 렌더링 */}
        </div>
        
        {/* 행정구역/게시자 섹션 */}
        <div className="space-y-4">
          <h4 className="font-bold border-b pb-2">상세 조건</h4>
          <input className="w-full p-2 border" placeholder="행정구역 입력" />
          <input className="w-full p-2 border" placeholder="게시자 이름" />
        </div>

        {/* 관찰/게시 시각 섹션 */}
        <div className="space-y-4">
          <h4 className="font-bold border-b pb-2">기간 설정</h4>
          <input type="date" className="w-full p-2 border mb-2" />
          <input type="date" className="w-full p-2 border" />
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-6">
        <button className="px-6 py-2 bg-blue-900 text-white rounded">검색</button>
        <button className="px-6 py-2 border rounded">초기화</button>
      </div>
    </div>
  );
};

export default ObservationFilter;
