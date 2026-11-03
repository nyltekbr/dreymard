import { formacao } from '../data/medico'
import { Container, CountUp, Eyebrow, SectionTitle } from './ui'

export function Formacao() {
  return (
    <section id="formacao" className="bg-paper-2 py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal md:sticky md:top-28 md:self-start">
          <Eyebrow>Por que confiar</Eyebrow>
          <SectionTitle>
            O que estudei
            <br />
            para <em>cuidar de você.</em>
          </SectionTitle>
          <p className="mt-7 max-w-[40ch] leading-relaxed text-muted">
            Cada título abaixo está no meu Currículo Lattes. Os marcos em vermelho são os que mais pesam no
            consultório: a formação vascular e cardiovascular.
          </p>
          <div className="mt-8 flex gap-8 border-t border-line pt-6">
            <div>
              <p className="font-display text-[2.4rem] font-semibold leading-none text-blue">
                <CountUp to={formacao.length} />
              </p>
              <p className="mt-1 text-[0.85rem] text-muted">títulos e cursos</p>
            </div>
            <div>
              <p className="font-display text-[2.4rem] font-semibold leading-none text-blue">
                <CountUp to={3} />
              </p>
              <p className="mt-1 text-[0.85rem] text-muted">países: Brasil, Espanha e Itália</p>
            </div>
          </div>
        </div>

        <ol className="relative border-l border-blue/30 pl-7">
          {formacao.map((f, i) => (
            <li
              key={f.titulo + f.periodo}
              className="timeline-dot reveal relative pb-9 last:pb-0"
              data-tone={f.destaque ? 'red' : 'blue'}
              data-delay={String((i % 3) + 1)}
            >
              <span className="text-[0.78rem] font-medium text-blue">{f.periodo}</span>
              <h3
                className={`mt-1 font-display text-[1.25rem] leading-snug ${
                  f.destaque ? 'font-semibold text-blue-ink' : 'font-normal text-ink'
                }`}
              >
                {f.titulo}
              </h3>
              <p className="mt-1 text-[0.95rem] text-muted">{f.instituicao}</p>
              {f.nota && <p className="mt-1.5 text-[0.85rem] italic text-ink/60">{f.nota}</p>}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
