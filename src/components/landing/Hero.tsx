'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number
    const particles: {
      x: number
      y: number
      r: number
      dx: number
      dy: number
      alpha: number
    }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Tecnologia que transforma negócios
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight max-w-5xl mb-6">
          Soluções digitais que{' '}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            elevam
          </span>{' '}
          o seu negócio
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          Sites, workflows inteligentes e automações com IA. Somos a TecMind AI
          — construímos a presença digital e a infraestrutura tecnológica que a
          sua empresa precisa.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-base hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105"
          >
            Começar agora
          </button>
          <button
            onClick={() =>
              document
                .getElementById('services')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-semibold text-base transition-all duration-300"
          >
            Ver serviços →
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 border-t border-white/5 pt-12">
          {[
            { value: '100+', label: 'Projetos entregues' },
            { value: '98%', label: 'Clientes satisfeitos' },
            { value: '24/7', label: 'Suporte disponível' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
