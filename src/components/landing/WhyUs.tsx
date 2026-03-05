'use client'

const reasons = [
  {
    number: '01',
    title: 'Entrega rápida',
    description:
      'Trabalhamos com agilidade sem abrir mão da qualidade. Seu projeto fica pronto no prazo combinado.',
  },
  {
    number: '02',
    title: 'Tecnologia de ponta',
    description:
      'Usamos as ferramentas mais modernas do mercado: IA, automação, React, e muito mais.',
  },
  {
    number: '03',
    title: 'Foco em resultados',
    description:
      'Não entregamos só código bonito — entregamos soluções que geram retorno real para o seu negócio.',
  },
  {
    number: '04',
    title: 'Suporte contínuo',
    description:
      'Estamos disponíveis após o projeto. Damos suporte, fazemos ajustes e evoluímos junto com você.',
  },
]

export default function WhyUs() {
  return (
    <section id="whyus" className="py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-violet-900/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Tecnologia com{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                propósito
              </span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed">
              A TecMind AI nasceu para ser o parceiro tecnológico das empresas que querem crescer de verdade. Não somos apenas uma agência. Somos um time que se importa com o seu resultado!
            </p>

            <div className="mt-10 flex items-center gap-6">
              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
              >
                Conversar com a equipe
              </button>
            </div>
          </div>

          {/* Right — reason list */}
          <div className="flex flex-col gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="flex gap-6 items-start p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/5 transition-all duration-300 group"
              >
                <span className="text-3xl font-black text-violet-600/40 group-hover:text-violet-400/60 transition-colors duration-300 leading-none pt-1">
                  {reason.number}
                </span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
