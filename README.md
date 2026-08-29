# AGE-Sampler — Project Page

Static project page for **AGE-Sampler** (EMNLP 2026). No build step, no frameworks — plain HTML/CSS/JS. Files live at the repo root and are served directly by GitHub Pages.

## Structure

```
.
├── index.html                # the page
├── .nojekyll                 # tell GitHub Pages to serve files as-is
└── static/
    ├── css/style.css
    ├── js/index.js           # BibTeX copy button
    ├── AGE-Sampler-paper.pdf # linked by the "Paper (PDF)" button
    └── images/               # figures exported from the paper PDFs
```

## Deploy on GitHub Pages

1. Commit and push:
   ```bash
   git add -A
   git commit -m "Add project page"
   git push origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment** →
   Source = **Deploy from a branch**, Branch = **main**, Folder = **/ (root)** → Save.

The site goes live at:
```
https://yanzi-wang.github.io/age-sampler/
```

## Remaining placeholder

- **arXiv link** — the arXiv button is disabled (`class="btn disabled"` in
  `index.html`). Once you have a URL, set its `href` and remove `disabled`.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Regenerating figures

The images were exported from the LaTeX figures:
```bash
pdftoppm -png -r 200 <figure>.pdf out
convert out-1.png -trim +repage -bordercolor white -border 12 <name>.png
```
