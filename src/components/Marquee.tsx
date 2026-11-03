import { condicoes } from '../data/medico'

export function Marquee() {
  const itens = [...condicoes, ...condicoes]
  return (
    <div className="overflow-hidden border-y border-blue-deep bg-blue py-5 text-white" aria-label="O que eu trato">
      <div className="marquee gap-8">
        {itens.map((c, i) => (
          <span
            key={i}
            className={`flex items-center gap-8 whitespace-nowrap font-display text-[1.5rem] font-bold uppercase tracking-tight ${
              i % 2 ? 't-outline' : ''
            }`}
          >
            {c}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}
