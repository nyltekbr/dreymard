import { Activity, ArrowUpRight, HeartPulse, MapPin, Scissors, Stethoscope } from 'lucide-react'
import { clinica, convenios, servicos } from '../data/medico'
import { Container, Eyebrow, SectionTitle } from './ui'

const icones = [Stethoscope, Activity, HeartPulse, Scissors]

export function Clinica() {
  return (
    <section id="clinica" className="py-20 md:py-28">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div className="reveal">
            <Eyebrow tone="red">A clínica</Eyebrow>
            <SectionTitle>
              Onde você
              <br />
              <em>vai ser atendido.</em>
            </SectionTitle>
            <p className="mt-7 max-w-[56ch] text-[1.05rem] leading-relaxed text-muted">
              A Angiovas fica na {clinica.endereco}, em Varginha, com o aparelho de ultrassom Doppler dentro da
              sala de consulta. Você não precisa marcar exame em outro lugar nem voltar outro dia para saber o
              resultado.
            </p>
          </div>

          <a
            href={clinica.mapaLink}
            target="_blank"
            rel="noreferrer"
            className="reveal group flex flex-col gap-5 rounded-3xl sm:flex-row sm:items-center border border-line bg-bone p-6 transition hover:border-blue/40 hover:shadow-[0_24px_40px_-30px_rgba(0,64,164,0.5)] md:mt-10"
            data-delay="1"
          >
            <img src="/logo-angiovas.png" alt="" className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20" aria-hidden />
            <span className="min-w-0 flex-1">
              <span className="t-eyebrow block text-muted">Endereço</span>
              <span className="mt-1.5 block font-display text-[1.15rem] font-semibold leading-snug text-blue-ink">
                {clinica.endereco}
              </span>
              <span className="mt-0.5 block text-[0.92rem] text-muted">
                {clinica.cidade} · <span className="whitespace-nowrap">CEP {clinica.cep}</span>
              </span>
              <span className="mt-3 inline-flex items-center gap-1 text-[0.85rem] font-medium text-blue">
                <MapPin size={14} /> Abrir no mapa
                <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </span>
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((s, i) => {
            const Icon = icones[i % icones.length]
            return (
              <article
                key={s.titulo}
                className="reveal group flex flex-col rounded-3xl border border-line bg-bone p-7 transition hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_24px_40px_-30px_rgba(0,64,164,0.5)]"
                data-delay={String((i % 3) + 1)}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-soft text-blue transition group-hover:bg-blue group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <span className="font-display text-[0.8rem] font-medium tabular-nums text-muted/70">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-[1.45rem] font-semibold leading-[1.15] tracking-tight text-blue-ink text-balance">
                  {s.titulo}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{s.texto}</p>
              </article>
            )
          })}
        </div>

        <div className="reveal mt-8 rounded-3xl bg-paper-2 px-7 py-6">
          <p className="t-eyebrow text-muted">Convênios e cartões que atendo</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {convenios.map((c) => (
              <span key={c} className="rounded-full border border-line bg-bone px-4 py-2 text-[0.88rem] font-medium text-ink">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[0.85rem] text-muted">
            A cobertura muda conforme o serviço. Chame no WhatsApp e confirme o seu antes de agendar.
          </p>
        </div>
      </Container>
    </section>
  )
}
