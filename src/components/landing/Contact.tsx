'use client'

import { useState } from 'react'

const serviceOptions = [
  'Site / Landing Page',
  'Automação & Workflow',
  'Solução com IA',
  'E-commerce',
  'Dashboard / Sistema',
  'Outro',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSent(true)
      } else {
        alert('Erro ao enviar. Tente novamente.')
      }
    } catch {
      alert('Erro ao enviar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-cyan-900/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Vamos{' '}
            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              construir juntos
            </span>
          </h2>
          <p className="text-white/40 text-lg mx-auto">
            Conte-nos sobre o seu projeto e nossa equipe entrará em contato.
          </p>
        </div>

        {sent ? (
          <div className="max-w-md mx-auto text-center py-20 rounded-3xl border border-violet-500/20 bg-violet-500/5">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-white text-2xl font-bold mb-3">
              Mensagem enviada!
            </h3>
            <p className="text-white/50">
              Obrigado pelo contato. Retornaremos em breve.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white/3 border border-white/8 rounded-3xl p-8 md:p-12"
          >
            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                Nome
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome completo"
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                E-mail
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="seu@email.com"
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                Serviço de interesse
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="px-4 py-3 rounded-xl bg-[#0a0a0f] border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-colors appearance-none"
              >
                <option value="">Selecione um serviço</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                Mensagem
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Descreva seu projeto ou necessidade..."
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
              />
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="px-10 py-4 rounded-full bg-linear-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed min-w-50"
              >
                {loading ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
