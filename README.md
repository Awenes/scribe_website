# Scribe website

Marketing and documentation site for [Scribe](https://github.com/Awenes/Scribe), a local-first developer activity logger for VS Code.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The site has two routes: `/` and `/docs`.

## Validation

```bash
npm run typecheck
npm run lint
npm test
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin during deployment so canonical and social metadata use the final Pxxl URL.
