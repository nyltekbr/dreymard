import { Calendar, MapPin, Menu, Phone, Star, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { clinica, medico } from '../data/medico'
import { Container, WhatsAppIcon } from './ui'

const links = [
  { href: '#topo', id: 'topo', label: 'Início' },
  { href: '#medico', id: 'medico', label: 'Quem atende' },
  { href: '#como-funciona', id: 'como-funciona', label: 'Como funciona' },
  { href: '#formacao', id: 'formacao', label: 'Formação' },
  { href: '#clinica', id: 'clinica', label: 'Clínica' },
  { href: '#valores', id: 'valores', label: 'Valores' },
  { href: '#contato', id: 'contato', label: 'Contato' },
]

export function Header() {
  const [active, setActive] = useState('topo')
  const [open, setOpen] = useState(false)

  // A pílula acesa acompanha a seção visível, como o "Início" da referência.
  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
    if (!('IntersectionObserver' in window) || !els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (vis[0]) setActive(vis[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* barra utilitária */}
      <div className="hidden bg-night-deep text-[0.72rem] text-slate-300 sm:block">
        <Container className="flex h-6 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <a href={clinica.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-bold text-[#7ee2a0] hover:text-white">
              <WhatsAppIcon size={11} /> WhatsApp {clinica.whatsapp}
            </a>
            <span className="text-slate-600">•</span>
            <a href={clinica.telefoneHref} className="inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white">
              <Phone size={11} /> {clinica.telefone}
            </a>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={11} /> {clinica.endereco} • {clinica.cidade}
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <a href={medico.doctoralia} target="_blank" rel="noreferrer" className="hover:text-white">Avaliações na Doctoralia</a>
          </div>
        </Container>
      </div>

      {/* header principal */}
      <div className="border-b border-white/10 bg-night/95 backdrop-blur-md">
        <Container className="flex h-[66px] items-center justify-between gap-4 sm:h-[76px]">
          <a href="#topo" className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-[0_4px_14px_-4px_rgba(0,0,0,0.5)] sm:h-14 sm:w-14"><img src="/logo-angiovas.png" alt="" className="h-full w-full object-contain" aria-hidden /></span>
            <span className="leading-none">
              <span className="block font-display text-[1.05rem] font-extrabold tracking-tight text-white">Angiovas</span>
              <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.1em] text-blue-light/80">Angiologia e Cirurgia Vascular</span>
              <span className="mt-1 block text-[0.55rem] font-medium tracking-[0.04em] text-white/60">{medico.rt}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Seções">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-[0.82rem] font-bold transition-colors duration-200 ${
                  active === l.id ? 'bg-blue text-white' : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={clinica.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-blue-light/50 bg-blue px-4 py-2.5 text-[0.8rem] font-bold text-white transition-colors hover:bg-blue-deep"
            >
              <Calendar size={15} />
              <span className="hidden sm:inline">Agendar consulta</span>
              <span className="sm:hidden">Agendar</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white xl:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>

        {open && (
          <div className="border-t border-white/10 bg-night xl:hidden">
            <Container className="grid gap-1 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[0.95rem] font-bold ${active === l.id ? 'bg-blue text-white' : 'text-slate-200 hover:bg-white/10'}`}
                >
                  {l.label}
                </a>
              ))}
              <a href={medico.doctoralia} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-[0.9rem] font-bold text-blue-light">
                <Star size={15} /> Avaliações na Doctoralia
              </a>
            </Container>
          </div>
        )}
      </div>
    </header>
  )
}
