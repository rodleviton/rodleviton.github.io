# rodleviton.github.io

Source for my personal site, live at [rodleviton.github.io](https://rodleviton.github.io).

A single static page: introduction, experience, selected work, and links. Built
with Next.js and exported as static files, then published to GitHub Pages by a
workflow on every push to `main`.

## Running it

Requires Node 22 (see `.nvmrc`; Next 16 needs 20.9 or newer) and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static export into out/
pnpm lint
```

## How it is built

| | |
|---|---|
| Framework | Next.js 16, App Router, `output: "export"` |
| UI | React 19, TypeScript, Tailwind CSS 4 |
| Motion | Motion, for scroll-triggered reveals |
| Theming | next-themes, dark by default |
| Fonts | Montserrat for headings, Inter for body, via `next/font` |

### Two dependencies are deliberately held back

Both are ecosystem limits rather than anything in this project. Bumping either
one breaks linting entirely, so check upstream before trying again.

- **TypeScript stays on 5.x.** `typescript-eslint` does not support TypeScript 7
  and refuses to load against it.
  ([tracking issue](https://github.com/typescript-eslint/typescript-eslint/issues/10940))
- **ESLint stays on 9.x.** `eslint-plugin-react`, pulled in transitively by
  `eslint-config-next`, calls a context API that ESLint 10 removed.

## Layout

```
app/              Root layout, the page, global styles, OG image
components/
  experience/     Roles and their bullet points
  projects/       Selected work, each with a measured status
  profile/        Header, portrait, location
  layout/         Section container and content rows
  sections/       Section headers
  skills/         Skill rows, cross-highlighting the technology grid
  technology/     Technology grid and icons
  social/         Elsewhere links
  terminal/       Command prompt and its commands
  logos/          Company and project marks, as inline SVG
  icons/          Icon primitive and the icon set
  theme/          Theme provider and toggle
  ui/             shadcn primitives
contexts/         Section visibility, skill hover
data/             All content lives here
lib/              Fonts, class-name helper
```

Content is data, not markup. Editing `data/` changes the site; the components
render whatever is there.

## Things worth knowing

- **Command prompt.** `Cmd+K`, or the button in the footer. It drives the real
  page: `grid`, `theme`, `goto`, `status`. Values in `status` are measured at
  runtime or stamped at build, never authored.
- **The blueprint.** The dotted rules are a real grid, and they draw themselves
  in as each section scrolls into view. Disabled under `prefers-reduced-motion`.
- **Footer readout.** Build SHA resolved from git at build time, live viewport,
  and local time.

## Deployment

`.github/workflows/deploy.yml` installs from the lockfile, checks types, lints,
builds the static export, and publishes `out/` to GitHub Pages. The Pages source
is set to GitHub Actions; `public/.nojekyll` keeps Jekyll from processing the
output and skipping the `_next` directory.

## License

MIT. The writing, imagery, and company marks are not mine to give away, but the
code is yours to learn from.
