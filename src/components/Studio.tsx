import { studioCopy, studioEmail, studioLegalName, studioCnpj, type StudioLocale } from "@/studio-content";

export default function Studio({ lang }: { lang: StudioLocale }) {
  const c = studioCopy[lang];
  const schema = {
    "@context": "https://schema.org", "@type": "Organization",
    name: "MS Product Studio", url: "https://msproductstudio.github.io/",
    legalName: studioLegalName, taxID: studioCnpj,
    email: studioEmail, description: c.description,
    founder: { "@type": "Person", name: "Matheus Luis Oliveira da Silva", url: "https://www.linkedin.com/in/matheuslosilva/" },
    sameAs: ["https://github.com/msproductstudio"],
  };
  return <>
    <a className="skip-link" href="#main">{c.skip}</a>
    <header className="site-header shell">
      <a className="brand" href={lang === "pt" ? "/" : "/en/"} aria-label="MS Product Studio — home"><span className="monogram" aria-hidden="true">MS<span>·</span></span><span className="brand-caption">PRODUCT<br/>STUDIO</span></a>
      <nav aria-label={lang === "pt" ? "Navegação principal" : "Main navigation"}>
        <a href="#projects">{c.nav[0]}</a><a href="#about">{c.nav[1]}</a><a href="#contact">{c.nav[2]}</a>
      </nav>
      <a className="language" href={lang === "pt" ? "/en/" : "/"} hrefLang={lang === "pt" ? "en" : "pt-BR"} aria-label={lang === "pt" ? "Read in English" : "Ler em português"}>{lang === "pt" ? "EN" : "PT"}</a>
    </header>
    <main id="main">
      <section className="hero shell" aria-labelledby="studio-title">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 id="studio-title">MS Product<span>Studio<span className="title-period">.</span></span></h1>
        <p className="hero-intro">{c.intro}</p>
        <p className="hero-summary">{c.summary}</p>
        <div className="hero-actions"><a className="button button-light" href="#projects">{c.explore}</a><a className="text-link" href="#contact">{c.contact}</a></div>
        <div className="hero-foot"><span>SOFTWARE</span><span>PRODUCT</span><span>STUDIO</span></div>
      </section>
      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="shell section-inner">
          <div className="section-heading"><div><p className="eyebrow">{c.projectLabel}</p><h2 id="projects-title">{c.projectTitle}</h2></div><p>{c.projectIntro}</p></div>
          <div className="project-list">{c.projects.map(project => <article className="project" key={project.name}>
            <div className="project-name"><p className="eyebrow">{project.category}</p><h3>{project.name}</h3></div>
            <p className="project-description">{project.description}</p>
            <div className="project-action">{project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={c.visit + ": " + project.name}>{c.visit}</a> : <span className="project-status">{c.pilot}</span>}</div>
          </article>)}</div>
        </div>
      </section>
      <section className="about-section shell section-inner" id="about" aria-labelledby="about-title">
        <div><p className="eyebrow">{c.aboutLabel}</p><h2 id="about-title">{c.aboutTitle}</h2><p className="about-note">{c.aboutNote}</p></div>
        <div className="about-copy"><p>{c.about}</p><p>{c.aboutSecond}</p><div className="profile-links"><a href="https://www.linkedin.com/in/matheuslosilva/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/msproductstudio" target="_blank" rel="noopener noreferrer">GitHub</a></div></div>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="shell section-inner"><p className="eyebrow">{c.contactLabel}</p><h2 id="contact-title">{c.contactTitle}</h2><p>{c.contactIntro}</p><a className="email-link" href={`mailto:${studioEmail}`}>{studioEmail}</a></div>
      </section>
    </main>
    <footer className="site-footer shell"><div className="footer-identity"><strong>MS Product Studio</strong><p>{c.owner}</p><div className="company-identity"><p>{c.legalIntro}</p><p className="company-name">{studioLegalName}</p><p>CNPJ: {studioCnpj}</p></div></div><div className="footer-links"><span>{c.country} · 2026</span><a href={lang === "pt" ? "/privacidade/" : "/privacy/"}>{c.privacy}</a></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g, "\\u003c")}} />
  </>;
}
