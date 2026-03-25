import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ObservationCard } from './components/ObservationCard';
import { Footer } from './components/Footer';
import { UploadModal } from './components/UploadModal';
import { AuthModal } from './components/AuthModal';
import { BlogPage } from './components/BlogPage';
import { SearchFilter } from './components/SearchFilter';

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
  const [view, setView] = useState('home');

  const filteredData = useMemo(() => 
    MOCK_DATA.filter(item => item.name.includes(searchTerm)), [searchTerm]
  );

  const handleUploadClick = () => {
    if (!isLoggedIn) {
      alert('기록을 시작하려면 로그인이 필요합니다.');
      setIsAuthOpen(true);
      return;
    }
    setIsUploadOpen(true);
  };

  const handleDeleteAccount = () => {
    const confirmText = prompt('계정을 삭제하려면 "삭제합니다"를 입력해주세요.');
    if (confirmText === '삭제합니다') {
      setIsLoggedIn(false);
      setView('home');
      alert('계정이 삭제되었습니다.');
    } else if (confirmText !== null) {
      alert('문구가 일치하지 않습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-emerald-950">
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

      {view === 'home' ? (
        <main className="pt-24 pb-20 px-10 max-w-7xl mx-auto">
          <section className="mb-16 mt-10 text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-[900] tracking-tighter text-emerald-950 mb-6 leading-tight">
              야생의 목격,<br/>보전의 기록.
            </h1>
            <p className="text-emerald-700/60 font-bold mb-10 text-xl">당신의 관찰이 생태계를 지키는 위대한 데이터가 됩니다.</p>
            <button 
              onClick={handleUploadClick} 
              className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 active:scale-95"
            >
              지금 기록 시작하기
            </button>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black">최신 생태 발견</h2>
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
      <SearchFilter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  );
}

export default App;