import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { KANBAN_DATA } from '../constants';
import KanbanCard from './KanbanCard';

const KanbanBoard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {KANBAN_DATA.map((column) => (
        <div key={column.id} className="flex flex-col">
          <div className="flex items-center justify-between mb-6 px-1">
            <h3 className="font-semibold text-gray-900 text-lg">{column.title}</h3>
            <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-sm">
                    {column.count}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                    <ArrowUpDown size={14} />
                </button>
            </div>
          </div>
          
          <div className="flex-1">
            {column.cards.map((card) => (
              <KanbanCard key={card.id} data={card} />
            ))}
             {/* Add a transparent placeholder at bottom to allow scrolling past last item comfortably */}
             <div className="h-10"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
