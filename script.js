// --- Data Constants ---
const SIDEBAR_PROJECTS = [
  { id: '1', name: 'BizConnect', count: 7, icon: 'zap' },
  { id: '2', name: 'Growth Hub', icon: 'trending-up' },
  { id: '3', name: 'Conversion Path', icon: 'refresh-cw' },
  { id: '4', name: 'Marketing', icon: 'megaphone' },
];

const MEMBERS = [
  { id: '1', name: 'Sandra Perry', role: 'Product Manager', avatar: 'https://picsum.photos/seed/sandra/64/64', status: 'online' },
  { id: '2', name: 'Antony Cardenas', role: 'Sales Manager', avatar: 'https://picsum.photos/seed/antony/64/64', status: 'online' },
  { id: '3', name: 'Jamal Connolly', role: 'Growth Marketer', avatar: 'https://picsum.photos/seed/jamal/64/64', status: 'offline' },
  { id: '4', name: 'Cara Carr', role: 'SEO Specialist', avatar: 'https://picsum.photos/seed/cara/64/64', status: 'online' },
];

const KANBAN_DATA = [
  {
    id: 'contacted',
    title: 'Contacted',
    count: 12,
    cards: [
      {
        id: 'c1',
        companyName: 'ByteBridge',
        description: 'Corporate and personal data protection on a turnkey basis',
        date: '18 Apr',
        comments: 2,
        attachments: 1,
      },
      {
        id: 'c2',
        companyName: 'AI Synergy',
        description: 'Innovative solutions based on artificial intelligence',
        date: '21 Mar',
        comments: 1,
        attachments: 3,
      },
      {
        id: 'c3',
        companyName: 'LeadBoost Agency',
        description: 'Lead attraction and automation for small busines...',
        date: 'No due date',
        comments: 4,
        attachments: 7,
      },
    ],
  },
  {
    id: 'negotiation',
    title: 'Negotiation',
    count: 17,
    cards: [
      {
        id: 'n1',
        companyName: 'SkillUp Hub',
        description: 'Platform for professional development of specialists',
        date: '09 Mar',
        comments: 4,
        attachments: 1,
      },
      {
        id: 'n2',
        companyName: 'Thera Well',
        description: 'Platform for psychological support and consultations',
        date: 'No due date',
        comments: 7,
        attachments: 2,
      },
      {
        id: 'n3',
        companyName: 'SwiftCargo',
        description: 'International transportation of chemical goods',
        date: '23 Apr',
        comments: 2,
        attachments: 5,
      },
    ],
  },
  {
    id: 'offer_sent',
    title: 'Offer Sent',
    count: 13,
    cards: [
      {
        id: 'o1',
        companyName: 'FitLife Nutrition',
        description: 'Nutritious food and nutraceuticals for individuals',
        date: '10 Mar',
        comments: 1,
        attachments: 3,
      },
      {
        id: 'o2',
        companyName: 'Prime Estate',
        description: 'Agency-developer of low-rise elite and commercial real estate',
        date: '16 Apr',
        comments: 1,
        attachments: 1,
        variant: 'dark',
        location: '540 Realty Blvd, Miami, FL 33132',
        email: 'contact@primeestate.com',
        manager: {
            name: 'Antony Cardenas',
            avatar: 'https://picsum.photos/seed/antony/64/64'
        }
      },
      {
        id: 'o3',
        companyName: 'NextGen University',
        description: 'Higher education institution focusing on technology',
        date: '12 May',
        comments: 5,
        attachments: 2,
      },
    ],
  },
  {
    id: 'deal_closed',
    title: 'Deal Closed',
    count: 12,
    cards: [
      {
        id: 'd1',
        companyName: 'CloudSphere',
        description: 'Cloud services for data storage and processing for le...',
        date: '24 Mar',
        comments: 2,
        attachments: 1,
      },
      {
        id: 'd2',
        companyName: 'Advantage Medi',
        description: 'Full cycle of digital advertising and social media promotion',
        date: '05 Apr',
        comments: 1,
        attachments: 3,
      },
      {
        id: 'd3',
        companyName: 'Safebank Solutions',
        description: 'Innovative financial technologies and digital pay...',
        date: '30 Mar',
        comments: 4,
        attachments: 7,
      },
    ],
  },
];

const CHART_DATA = [
  { name: 'Mon', value: 3, type: 'solid' },
  { name: 'Tue', value: 8, type: 'stripe' },
  { name: 'Wed', value: 14, type: 'solid' },
  { name: 'Thu', value: 9, type: 'solid' },
  { name: 'Fri', value: 4, type: 'stripe' },
];


// --- Helper Functions ---

function createIcon(name, size = 20, className = '') {
    return `<i data-lucide="${name}" width="${size}" height="${size}" class="${className}"></i>`;
}

// --- Render Functions ---

function renderSidebar() {
    const mainMenuEl = document.getElementById('main-menu');
    const projectsMenuEl = document.getElementById('projects-menu');
    const membersListEl = document.getElementById('members-list');

    // Main Menu Items
    const mainMenuItems = [
        { icon: 'layout-dashboard', label: 'Dashboard' },
        { icon: 'briefcase', label: 'Tasks', badge: 2 },
        { icon: 'activity', label: 'Activity' },
        { icon: 'users', label: 'Customers', active: true },
        { icon: 'settings', label: 'Settings' },
    ];

    mainMenuEl.innerHTML = mainMenuItems.map(item => `
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 group ${item.active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}">
            ${createIcon(item.icon, 20, item.active ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700')}
            <span class="flex-1 text-sm">${item.label}</span>
            ${item.badge ? `<span class="text-xs font-medium px-2 py-0.5 rounded-full ${item.active ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-500'}">${item.badge}</span>` : ''}
        </a>
    `).join('');

    // Projects Items
    projectsMenuEl.innerHTML = SIDEBAR_PROJECTS.map(project => `
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 group text-gray-500 hover:bg-gray-50 hover:text-gray-900">
            ${createIcon(project.icon, 20, 'text-gray-500 group-hover:text-gray-700')}
            <span class="flex-1 text-sm">${project.name}</span>
            ${project.count ? `<span class="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">${project.count}</span>` : ''}
        </a>
    `).join('');

    // Members
    membersListEl.innerHTML = MEMBERS.map(member => `
        <div class="flex items-center gap-3">
            <div class="relative">
                <img src="${member.avatar}" alt="${member.name}" class="w-8 h-8 rounded-full object-cover" />
                ${member.status === 'online' ? '<span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#FDFDFB] rounded-full"></span>' : ''}
            </div>
            <div class="flex flex-col">
                <span class="text-sm font-medium text-gray-800 leading-none">${member.name}</span>
                <span class="text-xs text-gray-400 mt-1">${member.role}</span>
            </div>
        </div>
    `).join('');
}

function renderStatsArea() {
    const container = document.getElementById('stats-area');
    
    // Bar Chart Construction
    const maxVal = Math.max(...CHART_DATA.map(d => d.value));
    const barsHtml = CHART_DATA.map(d => {
        const heightPct = (d.value / maxVal) * 100;
        const fill = d.type === 'solid' ? '#1c1c1c' : 'url(#stripe-pattern)';
        return `
            <div class="flex flex-col items-center gap-2 flex-1 h-full justify-end group cursor-pointer">
                <div class="w-4 rounded-t-sm rounded-b-sm transition-all duration-300 group-hover:opacity-80" 
                     style="height: ${heightPct}%; background: ${fill}; border-radius: 4px;"></div>
                <span class="text-xs font-medium text-gray-500">${d.name}</span>
            </div>
        `;
    }).join('');

    // Gauge Chart Logic
    const gaugeTicks = Array.from({ length: 40 }).map((_, i) => {
        const angle = (i / 40) * 180;
        const isHighlighted = i < 27; // ~68%
        return `<line 
            x1="100" y1="100" x2="100" y2="10" 
            transform="rotate(${angle - 90} 100 100)" 
            stroke="${isHighlighted ? "#1c1c1c" : "#e5e7eb"}" 
            stroke-width="2" 
            stroke-dasharray="6 100" 
            stroke-dashoffset="-85"
        />`;
    }).join('');

    container.innerHTML = `
        <!-- New Customers Chart -->
        <div class="col-span-12 xl:col-span-4 bg-transparent rounded-3xl p-2 relative">
            <h2 class="text-base font-semibold text-gray-900 mb-1">New customers</h2>
            <div class="relative h-48 mt-2 pl-6">
                <!-- Y Axis Labels -->
                <div class="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-gray-400 h-[calc(100%-24px)] pointer-events-none">
                    <span>15</span>
                    <span>10</span>
                    <span>5</span>
                    <span>0</span>
                </div>
                <!-- Bars -->
                <div class="flex items-end h-full gap-2 pb-6 border-b border-transparent">
                    ${barsHtml}
                </div>
            </div>
        </div>

        <!-- Gauge Chart -->
        <div class="col-span-12 xl:col-span-4 flex flex-col items-center justify-center p-2">
            <div class="relative w-48 h-24 overflow-hidden mb-2">
                <svg viewBox="0 0 200 100" class="w-full h-full">
                    ${gaugeTicks}
                </svg>
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                    <span class="block text-4xl font-bold text-gray-900">68%</span>
                </div>
            </div>
            <span class="text-sm font-medium text-gray-500 mt-2">Successful deals</span>
        </div>

        <!-- Stats Cards -->
        <div class="col-span-12 xl:col-span-4 flex flex-col justify-center gap-8 pl-8">
            <div class="flex items-center justify-between group cursor-pointer">
                <div>
                    <div class="text-4xl font-semibold text-gray-900 mb-1">53</div>
                    <div class="text-xs text-gray-500 leading-tight">Tasks <br/> in progress</div>
                </div>
                ${createIcon('arrow-right', 20, 'text-gray-400 group-hover:text-gray-900 transition-colors')}
            </div>

            <div class="flex items-center justify-between group cursor-pointer">
                <div>
                    <div class="text-4xl font-semibold text-gray-900 mb-1">$ 15.890</div>
                    <div class="text-xs text-gray-500 leading-tight">Prepayments <br/> from customers</div>
                </div>
                ${createIcon('arrow-right', 20, 'text-gray-400 group-hover:text-gray-900 transition-colors')}
            </div>
        </div>
    `;
}

function renderKanbanBoard() {
    const container = document.getElementById('kanban-board');
    
    container.innerHTML = KANBAN_DATA.map(column => {
        const cardsHtml = column.cards.map(card => {
            const isDark = card.variant === 'dark';
            
            // Optional dark variant sections
            let extraDetails = '';
            if (isDark) {
                extraDetails = `
                    <div class="mb-6 space-y-3">
                        ${card.location ? `
                        <div class="flex items-center gap-2 text-[10px] text-gray-300">
                            ${createIcon('map-pin', 12, 'shrink-0')}
                            <span>${card.location}</span>
                        </div>` : ''}
                        
                        ${card.email ? `
                        <div class="flex items-center gap-2 text-[10px] text-gray-300">
                             ${createIcon('mail', 12, 'shrink-0')}
                            <span>${card.email}</span>
                        </div>` : ''}

                        ${card.manager ? `
                        <div class="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                            <img src="${card.manager.avatar}" alt="Manager" class="w-6 h-6 rounded-full" />
                            <div class="flex flex-col">
                                <span class="text-[10px] text-gray-500">Manager</span>
                                <span class="text-[11px] font-medium text-white">${card.manager.name}</span>
                            </div>
                        </div>` : ''}
                    </div>
                `;
            }

            return `
                <div class="p-5 rounded-[20px] mb-4 relative group transition-transform duration-200 hover:-translate-y-1 ${isDark ? 'bg-[#1c1c1c] text-white shadow-2xl shadow-black/20' : 'bg-white text-gray-900 shadow-sm border border-gray-100'}">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-semibold text-[15px] ${isDark ? 'text-white' : 'text-gray-900'}">${card.companyName}</h3>
                        <button class="${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'}">
                             ${createIcon('more-vertical', 16)}
                        </button>
                    </div>

                    <p class="text-xs mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}">
                        ${card.description}
                    </p>

                    ${extraDetails}

                    <div class="flex items-center justify-between ${isDark && card.manager ? 'mt-0' : 'mt-auto'}">
                        <div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium ${isDark ? 'bg-white/10 text-gray-300' : 'bg-gray-50 text-gray-600'}">
                            ${createIcon('calendar', 12)}
                            <span>${card.date}</span>
                        </div>

                        <div class="flex items-center gap-3">
                            <div class="flex items-center gap-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}">
                                ${createIcon('message-square', 14)}
                                <span>${card.comments}</span>
                            </div>
                            <div class="flex items-center gap-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}">
                                ${createIcon('paperclip', 14)}
                                <span>${card.attachments}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="flex flex-col">
                <div class="flex items-center justify-between mb-6 px-1">
                    <h3 class="font-semibold text-gray-900 text-lg">${column.title}</h3>
                    <div class="flex items-center gap-2">
                        <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-sm">
                            ${column.count}
                        </span>
                        <button class="text-gray-400 hover:text-gray-600">
                             ${createIcon('arrow-up-down', 14)}
                        </button>
                    </div>
                </div>
                
                <div class="flex-1">
                    ${cardsHtml}
                    <!-- Placeholder for scrolling -->
                    <div class="h-10"></div>
                </div>
            </div>
        `;
    }).join('');
}

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    renderStatsArea();
    renderKanbanBoard();
    
    // Initialize Lucide Icons
    lucide.createIcons();
});
