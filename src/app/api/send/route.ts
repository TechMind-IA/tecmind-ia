import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, phone, service, message } = await req.json()

  try {
    await resend.emails.send({
      from: 'Contato <onboarding@resend.dev>',
      to: 'diegosmmartinesdev@gmail.com',
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Serviço:</strong> ${service || 'Não informado'}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 })
  }
}
