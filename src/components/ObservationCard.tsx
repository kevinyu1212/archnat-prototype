import React from 'react';
import { MapPin, ShieldCheck, User } from 'lucide-react';

export const ObservationCard = ({ data }: { data: any }) => (
  <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-emerald-50 hover:shadow-xl transition-all duration-500 group cursor-pointer border-white">
    <div className="h-72 relative overflow-hidden">
      <img src={data.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={data.name} />
      <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm">
        <span className="text-[10px] font-black text-red-600 block leading-none mb-1 uppercase tracking-tighter">Legal Status</span>
        <span className="text-sm font-[900] text-emerald-950">멸종위기 야생생물 {data.level}급</span>
      </div>
    </div>
    <div className="p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-[900] text-emerald-950 mb-1">{data.name}</h3>
          <p className="text-xs font-bold text-emerald-600/60 uppercase tracking-widest">{data.scientificName}</p>
        </div>
        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-inner">
          <ShieldCheck size={24} />
        </div>
      </div>
      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
          <MapPin size={16} className="text-emerald-400" />
          {data.loc}
        </div>
      </div>
      <div className="pt-6 border-t border-emerald-50 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-black text-[10px] text-emerald-700">유</div>
          <span className="text-xs font-bold text-emerald-900">유관리자</span>
        </div>
        <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full uppercase">Verified</span>
      </div>
    </div>
  </div>
);