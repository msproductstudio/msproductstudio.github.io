# MS Product Studio

Simple, bilingual institutional landing page for Matheus Silva’s independent product studio.

Public website: **https://msproductstudio.github.io/**

## Content

- Centered MS Product Studio title, monochrome design and a short introduction.
- Money Alone and Nostrad4mus link to their public sites. Argos links to its public site and is identified as a product in testing.
- The founder’s background comes from the previously verified portfolio content.
- Public contact: ms.product.studio@gmail.com.
- Portuguese at / and /pt/, English at /en/, privacy at /privacidade/ and /privacy/.
- No forms, analytics, tracking cookies, API calls or product account data.
- Self-hosted Manrope font; license retained in public/fonts.

The footer, organization metadata and privacy notice identify the legal operator: MATHEUS LUIS OLIVEIRA DA SILVA DESENVOLVIMENTO DE SOFTWARE LTDA, CNPJ 68.901.515/0001-04. The legal identity was checked against the CNPJ certificate and JUCESP registration on 24 November 2026 and published with the owner's authorization. MS Product Studio is presented as the product studio; no registered trade name is claimed. Argos is linked to https://oiargos.com/ as a Studio product. These disclosures support Meta verification but do not imply approval by Meta.

## Development

Canonical checkout: /home/matheus/MSPRODUCTSTUDIO/portfolio in Ubuntu WSL.

Run npm ci, npm run check and npm run build. npm run preview serves the static output on port 3100. Builds and project commands run in WSL; browser checks may run in Windows.

Existing research components, source content and media remain in the repository for future reuse; the institutional landing page uses src/components/Studio.tsx and src/studio-content.ts.

## Publishing

The GitHub Pages workflow builds and publishes out/ from main using GitHub Actions. No custom domain or paid hosting is configured. The workflow must be enabled. Production URL and canonical metadata are https://msproductstudio.github.io/.

Before publishing, check both languages, project and contact links, privacy pages, keyboard navigation and mobile overflow.
