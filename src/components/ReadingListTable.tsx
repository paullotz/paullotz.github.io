import React, { useState, useMemo } from 'react';
import { BookEntry } from '../utils/markdownLoader';
import { Search } from 'lucide-react';

interface ReadingListTableProps {
  books: BookEntry[];
}

export const ReadingListTable: React.FC<ReadingListTableProps> = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return books;
    const q = searchQuery.toLowerCase();
    return books.filter((book) => {
      return (
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.category.toLowerCase().includes(q)
      );
    });
  }, [books, searchQuery]);

  return (
    <div className="space-y-3">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search reading list backlog..."
          className="w-full pl-10 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-zinc-800 bg-zinc-900/60 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-700 shadow-sm"
        />
      </div>

      {/* Non-clickable Backlog Table */}
      <div className="overflow-x-auto border border-zinc-800/80 rounded-lg">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-zinc-900/60 border-b border-zinc-800 text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
            <tr>
              <th className="py-2.5 px-4">Book / Title</th>
              <th className="py-2.5 px-4">Author</th>
              <th className="py-2.5 px-4 hidden sm:table-cell">Category</th>
              <th className="py-2.5 px-4 hidden md:table-cell">Year</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {filtered.map((book) => (
              <tr key={book.slug} className="hover:bg-zinc-900/30 transition-colors">
                <td className="py-3 px-4 font-medium text-zinc-200">
                  {book.title}
                </td>
                <td className="py-3 px-4 text-zinc-400 text-xs">
                  {book.author}
                </td>
                <td className="py-3 px-4 text-zinc-500 text-xs hidden sm:table-cell">
                  {book.category}
                </td>
                <td className="py-3 px-4 text-zinc-500 text-xs hidden md:table-cell">
                  {book.year || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="py-8 text-center text-xs text-zinc-500 border border-dashed border-zinc-800/60 rounded-lg">
          No books found matching &ldquo;{searchQuery}&rdquo;
        </div>
      )}
    </div>
  );
};
