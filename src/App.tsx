import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ObservationCard } from './components/ObservationCard';
import { Footer } from './components/Footer';
import { UploadModal } from './components/UploadModal';
import { AuthModal } from './components/AuthModal';
import { BlogPage } from './components/BlogPage';
import { CommunityPage } from './components/CommunityPage';
import { SearchFilter } from './components/SearchFilter';
import { CommunityWriteModal } from './components/CommunityWriteModal';

const MOCK_DATA = [
  { id: 1, name: '산양', scientificName: 'Naemorhedus caudatus', loc: '강원도 양구군', level: 'I', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800' },
  { id: 2, name: '삵', scientificName: 'Prionailurus bengalensis', loc: '충남 서산시', level: 'II', img: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=800' }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [view, setView] = useState('home');
  const [isCommunityWriteOpen, setIsCommunityWriteOpen] = useState(false);

  const filteredData = useMemo(() => 
    MOCK_DATA.filter(item => item.name.includes(searchTerm)), [searchTerm]
  );

  const handleDeleteAccount = () => {
    if(confirm('정말로 탈퇴하시겠습니까?')) {
      setIsLoggedIn(false);
      setView('home');
    }
  };

  const handleCommunityWrite = () => {
    if (!isLoggedIn) {
      alert('커뮤니티에 글을 남기려면 로그인이 필요합니다.');
      setIsAuthOpen(true);
      return;
    }
    setIsCommunityWriteOpen(true);
  };

  // 화면 렌더링 함수
  const renderView = () => {
    if (view === 'blog') return <BlogPage onDeleteAccount={handleDeleteAccount} />;
    if (view === 'community') return <CommunityPage onWriteClick={handleCommunityWrite} />;
    
    return (
      <main className="pt-24 pb-20 px-10 max-w-7xl mx-auto">
        <section className="mb-16 mt-10 text-center lg:text-left">
          <h1 className="text-6xl lg:text-7xl font-[900] tracking-tighter text-emerald-950 mb-6 leading-tight">
            야생의 목격,<br/>보전의 기록.
          </h1>
          <div className="flex justify-center lg:justify-start gap-4">
            <button 
              onClick={() => isLoggedIn ? setIsUploadOpen(true) : setIsAuthOpen(true)}
              className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
            >
              지금 기록 시작하기
            </button>
            <button 
              onClick={() => setView('community')}
              className="bg-white text-emerald-900 border-2 border-emerald-100 px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all"
            >
              커뮤니티 구경하기
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-black mb-8">최신 생태 발견</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredData.map(obs => <ObservationCard key={obs.id} data={obs} />)}
            </div>
          </div>
          <div className="lg:col-span-4 border-l border-gray-50 pl-12">
            <Sidebar />
          </div>
        </div>
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsAuthOpen(true)} 
        onLogout={() => { setIsLoggedIn(false); setView('home'); }}
        onProfileClick={() => setView('blog')}
        onLogoClick={() => setView('home')}
        onFilterClick={() => setIsFilterOpen(true)}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />

      {renderView()}

      <Footer />
      <UploadModal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLoginSuccess={() => setIsLoggedIn(true)} />
      <CommunityWriteModal isOpen={isCommunityWriteOpen} onClose={() => setIsCommunityWriteOpen(false)} />
      <SearchFilter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      <CommunityWriteModal isOpen={isWriteModalOpen} onClose={() => setIsWriteModalOpen(false)} />
    </div>
  );
}

export default App;