import { BookOpen } from 'lucide-react'
import { numerosCurriculo, publicacoes } from '../data/medico'
import { Container, CountUp, Eyebrow, SectionTitle } from './ui'

export function Producao() {
  return (
    <section id="producao" className="bg-blue-ink py-20 text-white md:py-28">
      <Container>
        <div className="reveal max-w-[620px]">
          <Eyebrow tone="light">Pesquisa</Eyebrow>
          <SectionTitle className="text-white [&_em]:text-red-soft">
            Não só trato varizes
            <br />
            e trombose. <em>Pesquiso.</em>
          </SectionTitle>
          <p className="mt-6 leading-relaxed text-white/70">
            O que você recebe no consultório vem de quem estuda e publica sobre o assunto há mais de vinte
            anos. Alguns trabalhos, para você conhecer.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <dl className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10" data-delay="1">
            {numerosCurriculo.map((n) => (
              <div key={n.rotulo} className="flex flex-col bg-blue-ink p-6">
                <dt className="order-2 mt-2 block text-[0.85rem] leading-snug text-white/65">{n.rotulo}</dt>
                <dd className="font-display text-[3rem] font-semibold leading-none text-white">
                  <CountUp to={Number(n.valor)} />
                </dd>
              </div>
            ))}
          </dl>

          <ul className="reveal divide-y divide-white/10" data-delay="2">
            {publicacoes.map((p) => (
              <li key={p.titulo} className="grid gap-2 py-4 sm:grid-cols-[64px_1fr] sm:gap-5">
                <span className="text-[0.8rem] font-medium text-red-soft/80">{p.ano}</span>
                <span>
                  <span className="block font-medium leading-snug text-white">{p.titulo}</span>
                  <span className="mt-1 flex items-center gap-1.5 text-[0.85rem] text-white/55">
                    <BookOpen size={13} /> {p.onde}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
