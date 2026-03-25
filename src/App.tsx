import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { ObservationCard } from './components/ObservationCard';
import { Sidebar } from './components/Sidebar';
import { 
  Search, Map as MapIcon, Database, Users, Camera, 
  ChevronRight, Globe, BarChart3, Fingerprint 
} from 'lucide-react';

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7FCF9] text-[#0D2B1E] selection:bg-emerald-100">
      <Navbar onLoginClick={() => setIsAuthOpen(true)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* 1. HERO: iNaturalist의 'Connect with Nature' 철학 반영 */}
      <section className="relative pt-32 pb-20 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full text-emerald-700 font-bold text-sm">
              <Globe size={16} /> <span>전 세계 1.5억 건의 관찰 데이터와 함께하세요</span>
            </div>
            <h1 className="text-[84px] font-[900] leading-[0.95] tracking-tighter text-[#1B4332]">
              자연을 기록하고<br />지식을 공유하며<br /><span className="text-emerald-500">생명을 지킵니다.</span>
            </h1>
            <p className="text-xl font-medium text-emerald-800/60 leading-relaxed max-w-lg">
              사진 한 장으로 종을 식별하고, 전문가의 검증을 거쳐 국가 생물 다양성 데이터베이스에 기여하세요.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#1B4332] text-white px-10 py-5 rounded-3xl font-[900] text-lg shadow-2xl hover:bg-emerald-800 transition-all">지금 시작하기</button>
              <button className="bg-white border-2 border-emerald-100 px-10 py-5 rounded-3xl font-[900] text-lg hover:bg-emerald-50 transition-all">더 알아보기</button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square bg-emerald-200 rounded-[80px] rotate-3 overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000" className="w-full h-full object-cover -rotate-3 scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & EXPLORE: iNaturalist의 핵심 데이터 기능 */}
      <section className="bg-white py-24 border-y border-emerald-50">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: '전체 관찰', value: '158M+', icon: <Camera className="text-emerald-500" /> },
              { label: '식별된 종', value: '450K+', icon: <Fingerprint className="text-emerald-500" /> },
              { label: '시민 과학자', value: '2.8M+', icon: <Users className="text-emerald-500" /> },
              { label: '데이터 활용 논문', value: '4,500+', icon: <Database className="text-emerald-500" /> }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2 mb-2">{stat.icon} <span className="text-xs font-black text-emerald-800/40 uppercase tracking-widest">{stat.label}</span></div>
                <p className="text-5xl font-[900] text-[#1B4332]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT: Explore Map + Feed */}
      <main className="max-w-7xl mx-auto px-10 py-24 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-16">
          {/* iNaturalist의 'Explore' 기능 강화 */}
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-[900] mb-2 tracking-tight">주변의 생태계 탐색</h2>
                <p className="text-emerald-600/70 font-bold">내 주변에서 발견된 최신 종 기록입니다.</p>
              </div>
              <button className="flex items-center gap-2 font-black text-emerald-700 bg-emerald-50 px-6 py-3 rounded-2xl">
                <MapIcon size={20} /> 지도에서 보기
              </button>
            </div>
            
            {/* 분류군(Taxa) 퀵 네비게이션 */}
            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
              {['포유류', '조류', '파충류', '양서류', '어류', '곤충', '식물', '균류'].map(t => (
                <button key={t} className="whitespace-nowrap px-6 py-3 bg-white border border-emerald-100 rounded-2xl font-bold text-sm hover:border-emerald-500 transition-colors shadow-sm">{t}</button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <ObservationCard data={{ id: 1, name: '산양', scientificName: 'Naemorhedus caudatus', loc: '강원도 양구군', level: 'I', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800' }} />
              <ObservationCard data={{ id: 2, name: '삵', scientificName: 'Prionailurus bengalensis', loc: '충남 서산시', level: 'II', img: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=800' }} />
            </div>
          </div>
        </div>

        {/* 4. SIDEBAR: Leaderboard & Research Grade 가이드 */}
        <aside className="lg:col-span-4 space-y-12">
          <Sidebar />
          <div className="bg-emerald-50 p-8 rounded-[40px] border border-emerald-100">
            <h3 className="text-lg font-[900] mb-4 flex items-center gap-2">
              <BarChart3 size={20} className="text-emerald-600" />
              데이터 품질 가이드
            </h3>
            <p className="text-sm font-medium text-emerald-800/70 leading-relaxed mb-6">
              iNaturalist의 'Research Grade' 시스템을 아크넷에도 적용합니다. 2명 이상의 동의를 얻은 기록은 공식 연구 데이터로 활용됩니다.
            </p>
            <button className="text-emerald-700 font-black text-sm flex items-center gap-1 group">
              가이드라인 보기 <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}