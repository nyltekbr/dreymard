import { Star } from 'lucide-react'
import { depoimentos, medico } from '../data/medico'
import { Container, CountUp, Eyebrow, SectionTitle } from './ui'

export function Depoimentos() {
  return (
    <section id="pacientes" className="py-20 md:py-28">
      <Container>
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div className="reveal">
            <Eyebrow tone="red">Quem já passou por aqui</Eyebrow>
            <SectionTitle>
              <CountUp to={medico.avaliacoes.total} /> pacientes
              <br />
              <em>deram nota máxima.</em>
            </SectionTitle>
          </div>
          <a
            href={medico.doctoralia}
            target="_blank"
            rel="noreferrer"
            className="reveal text-[0.9rem] font-medium text-blue underline-offset-4 hover:underline"
          >
            Ler todas na Doctoralia
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <blockquote
              key={d.nome + d.data}
              className="reveal flex flex-col rounded-3xl border border-line bg-bone p-7"
              data-delay={String(i + 1)}
            >
              <div className="flex gap-0.5 text-red" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} className="fill-red" />
                ))}
              </div>
              <p className="mt-5 flex-1 font-display text-[1.15rem] font-medium leading-snug text-blue-ink">
                “{d.texto}”
              </p>
              <footer className="mt-6 text-[0.85rem] text-muted">
                <span className="font-medium text-ink">{d.nome}</span> · {d.data}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}
