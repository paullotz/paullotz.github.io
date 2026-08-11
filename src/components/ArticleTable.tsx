import React, { useState, useMemo } from 'react';
import { ArticleEntry } from '../utils/markdownLoader';
import { Search, Clock, FileText } from 'lucide-react';

interface ArticleTableProps {
  articles: ArticleEntry[];
  onSelectArticle: (article: ArticleEntry) => void;
}

export const ArticleTable: React.FC<ArticleTableProps> = ({ articles, onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return articles;
    const q = searchQuery.toLowerCase();
    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        (article.subtitle && article.subtitle.toLowerCase().includes(q)) ||
        article.rawContent.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [articles, searchQuery]);

  return (
    <div className="space-y-4">
      {articles.length > 0 && (
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-zinc-800 bg-zinc-900/80 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 shadow-sm"
          />
        </div>
      )}

      {articles.length > 0 ? (
        <div className="overflow-x-auto border border-zinc-800 rounded-lg">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-zinc-900/80 border-b border-zinc-800 text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
              <tr>
                <th className="py-3 px-4">Article / Essay</th>
                <th className="py-3 px-4 hidden sm:table-cell">Category</th>
                <th className="py-3 px-4 hidden md:table-cell">Read Time</th>
                <th className="py-3 px-4 text-right sm:text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {filteredArticles.map((article) => (
                <tr
                  key={article.slug}
                  onClick={() => onSelectArticle(article)}
                  className="hover:bg-zinc-800/40 cursor-pointer transition-colors group"
                >
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {article.title}
                    </div>
                    {article.subtitle && (
                      <div className="text-xs text-zinc-400 line-clamp-1 mt-0.5 font-normal">
                        {article.subtitle}
                      </div>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-blue-300 hidden sm:table-cell">
                    #{article.category}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-zinc-400 hidden md:table-cell">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      {article.readTime}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-zinc-400 text-right sm:text-left whitespace-nowrap">
                    {article.publishedDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="py-16 text-center border border-dashed border-zinc-800 rounded-xl bg-zinc-900/30 p-8 space-y-2">
          <FileText className="w-8 h-8 text-zinc-600 mx-auto stroke-[1.5]" />
          <h3 className="text-sm font-semibold text-zinc-300">No articles published yet</h3>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto">
            Technical essays and writeups on systems and software engineering will appear here as they are written.
          </p>
        </div>
      )}
    </div>
  );
};
