import { useEffect, useState } from 'react'
import { clinica } from '../data/medico'
import { Container, WhatsAppIcon } from './ui'

const links = [
  { href: '#medico', label: 'Quem atende' },
  { href: '#formacao', label: 'Formação' },
  { href: '#clinica', label: 'Clínica' },
  { href: '#valores', label: 'Valores' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const dark = !scrolled
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-line/70 py-2' : 'py-4'
      }`}
    >
      <Container className="flex items-center justify-between gap-6">
        <a href="#topo" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center md:h-12 md:w-12">
            <img src="/logo-angiovas.png" alt="Angiovas" className="h-9 w-9 object-contain md:h-10 md:w-10" />
          </span>
          <span className="leading-tight">
            <span className={`block font-display text-[1.25rem] font-semibold tracking-tight ${dark ? 'text-white' : 'text-blue'}`}>
              Angiovas
            </span>
            <span className={`t-eyebrow block text-[0.58rem] ${dark ? 'text-white/55' : 'text-muted'}`}>Sul de Minas</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.92rem] font-medium transition ${dark ? 'text-white/80 hover:text-white' : 'text-ink/80 hover:text-blue'}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={clinica.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-2.5 text-sm font-semibold text-[#07301a] transition hover:bg-[#1fbf5b]"
        >
          <WhatsAppIcon size={15} />
          <span className="hidden sm:inline">Agendar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </Container>
    </header>
  )
}
