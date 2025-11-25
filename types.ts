import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  status: 'Completed' | 'In Progress' | 'Concept';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}