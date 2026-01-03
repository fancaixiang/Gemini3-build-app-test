import { Project, Member, KanbanColumnData } from './types';

export const SIDEBAR_PROJECTS: Project[] = [
  { id: '1', name: 'BizConnect', count: 7 },
  { id: '2', name: 'Growth Hub' },
  { id: '3', name: 'Conversion Path' },
  { id: '4', name: 'Marketing' },
];

export const MEMBERS: Member[] = [
  { id: '1', name: 'Sandra Perry', role: 'Product Manager', avatar: 'https://picsum.photos/seed/sandra/64/64', status: 'online' },
  { id: '2', name: 'Antony Cardenas', role: 'Sales Manager', avatar: 'https://picsum.photos/seed/antony/64/64', status: 'online' },
  { id: '3', name: 'Jamal Connolly', role: 'Growth Marketer', avatar: 'https://picsum.photos/seed/jamal/64/64', status: 'offline' },
  { id: '4', name: 'Cara Carr', role: 'SEO Specialist', avatar: 'https://picsum.photos/seed/cara/64/64', status: 'online' },
];

export const KANBAN_DATA: KanbanColumnData[] = [
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
