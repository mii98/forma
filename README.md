# Forma

A frontend portfolio store for thoughtfully chosen everyday essentials.

Built with React, Vite, JavaScript and CSS. The project includes product
discovery, saved products, a shopping bag and a complete demo checkout.

## Features

- Product search, category and price filters, and sorting
- Shareable Shop filters through URL search parameters
- Individual product pages and a New Arrivals collection
- Saved products
- Shopping bag with quantity controls and item removal
- Persistent bag and saved products using localStorage
- Checkout validation and demo order confirmation
- Responsive layouts and mobile navigation
- Empty states and a page for unmatched routes

## Tech stack

- React
- React Router
- Vite
- JavaScript
- CSS
- ESLint

## Run locally

Install the dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create the production build in `dist` |
| `npm run preview` | Preview the production build locally |

## Project structure

- `src/components` — reusable interface components
- `src/pages` — application pages
- `src/data` — initial product data
- `src/assets` — local images
- `src/App.jsx` — shared layout and application state
- `src/router.jsx` — route definitions

## Data and demo limitations

This application has no backend and does not process payments or create
real orders.

The shopping bag and saved products are stored in the browser's
localStorage. They are not synchronised between devices.

Order confirmation is kept in memory and is cleared on refresh.
Delivery details are not sent to a server or saved to localStorage.

## Deployment

Build command: `npm run build`

Publish directory: `dist`

Configure the host to serve `index.html` for application routes that do
not match a static file. This allows direct visits and refreshes on
routes such as `/shop`, `/bag` and `/saved`.

`npm run preview` is for local verification, not production hosting.