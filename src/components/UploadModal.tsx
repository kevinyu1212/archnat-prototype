import React, { useState } from 'react';
import { X, Camera, MapPin, Calendar, Info, Sparkles, Image as ImageIcon, ChevronRight, HelpCircle, Target, TreeDeciduous } from 'lucide-react';

export const UploadModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isUnknown, setIsUnknown] = useState(false);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-end md:items-center bg-emerald-950/70 backdrop-blur-md px-0 md:px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-t-[32px] md:rounded-[32px] overflow-hidden animate-in slide-in-from-bottom md:zoom-in-95 duration-300 max-h-[95vh] flex flex-col">
        
        {/* 헤더: 네이처링 스타일의 단계 표시 */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
              <TreeDeciduous size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-emerald-950">자연 관찰 기록</h3>
              <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest">New Observation Archive</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={28}/></button>
        </div>

        <div className="overflow-y-auto flex-1 p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* 왼쪽: 사진 및 미디어 (네이처링의 다중 업로드) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-black text-emerald-900">관찰 사진 (최대 10장)</label>
                  <span className="text-[10px] text-emerald-500 font-bold">대표 사진 설정 가능</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-emerald-50 border-2 border-dashed border-emerald-200 rounded-[24px] flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-100 transition-all group">
                    <Camera className="text-emerald-400 group-hover:scale-110 transition-transform mb-2" size={32} />
                    <span className="text-xs font-black text-emerald-700">사진 추가</span>
                  </div>
                  <div className="aspect-square bg-gray-50 rounded-[24px] border border-gray-100 flex items-center justify-center text-gray-300">
                    <ImageIcon size={24} />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <div className="flex gap-3">
                  <HelpCircle className="text-amber-500 shrink-0" size={18} />
                  <p className="text-[11px] text-amber-800 font-bold leading-relaxed">
                    위치 정보가 포함된 사진을 올리면 일시와 장소가 자동으로 입력되어 더 정확한 기록이 됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 오른쪽: 상세 정보 입력 */}
            <div className="lg:col-span-7 space-y-8">
              {/* 생물종 동정 섹션 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-black text-emerald-900 italic">"무엇을 보셨나요?"</label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={isUnknown} onChange={(e) => setIsUnknown(e.target.checked)} className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="text-xs font-bold text-gray-500">이름을 모르겠어요</span>
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    disabled={isUnknown}
                    placeholder={isUnknown ? "전문가에게 동정을 요청합니다." : "국문명 또는 학명 검색"} 
                    className={`w-full ${isUnknown ? 'bg-gray-100' : 'bg-emerald-50/50'} border-transparent rounded-2xl py-4 px-6 font-black text-lg outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all`}
                  />
                  {!isUnknown && (
                    <button className="absolute right-3 top-2.5 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-black flex items-center gap-2 shadow-lg shadow-emerald-600/20">
                      <Sparkles size={14} /> AI 분석
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">관찰 일시</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3 text-emerald-500" size={16} />
                    <input type="datetime-local" className="w-full bg-gray-50 border-none rounded-xl py-3 pl-12 pr-4 font-bold text-sm focus:ring-2 focus:ring-emerald-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">관찰 장소</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3 text-emerald-500" size={16} />
                    <input type="text" placeholder="위치 검색" className="w-full bg-gray-50 border-none rounded-xl py-3 pl-12 pr-4 font-bold text-sm focus:ring-2 focus:ring-emerald-500" />
                  </div>
                </div>
              </div>

              {/* 네이처링 핵심: 관찰 환경 및 미션 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">관찰 환경</label>
                  <select className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 font-bold text-sm focus:ring-2 focus:ring-emerald-500 appearance-none">
                    <option>육상</option>
                    <option>산림</option>
                    <option>하천/습지</option>
                    <option>해안/해양</option>
                    <option>도심/공원</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">참여 미션</label>
                  <div className="relative">
                    <Target className="absolute left-4 top-3 text-emerald-500" size={16} />
                    <select className="w-full bg-emerald-50 border-none rounded-xl py-3 pl-12 pr-4 font-bold text-sm focus:ring-2 focus:ring-emerald-500 appearance-none text-emerald-700">
                      <option>일반 관찰 (미션 없음)</option>
                      <option>우리동네 매미 찾기</option>
                      <option>멸종위기종 전국 조사</option>
                      <option>로드킬 목격 제보</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">상세 설명</label>
                <textarea 
                  rows={4}
                  placeholder="개체의 상태(개화, 번식 등)나 관찰 당시의 상황을 기록해 주세요."
                  className="w-full bg-gray-50 border-none rounded-2xl p-5 font-bold text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 액션바 */}
        <div className="p-8 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-6 text-gray-400 text-xs font-bold">
            <span className="flex items-center gap-2"><Info size={14}/> 비공개 설정</span>
            <span className="flex items-center gap-2"><Info size={14}/> 저작권 설정</span>
          </div>
          <div className="flex gap-4">
            <button onClick={onClose} className="px-8 py-4 bg-white border border-gray-200 text-gray-500 rounded-2xl font-black text-sm hover:bg-gray-100 transition-all">나중에 하기</button>
            <button className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all flex items-center gap-2">
              기록 공유하기 <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};