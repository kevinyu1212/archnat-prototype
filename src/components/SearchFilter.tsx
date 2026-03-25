import React from 'react';
import { X, Filter } from 'lucide-react';

export const SearchFilter = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const taxa = [
    { label: '조류', icon: '🐦' }, { label: '포유류', icon: '🦊' }, { label: '파충류', icon: '🐍' },
    { label: '양서류', icon: '🐸' }, { label: '어류', icon: '🐟' }, { label: '곤충', icon: '🦋' },
    { label: '식물', icon: '🌿' }, { label: '균류', icon: '🍄' }, { label: '기타', icon: '🐚' }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-center bg-black/20 px-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-[32px] p-8 animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-black text-emerald-950">상세 검색</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={24}/></button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {taxa.map(t => (
            <button key={t.label} className="flex flex-col items-center p-4 rounded-2xl border border-emerald-50 bg-emerald-50/30 hover:bg-emerald-500 hover:text-white transition-all group">
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{t.icon}</span>
              <span className="text-[11px] font-bold">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {['야생', '도입종', '위기종'].map(f => (
            <button key={f} className="px-5 py-2.5 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold hover:bg-emerald-50 border border-gray-100 transition-colors">{f}</button>
          ))}
        </div>

        <button onClick={onClose} className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-lg hover:bg-emerald-700 transition-all active:scale-95">
          필터 적용하기
        </button>
      </div>
    </div>
  );
};