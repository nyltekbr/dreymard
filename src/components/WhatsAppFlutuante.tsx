import { clinica } from '../data/medico'
import { WhatsAppIcon } from './ui'

export function WhatsAppFlutuante() {
  return (
    <a
      href={clinica.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`Conversar no WhatsApp, ${clinica.whatsapp}`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-[#07301a] shadow-[0_14px_30px_-10px_rgba(37,211,102,0.8)] transition hover:-translate-y-0.5 hover:bg-[#1fbf5b] md:bottom-7 md:right-7"
    >
      <WhatsAppIcon size={26} />
    </a>
  )
}
