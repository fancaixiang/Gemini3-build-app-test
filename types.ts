export interface Manager {
  name: string;
  avatar: string;
}

export interface KanbanCardData {
  id: string;
  companyName: string;
  description: string;
  date: string;
  comments: number;
  attachments: number;
  variant?: 'dark';
  location?: string;
  email?: string;
  manager?: Manager;
}

export interface KanbanColumn {
  id: string;
  title: string;
  count: number;
  cards: KanbanCardData[];
}

export interface Project {
  id: string;
  name: string;
  count?: number;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline';
}
