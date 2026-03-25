import React from 'react';
import { Trophy, Star } from 'lucide-react';

export const Sidebar = () => (
  <div className="space-y-10">
    <section className="bg-white rounded-[40px] p-8 border border-emerald-50 shadow-sm">
      <div className="flex items-center gap-2 mb-8">
        <Trophy className="text-amber-400" size={20} />
        <h2 className="text-xl font-[900] text-emerald-950">이달의 보전 활동가</h2>
      </div>
      <div className="space-y-6">
        {[
          { r: '01', n: '박식물', c: 154, color: 'bg-amber-50 text-amber-600' },
          { r: '02', n: '김분류', c: 128, color: 'bg-slate-50 text-slate-500' },
          { r: '03', n: '이야생', c: 92, color: 'bg-orange-50 text-orange-600' }
        ].map((u) => (
          <div key={u.r} className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-black text-gray-200 group-hover:text-emerald-200 transition-colors italic">{u.r}</span>
              <div className={`w-10 h-10 ${u.color} rounded-xl flex items-center justify-center font-black text-sm`}>{u.n[0]}</div>
              <span className="font-bold text-emerald-950 text-sm">{u.n}</span>
            </div>
            <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{u.c}회</span>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-emerald-950 rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      <h2 className="text-xl font-[900] mb-6 flex items-center gap-2">
        <Star size={20} className="text-emerald-400" />
        데이터 검증 위원
      </h2>
      <div className="p-6 bg-white/5 rounded-3xl border border-white/10 mb-6">
        <p className="text-xs text-emerald-200 leading-relaxed mb-4 font-medium">
          "시민들의 기록이 과학적 데이터로 승인될 수 있도록 전문적인 검토를 진행합니다."
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center font-black">G</div>
          <div>
            <p className="font-bold text-sm">Dr. 그린</p>
            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Botanist</p>
          </div>
        </div>
      </div>
      <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-[900] rounded-2xl transition-all active:scale-95 shadow-lg text-sm">
        검증 요청하기
      </button>
    </section>
  </div>
);