import React, { useState, useMemo } from 'react';
import { BookEntry } from '../utils/markdownLoader';
import { Search, Star } from 'lucide-react';

interface BooksReadTableProps {
  books: BookEntry[];
  onSelectBook: (book: BookEntry) => void;
}

export const BooksReadTable: React.FC<BooksReadTableProps> = ({ books, onSelectBook }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return books;
    const q = searchQuery.toLowerCase();
    return books.filter((book) => {
      return (
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.category.toLowerCase().includes(q) ||
        book.rawContent.toLowerCase().includes(q)
      );
    });
  }, [books, searchQuery]);

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search finished books and summaries..."
          className="w-full pl-10 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-zinc-800 bg-zinc-900/80 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 shadow-sm"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-zinc-800 rounded-lg">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-zinc-900/80 border-b border-zinc-800 text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
            <tr>
              <th className="py-3 px-4">Book / Title</th>
              <th className="py-3 px-4 hidden sm:table-cell">Author</th>
              <th className="py-3 px-4 hidden md:table-cell">Category</th>
              <th className="py-3 px-4">Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {filtered.map((book) => (
              <tr
                key={book.slug}
                onClick={() => onSelectBook(book)}
                className="hover:bg-zinc-800/40 cursor-pointer transition-colors group"
              >
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {book.title}
                  </div>
                  <div className="text-xs text-zinc-400 sm:hidden mt-0.5">
                    {book.author}
                  </div>
                </td>
                <td className="py-3.5 px-4 text-zinc-300 text-xs hidden sm:table-cell">
                  {book.author}
                </td>
                <td className="py-3.5 px-4 text-zinc-400 text-xs hidden md:table-cell">
                  {book.category}
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{book.rating ? `${book.rating}` : '5/5'}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="py-12 text-center text-xs text-zinc-500 border border-dashed border-zinc-800 rounded-lg">
          No books found matching &ldquo;{searchQuery}&rdquo;
        </div>
      )}
    </div>
  );
};
