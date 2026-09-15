<p align="center">
  <img src="public/favicon.svg" width="48" height="48" alt="Logo" />
</p>

# personal page

Static books & articles site built with [Astro](https://astro.build) + Tailwind.

```bash
npm install # install
npm run dev # dev mode
npm run build # build to dist/
npm run preview # preview the build
npm run deploy # deploy page
```

## Content

- Finished books with notes: `src/content/books-read/*.md`
- Backlog + currently reading (`status: reading`): `src/content/reading-list/*.md`
- Essays: `src/content/articles/*.md`

Each book gets a static detail page at `/books/<slug>`, each article at
`/articles/<slug>`.
