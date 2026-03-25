import React from 'react';
import { Settings, Share2, Grid, List, Map as MapIcon, Award, TreeDeciduous, Footprints } from 'lucide-react';
import { ObservationCard } from './ObservationCard';

const MY_OBSERVATIONS = [
  { id: 1, name: '산양', scientificName: 'Naemorhedus caudatus', loc: '강원도 양구군', level: 'I', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800' },
  { id: 2, name: '삵', scientificName: 'Prionailurus bengalensis', loc: '충남 서산시', level: 'II', img: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=800' },
];

export const BlogPage = ({ onDeleteAccount }: any) => {
  return (
    <div className="min-h-screen bg-[#F7FCF9] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* 블로그 헤더 / 프로필 섹션 */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-emerald-50 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-32 -mt-32 opacity-50" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 rounded-[32px] bg-emerald-600 border-4 border-white shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="Profile" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h2 className="text-3xl font-black text-emerald-950">박식물 탐험가</h2>
                <div className="flex gap-2 justify-center md:justify-start">
                  <button className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black border border-emerald-100">프로필 수정</button>
                  <button className="p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100"><Settings size={18}/></button>
                </div>
              </div>
              <p className="text-emerald-700/60 font-bold max-w-md">대한민국의 멸종위기 식물을 찾아 기록하고 연구합니다. 자연과 함께하는 삶을 꿈꿉니다. 🌿</p>
              
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <Footprints size={18} className="text-emerald-500" />
                  <span className="text-sm font-black text-emerald-950">관찰 154회</span>
                </div>
                <div className="flex items-center gap-2">
                  <TreeDeciduous size={18} className="text-emerald-500" />
                  <span className="text-sm font-black text-emerald-950">발견 종 42종</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-emerald-500" />
                  <span className="text-sm font-black text-emerald-950">도움 89회</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 탭 메뉴 */}
        <div className="flex items-center justify-between mb-8 px-4">
          <div className="flex gap-8 border-b border-gray-100 w-full md:w-auto">
            <button className="pb-4 text-emerald-950 font-black border-b-4 border-emerald-600 text-sm">기록 피드</button>
            <button className="pb-4 text-gray-400 font-bold hover:text-emerald-600 transition-colors text-sm">참여 미션</button>
            <button className="pb-4 text-gray-400 font-bold hover:text-emerald-600 transition-colors text-sm">관찰 지도</button>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="p-2 bg-white rounded-lg border border-gray-100 text-emerald-600 shadow-sm"><Grid size={18}/></button>
            <button className="p-2 bg-transparent text-gray-400 hover:text-emerald-600"><List size={18}/></button>
          </div>
        </div>

        {/* 개인 기록 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MY_OBSERVATIONS.map(obs => (
            <ObservationCard key={obs.id} data={obs} />
          ))}
          
          {/* 비어있는 느낌을 채워줄 플레이스홀더 */}
          <div className="aspect-[4/3] bg-emerald-50/30 border-2 border-dashed border-emerald-100 rounded-[32px] flex flex-col items-center justify-center text-emerald-200">
             <span className="font-black text-sm text-emerald-200">새로운 기록을 기다리고 있어요</span>
          </div>
        </div>
        {/* 설정 및 계정 관리 섹션 */}
        <div className="mt-20 p-8 bg-white rounded-[32px] border border-red-50 shadow-sm">
          <h4 className="text-lg font-black text-red-900 mb-2">계정 위험 구역</h4>
          <p className="text-sm text-red-400 font-bold mb-6">계정을 삭제하면 모든 관찰 기록과 활동 데이터가 영구히 삭제되며 복구할 수 없습니다.</p>
          <button 
            onClick={onDeleteAccount}
            className="px-6 py-3 bg-red-50 text-red-600 rounded-xl text-sm font-black hover:bg-red-100 transition-colors"
          >
            회원 탈퇴 및 데이터 삭제
          </button>
        </div>
      </div>
    </div>
  );
};