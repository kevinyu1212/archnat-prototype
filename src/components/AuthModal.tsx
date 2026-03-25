import React from 'react';
import { X } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-[40px] p-10 relative shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X size={24} />
        </button>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-[900] text-emerald-950 mb-2">반가워요!</h2>
          <p className="text-emerald-600 font-medium">아크넷과 함께 자연을 기록해보세요.</p>
        </div>
        <div className="space-y-4">
          <input type="email" placeholder="이메일 주소" className="w-full px-6 py-4 rounded-2xl bg-emerald-50 border-none focus:ring-2 focus:ring-emerald-500 font-medium" />
          <input type="password" placeholder="비밀번호" className="w-full px-6 py-4 rounded-2xl bg-emerald-50 border-none focus:ring-2 focus:ring-emerald-500 font-medium" />
          <button className="w-full py-4 bg-[#1B4332] text-white rounded-2xl font-black text-lg shadow-lg hover:bg-emerald-800 transition-colors mt-4">로그인</button>
        </div>
        <div className="mt-8 text-center text-sm font-bold text-gray-400">
          계정이 없으신가요? <span className="text-emerald-600 cursor-pointer">회원가입</span>
        </div>
      </div>
    </div>
  );
};