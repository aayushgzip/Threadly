import {Location} from '@/services/location';

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: Location;
  category: string;
  upvotes: number;
  downvotes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  text: string;
  author: string;
  replies: Comment[];
}
