import { Award, Building2, GraduationCap } from 'lucide-react'
import { atuacao, formacao, medico, sociedades } from '../data/medico'
import { ArrowLink, Container, Eyebrow, SectionTitle } from './ui'

type Card = { topo: string; titulo: string; sub: string; nota?: string; destaque?: boolean; Icon: typeof GraduationCap }

/* Seção enxuta: duas esteiras que passam a formação (em cima) e a atuação + sociedades (embaixo, no sentido contrário). */
export function Formacao() {
  const linha1: Card[] = formacao.map((f) => ({ topo: f.periodo, titulo: f.titulo, sub: f.instituicao, nota: f.nota, destaque: f.destaque, Icon: GraduationCap }))
  const linha2: Card[] = [
    ...atuacao.map((a) => ({ topo: a.periodo, titulo: a.cargo, sub: a.onde, Icon: Building2 })),
    ...sociedades.map((s) => ({ topo: `desde ${s.ano}`, titulo: s.sigla, sub: s.nome, Icon: Award })),
  ]
  const resumo = [`${medico.anosDeFormado} anos de formado`, `${formacao.length} títulos e cursos na medicina`, 'Brasil, Espanha e Itália']

  const Esteira = ({ itens, dir }: { itens: Card[]; dir: 'left' | 'right' }) => (
    <div className="hmarquee overflow-hidden" aria-hidden={false}>
      <ul className="hmarquee-track" data-dir={dir}>
        {[...itens, ...itens].map((c, i) => (
          <li
            key={c.titulo + i}
            aria-hidden={i >= itens.length}
            className={`flex w-[290px] shrink-0 flex-col rounded-2xl border bg-white p-5 shadow-xs transition-all duration-300 hover:border-blue/60 hover:shadow-md sm:w-[320px] ${
              c.destaque ? 'border-blue/40 ring-1 ring-blue/15' : 'border-line'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${c.destaque ? 'bg-blue text-white' : 'bg-blue/10 text-blue'}`}>
                <c.Icon size={16} />
              </span>
              <span className="text-[0.74rem] font-extrabold text-blue">{c.topo}</span>
            </div>
            <p className={`mt-4 font-display text-[1rem] leading-snug tracking-tight ${c.destaque ? 'font-extrabold text-navy' : 'font-bold text-ink'}`}>{c.titulo}</p>
            <p className="mt-1 text-[0.84rem] leading-snug text-muted">{c.sub}</p>
            {c.nota && <p className="mt-1.5 text-[0.76rem] italic text-muted/90">{c.nota}</p>}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section id="formacao" className="overflow-hidden bg-gradient-to-b from-page via-white to-page py-16 sm:py-20">
      <Container>
        <div className="reveal grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow icon={<GraduationCap size={14} />}>Por que confiar</Eyebrow>
            <SectionTitle>
              O que estudei
              <br />
              para <em>cuidar de você.</em>
            </SectionTitle>
            <p className="mt-4 max-w-[54ch] leading-relaxed text-muted">
              Cada título abaixo está no meu Currículo Lattes, na plataforma do CNPq. Os marcados em azul são os que
              mais pesam no consultório: a formação vascular e cardiovascular.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {resumo.map((r) => (
                <li key={r} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.76rem] font-bold text-navy">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <ArrowLink href={medico.lattes} external className="md:pb-2">
            Abrir o Currículo Lattes
          </ArrowLink>
        </div>
      </Container>

      <div className="reveal mt-10 space-y-4">
        <Esteira itens={linha1} dir="left" />
        <Esteira itens={linha2} dir="right" />
      </div>
    </section>
  )
}
