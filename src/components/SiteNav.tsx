import React from 'react';
import { MoonComicIcon } from './MoonComicIcon';

export type MainNavTab = 'books' | 'articles';

interface SiteNavProps {
  activeTab: MainNavTab;
  setActiveTab: (tab: MainNavTab) => void;
  booksCount: number;
  articlesCount: number;
}

export const SiteNav: React.FC<SiteNavProps> = ({
  activeTab,
  setActiveTab,
  booksCount,
  articlesCount
}) => {
  return (
    <header className="sticky top-4 z-40 mb-6 max-w-[880px] mx-auto w-full">
      <nav className="nav-pill px-3 sm:px-4 py-2 flex items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
        {/* Brand & Main Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <button
            onClick={() => setActiveTab('books')}
            className="flex items-center gap-2 font-bold tracking-tight text-white hover:text-zinc-300 transition-colors pr-2 group"
          >
            <MoonComicIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            <span>Paul L.</span>
          </button>

          <span className="text-zinc-700 select-none hidden sm:inline mr-1">|</span>

          <button
            onClick={() => setActiveTab('books')}
            className={`px-3 py-1 rounded-full transition-all ${
              activeTab === 'books'
                ? 'bg-zinc-800 text-white font-semibold shadow-sm border border-zinc-700/60'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
            }`}
          >
            <span>Books</span>
            <span className="ml-1.5 text-[11px] text-zinc-400">({booksCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`px-3 py-1 rounded-full transition-all ${
              activeTab === 'articles'
                ? 'bg-zinc-800 text-white font-semibold shadow-sm border border-zinc-700/60'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
            }`}
          >
            <span>Articles</span>
            <span className="ml-1.5 text-[11px] text-zinc-400">({articlesCount})</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
