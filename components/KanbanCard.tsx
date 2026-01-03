import React from 'react';
import { Calendar, MessageSquare, Paperclip, MoreVertical, MapPin, Mail } from 'lucide-react';
import { KanbanCardData } from '../types';

interface KanbanCardProps {
  data: KanbanCardData;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ data }) => {
  const isDark = data.variant === 'dark';

  return (
    <div 
      className={`
        p-5 rounded-[20px] mb-4 relative group transition-transform duration-200 hover:-translate-y-1
        ${isDark ? 'bg-[#1c1c1c] text-white shadow-2xl shadow-black/20' : 'bg-white text-gray-900 shadow-sm border border-gray-100'}
      `}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className={`font-semibold text-[15px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{data.companyName}</h3>
        <button className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'}`}>
          <MoreVertical size={16} />
        </button>
      </div>

      <p className={`text-xs mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {data.description}
      </p>

      {/* Extra details for Dark Card variant as per design */}
      {isDark && (
        <div className="mb-6 space-y-3">
           {data.location && (
             <div className="flex items-center gap-2 text-[10px] text-gray-300">
               <MapPin size={12} className="shrink-0" />
               <span>{data.location}</span>
             </div>
           )}
           {data.email && (
             <div className="flex items-center gap-2 text-[10px] text-gray-300">
               <Mail size={12} className="shrink-0" />
               <span>{data.email}</span>
             </div>
           )}
           {data.manager && (
             <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
               <img src={data.manager.avatar} alt="Manager" className="w-6 h-6 rounded-full" />
               <div className="flex flex-col">
                 <span className="text-[10px] text-gray-500">Manager</span>
                 <span className="text-[11px] font-medium text-white">{data.manager.name}</span>
               </div>
             </div>
           )}
        </div>
      )}

      <div className={`flex items-center justify-between ${isDark && data.manager ? 'mt-0' : 'mt-auto'}`}>
        <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium ${isDark ? 'bg-white/10 text-gray-300' : 'bg-gray-50 text-gray-600'}`}>
          <Calendar size={12} />
          <span>{data.date}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
            <MessageSquare size={14} />
            <span>{data.comments}</span>
          </div>
          <div className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
            <Paperclip size={14} />
            <span>{data.attachments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
