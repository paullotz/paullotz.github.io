import React, { useEffect } from 'react';
import { BookEntry } from '../utils/markdownLoader';
import { ArrowLeft, ExternalLink, Calendar, BookOpen, Star, Bookmark } from 'lucide-react';

interface BookArticleViewProps {
  book: BookEntry;
  onBack: () => void;
}

export const BookArticleView: React.FC<BookArticleViewProps> = ({ book, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [book]);

  return (
    <article className="space-y-8 animate-in fade-in duration-150">
      {/* Back Button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to list</span>
        </button>
      </div>

      {/* Header & Meta */}
      <header className="space-y-3 border-b border-zinc-800 pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-semibold uppercase text-[11px] border border-zinc-700/60">
            {book.category}
          </span>
          {book.year && (
            <span className="flex items-center gap-1 text-zinc-400">
              <Calendar className="w-3 h-3" />
              <span>{book.year}</span>
            </span>
          )}
          {book.rating && (
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3 h-3 fill-current" />
              <span>{book.rating}</span>
            </span>
          )}
          {book.status === 'reading' && (
            <span className="flex items-center gap-1 text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
              <BookOpen className="w-3 h-3" />
              <span>Reading {book.progress ? `(${book.progress})` : ''}</span>
            </span>
          )}
          {book.priority && book.status === 'want-to-read' && (
            <span className="flex items-center gap-1 text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700/50">
              <Bookmark className="w-3 h-3" />
              <span>Priority: {book.priority}</span>
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {book.title}
        </h1>

        <div className="flex items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400">
          <span>by {book.author}</span>
          {book.link && (
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 hover:underline"
            >
              <span>External Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </header>

      {/* Rendered Markdown Content or Empty State */}
      {book.htmlContent ? (
        <div
          className="book-article-content text-sm sm:text-base leading-relaxed text-zinc-300 space-y-4"
          dangerouslySetInnerHTML={{ __html: book.htmlContent }}
        />
      ) : (
        <div className="py-12 text-center text-xs text-zinc-500 border border-dashed border-zinc-800 rounded-lg">
          No notes written yet for this book.
        </div>
      )}
    </article>
  );
};
