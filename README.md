# goit-advancedjs-hw-01

Homework for the GoIT "JavaScript Advanced" course, topic 2: code modularity.
Built with [Vite](https://vitejs.dev/) on top of the GoIT vanilla app template.

## Tasks

- `1-gallery.html`: image gallery rendered from the `images` array, opened in a
  [SimpleLightbox](https://simplelightbox.js.org/) modal installed via npm, with
  captions taken from the image `alt` text.
- `2-form.html`: feedback form that keeps its state in `localStorage` under the
  `feedback-form-state` key and restores it on page load.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build goes to `dist/`. Pushing to `main` runs the GitHub Actions
workflow that builds the project and deploys `dist/` to the `gh-pages` branch.
