export type BookStatus = 'want-to-read' | 'reading' | 'completed' | 'abandoned';
export type PriorityLevel = 'High' | 'Medium' | 'Low';

export interface Book {
  id: string;
  title: string;
  author: string;
  year?: string;
  status: BookStatus;
  category: string;
  priority?: PriorityLevel;
  progress?: number; // 0 - 100 percentage
  currentPage?: number;
  totalPages?: number;
  rating?: number; // 1 - 5
  dateAdded: string;
  dateFinished?: string;
  whyRead?: string; // Reason to read / who recommended it
  summary?: string; // High level summary or synopsis
  keyTakeaways?: string[]; // Bulleted learnings or notes
  favoriteQuote?: string;
  link?: string;
  tags: string[];
  coverColor?: string; // subtle minimalist accent
}

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  publishedDate: string;
  readTime: string;
  category: string;
  summary: string;
  content: string; // Full markdown / formatted reading text
  tags: string[];
  externalUrl?: string;
  featured?: boolean;
}

export type ActiveTab = 'all' | 'reading-list' | 'articles';
