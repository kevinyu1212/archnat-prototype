import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ObservationCard } from './components/ObservationCard';
import { SearchFilter } from './components/SearchFilter';
import { Footer } from './components/Footer';
import { UploadModal } from './components/UploadModal';
import { AuthModal } from './components/AuthModal';
import { BlogPage } from './components/BlogPage';

const MOCK_DATA = [
  { id: 1, name: '산양', scientificName: 'Naemorhedus caudatus', loc: '강원도 양구군', level: 'I', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800' },
  { id: 2, name: '호랑이', scientificName: 'Panthera tigris', loc: '서울대공원 (박제)', level: 'I', img: 'https://images.unsplash.com/photo-1508248467277-f5427d297d2e?q=80&w=800' },
  { id: 3, name: '삵', scientificName: 'Prionailurus bengalensis', loc: '충남 서산시', level: 'II', img: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=800' }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('home');

  const filteredData = useMemo(() => 
    MOCK_DATA.filter(item => item.name.includes(searchTerm)), [searchTerm]
  );

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('home');
  };

  const handleDeleteAccount = () => {
    if(confirm('정말로 계정을 삭제하시겠습니까? 모든 데이터가 사라집니다.')) {
      setIsLoggedIn(false);
      setView('home');
      alert('계정이 삭제되었습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-emerald-950">
      <Navbar 
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsAuthOpen(true)} 
        onLogout={handleLogout}
        onProfileClick={() => setView('blog')}
        onLogoClick={() => setView('home')}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />

      {view === 'home' ? (
        <main className="pt-24 pb-20 px-10 max-w-7xl mx-auto">
          <section className="mb-16 mt-10 text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-[900] tracking-tighter text-emerald-950 mb-6 leading-tight">
              야생의 목격,<br/>보전의 기록.
            </h1>
            <p className="text-emerald-700/60 font-bold mb-10 text-xl">당신의 관찰이 생태계를 지키는 위대한 데이터가 됩니다.</p>
            <button onClick={() => setIsUploadOpen(true)} className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 active:scale-95">
              지금 기록 시작하기
            </button>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black">최신 생태 발견</h2>
                <p className="text-sm font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full">
                  총 {filteredData.length}개의 기록
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredData.map(obs => <ObservationCard key={obs.id} data={obs} />)}
              </div>
            </div>
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </main>
      ) : (
        <BlogPage onDeleteAccount={handleDeleteAccount} />
      )}

      <Footer />
      
      <UploadModal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLoginSuccess={() => setIsLoggedIn(true)} 
      />
    </div>
  );
}

export default App;