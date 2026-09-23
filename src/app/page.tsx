"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".reveal-text, .reveal").forEach((el) => {
      observer.observe(el)
    })

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
        if (href) {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
        }
      })
    })

    const handleScroll = () => {
      // Showcase scroll carousel
      const showcase = document.getElementById("showcase")
      const track = document.getElementById("showcase-track")
      if (showcase && track) {
        const rect = showcase.getBoundingClientRect()
        const trackWidth = track.scrollWidth - window.innerWidth + 80
        const scrollableDistance = showcase.offsetHeight - window.innerHeight
        const scrolled = -rect.top
        const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1)
        track.style.transform = `translateX(${-progress * trackWidth}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <nav>
        <div className="logo">TECHMIND AI</div>
        <ul className="nav-links">
          <li><a href="#services">Serviços</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#whyus">Diferenciais</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <button className={`nav-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#services" onClick={closeMenu}>Serviços</a>
        <a href="#portfolio" onClick={closeMenu}>Portfólio</a>
        <a href="#whyus" onClick={closeMenu}>Diferenciais</a>
        <a href="#contact" onClick={closeMenu}>Contato</a>
      </div>

      <main>
        {/* HERO */}
        <section id="hero">
          <div className="hero-content">
            <h1 className="heading-xl hero-title reveal-text">
              <span>SOLUÇÕES DIGITAIS</span>
              <span>PARA O SEU NEGÓCIO</span>
            </h1>
            <p className="hero-subtitle reveal">
              Sites, workflows inteligentes e automações com IA.
              <br />
              Somos a TechMind AI e construímos a presença digital e a
              infraestrutura tecnológica que a sua empresa precisa.
            </p>
            <div className="reveal hero-buttons">
              <a href="#contact" className="cta-button">Fale Conosco</a>
              <a href="#portfolio" className="cta-button-outline">Ver projetos</a>
            </div>
          </div>
        </section>

        {/* SCROLL CAROUSEL */}
        <section id="showcase" className="showcase-section">
          <div className="showcase-sticky">
            <div className="showcase-header reveal">
              <span className="text-small">Nosso trabalho</span>
              <h2 className="heading-lg" style={{ marginTop: "12px" }}>
                Projetos em destaque
              </h2>
            </div>
            <div className="showcase-track" id="showcase-track">
              <div className="showcase-card">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Dashboard" />
                <div className="showcase-card-label">Dashboard Inteligente</div>
              </div>
              <div className="showcase-card">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Analytics" />
                <div className="showcase-card-label">Analytics com IA</div>
              </div>
              <div className="showcase-card">
                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800" alt="Chatbot" />
                <div className="showcase-card-label">Chatbot Automatizado</div>
              </div>
              <div className="showcase-card">
                <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800" alt="Sistema" />
                <div className="showcase-card-label">Sistema Sob Medida</div>
              </div>
              <div className="showcase-card">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" alt="E-commerce" />
                <div className="showcase-card-label">E-commerce Moderno</div>
              </div>
              <div className="showcase-card">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" alt="Equipe" />
                <div className="showcase-card-label">Workflow Inteligente</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services">
          <div className="container container-wide">
            <div className="reveal">
              <span className="text-small">O que fazemos</span>
              <h2 className="heading-lg" style={{ marginTop: "16px" }}>
                Serviços que impulsionam resultados
              </h2>
              <p className="text-body" style={{ maxWidth: "600px", marginTop: "16px" }}>
                Da ideia ao produto final, cobrimos tudo que você precisa no mundo digital.
              </p>
            </div>

            <div className="services-grid">
              {[
                {
                  icon: <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>,
                  title: "Soluções com IA",
                  desc: "Integramos inteligência artificial nos seus processos: chatbots, análise de dados, geração de conteúdo e mais.",
                  tags: ["ChatGPT", "Agentes IA", "LLM"],
                },
                {
                  icon: <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
                  title: "Sites & Landing Pages",
                  desc: "Criamos sites modernos, rápidos e otimizados para converter visitantes em clientes. Do design ao deploy.",
                  tags: ["Design UI/UX", "SEO", "Responsivo"],
                },
                {
                  icon: <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                  title: "Automação & Workflows",
                  desc: "Automatize processos repetitivos com workflows inteligentes. Economize tempo e elimine erros humanos.",
                  tags: ["n8n", "Make", "Zapier", "IA"],
                },
              ].map((service, i) => (
                <div className="service-card reveal" key={i}>
                  <div className="service-header">
                    {service.icon}
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.desc}</p>
                  <div className="service-tags">
                    {service.tags.map((tag, j) => (
                      <span className="service-tag" key={j}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="whyus">
          <div className="container container-wide">
            <div className="reveal">
              <span className="text-small">Por que nós</span>
              <h2 className="heading-lg" style={{ marginTop: "16px" }}>
                Tecnologia com propósito
              </h2>
              <p className="text-body" style={{ maxWidth: "700px", marginTop: "16px" }}>
                A TechMind AI nasceu para ser o parceiro tecnológico das empresas que querem crescer de verdade.
                Não somos apenas uma agência. Somos um time que se importa com o seu resultado!
              </p>
            </div>

            <div className="whyus-grid">
              {[
                { num: "01", title: "Entrega rápida", desc: "Trabalhamos com agilidade sem abrir mão da qualidade. Seu projeto fica pronto no prazo combinado." },
                { num: "02", title: "Tecnologia de ponta", desc: "Usamos as ferramentas mais modernas do mercado: IA, automação, React, e muito mais." },
                { num: "03", title: "Foco em resultados", desc: "Não entregamos só código bonito — entregamos soluções que geram retorno real para o seu negócio." },
                { num: "04", title: "Suporte contínuo", desc: "Estamos disponíveis após o projeto. Damos suporte, fazemos ajustes e evoluímos junto com você." },
              ].map((item, i) => (
                <div className="whyus-card reveal" key={i}>
                  <div className="whyus-number">{item.num}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio">
          <div className="container container-wide">
            <div className="reveal">
              <span className="text-small">Portfólio</span>
              <h2 className="heading-lg" style={{ marginTop: "16px" }}>
                Projetos que falam por si
              </h2>
              <p className="text-body" style={{ maxWidth: "600px", marginTop: "16px" }}>
                Cada projeto é único. Cada cliente tem uma história. Aqui estão alguns dos resultados que já entregamos.
              </p>
            </div>

            <div className="portfolio-carousel">
              <button className="portfolio-arrow portfolio-arrow-left" onClick={() => {
                const track = document.getElementById("portfolio-track")
                if (track) track.scrollBy({ left: -340, behavior: "smooth" })
              }} aria-label="Anterior">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="portfolio-track" id="portfolio-track">
                {[
                  {
                    title: "Wedding Memories",
                    category: "Sistema",
                    desc: "Plataforma web que permite convidados de casamento compartilharem fotos instantaneamente através de QR Code, criando uma galeria colaborativa em tempo real.",
                    image: "/wedding1.png",
                    tags: ["Next.js", "React", "TypeScript", "AWS S3"],
                  },
                  {
                    title: "Plataforma de Corridas",
                    category: "Sistema",
                    desc: "Aplicação web para criação, inscrição e pagamento em corridas de rua, com dashboard para organizadores e integração com MercadoPago.",
                    image: "/corrida1.png",
                    tags: ["Next.js", "Prisma", "Tailwind CSS", "MercadoPago"],
                  },
                  {
                    title: "MecMind",
                    category: "IA",
                    desc: "Sistema web que utiliza IA para interpretar desenhos de peças mecânicas, gerar planos de fabricação e integrar com estoque e perfil da empresa.",
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
                    tags: ["Django", "Python", "OpenAI", "PostgreSQL"],
                  },
                  {
                    title: "MecMind",
                    category: "IA",
                    desc: "Sistema web que utiliza IA para interpretar desenhos de peças mecânicas, gerar planos de fabricação e integrar com estoque e perfil da empresa.",
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
                    tags: ["Django", "Python", "OpenAI", "PostgreSQL"],
                  },
                ].map((project, i) => (
                  <div className="portfolio-item reveal" key={i}>
                    <img src={project.image} alt={project.title} className="portfolio-image" />
                    <div className="portfolio-content">
                      <span className="portfolio-tag">{project.category}</span>
                      <h3 style={{ marginTop: "12px" }}>{project.title}</h3>
                      <p>{project.desc}</p>
                      <div className="portfolio-tags">
                        {project.tags.map((tag, j) => (
                          <span className="portfolio-tag" key={j}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="portfolio-arrow portfolio-arrow-right" onClick={() => {
                const track = document.getElementById("portfolio-track")
                if (track) track.scrollBy({ left: 340, behavior: "smooth" })
              }} aria-label="Próximo">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="container container-wide">
            <div className="contact-layout">
              <div className="contact-info reveal">
                <span className="text-small">Contato</span>
                <h2 className="heading-lg" style={{ marginTop: "16px", marginBottom: "16px" }}>
                  Vamos construir juntos?
                </h2>
                <p className="text-body">
                  Conte-nos sobre o seu projeto e nossa equipe entrará em contato.
                </p>
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span>diegosmmartinesdev@gmail.com</span>
                  </div>
                  <div className="contact-detail-item">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>+55 31 98828-0047</span>
                  </div>
                </div>
              </div>

              <form className="contact-form reveal" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" placeholder="Seu nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" placeholder="seu@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Serviço de interesse</label>
                  <select id="service" required>
                    <option value="">Selecione...</option>
                    <option value="site">Site / Landing Page</option>
                    <option value="automacao">Automação & Workflow</option>
                    <option value="ia">Solução com IA</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="dashboard">Dashboard / Sistema</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" rows={4} placeholder="Descreva seu projeto..." required></textarea>
                </div>
                <button type="submit" className="cta-button" style={{ width: "100%" }}>
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="container container-wide">
            <div className="footer-content">
              <div>
                <div className="footer-copyright">© 2026 TechMind AI. Todos os direitos reservados.</div>
                <p className="text-small" style={{ marginTop: "8px", fontSize: "0.8125rem" }}>
                  Transformamos ideias em soluções digitais reais.
                </p>
              </div>
              <div className="footer-links">
                <a href="#services">Serviços</a>
                <a href="#portfolio">Portfólio</a>
                <a href="#contact">Contato</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/553197919890?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  )
}
