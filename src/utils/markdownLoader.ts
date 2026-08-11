import { marked } from 'marked';

export interface BookEntry {
  slug: string;
  title: string;
  author: string;
  status: 'reading' | 'want-to-read' | 'completed';
  rating?: string;
  category: string;
  year?: string;
  priority?: 'High' | 'Medium' | 'Low';
  progress?: string;
  link?: string;
  rawContent: string;
  htmlContent: string;
}

export interface ArticleEntry {
  slug: string;
  title: string;
  subtitle?: string;
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  rawContent: string;
  htmlContent: string;
}

marked.setOptions({
  gfm: true,
  breaks: true
});

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = raw.match(frontmatterRegex);

  const meta: Record<string, string> = {};
  let body = raw;

  if (match) {
    const yamlBlock = match[1];
    body = raw.slice(match[0].length).trim();

    yamlBlock.split('\n').forEach((line) => {
      const colonIdx = line.indexOf(':');
      if (colonIdx !== -1) {
        const key = line.slice(0, colonIdx).trim();
        let value = line.slice(colonIdx + 1).trim();
        value = value.replace(/^["']|["']$/g, '');
        meta[key] = value;
      }
    });
  }

  return { meta, body };
}

export function parseMarkdownBook(raw: string, filename: string): BookEntry {
  const { meta, body } = parseFrontmatter(raw);
  const fallbackSlug = filename.split('/').pop()?.replace(/\.md$/, '') || 'unknown';

  return {
    slug: meta.slug || fallbackSlug,
    title: meta.title || 'Untitled Book',
    author: meta.author || 'Unknown Author',
    status: (meta.status as any) || 'want-to-read',
    rating: meta.rating || undefined,
    category: meta.category || 'General',
    year: meta.year || undefined,
    priority: (meta.priority as any) || undefined,
    progress: meta.progress || undefined,
    link: meta.link || undefined,
    rawContent: body,
    htmlContent: body ? (marked.parse(body) as string) : ''
  };
}

export function parseMarkdownArticle(raw: string, filename: string): ArticleEntry {
  const { meta, body } = parseFrontmatter(raw);
  const fallbackSlug = filename.split('/').pop()?.replace(/\.md$/, '') || 'unknown';

  let parsedTags: string[] = [];
  if (meta.tags) {
    try {
      parsedTags = JSON.parse(meta.tags);
    } catch {
      parsedTags = meta.tags.replace(/^\[|\]$/g, '').split(',').map((t) => t.trim().replace(/^["']|["']$/g, ''));
    }
  }

  return {
    slug: meta.slug || fallbackSlug,
    title: meta.title || 'Untitled Article',
    subtitle: meta.subtitle || undefined,
    publishedDate: meta.publishedDate || '2026-01-01',
    readTime: meta.readTime || '5 min read',
    category: meta.category || 'General',
    tags: parsedTags,
    rawContent: body,
    htmlContent: body ? (marked.parse(body) as string) : ''
  };
}

export function loadReadingList(): BookEntry[] {
  const modules = import.meta.glob('/src/content/reading-list/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  const list: BookEntry[] = [];

  for (const [path, rawContent] of Object.entries(modules)) {
    list.push(parseMarkdownBook(rawContent, path));
  }

  return list.sort((a, b) => {
    if (a.status === 'reading' && b.status !== 'reading') return -1;
    if (b.status === 'reading' && a.status !== 'reading') return 1;
    return a.title.localeCompare(b.title);
  });
}

export function loadBooksRead(): BookEntry[] {
  const modules = import.meta.glob('/src/content/books-read/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  const books: BookEntry[] = [];

  for (const [path, rawContent] of Object.entries(modules)) {
    books.push(parseMarkdownBook(rawContent, path));
  }

  return books.sort((a, b) => {
    const ratingA = parseInt(a.rating || '0', 10);
    const ratingB = parseInt(b.rating || '0', 10);
    if (ratingB !== ratingA) return ratingB - ratingA;
    return a.title.localeCompare(b.title);
  });
}

export function loadAllArticles(): ArticleEntry[] {
  const modules = import.meta.glob('/src/content/articles/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  const articles: ArticleEntry[] = [];

  for (const [path, rawContent] of Object.entries(modules)) {
    articles.push(parseMarkdownArticle(rawContent, path));
  }

  return articles.sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}
