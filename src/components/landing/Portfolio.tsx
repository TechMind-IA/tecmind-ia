import Link from 'next/link'
import { projects } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'

const categoryColors: Record<string, string> = {
  Site: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
  Workflow: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
  'E-commerce': 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  Sistema: 'text-orange-300 bg-orange-500/10 border-orange-500/20',
  IA: 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/20',
}

const categoryGradients: Record<string, string> = {
  Site: 'from-violet-500/10',
  Workflow: 'from-cyan-500/10',
  'E-commerce': 'from-emerald-500/10',
  Sistema: 'from-orange-500/10',
  IA: 'from-fuchsia-500/10',
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Projetos que{' '}
            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              falam por si
            </span>
          </h2>
          <p className="text-white/40 text-lg mx-auto">
            Cada projeto é único. Cada cliente tem uma história. Aqui estão alguns dos resultados que já entregamos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projetos/${project.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06] transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image area */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-60 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${categoryGradients[project.category] ?? 'from-violet-500/10'} to-transparent opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                </div>

                {/* Arrow icon on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">
                  {project.shortDescription}
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

              {/* Bottom CTA bar */}
              <div className="px-6 pb-5">
                <div className="flex items-center gap-1 text-violet-400/60 group-hover:text-violet-400 text-xs font-semibold transition-colors duration-300">
                  <span>Ver projeto completo</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}