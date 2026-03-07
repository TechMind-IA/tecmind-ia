'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`
        fixed bottom-24 right-8 z-50
        w-12 h-12 rounded-full
        bg-violet-600 hover:bg-violet-500
        border border-violet-400/30
        flex items-center justify-center
        shadow-lg shadow-violet-500/30
        hover:shadow-violet-500/50 hover:scale-110
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  )
}