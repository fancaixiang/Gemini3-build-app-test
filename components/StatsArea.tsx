import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { ArrowRight } from 'lucide-react';

const data = [
  { name: 'Mon', value: 3, type: 'solid' },
  { name: 'Tue', value: 8, type: 'stripe' },
  { name: 'Wed', value: 14, type: 'solid' },
  { name: 'Thu', value: 9, type: 'solid' },
  { name: 'Fri', value: 4, type: 'stripe' },
];

const StatsArea: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mb-10">
      {/* New Customers Chart - 4 Cols */}
      <div className="col-span-12 xl:col-span-4 bg-transparent rounded-3xl p-2 relative">
        <h2 className="text-base font-semibold text-gray-900 mb-1">New customers</h2>
        <div className="flex items-end h-40 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barSize={16}>
                <defs>
                   <pattern id="stripe" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                     <line x1="0" y1="0" x2="0" y2="6" stroke="#9ca3af" strokeWidth="3" />
                   </pattern>
                </defs>
                <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.type === 'solid' ? '#1c1c1c' : 'url(#stripe)'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
        </div>
        <div className="flex justify-between mt-2 px-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                <span key={day} className="text-xs font-medium text-gray-500">{day}</span>
            ))}
        </div>
        {/* Y Axis Labels Mockup */}
        <div className="absolute left-0 top-16 bottom-8 flex flex-col justify-between text-[10px] text-gray-400 pointer-events-none">
            <span>10</span>
            <span>5</span>
            <span>0</span>
        </div>
      </div>

      {/* Gauge / Progress - 4 Cols */}
      <div className="col-span-12 xl:col-span-4 flex flex-col items-center justify-center p-2">
        <div className="relative w-48 h-24 overflow-hidden mb-2">
           {/* Custom SVG Gauge */}
           <svg viewBox="0 0 200 100" className="w-full h-full">
             {/* Background Ticks */}
             {Array.from({ length: 40 }).map((_, i) => {
               const angle = (i / 40) * 180;
               const isHighlighted = i < 27; // ~68%
               return (
                 <line
                   key={i}
                   x1="100" y1="100"
                   x2="100" y2="10"
                   transform={`rotate(${angle - 90} 100 100)`}
                   stroke={isHighlighted ? "#1c1c1c" : "#e5e7eb"}
                   strokeWidth="2"
                   strokeDasharray="6 100" // Length of tick relative to radius
                   strokeDashoffset="-85" // Push tick to outer edge
                 />
               );
             })}
           </svg>
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
              <span className="block text-4xl font-bold text-gray-900">68%</span>
           </div>
        </div>
        <span className="text-sm font-medium text-gray-500 mt-2">Successful deals</span>
      </div>

      {/* Simple Stats - 4 Cols */}
      <div className="col-span-12 xl:col-span-4 flex flex-col justify-center gap-8 pl-8">
        <div className="flex items-center justify-between group cursor-pointer">
          <div>
            <div className="text-4xl font-semibold text-gray-900 mb-1">53</div>
            <div className="text-xs text-gray-500 leading-tight">Tasks <br/> in progress</div>
          </div>
          <ArrowRight className="text-gray-400 group-hover:text-gray-900 transition-colors" size={20} />
        </div>

        <div className="flex items-center justify-between group cursor-pointer">
          <div>
            <div className="text-4xl font-semibold text-gray-900 mb-1">$ 15.890</div>
            <div className="text-xs text-gray-500 leading-tight">Prepayments <br/> from customers</div>
          </div>
          <ArrowRight className="text-gray-400 group-hover:text-gray-900 transition-colors" size={20} />
        </div>
      </div>
    </div>
  );
};

export default StatsArea;
