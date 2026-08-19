# Scribe website

Static product and documentation website for [Scribe](https://github.com/Awenes/Scribe), a local-first developer activity logger for VS Code.

## Architecture

- React and TypeScript
- Vite static build
- React Router browser routing
- Prebuilt HTML entry points for `/` and `/docs`

No application server, SSR runtime, API routes, authentication, or persistence layer is required.

## Local development

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run typecheck
npm run lint
npm test
```

## Netlify

The committed `netlify.toml` runs `npm run build`, publishes `dist`, and provides the SPA fallback required for browser history routes. The build also writes `dist/docs/index.html` so `/docs` is directly loadable with route-specific metadata.
