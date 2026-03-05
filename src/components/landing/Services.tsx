const services = [
  {
    icon: '🌐',
    title: 'Sites & Landing Pages',
    description:
      'Criamos sites modernos, rápidos e otimizados para converter visitantes em clientes. Do design ao deploy.',
    tags: ['Design UI/UX', 'SEO', 'Responsivo'],
    color: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20',
  },
  {
    icon: '⚡',
    title: 'Automação & Workflows',
    description:
      'Automatize processos repetitivos com workflows inteligentes. Economize tempo e elimine erros humanos.',
    tags: ['n8n', 'Make', 'Zapier', 'IA'],
    color: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-500/20',
  },
  {
    icon: '🤖',
    title: 'Soluções com IA',
    description:
      'Integramos inteligência artificial nos seus processos: chatbots, análise de dados, geração de conteúdo e mais.',
    tags: ['ChatGPT', 'Agentes IA', 'LLM'],
    color: 'from-fuchsia-500/20 to-fuchsia-500/5',
    border: 'border-fuchsia-500/20',
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description:
      'Lojas virtuais completas com pagamentos, estoque e logística integrados para vender mais online.',
    tags: ['Shopify', 'WooCommerce', 'Pixel'],
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20',
  },
  {
    icon: '📊',
    title: 'Dashboards & Sistemas',
    description:
      'Sistemas web personalizados e dashboards interativos para você tomar decisões com dados em tempo real.',
    tags: ['React', 'Analytics', 'API'],
    color: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/20',
  },
  {
    icon: '🔒',
    title: 'Consultoria Tech',
    description:
      'Estratégia digital, auditoria de sistemas e consultoria para tirar o máximo da tecnologia no seu negócio.',
    tags: ['Estratégia', 'Auditoria', 'Roadmap'],
    color: 'from-rose-500/20 to-rose-500/5',
    border: 'border-rose-500/20',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
            O que fazemos
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Serviços que{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              impulsionam
            </span>{' '}
            resultados
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Da ideia ao produto final, cobrimos tudo que você precisa no mundo
            digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl border ${service.border} bg-gradient-to-br ${service.color} p-8 hover:scale-[1.02] transition-all duration-300 cursor-default`}
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
