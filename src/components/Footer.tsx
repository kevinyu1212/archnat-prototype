import React from 'react';
import { Leaf, Mail, Globe, Share2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100/60 py-16 px-10 border-t border-emerald-900 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 text-white mb-6">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Leaf size={18} className="text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">Archnat</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            아크넷은 시민 과학자들과 함께 대한민국의 멸종위기 야생생물을 기록하고 보전하는 생태 아카이브 프로젝트입니다.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Share2 size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-black mb-6 uppercase text-xs tracking-widest">탐색하기</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">관찰 기록</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">종 분류 체계</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">활동가 랭킹</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">보전 프로젝트</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-6 uppercase text-xs tracking-widest">정책 및 약관</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">이용약관</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">개인정보 처리방침</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">위치정보 이용약관</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">데이터 라이선스</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-6 uppercase text-xs tracking-widest">공지사항</h4>
          <div className="p-4 bg-emerald-900/50 rounded-2xl border border-emerald-800">
            <p className="text-xs font-bold text-emerald-400 mb-1">New Update</p>
            <p className="text-sm text-emerald-100 font-medium leading-snug">검색 시스템 최적화 및 지도 로직 개편 안내 (2026-03-25)</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold">
        <p>© 2026 ARCHNAT Project. All rights reserved.</p>
        <p className="text-emerald-500">Created by Animal Finance Team</p>
      </div>
    </footer>
  );
};