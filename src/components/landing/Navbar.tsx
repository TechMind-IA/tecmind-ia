'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Serviços', 'Por que nós', 'Portfólio', 'Contato']

  const scrollTo = (section: string) => {
    const id = section
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace('ç', 'c')
      .replace('ó', 'o')
    const map: Record<string, string> = {
      servicos: 'services',
      'por-que-nos': 'whyus',
      portfolio: 'portfolio',
      contato: 'contact',
    }
    const el = document.getElementById(map[id] || id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
            <span className="text-white font-black text-sm">T</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            TecMind <span className="text-violet-400">AI</span>
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contato')}
            className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Fale conosco
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-all ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-white/70 hover:text-white text-left text-base font-medium"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contato')}
            className="px-5 py-3 rounded-full bg-violet-600 text-white font-semibold text-sm w-full"
          >
            Fale conosco
          </button>
        </div>
      )}
    </nav>
  )
}
