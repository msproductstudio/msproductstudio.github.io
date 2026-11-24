# MS Product Studio

Simple, bilingual institutional landing page for Matheus Silva’s independent product studio.

Public website: **https://msproductstudio.github.io/**

## Content

- Centered MS Product Studio title, monochrome design and a short introduction.
- Money Alone and Nostrad4mus link to their public sites. Argos is clearly identified as a private pilot.
- The founder’s background comes from the previously verified portfolio content.
- Public contact: ms.product.studio@gmail.com.
- Portuguese at / and /pt/, English at /en/, privacy at /privacidade/ and /privacy/.
- No forms, analytics, tracking cookies, API calls or product account data.
- Self-hosted Manrope font; license retained in public/fonts.

The studio is described as an independent initiative, not as a registered legal entity. This website supplies an authentic public presence. It does not prove Meta business verification or domain ownership. Any legal identity, business address, phone or registration documents required by Meta must be provided truthfully through its verification process.

## Development

Canonical checkout: /home/matheus/MSPRODUCTSTUDIO/portfolio in Ubuntu WSL.

Run npm ci, npm run check and npm run build. npm run preview serves the static output on port 3100. Builds and project commands run in WSL; browser checks may run in Windows.

Existing research components, source content and media remain in the repository for future reuse; the institutional landing page uses src/components/Studio.tsx and src/studio-content.ts.

## Publishing

The GitHub Pages workflow builds and publishes out/ from main using GitHub Actions. No custom domain or paid hosting is configured. The workflow must be enabled. Production URL and canonical metadata are https://msproductstudio.github.io/.

Before publishing, check both languages, project and contact links, privacy pages, keyboard navigation and mobile overflow.
