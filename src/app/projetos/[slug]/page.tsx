'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'

const categoryColors: Record<string, string> = {
  Site: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
  Workflow: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
  'E-commerce': 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  Sistema: 'text-orange-300 bg-orange-500/10 border-orange-500/20',
  IA: 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/20',
}

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const prev = () => setActive((a) => (a === 0 ? images.length - 1 : a - 1))
  const next = () => setActive((a) => (a === images.length - 1 ? 0 : a + 1))

  return (
    <>
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] group flex items-center justify-center bg-black/20 min-h-[300px]">
        <img
          src={images[active]}
          alt={`${title} - imagem ${active + 1}`}
          className="w-full h-full object-contain max-h-[70vh] cursor-zoom-in"
          onClick={() => setLightbox(true)}
        />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-white/70 text-xs">
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 mt-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === active ? 'border-violet-500' : 'border-white/10 hover:border-white/30'
              }`}
            >
              <img src={img} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
              {i !== active && <div className="absolute inset-0 bg-black/40" />}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox (mantido igual) */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            onClick={() => setLightbox(false)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={images[active]}
            alt={title}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  // Related projects (same category or just others)
  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 2)
  const others = projects
    .filter((p) => p.slug !== project.slug && p.category !== project.category)
    .slice(0, 2 - related.length)
  const relatedProjects = [...related, ...others].slice(0, 2)

  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      {/* Navbar placeholder — same as main site */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-white/60 hover:text-white text-sm font-medium transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Voltar ao portfólio
          </Link>
          <span className="text-white font-bold text-base tracking-tight">
            TechMind <span className="text-violet-400">AI</span>
          </span>
        </div>
      </div>

      <div className="pt-24 pb-32 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${categoryColors[project.category]}`}>
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              {project.shortDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-16">
            <ImageGallery images={project.images} title={project.title} />
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

            {/* Main content — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Full description */}
              <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                <h2 className="text-white font-bold text-xl mb-4">Sobre o projeto</h2>
                <p className="text-white/50 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border border-red-500/10 bg-red-500/[0.03]">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                    <span className="text-red-400 text-sm font-bold">!</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">O desafio</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{project.challenge}</p>
                </div>
                <div className="p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.03]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <span className="text-emerald-400 text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">A solução</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>

            {/* Sidebar — technologies */}
            <div className="flex flex-col gap-4">
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <h2 className="text-white font-bold text-base mb-5">Tecnologias</h2>
                <div className="flex flex-col gap-4">
                  {project.technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col gap-1">
                      <span className="text-white/80 text-sm font-semibold">{tech.name}</span>
                      <span className="text-white/35 text-xs leading-relaxed">{tech.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                className="p-6 rounded-2xl border border-violet-500/20 bg-violet-500/[0.05]"
              >
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Quer um projeto como esse para o seu negócio?
                </p>
                <Link
                  href="/#contact"
                  className="block w-full text-center px-5 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
                >
                  Fale conosco
                </Link>
              </div>
            </div>
          </div>

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <div>
              <h2 className="text-white font-bold text-xl mb-6">Outros projetos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projetos/${p.slug}`}
                    className="group flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-20 h-16 object-cover rounded-lg brightness-60 group-hover:brightness-75 transition-all duration-300 shrink-0"
                    />
                    <div className="flex flex-col justify-center gap-1 min-w-0">
                      <span className={`text-xs font-semibold w-fit px-2 py-0.5 rounded-full border ${categoryColors[p.category]}`}>
                        {p.category}
                      </span>
                      <span className="text-white/80 text-sm font-semibold group-hover:text-white transition-colors truncate">
                        {p.title}
                      </span>
                      <span className="text-white/30 text-xs truncate">{p.shortDescription}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
