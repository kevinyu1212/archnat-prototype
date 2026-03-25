import React from 'react';
import { MessageSquare, ThumbsUp, Eye, User, PenSquare, Flame, Award, ChevronRight, Bug, TreePine, Bird } from 'lucide-react';

const HOT_POSTS = [
  { id: 1, title: '2026년 봄철 산양 관찰 포인트 공유', author: '강원지킴이', likes: 156, img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=200' },
  { id: 2, title: '도심 속 삵 발견, 어떻게 대응해야 할까?', author: '도시생태학자', likes: 89, img: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=200' },
];

const CATEGORIES = [
  { name: '곤충/갑충', icon: <Bug size={20}/>, count: '1.2k' },
  { name: '포유류', icon: <TreePine size={20}/>, count: '854' },
  { name: '조류', icon: <Bird size={20}/>, count: '2.1k' },
  { name: '식물/균류', icon: <TreePine size={20}/>, count: '3.4k' },
];

export const CommunityPage = ({ onWriteClick }: any) => {
  return (
    <div className="min-h-screen bg-[#F0F4F2] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 충우 스타일: 상단 탭 및 카테고리 퀵 내비 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-emerald-50 hover:shadow-md transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <div>
                <p className="text-xs font-black text-emerald-900/40 uppercase">{cat.count} posts</p>
                <h4 className="font-black text-emerald-950">{cat.name}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 메인 리스트 (네이버 카페 + 충우 융합) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-emerald-50">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-emerald-950 flex items-center gap-2">
                  <Flame className="text-orange-500" fill="currentColor" /> 주간 인기 탐험기
                </h3>
                <button onClick={onWriteClick} className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
                  <PenSquare size={18} /> 탐험일지 쓰기
                </button>
              </div>

              {/* 인기 게시글 프리뷰 박스 (네이버 카페 스타일) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {HOT_POSTS.map(post => (
                  <div key={post.id} className="relative aspect-video rounded-[24px] overflow-hidden group cursor-pointer">
                    <img src={post.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                      <h4 className="text-white font-black text-lg leading-tight mb-2">{post.title}</h4>
                      <div className="flex items-center justify-between text-white/80 text-xs font-bold">
                        <span>{post.author}</span>
                        <span className="flex items-center gap-1"><ThumbsUp size={12}/> {post.likes}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 일반 게시글 리스트 (충우 스타일의 정갈함) */}
              <div className="space-y-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4 hover:bg-emerald-50 rounded-2xl transition-colors cursor-pointer border-b border-gray-50 last:border-0">
                    <span className="w-8 text-xs font-black text-emerald-300">0{i}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-emerald-950 group-hover:text-emerald-600">멸종위기 야생생물 관찰 현황 보고 ({i})</h4>
                      <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 mt-1">
                        <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">보고서</span>
                        <span>필드마스터</span>
                        <span>•</span>
                        <span>2시간 전</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                       <span className="flex items-center gap-1 text-[10px] font-bold"><Eye size={14}/> 42</span>
                       <span className="flex items-center gap-1 text-[10px] font-bold"><MessageSquare size={14}/> 12</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 사이드바: 충우의 '실시간 정보' + 네이버의 '회원 랭킹' */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-emerald-950 rounded-[32px] p-8 text-white">
              <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                <Award className="text-yellow-400" /> 이달의 탐험대장
              </h4>
              <div className="space-y-4">
                {[1, 2, 3].map(rank => (
                  <div key={rank} className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-black">{rank}</div>
                      <span className="font-bold text-sm">탐험가0{rank}</span>
                    </div>
                    <span className="text-emerald-400 font-black text-xs">+{1000 - rank*100}p</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-[32px] p-8 border border-emerald-50 shadow-sm">
              <h4 className="font-black text-emerald-950 mb-4 flex items-center justify-between">
                최근 댓글 <ChevronRight size={18} className="text-gray-300" />
              </h4>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="text-xs font-bold leading-relaxed">
                    <p className="text-emerald-800 line-clamp-1">"맞아요, 저번에 저도 거기서 봤는데..."</p>
                    <span className="text-gray-300 text-[10px]">3분 전 • {i}번째 게시글</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};