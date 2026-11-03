import { Children, isValidElement, useEffect, useRef, useState, type ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children, tone = 'blue' }: { children: ReactNode; tone?: 'blue' | 'red' | 'light' }) {
  const color = tone === 'red' ? 'text-red' : tone === 'light' ? 'text-white/70' : 'text-blue'
  const line = tone === 'light' ? 'bg-white/40' : tone === 'red' ? 'bg-red' : 'bg-blue'
  return (
    <p className={`t-eyebrow flex items-center gap-3 ${color}`}>
      <span className={`inline-block h-px w-8 ${line}`} />
      {children}
    </p>
  )
}

/*
  Título cinético: cada linha (separada por <br />) é revelada de baixo para
  cima. Com `auto`, anima ao carregar; sem, anima quando o pai .reveal entra.
*/
export function SectionTitle({
  children,
  className = '',
  auto = false,
  as: Tag = 'h2',
}: {
  children: ReactNode
  className?: string
  auto?: boolean
  as?: 'h1' | 'h2'
}) {
  const lines: ReactNode[][] = [[]]
  Children.toArray(children).forEach((c) => {
    if (isValidElement(c) && c.type === 'br') lines.push([])
    else lines[lines.length - 1].push(c)
  })
  const size = Tag === 'h1' ? 'text-[2.6rem] md:text-[3.4rem] lg:text-[4rem]' : 'text-[2.1rem] md:text-[3.1rem]'
  return (
    <Tag className={`t-display mt-4 ${size} ${auto ? 'kin-auto' : ''} ${className}`}>
      {lines.map((l, i) => (
        <span key={i} className="kin-line" style={{ '--i': i } as React.CSSProperties}>
          <span>{l}</span>
        </span>
      ))}
    </Tag>
  )
}

/* Palavra que gira dentro do título. */
export function FlipWord({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])
  return (
    <span className="kin-flip" aria-live="off">
      <span style={{ transform: `translateY(calc(${i} * -1.04em))` }}>
        {words.map((w) => (
          <span key={w} aria-hidden={w !== words[i]}>
            {w}
          </span>
        ))}
      </span>
    </span>
  )
}

/* Número que conta até o valor quando entra na tela. */
export function CountUp({ to, className = '', duration = 1400 }: { to: number; className?: string; duration?: number }) {
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
  variant?: 'primary' | 'ghost' | 'light' | 'ghost-light' | 'wa'
  className?: string
  external?: boolean
}

export function Button({ href, children, variant = 'primary', className = '', external }: BtnProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-all duration-300'
  const styles = {
    primary: 'bg-blue text-white hover:bg-blue-deep hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(0,64,164,0.6)]',
    ghost: 'border border-line bg-transparent text-ink hover:border-blue hover:text-blue',
    light: 'bg-white text-blue hover:bg-paper hover:-translate-y-0.5',
    'ghost-light': 'border border-white/35 bg-transparent text-white hover:border-white hover:bg-white/10',
    wa: 'bg-[#25d366] text-[#07301a] hover:bg-[#1fbf5b] hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(37,211,102,0.7)]',
  }
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

export function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.23 8.24m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28" />
    </svg>
  )
}
