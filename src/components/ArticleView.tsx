import React, { useEffect } from 'react';
import { ArticleEntry } from '../utils/markdownLoader';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

interface ArticleViewProps {
  article: ArticleEntry;
  onBack: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article]);

  return (
    <article className="space-y-8 animate-in fade-in duration-150">
      {/* Back Button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to articles</span>
        </button>
      </div>

      {/* Header & Meta */}
      <header className="space-y-3 border-b border-zinc-800 pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-semibold uppercase text-[11px] border border-blue-500/20">
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-zinc-400">
            <Calendar className="w-3 h-3" />
            <span>{article.publishedDate}</span>
          </span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1 text-zinc-400">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            {article.subtitle}
          </p>
        )}

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Rendered Markdown Content */}
      <div
        className="book-article-content text-sm sm:text-base leading-relaxed text-zinc-300 space-y-4"
        dangerouslySetInnerHTML={{ __html: article.htmlContent }}
      />
    </article>
  );
};
