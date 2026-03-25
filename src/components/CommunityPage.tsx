import React from 'react';
import { MessageSquare, ThumbsUp, Eye, User, PenSquare } from 'lucide-react';

const POSTS = [
  { id: 1, category: '자유', title: '오늘 동네 뒷산에서 특이한 새를 봤어요!', author: '새박사', views: 124, likes: 12, date: '10분 전' },
  { id: 2, category: '정보', title: '멸종위기종 발견 시 신고 절차 정리', author: '에코가디언', views: 850, likes: 45, date: '1시간 전' },
  { id: 3, category: '질문', title: '이 식물 이름이 뭔지 아시는 분 계신가요?', author: '초보탐험가', views: 56, likes: 2, date: '3시간 전' },
];

export const CommunityPage = ({ onWriteClick }: any) => {
  return (
    <div className="min-h-screen bg-[#F8FAF9] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-black text-emerald-950 mb-2">커뮤니티</h2>
            <p className="text-emerald-700/60 font-bold">생태계 보전을 위한 지식과 경험을 나눕니다.</p>
          </div>
          <button onClick={onWriteClick} className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
            <PenSquare size={18} /> 글쓰기
          </button>
        </div>

        <div className="bg-white rounded-[32px] shadow-sm border border-emerald-50 overflow-hidden">
          {POSTS.map((post, index) => (
            <div key={post.id} className={`p-6 flex items-center justify-between hover:bg-emerald-50/50 transition-colors cursor-pointer ${index !== POSTS.length - 1 ? 'border-b border-gray-50' : ''}`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md">{post.category}</span>
                  <h3 className="text-lg font-bold text-emerald-950">{post.title}</h3>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
              <div className="flex gap-4 text-gray-300">
                <div className="flex flex-col items-center"><ThumbsUp size={16}/><span className="text-[10px]">{post.likes}</span></div>
                <div className="flex flex-col items-center"><Eye size={16}/><span className="text-[10px]">{post.views}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};