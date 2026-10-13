# Bhargav Gohel — Portfolio

Personal portfolio built with **React 19**, **Vite 7** and **Tailwind CSS v4**.

## Scripts

```bash
npm install
npm run dev       # start dev server
npm run build     # production build in dist/
npm run preview   # preview the production build
npm run lint
```

## Project structure

```
src/
  data/                 # All content — edit these to update the site
    site.js             # profile, nav links, socials, stats, about text, skills, contact form config
    services.js
    projects.js
  components/
    layout/             # Navbar, Footer
    sections/           # Hero, About, Services, Projects, Contact
    ui/                 # Button, Container, Icon, Logo, Reveal, SectionHeading
  hooks/                # useActiveSection, useTheme
  index.css             # Tailwind import + design tokens (light/dark palettes)
scripts/
  optimize-images.mjs   # converts images to responsive WebP
```

## Common updates

- **Text, links, stats, skills:** edit `src/data/site.js`.
- **Add a project:** generate images, then add an entry in `src/data/projects.js`
  (optional `description`, `tags`, `liveUrl`, `repoUrl`):
  ```bash
  node scripts/optimize-images.mjs path/to/screenshot.png src/assets/img/my-project 600 1170
  ```
- **Add a nav section:** create a component in `components/sections/` with a matching `id`,
  render it in `App.jsx`, and add `{ id, label }` to `navLinks`.
- **Colours:** change the CSS variables at the top of `src/index.css`.
- **Icons:** add an SVG path to `components/ui/Icon.jsx`.

## Contact form

The form posts to [Web3Forms](https://web3forms.com). The access key lives in `src/data/site.js`
and can be overridden with a `VITE_WEB3FORMS_KEY` environment variable.
