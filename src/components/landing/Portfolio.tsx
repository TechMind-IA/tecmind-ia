import Image from 'next/image'

const projects = [
  {
    title: 'Landing Page SaaS',
    category: 'Site',
    description:
      'Landing page de alta conversão para startup de software com design premium e animações.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Automação de Vendas',
    category: 'Workflow',
    description:
      'Fluxo automatizado de CRM, follow-up por WhatsApp e emissão de notas fiscais.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tags: ['n8n', 'WhatsApp API', 'IA'],
  },
  {
    title: 'E-commerce de Moda',
    category: 'E-commerce',
    description:
      'Loja virtual completa com catálogo inteligente, pagamentos e logística integrada.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    tags: ['WooCommerce', 'Pixel', 'SEO'],
  },
  {
    title: 'Dashboard Analítico',
    category: 'Sistema',
    description:
      'Painel em tempo real para monitorar KPIs, vendas e performance de campanhas digitais.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tags: ['React', 'API REST', 'Charts'],
  },
  {
    title: 'Chatbot com IA',
    category: 'IA',
    description:
      'Assistente virtual treinado com dados da empresa para atendimento automático 24/7.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    tags: ['GPT-4', 'WhatsApp', 'Treinamento'],
  },
  {
    title: 'Site Institucional',
    category: 'Site',
    description:
      'Presença digital completa para escritório de advocacia com SEO local e blog.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    tags: ['WordPress', 'SEO', 'Blog'],
  },
]

const categoryColors: Record<string, string> = {
  Site: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
  Workflow: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
  'E-commerce': 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  Sistema: 'text-orange-300 bg-orange-500/10 border-orange-500/20',
  IA: 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/20',
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
            Portfólio
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Projetos que{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              falam por si
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Cada projeto é único. Cada cliente tem uma história. Aqui estão
            alguns dos resultados que já entregamos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03] hover:border-white/15 transition-all duration-500 cursor-default"
            >
              <div className="relative overflow-hidden h-48">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-50 group-hover:brightness-60"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full border text-xs font-semibold ${
                      categoryColors[project.category]
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded bg-white/5 text-white/50 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
