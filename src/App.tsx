import { useState, useEffect } from 'react';
import {
  loadReadingList,
  loadBooksRead,
  loadAllArticles,
  BookEntry,
  ArticleEntry
} from './utils/markdownLoader';
import { SiteNav, MainNavTab } from './components/SiteNav';
import { CurrentlyReadingBanner } from './components/CurrentlyReadingBanner';
import { BooksReadTable } from './components/BooksReadTable';
import { ReadingListTable } from './components/ReadingListTable';
import { BookArticleView } from './components/BookArticleView';
import { ArticleTable } from './components/ArticleTable';
import { ArticleView } from './components/ArticleView';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<MainNavTab>('books');
  const [readingList] = useState<BookEntry[]>(() => loadReadingList());
  const [booksRead] = useState<BookEntry[]>(() => loadBooksRead());
  const [articles] = useState<ArticleEntry[]>(() => loadAllArticles());

  const [selectedBook, setSelectedBook] = useState<BookEntry | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleEntry | null>(null);

  // The single currently reading book
  const currentlyReadingBook = readingList.find((b) => b.status === 'reading');
  const backlogQueue = readingList.filter((b) => b.status !== 'reading');

  // Sync with URL hash routing (e.g. #essentialism, #atomic-habits)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash) {
        // 1. Check articles
        const foundArticle = articles.find((a) => a.slug === hash || `article:${a.slug}` === hash);
        if (foundArticle) {
          setSelectedArticle(foundArticle);
          setSelectedBook(null);
          setActiveTab('articles');
          return;
        }

        // 2. Check books read
        const foundReadBook = booksRead.find((b) => b.slug === hash || `book:${b.slug}` === hash);
        if (foundReadBook) {
          setSelectedBook(foundReadBook);
          setSelectedArticle(null);
          setActiveTab('books');
          return;
        }
      }

      setSelectedBook(null);
      setSelectedArticle(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [booksRead, articles]);

  const handleSelectBook = (book: BookEntry) => {
    window.location.hash = book.slug;
    setSelectedBook(book);
    setSelectedArticle(null);
  };

  const handleSelectArticle = (article: ArticleEntry) => {
    window.location.hash = article.slug;
    setSelectedArticle(article);
    setSelectedBook(null);
  };

  const handleGoHome = (tab?: MainNavTab) => {
    window.location.hash = '';
    setSelectedBook(null);
    setSelectedArticle(null);
    if (tab) setActiveTab(tab);
  };

  const totalBooksCount = booksRead.length + backlogQueue.length + (currentlyReadingBook ? 1 : 0);

  return (
    <div className="min-h-screen py-6 px-4 sm:px-8 flex flex-col font-sans bg-[#121217] text-[#e4e4e7]">
      <div className="w-full max-w-[880px] mx-auto flex-grow flex flex-col">
        {/* Navigation Bar */}
        <SiteNav
          activeTab={activeTab}
          setActiveTab={(tab) => handleGoHome(tab)}
          booksCount={totalBooksCount}
          articlesCount={articles.length}
        />

        {/* Main Content Area */}
        <main className="flex-grow">
          {/* Article View */}
          {selectedArticle ? (
            <ArticleView
              article={selectedArticle}
              onBack={() => handleGoHome('articles')}
            />
          ) : selectedBook ? (
            /* Book Note / Article View */
            <BookArticleView
              book={selectedBook}
              onBack={() => handleGoHome('books')}
            />
          ) : activeTab === 'books' ? (
            /* Combined Books Page: Currently Reading Banner + Books I've Read + Reading List on the Same Page */
            <div className="space-y-10">
              {/* Subtle Monochrome Currently Reading Banner */}
              {currentlyReadingBook && (
                <CurrentlyReadingBanner book={currentlyReadingBook} />
              )}

              {/* Section 1: Books I've Read */}
              <section className="space-y-4">
                <header className="space-y-1 border-b border-zinc-800 pb-3 flex items-baseline justify-between">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-white">
                      Books I&apos;ve Read
                    </h2>
                    <p className="text-xs text-zinc-400">
                      Completed books with ratings and structured notes.
                    </p>
                  </div>
                  <span className="text-xs text-zinc-500">
                    {booksRead.length} books
                  </span>
                </header>

                <BooksReadTable
                  books={booksRead}
                  onSelectBook={handleSelectBook}
                />
              </section>

              {/* Section 2: Reading List (Backlog) on the same page */}
              <section className="space-y-4 pt-4">
                <header className="space-y-1 border-b border-zinc-800 pb-3 flex items-baseline justify-between">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-white">
                      Reading List
                    </h2>
                    <p className="text-xs text-zinc-400">
                      Backlog queue of books across computer science, systems, and literature.
                    </p>
                  </div>
                  <span className="text-xs text-zinc-500">
                    {backlogQueue.length} queued
                  </span>
                </header>

                <ReadingListTable
                  books={backlogQueue}
                />
              </section>
            </div>
          ) : (
            /* Articles View */
            <div className="space-y-6">
              <header className="space-y-1 border-b border-zinc-800 pb-4">
                <h1 className="text-2xl font-bold tracking-tight text-white">
                  Articles &amp; Essays
                </h1>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Technical writeups, architectural deep dives, and engineering essays.
                </p>
              </header>

              <ArticleTable
                articles={articles}
                onSelectArticle={handleSelectArticle}
              />
            </div>
          )}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
