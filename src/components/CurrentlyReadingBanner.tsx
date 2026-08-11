import React from 'react';
import { BookEntry } from '../utils/markdownLoader';

interface CurrentlyReadingBannerProps {
  book?: BookEntry;
}

export const CurrentlyReadingBanner: React.FC<CurrentlyReadingBannerProps> = ({ book }) => {
  if (!book) return null;

  return (
    <div className="w-full mb-8 py-2 px-3.5 rounded-md border border-zinc-800/80 bg-zinc-900/40 text-xs text-zinc-400 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-zinc-500">Currently reading:</span>
        <span className="text-zinc-200 font-medium">{book.title}</span>
        <span className="text-zinc-500 hidden sm:inline">by {book.author}</span>
      </div>
    </div>
  );
};
