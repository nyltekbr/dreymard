import { useEffect, useState } from 'react'

/*
  Fundo do hero: fotos de atendimento (Pexels e Unsplash, licença livre) em rodízio.
  Cada uma fica 6 s com um zoom lento (Ken Burns) e some num crossfade de
  1,4 s para a próxima. Quem pede "reduzir movimento" vê só a primeira, parada.
*/
const fotos = [
  { src: '/hero/1-consulta.jpg', pos: '60% 50%' },
  { src: '/hero/2-estetoscopio.jpg', pos: '50% 50%' },
  { src: '/hero/3-coracao.jpg', pos: '70% 55%' },
  { src: '/hero/4-maos.jpg', pos: '50% 50%' },
]
const DURACAO_MS = 6000

export function HeroImagens({ className = '' }: { className?: string }) {
  const [ativo, setAtivo] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = window.setTimeout(() => setAtivo((i) => (i + 1) % fotos.length), DURACAO_MS)
    return () => window.clearTimeout(t)
  }, [ativo])

  return (
    <div className={className} aria-hidden>
      {fotos.map((f, i) => (
        <img
          key={f.src}
          src={f.src}
          alt=""
          className={`hero-foto absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
            i === ativo ? 'is-ativa opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: f.pos }}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'low'}
          decoding="async"
        />
      ))}
    </div>
  )
}
