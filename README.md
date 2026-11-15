# Naextro Portfolio

Portfolio of Ibne Arif Al Riham (Naextro): full-stack developer and video editor.
React + Vite + Tailwind, with spring-based motion.

## Design

| Role | Colour | Used for |
| --- | --- | --- |
| Base | `#0a0909` near-black, `#ece7df` bone | Background, text |
| Crimson | `#d1142f` (`#f03a52` for text) | Brand, primary actions, big accents |
| Neon green | `#39ff14` | Interactive states, "live" signals, focus |
| Ember orange | `#ff7a1a` | Sparing tertiary: section numbers, `+` marks, one card accent |

Type: Archivo (variable width + weight) for display and body, JetBrains Mono for labels.
Display sizes get negative tracking, small mono labels get positive tracking.

Motion follows Apple's *Designing Fluid Interfaces* ideas:

- Springs, not fixed-duration easing (`src/lib/motion.js`). Critically damped by default,
  a little bounce only where a flick carried momentum.
- `Rail.jsx` is a draggable carousel: 1:1 tracking, 10px direction hysteresis, rubber-banding
  at the edges, momentum projection to choose the snap point, velocity handed to the spring,
  and grabbing it mid-flight stops it from its on-screen position.
- Translucent nav (`backdrop-filter`) with a fade where it meets content, not a hard divider.
- Mobile menu enters and leaves along the same path, from its trigger.
- Honours `prefers-reduced-motion`, `prefers-reduced-transparency` and `prefers-contrast`.

## Updating projects

Everything on the page lives in `src/data/projects.js`.

- `latest`: the cards in the draggable rail (newest GitHub work). Add an object, done.
  The code snippet on each cover is meant to be copied from that repo's README.
- `builds`: the earlier-work grid (screenshots in `public/images/`).
- `stack`, `reviews`, `socials`, `EMAIL`: self explanatory.
- `REPO_COUNT`: the "Public repos" number in the hero.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/  (base is "/" when VERCEL is set)
npm run build
npm run lint
```

## Structure

```
src/
  App.jsx
  index.css            design tokens, type, buttons, materials, a11y fallbacks
  data/projects.js     all content
  lib/motion.js        springs, project(), rubberband()
  components/
    Header.jsx  Hero.jsx  Work.jsx  Rail.jsx  RepoCard.jsx  WebCard.jsx
    Stack.jsx  About.jsx  Review.jsx  Contact.jsx  Footer.jsx
```

## License

See `LICENSE`.
