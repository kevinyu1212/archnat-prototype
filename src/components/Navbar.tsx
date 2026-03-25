import React from 'react';
import { Leaf, Search, SlidersHorizontal, User, LogOut } from 'lucide-react';

export const Navbar = ({ onLoginClick, searchTerm, setSearchTerm, onFilterClick, isLoggedIn, onLogout, onProfileClick, onLogoClick }: any) => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-emerald-50 px-8 h-20 flex items-center justify-between">
    <div className="flex items-center gap-2 cursor-pointer" onClick={onLogoClick}>
      <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
        <Leaf size={20} />
      </div>
      <span className="text-2xl font-black text-emerald-900 tracking-tighter uppercase">Archnat</span>
    </div>
    
    <div className="flex-1 max-w-2xl mx-12 relative group">
      <Search className="absolute left-5 top-3.5 text-emerald-300" size={20} />
      <input 
        type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="생태 정보 검색..."
        className="w-full bg-emerald-50/50 border border-transparent rounded-2xl py-3.5 pl-14 pr-14 font-bold focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
      />
      <button onClick={onFilterClick} className="absolute right-4 top-2.5 p-2 hover:bg-emerald-100 text-emerald-600 rounded-xl transition-all">
        <SlidersHorizontal size={22} />
      </button>
    </div>

    <div className="flex items-center gap-4">
      {isLoggedIn ? (
        <div className="flex items-center gap-3">
          <button onClick={onProfileClick} className="w-10 h-10 rounded-xl overflow-hidden border-2 border-emerald-100 hover:border-emerald-500 transition-all shadow-sm">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" className="w-full h-full object-cover" />
          </button>
          <button onClick={onLogout} className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
            <LogOut size={20} />
          </button>
        </div>
      ) : (
        <button onClick={onLoginClick} className="bg-emerald-950 text-white px-7 py-3 rounded-2xl font-black text-sm hover:shadow-lg transition-all active:scale-95">
          로그인
        </button>
      )}
    </div>
  </nav>
);