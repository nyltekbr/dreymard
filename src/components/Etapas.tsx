import { Activity, Calendar, ClipboardCheck, Stethoscope } from 'lucide-react'
import { clinica, etapas } from '../data/medico'
import { ArrowLink, Button, Container, Eyebrow, SectionTitle } from './ui'

const icones = [Stethoscope, Activity, ClipboardCheck]

/* Três cards no padrão "Especialidades em Destaque": cabeçalho com zoom no hover, subtítulo azul, texto e dois botões. */
export function Etapas() {
  return (
    <section id="como-funciona" className="relative z-20 border-y border-line bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="reveal grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow icon={<Stethoscope size={14} />}>Como funciona a consulta</Eyebrow>
            <SectionTitle>
              Consulta primeiro.
              <br />
              <em>Exame, se precisar.</em>
            </SectionTitle>
            <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
              Consulta e ultrassom Doppler são procedimentos diferentes, com valores próprios. A vantagem aqui é fazer
              os dois no mesmo lugar, no mesmo dia.
            </p>
          </div>
          <ArrowLink href="#valores" className="md:pb-2">
            Ver os valores
          </ArrowLink>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {etapas.map((e, i) => {
            const Icon = icones[i]
            return (
              <li
                key={e.titulo}
                className="reveal group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                data-delay={String(i + 1)}
              >
                <div className="relative h-48 overflow-hidden bg-night">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        i === 1
                          ? 'radial-gradient(70% 90% at 80% 20%, rgba(0,64,164,0.9) 0%, rgba(0,64,164,0) 70%), radial-gradient(50% 60% at 15% 90%, rgba(220,0,8,0.45) 0%, rgba(220,0,8,0) 70%)'
                          : 'radial-gradient(70% 90% at 80% 20%, rgba(0,64,164,0.7) 0%, rgba(0,64,164,0) 70%)',
                    }}
                  />
                  <span className="absolute left-5 top-4 font-display text-[4.5rem] font-extrabold leading-none tracking-tighter text-white/15">
                    0{i + 1}
                  </span>
                  <span className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm">
                    <Icon size={20} />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night via-night/60 to-transparent px-5 pb-4 pt-10">
                    <h3 className="font-display text-[1.3rem] font-extrabold leading-tight tracking-tight text-white">{e.titulo}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[0.74rem] font-extrabold leading-snug text-blue">{e.sub}</p>
                  <p className="mt-2.5 flex-1 text-[0.9rem] leading-[1.7] text-muted">{e.texto}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                    <Button href={clinica.whatsappHref} variant="primary" size="sm" external>
                      <Calendar size={14} /> Agendar consulta
                    </Button>
                    <ArrowLink href="#valores">Valores</ArrowLink>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
