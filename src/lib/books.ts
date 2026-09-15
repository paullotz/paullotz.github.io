import { getCollection, type CollectionEntry } from 'astro:content';

export type Book = CollectionEntry<'books-read'>;
export type QueuedBook = CollectionEntry<'reading-list'>;
export type AnyBook = Book | QueuedBook;
export type Article = CollectionEntry<'articles'>;

export function bookSlug(book: AnyBook): string {
  return book.data.slug || book.id.replace(/\.md$/, '');
}

export function articleSlug(article: Article): string {
  return article.data.slug || article.id.replace(/\.md$/, '');
}

function ratingValue(rating?: string): number {
  if (!rating) return 0;
  return parseInt(rating, 10) || 0;
}

export async function loadBooksRead(): Promise<Book[]> {
  const books = await getCollection('books-read');
  return books.sort((a, b) => {
    const r = ratingValue(b.data.rating) - ratingValue(a.data.rating);
    if (r !== 0) return r;
    return a.data.title.localeCompare(b.data.title);
  });
}

export async function loadReadingList(): Promise<QueuedBook[]> {
  const books = await getCollection('reading-list');
  return books.sort((a, b) => {
    if (a.data.status === 'reading' && b.data.status !== 'reading') return -1;
    if (b.data.status === 'reading' && a.data.status !== 'reading') return 1;
    return a.data.title.localeCompare(b.data.title);
  });
}

export async function loadAllArticles(): Promise<Article[]> {
  const articles = await getCollection('articles');
  return articles.sort((a, b) =>
    String(b.data.publishedDate).localeCompare(String(a.data.publishedDate)),
  );
}
