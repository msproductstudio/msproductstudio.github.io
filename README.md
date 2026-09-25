# Matheus Silva · MS Product Studio

Bilingual personal portfolio built with Next.js and TypeScript. Static output for GitHub Pages at **https://msproductstudio.github.io**.

MS Product Studio is Matheus Silva's recently created initiative. The site describes his own experience and research; it does not imply an established studio team or client portfolio.

## Develop in Ubuntu / WSL

Canonical checkout: `/home/matheus/MSPRODUCTSTUDIO/portfolio`.
The workspace root is not a Git repository. The two simulation repositories are sibling directories.

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3100/pt/ or http://localhost:3100/en/ from Windows or Linux.

```sh
npm run check
npm run build
npm run preview
```

The static build is in `out/`. The preview command serves that directory on port 3100. Stop any existing preview before starting another on the same port.

## Design and content

- `src/app/globals.css`: design tokens, typography, shared components and responsive rules.
- `src/content.ts`: complete Portuguese and English copy.
- `src/components/Portfolio.tsx`: sections and verified institutional research references.
- `src/components/Leaf.tsx`: original decorative vector illustration.
- `src/components/MotionPreview.tsx`: user-controlled video; no autoplay.
- `public/fonts/`: self-hosted Manrope and IBM Plex Mono with their SIL Open Font Licenses.
- `public/media/`: real research media. See [media provenance](MEDIA.md).

The site makes no API requests, collects no analytics, uses no cookies, and has no backend. Add a query layer only when a concrete remote data requirement exists. Never place secrets in client-side variables.

Routes `/pt/` and `/en/` are independently exported HTML with language-specific metadata and alternate links. `/` serves Portuguese. GitHub Pages must use **GitHub Actions** as its build source.

## Source and editorial boundaries

Professional history, education, skills and contact links were transcribed and translated from the owner-provided résumé. The résumé file, phone number and private files are not published.

Research event records link to IFSP/USP. SIICUSP schedule entries are labeled symposium presentations, not peer-reviewed journal articles. Original Portuguese titles remain visible on the English page alongside translations. The research report is linked to its original repository with author and supervisor credited.

The résumé describes CUDA and evolutionary research. The current Ant Colony `main` is a C++/OpenGL implementation; the current Makefile has no CUDA compiler step. The site states this distinction.

Both original repositories retain their history and collaborators; no ownership or access changes are required by this portfolio.

## Deployment

Push to `main` runs the static build and deploys the output through the official GitHub Pages Actions. The workflow uses a read-only build job and grants Pages/id-token permissions only to deployment. No paid infrastructure is needed.

Before publishing content changes, verify both languages, mobile navigation, project links, video controls and the generated HTML. A portrait can be added later; no synthetic portrait is used.
