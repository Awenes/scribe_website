# Scribe website

The product and documentation website for [Scribe](https://github.com/Awenes/Scribe), a local-first developer activity tracker for VS Code.

The site explains the product, its privacy model, and the workflows behind activity logs, summaries, diffs, and snapshot restoration.

## Role in the product

The extension and website have deliberately separate responsibilities:

- **Scribe extension:** observes workspace activity and manages local logs and snapshots
- **Scribe website:** communicates the product, documents its behavior, and helps developers evaluate it before installation

This separation keeps the extension focused while allowing the documentation experience to evolve independently.

## Architecture

- React and TypeScript
- Vite static build
- React Router browser routing
- Prebuilt HTML entry points for `/` and `/docs`
- Netlify deployment configuration

The site requires no application server, SSR runtime, API routes, authentication, or persistence layer.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Product overview and primary calls to action |
| `/docs` | Documentation and product behavior |

The production build writes a dedicated `dist/docs/index.html` entry point so the documentation route can load directly with route-specific metadata.

## Local development

Node.js 20.19 or newer is required.

```bash
npm install
npm run dev
```

## Validation

Run the complete local validation suite before opening a pull request:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Deployment

The committed `netlify.toml` configuration:

- runs the production build
- publishes the generated `dist` directory
- provides the fallback required for browser-history routes
- preserves direct access to `/docs`

## Design principles

- Explain behavior before asking for trust
- Treat privacy and local ownership as product features
- Keep documentation close to the workflows it describes
- Prefer a fast, focused experience over unnecessary application infrastructure

## Related repository

The VS Code extension lives in [Awenes/Scribe](https://github.com/Awenes/Scribe).
