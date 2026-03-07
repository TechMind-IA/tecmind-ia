'use client'
import Image from 'next/image'

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-20 h-13 rounded-lg overflow-hidden">
                <Image src="/logo_tecmind.png" alt="Logo" width={120} height={120} className="object-cover" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                TechMind <span className="text-violet-400">AI</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Transformamos ideias em soluções digitais reais. Sites, automações
              e inteligência artificial para o seu negócio crescer.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-5">
              Serviços
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Sites & Landing Pages',
                'Automação & Workflows',
                'Soluções com IA',
                'E-commerce',
                'Dashboards',
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-white/35 hover:text-white/70 text-sm transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-5">
              Empresa
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Nossos diferenciais', id: 'whyus' },
                { label: 'Portfólio', id: 'portfolio' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/35 hover:text-white/70 text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 TechMind AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
