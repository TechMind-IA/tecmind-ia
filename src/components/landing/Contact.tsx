'use client'

import { useState, useCallback } from 'react'
import { CheckCircle, Send, AlertCircle, Loader2, Sparkles } from 'lucide-react'

const serviceOptions = [
  'Site / Landing Page',
  'Automação & Workflow',
  'Solução com IA',
  'E-commerce',
  'Dashboard / Sistema',
  'Outro',
]

const MAX_MESSAGE_LENGTH = 500

type FormFields = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

type FormErrors = Partial<Record<keyof FormFields, string>>

function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ''
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function validateField(name: keyof FormFields, value: string): string {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Nome é obrigatório'
      if (value.trim().length < 3) return 'Nome deve ter ao menos 3 caracteres'
      return ''
    case 'email':
      if (!value.trim()) return 'E-mail é obrigatório'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'E-mail inválido'
      return ''
    case 'phone':
      if (value && value.replace(/\D/g, '').length < 10)
        return 'Telefone inválido'
      return ''
    case 'message':
      if (!value.trim()) return 'Mensagem é obrigatória'
      if (value.trim().length < 10) return 'Mensagem muito curta'
      return ''
    default:
      return ''
  }
}

function validateAll(form: FormFields): FormErrors {
  const errors: FormErrors = {}
  ;(Object.keys(form) as (keyof FormFields)[]).forEach((key) => {
    const err = validateField(key, form[key])
    if (err) errors[key] = err
  })
  return errors
}

export default function Contact() {
  const [form, setForm] = useState<FormFields>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = useCallback(
    (name: keyof FormFields, value: string) => {
      const processed = name === 'phone' ? applyPhoneMask(value) : value
      setForm((prev) => ({ ...prev, [name]: processed }))
      if (touched[name]) {
        const err = validateField(name, processed)
        setErrors((prev) => ({ ...prev, [name]: err }))
      }
    },
    [touched]
  )

  const handleBlur = useCallback(
    (name: keyof FormFields) => {
      setTouched((prev) => ({ ...prev, [name]: true }))
      const err = validateField(name, form[name])
      setErrors((prev) => ({ ...prev, [name]: err }))
    },
    [form]
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')

    const allTouched = Object.keys(form).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as Record<keyof FormFields, boolean>
    )
    setTouched(allTouched)
    const allErrors = validateAll(form)
    setErrors(allErrors)
    if (Object.values(allErrors).some(Boolean)) return

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
        setSubmitError('Erro ao enviar. Tente novamente em instantes.')
      }
    } catch {
      setSubmitError('Sem conexão. Verifique sua internet e tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field: keyof FormFields) =>
    `w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/20 text-sm focus:outline-none transition-all duration-200 ${
      touched[field] && errors[field]
        ? 'border-red-500/60 focus:border-red-500'
        : touched[field] && !errors[field]
        ? 'border-emerald-500/50 focus:border-emerald-500/70'
        : 'border-white/10 focus:border-violet-500/50'
    }`

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Blobs decorativos */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-cyan-900/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-violet-900/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-48 bg-fuchsia-900/10 blur-3xl rounded-full pointer-events-none" />

      {/* Grid decorativo de fundo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

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
          <div className="max-w-md mx-auto text-center py-20 rounded-3xl border border-emerald-500/20 bg-emerald-500/5">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-emerald-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">
              Mensagem enviada!
            </h3>
            <p className="text-white/50">
              Obrigado pelo contato. Retornaremos em breve.
            </p>
          </div>
        ) : (
          /* Wrapper com borda gradiente */
          <div
            className="rounded-3xl p-px"
            style={{
              background:
                'linear-gradient(135deg, rgba(139,92,246,0.4) 0%, rgba(255,255,255,0.06) 50%, rgba(34,211,238,0.3) 100%)',
            }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#0d0d14] rounded-3xl p-8 md:p-12"
            >
              {/* Nome */}
              <Field label="Nome" error={touched.name ? errors.name : ''}>
                <input
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder="Seu nome completo"
                  className={inputClass('name')}
                />
              </Field>

              {/* E-mail */}
              <Field label="E-mail" error={touched.email ? errors.email : ''}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  placeholder="seu@email.com"
                  className={inputClass('email')}
                />
              </Field>

              {/* Telefone */}
              <Field
                label="Telefone"
                labelSuffix="opcional"
                error={touched.phone ? errors.phone : ''}
              >
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  placeholder="(00) 00000-0000"
                  className={inputClass('phone')}
                />
              </Field>

              {/* Serviço */}
              <Field label="Serviço de interesse">
                <select
                  value={form.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-colors appearance-none"
                >
                  <option value="">Selecione um serviço</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Mensagem */}
              <div className="md:col-span-2">
                <Field
                  label="Mensagem"
                  error={touched.message ? errors.message : ''}
                  counter={`${form.message.length}/${MAX_MESSAGE_LENGTH}`}
                >
                  <textarea
                    rows={5}
                    maxLength={MAX_MESSAGE_LENGTH}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder="Descreva seu projeto ou necessidade..."
                    className={`${inputClass('message')} resize-none`}
                  />
                </Field>
              </div>

              {/* Erro de envio */}
              {submitError && (
                <div className="md:col-span-2 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {submitError}
                </div>
              )}

              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative px-10 py-4 rounded-full bg-linear-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 min-w-[200px] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

// Componente auxiliar de campo
function Field({
  label,
  labelSuffix,
  error,
  counter,
  children,
}: {
  label: string
  labelSuffix?: string
  error?: string
  counter?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
          {label}{' '}
          {labelSuffix && (
            <span className="normal-case text-white/25 font-normal">
              ({labelSuffix})
            </span>
          )}
        </label>
        {counter && (
          <span className="text-white/25 text-xs tabular-nums">{counter}</span>
        )}
      </div>
      {children}
      <div className="min-h-[16px]">
        {error && (
          <p className="text-red-400 text-xs flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" />
            {error}
          </p>
        )}
      </div>
    </div>
  )
}