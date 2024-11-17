export interface User {
  id: string;
  email: string;
  username?: string;
  created_at: Date;
}

export type MediaType = 'image' | 'video' | 'link';

export interface Dream {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  media_url?: string;
  media_type?: MediaType;
  due_date?: Date;
  tags?: string[];
  created_at: Date;
  updated_at: Date;
}

export interface ProgressUpdate {
  id: string;
  dreamId: string;
  updateText?: string;
  mediaUrl?: string;
  createdAt: Date;
}

export interface AchievedDream {
  id: string;
  dreamId: string;
  achievedDate: Date;
  reflection?: string;
}

export interface Tag {
  id: string;
  name: string;
  createdAt: Date;
}

export enum MediaTypeEnum {
  Image = 'image',
  Video = 'video',
  Link = 'link',
}