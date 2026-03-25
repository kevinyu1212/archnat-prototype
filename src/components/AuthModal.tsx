import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess }: any) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-center items-center bg-emerald-950/60 backdrop-blur-md px-4">
      <div className="w-full max-w-md bg-white rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-black text-emerald-950">
              {mode === 'login' ? '다시 오셨군요!' : '탐험 시작하기'}
            </h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={20}/></button>
          </div>

          <div className="space-y-4">
            {mode === 'signup' && (
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-emerald-300" size={18} />
                <input type="text" placeholder="닉네임" className="w-full bg-gray-50 border-none rounded-2xl py-3.5 pl-12 pr-4 font-bold text-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-emerald-300" size={18} />
              <input type="email" placeholder="이메일 주소" className="w-full bg-gray-50 border-none rounded-2xl py-3.5 pl-12 pr-4 font-bold text-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-emerald-300" size={18} />
              <input type="password" placeholder="비밀번호" className="w-full bg-gray-50 border-none rounded-2xl py-3.5 pl-12 pr-4 font-bold text-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>

            <button 
              onClick={() => { onLoginSuccess(); onClose(); }}
              className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black mt-4 shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
            >
              {mode === 'login' ? '로그인' : '계정 만들기'} <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-sm font-bold text-emerald-600 hover:underline"
            >
              {mode === 'login' ? '아직 회원이 아니신가요? 가입하기' : '이미 계정이 있으신가요? 로그인'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};