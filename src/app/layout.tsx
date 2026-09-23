import type React from "react"
import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "TechMind AI — Sites, automações e inteligência artificial",
  description:
    "Sites, automações e inteligência artificial para o seu negócio crescer. Transformamos ideias em soluções digitais reais.",
  icons: {
    icon: [
      {
        url: "/logo_tecmind.png",
        type: "image/png",
      },
    ],
    apple: "/logo_tecmind.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.variable} ${inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
