# Slice of Heaven frontend

React 18 + Redux Toolkit single-page app, built with [Vite](https://vite.dev).

Requires Node.js 20.19+ or 22.12+ and Yarn 1.

| Script         | What it does                                       |
| -------------- | -------------------------------------------------- |
| `yarn dev`     | Start the dev server at http://localhost:3000 (`yarn start` is an alias) |
| `yarn build`   | Production build into `build/`                     |
| `yarn preview` | Serve the production build locally                 |

The API base URL defaults to `http://localhost:4000`. Override it with the `VITE_API_URL` environment variable (for example in `.env.local`).

Deployed on Vercel; see `vercel.json` (SPA rewrites so client routes like `/home` work on refresh).
