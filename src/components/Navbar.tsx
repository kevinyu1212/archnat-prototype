import React from 'react';
import { Leaf, Search, User } from 'lucide-react';

export const Navbar = ({ onLoginClick }: { onLoginClick: () => void }) => (
  <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-emerald-100 px-8 h-20 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#1B4332] rounded-2xl flex items-center justify-center text-white shadow-lg">
        <Leaf size={20} />
      </div>
      <span className="text-2xl font-[900] tracking-tighter text-[#1B4332]">ARCHNAT</span>
    </div>
    
    <div className="hidden md:flex items-center gap-8 text-sm font-bold text-emerald-900">
      <a href="#" className="hover:text-emerald-600 transition-colors">탐색하기</a>
      <a href="#" className="hover:text-emerald-600 transition-colors">프로젝트</a>
      <a href="#" className="hover:text-emerald-600 transition-colors">도감</a>
    </div>

    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-emerald-50 rounded-full transition-colors"><Search size={20} /></button>
      <button 
        onClick={onLoginClick}
        className="flex items-center gap-2 bg-[#1B4332] text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-emerald-800 transition-all active:scale-95 shadow-md"
      >
        <User size={18} />
        로그인
      </button>
    </div>
  </nav>
);