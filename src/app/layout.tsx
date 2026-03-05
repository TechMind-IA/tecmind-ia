import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TecMind AI',
  description: 'TecMind AI — Sites, automações e inteligência artificial para o seu negócio crescer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
