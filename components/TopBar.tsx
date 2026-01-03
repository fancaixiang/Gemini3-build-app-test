import React from 'react';
import { Search, SortAsc, SlidersHorizontal, User, Plus } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <header className="flex items-center justify-between mb-8">
      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search customer..." 
          className="w-full bg-transparent border-none pl-8 pr-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:ring-0"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
          <SortAsc size={18} />
          <span>Sort by</span>
        </button>
        
        <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
          <SlidersHorizontal size={18} />
          <span>Filters</span>
        </button>

        <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
          <User size={18} />
          <span>Me</span>
        </button>

        <button className="flex items-center gap-2 bg-[#1c1c1c] text-white pl-3 pr-4 py-2.5 rounded-xl hover:bg-black transition-colors shadow-lg shadow-gray-200">
          <Plus size={18} />
          <span className="text-sm font-medium">Add customer</span>
        </button>
      </div>
    </header>
  );
};

export default TopBar;
