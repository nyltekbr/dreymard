import { useEffect, useRef, useState, type ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

/* Rótulo pequeno com ícone, como "CORPO CLÍNICO ESPECIALIZADO" na referência. */
export function Eyebrow({
  children,
  icon,
  tone = 'blue',
}: {
  children: ReactNode
  icon?: ReactNode
  tone?: 'blue' | 'light' | 'red'
}) {
  const color = tone === 'light' ? 'text-blue-light' : tone === 'red' ? 'text-red' : 'text-blue'
  return (
    <p className={`t-eyebrow flex items-center gap-2 ${color}`}>
      {icon ?? <span className="inline-block h-[7px] w-[7px] rounded-full bg-current" />}
      {children}
    </p>
  )
}

export function SectionTitle({
  children,
  className = '',
  as: Tag = 'h2',
}: {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2'
}) {
  const size = Tag === 'h1' ? 'text-[2.4rem] sm:text-[3rem] lg:text-[4rem]' : 'text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem]'
  return <Tag className={`t-display mt-4 ${size} ${className}`}>{children}</Tag>
}

/* Número que conta até o valor quando entra na tela. */
export function CountUp({ to, className = '', duration = 900 }: { to: number; className?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [v, setV] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setV(to)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setV(Math.round(to * eased))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])
  return (
    <span ref={ref} className={className}>
      {v}
    </span>
  )
}

type BtnProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost-light' | 'pill-primary' | 'pill-outline'
  size?: 'md' | 'sm'
  className?: string
  external?: boolean
}

/*
  Botões da referência: cantos 12px, 52px de altura, texto 13px/750, ícone à
  esquerda. "pill" é a variante arredondada do card flutuante.
*/
export function Button({ href, children, variant = 'primary', size = 'md', className = '', external }: BtnProps) {
  const base =
    'inline-flex items-center justify-center gap-2 border font-bold leading-tight transition-colors duration-200'
  const dims = size === 'sm' ? 'min-h-[40px] rounded-lg px-4 text-[0.78rem]' : 'min-h-[52px] rounded-xl px-5 text-[0.84rem]'
  const styles = {
    primary: 'border-blue-light/50 bg-blue text-white hover:bg-blue-deep',
    secondary: 'border-[#6f86a8]/70 bg-[#10285a] text-white hover:bg-[#1a3a78]',
    danger: 'btn-pulse border-[#ef94a0] bg-[#4a1a22] text-[#ffe9ea] hover:bg-[#63303b] font-extrabold',
    outline: 'border-line bg-white text-navy hover:border-slate-300 hover:bg-slate-50',
    'ghost-light': 'border-white/30 bg-white/5 text-white hover:bg-white/10',
    'pill-primary': 'rounded-full! border-transparent bg-blue text-white shadow-lg shadow-blue/25 hover:bg-blue-deep',
    'pill-outline': 'rounded-full! border-2 border-navy bg-white text-navy hover:bg-navy hover:text-white',
  }
  return (
    <a
      href={href}
      className={`${base} ${dims} ${styles[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

/* Link azul com seta que desliza no hover. */
export function ArrowLink({ href, children, external, className = '' }: { href: string; children: ReactNode; external?: boolean; className?: string }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1.5 text-[0.84rem] font-bold text-blue transition-colors hover:text-navy ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </a>
  )
}

export function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.23 8.24m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28" />
    </svg>
  )
}
