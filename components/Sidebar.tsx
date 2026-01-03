import React from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Activity, 
  Users, 
  Settings, 
  Zap, 
  TrendingUp, 
  RefreshCw, 
  Megaphone,
  Plus,
  LogOut
} from 'lucide-react';
import { SIDEBAR_PROJECTS, MEMBERS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 fixed left-0 top-0 h-screen overflow-y-auto bg-transparent p-6 flex flex-col gap-8 border-r border-transparent lg:border-gray-100/50 xl:border-none">
      {/* Logo */}
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">BizLink</h1>
      </div>

      {/* Main Menu */}
      <nav className="flex flex-col gap-1">
        <MenuItem icon={LayoutDashboard} label="Dashboard" />
        <MenuItem icon={Briefcase} label="Tasks" badge={2} />
        <MenuItem icon={Activity} label="Activity" />
        <MenuItem icon={Users} label="Customers" active />
        <MenuItem icon={Settings} label="Settings" />
      </nav>

      {/* Projects */}
      <div>
        <h3 className="text-xs font-medium text-gray-400 uppercase mb-4 pl-3">Projects</h3>
        <nav className="flex flex-col gap-1">
          {SIDEBAR_PROJECTS.map((project, index) => {
            const Icon = [Zap, TrendingUp, RefreshCw, Megaphone][index % 4];
            return (
              <MenuItem 
                key={project.id} 
                icon={Icon} 
                label={project.name} 
                badge={project.count} 
                simpleIcon 
              />
            );
          })}
        </nav>
      </div>

      {/* Members */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4 pl-3 pr-2">
          <h3 className="text-xs font-medium text-gray-400 uppercase">Members</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <Plus size={16} />
          </button>
        </div>
        <div className="flex flex-col gap-4 pl-3">
          {MEMBERS.map(member => (
            <div key={member.id} className="flex items-center gap-3">
              <div className="relative">
                <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full object-cover" />
                {member.status === 'online' && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#FDFDFB] rounded-full"></span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800 leading-none">{member.name}</span>
                <span className="text-xs text-gray-400 mt-1">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User & Logout */}
      <div className="mt-auto pt-4 flex items-center gap-3 pl-3">
         <img src="https://picsum.photos/seed/iona/64/64" alt="Iona Rollins" className="w-8 h-8 rounded-full object-cover" />
         <span className="text-sm font-medium text-gray-700">Iona Rollins</span>
         <button className="ml-auto text-gray-400 hover:text-gray-600">
           <LogOut size={18} />
         </button>
      </div>
    </aside>
  );
};

interface MenuItemProps {
  icon: React.ElementType;
  label: string;
  badge?: number;
  active?: boolean;
  simpleIcon?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label, badge, active, simpleIcon }) => {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 group
        ${active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
      `}
    >
      <Icon 
        size={20} 
        strokeWidth={simpleIcon ? 2 : 1.5}
        className={`${active ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`} 
      />
      <span className="flex-1 text-sm">{label}</span>
      {badge && (
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${active ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-500'}`}>
          {badge}
        </span>
      )}
    </a>
  );
};

export default Sidebar;
