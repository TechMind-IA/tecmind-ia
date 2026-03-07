'use client'

export default function WhatsAppButton() {
  const phone = '5531988280047'
  const message = 'Olá! Vim pelo site da TechMind AI e gostaria de saber mais.'

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      style={{ backgroundColor: '#25D366' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.474 2.027 7.78L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.852l-.485-.288-5.003 1.193 1.215-4.862-.316-.5A13.236 13.236 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.938c-.398-.2-2.355-1.162-2.72-1.295-.366-.133-.632-.2-.898.2-.266.398-1.031 1.295-1.264 1.561-.232.266-.465.3-.863.1-.398-.2-1.682-.62-3.203-1.977-1.184-1.057-1.983-2.363-2.215-2.762-.233-.398-.025-.613.175-.811.18-.178.398-.465.598-.698.2-.232.265-.398.398-.664.133-.266.067-.499-.033-.698-.1-.2-.898-2.164-1.23-2.963-.325-.779-.655-.673-.898-.686l-.765-.013c-.266 0-.698.1-1.064.499-.365.398-1.396 1.362-1.396 3.325s1.43 3.857 1.63 4.123c.198.266 2.814 4.297 6.82 6.026.953.412 1.697.658 2.277.842.957.305 1.828.262 2.516.159.767-.114 2.355-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.266-.765-.465z" />
      </svg>
    </a>
  )
}