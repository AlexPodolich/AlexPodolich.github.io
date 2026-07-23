# Oleksandr Podolich — Portfolio

Personal portfolio and resume website of **Oleksandr Podolich**, Software Engineer based in
Warsaw. Built with plain HTML, CSS and vanilla JavaScript — no framework, no build step.

🔗 **Live:** https://alexpodolich.github.io

## Sections

- **Hero** — animated role typing, gradient wordmark, quick links and CV download.
- **About** — bio with Skills / Experience / Education tabs.
- **Services** — what I offer.
- **My Work** — selected past projects (games, web apps, Vulyk storage rental app).
- **Current Project** — what I'm building now (BudgetWise).
- **Hobbies** — gym, calisthenics, e-sports and chess, with a 3D image carousel.
- **Contact** — form (Google Sheets backed) and social links.

## Tech

- Semantic HTML5, modern CSS (grid, flexbox, `clamp()` fluid type, custom properties).
- Vanilla JS for tabs, mobile menu, scroll-reveal, active-section nav and the "see more" grid.
- [Typed.js](https://github.com/mattboldt/typed.js/) for the hero typing effect.
- [Font Awesome](https://fontawesome.com/) icons.
- Fonts: Playfair Display (display), Inter (body), JetBrains Mono (accents).

## Project structure

```
index.html                  # redirect to the site entry point
website/
  html/index.html           # the page
  css/style.css             # all styles
  js/                       # tabs, menu, contact, see-more, typing, enhancements
  images/                   # optimized assets (originals kept in git history)
  files/                    # downloadable CV (PDF)
```

## Local development

Any static file server works, e.g.:

```bash
npx http-server -p 8099 -c-1
# then open http://localhost:8099/website/html/index.html
```

### Optimizing images

Images are compressed with [sharp](https://sharp.pixelplumbing.com/). Originals are copied to
`website/images/_originals/` (git-ignored) before re-encoding, so nothing is lost.
