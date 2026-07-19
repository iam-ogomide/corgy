# Corgy

A front-end e-commerce web app built with Angular. It showcases a product catalog with category filtering, a product detail view, a shopping cart, a blog section, and a contact page — with scroll animations and a swipeable carousel on the home page.

**Live demo:** [corgy-iota.vercel.app](https://corgy-iota.vercel.app)

## Features

- **Home page** — hero banner and a "new arrivals" carousel (via a custom swipe carousel component)
- **Collections** — product listing with category filtering (dropdown + checkbox filters) and a price range slider (`ng5-slider`)
- **Product details** — individual product view reached via `/product-detail/:name/:id`
- **Cart** — add/update/remove items, with quantity and total calculated client-side; cart contents persist in the browser via `localStorage`
- **Blog** and **Contact** pages
- Scroll-triggered animations throughout, powered by [AOS](https://michalsnik.github.io/aos/)

## Tech stack

- [Angular 13](https://angular.io/) (CLI-generated project)
- [RxJS](https://rxjs.dev/)
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- Bootstrap (via CDN/classes) for layout and components
- Karma + Jasmine for unit tests


## Project structure

```
src/app/
├── home/                # Landing page (banner + new arrivals)
├── collections/         # Product listing with filters
├── product-details/     # Single product view
├── cart/                 # Shopping cart
├── blog/                 # Blog page
├── contact/               # Contact page
├── navbar/, footer/      # Shared layout components
├── component/swipecaro/  # Home page carousel
└── services/
    ├── get-data.service.ts        # /collection data
    └── data-storage.service.ts    # Cart persistence (localStorage)
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (compatible with Angular 13, e.g. Node 14–16)
- [Angular CLI](https://angular.io/cli) v13.3.11: `npm install -g @angular/cli@13.3.11`

### Installation

```bash
git clone https://github.com/OGOMIDEEE/corgy.git
cd corgy
npm install
```

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically when you edit source files.

### Build

```bash
ng build
```

Build artifacts are output to the `dist/` directory.

### Running unit tests

```bash
ng test
```

Runs unit tests via [Karma](https://karma-runner.github.io).

## Routes

| Path | Component |
|---|---|
| `/` | Home |
| `/collections` | Collections |
| `/product-detail/:name/:id` | Product Details |
| `/cart` | Cart |
| `/blog` | Blog |
| `/contact` | Contact |


- Replace static product/collection arrays with a real backend or headless CMS
- Sync cart to a backend/account instead of `localStorage` only
- Add checkout flow
