import React from 'react';
import { X, Image as ImageIcon, Link2, Type, AlignLeft, Bold, Italic } from 'lucide-react';

export const CommunityWriteModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex justify-center items-center bg-emerald-950/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-4xl bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* 헤더 */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="font-black text-emerald-900 text-lg">카페 글쓰기</h3>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-sm font-bold text-gray-500 hover:bg-gray-100 rounded-xl transition-all">임시저장</button>
            <button onClick={onClose} className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-black text-sm hover:bg-emerald-700 shadow-lg shadow-emerald-600/20">등록</button>
            <button onClick={onClose} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full ml-2"><X size={20}/></button>
          </div>
        </div>

        {/* 본문 영역 */}
        <div className="flex-1 overflow-y-auto p-8 space-y-4">
          {/* 말머리 및 제목 */}
          <div className="flex flex-col gap-4 border-b border-gray-50 pb-6">
            <select className="w-40 p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-emerald-800 outline-none focus:ring-2 focus:ring-emerald-500/20">
              <option>말머리 없음</option>
              <option>자유게시판</option>
              <option>정보공유</option>
              <option>질문답변</option>
            </select>
            <input 
              type="text" 
              placeholder="제목을 입력해 주세요." 
              className="w-full text-2xl font-bold placeholder:text-gray-200 border-none outline-none focus:ring-0 p-0"
            />
          </div>

          {/* 에디터 툴바 (네이버 스타일) */}
          <div className="flex items-center gap-2 py-2 border-b border-gray-50 text-gray-400">
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors"><ImageIcon size={20}/></button>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors"><Link2 size={20}/></button>
            <div className="w-[1px] h-4 bg-gray-100 mx-2" />
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors"><Bold size={18}/></button>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors"><Italic size={18}/></button>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors"><AlignLeft size={18}/></button>
          </div>

          {/* 본문 입력창 */}
          <textarea 
            placeholder="아크넷 대원들과 나누고 싶은 이야기를 적어보세요. (사진 첨부 권장)"
            className="w-full h-[400px] border-none outline-none focus:ring-0 resize-none py-4 text-gray-700 leading-relaxed font-medium"
          />
        </div>

        {/* 푸터 툴바 */}
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
            <span className="flex items-center gap-1 cursor-pointer hover:text-emerald-600"><Type size={14}/> 서식</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-emerald-600">태그 입력</span>
          </div>
          <p className="text-[10px] text-gray-300 font-bold italic">Archnat Community Guidelines Applied.</p>
        </div>
      </div>
    </div>
  );
};