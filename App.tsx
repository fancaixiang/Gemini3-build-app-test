import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import StatsArea from './components/StatsArea';
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#1c1c1c] font-sans selection:bg-black selection:text-white">
      <Sidebar />
      
      {/* Main Content */}
      <main className="ml-64 p-8 min-h-screen">
        <div className="max-w-[1400px] mx-auto">
          <TopBar />
          
          <div className="animate-fade-in-up">
            <StatsArea />
            <KanbanBoard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
